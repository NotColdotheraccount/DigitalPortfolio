import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const CYAN = '#22D3EE'
const AMBER = '#FBBF24'

// Textures drawn in code — no image files to load, and they stay crisp
// at any size. Both are memoised so they're only drawn once.
function useDotTexture() {
  return useMemo(() => {
    const size = 128
    const canvas = document.createElement('canvas')
    canvas.width = canvas.height = size
    const ctx = canvas.getContext('2d')

    ctx.fillStyle = '#0D151C'
    ctx.fillRect(0, 0, size, size)
    ctx.fillStyle = 'rgba(34,211,238,1)'
    ctx.beginPath()
    ctx.arc(size / 2, size / 2, 5.5, 0, Math.PI * 2)
    ctx.fill()

    const texture = new THREE.CanvasTexture(canvas)
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping
    texture.repeat.set(7, 7)
    return texture
  }, [])
}

function useLabelTexture() {
  return useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 256
    canvas.height = 128
    const ctx = canvas.getContext('2d')

    ctx.clearRect(0, 0, 256, 128)
    ctx.fillStyle = CYAN
    ctx.font = 'bold 62px ui-monospace, Menlo, monospace'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText('AD·01', 128, 64)

    return new THREE.CanvasTexture(canvas)
  }, [])
}

// A trace running from the chip out to one edge of the board.
function Trace({ rotation, length = 1.15, offset = 1.0 }) {
  return (
    <group rotation={rotation}>
      <mesh position={[0, 0.065, offset]}>
        <boxGeometry args={[0.035, 0.008, length]} />
        <meshStandardMaterial color={CYAN} emissive={CYAN} emissiveIntensity={1.6} toneMapped={false} />
      </mesh>
    </group>
  )
}

// A glowing dot that runs along one trace, then restarts.
function Pulse({ rotation, speed = 0.45, delay = 0, from = 0.45, to = 1.65, animate = true }) {
  const ref = useRef(null)

  useFrame(({ clock }) => {
    if (!ref.current || !animate) return

    // Loop 0 → 1 with a per-pulse head start
    const t = ((clock.elapsedTime * speed + delay) % 1 + 1) % 1
    ref.current.position.z = from + (to - from) * t
    // Fade in and out at the ends of the run
    ref.current.material.opacity = Math.min(t / 0.12, 1, (1 - t) / 0.12)
  })

  return (
    <group rotation={rotation}>
      <mesh ref={ref} position={[0, 0.075, from]}>
        <sphereGeometry args={[0.035, 12, 12]} />
        <meshBasicMaterial color={CYAN} transparent toneMapped={false} />
      </mesh>
    </group>
  )
}

export default function ChipScene({ animate = true }) {
  const group = useRef(null)
  const dots = useDotTexture()
  const label = useLabelTexture()

  // The chip holds its position; scrolling turns it. No cursor tilt.
  // 900px of scrolling ≈ a quarter turn, lerped so it glides rather
  // than snapping to every scroll event.
  useFrame((_, delta) => {
    if (!group.current || !animate) return

    const target = 0.78 + (window.scrollY / 900) * (Math.PI / 2)
    const ease = 1 - Math.pow(0.02, delta) // frame-rate independent lerp

    group.current.rotation.y += (target - group.current.rotation.y) * ease
  })

  const quarter = Math.PI / 2

  return (
    <group ref={group} rotation={[-0.42, 0.78, 0]} scale={0.95}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 5, 2]} intensity={1.1} />
      <pointLight position={[0, 1.2, 0]} intensity={6} color={CYAN} distance={4} />

      {/* Board */}
      <mesh receiveShadow>
        <boxGeometry args={[3, 0.12, 3]} />
        <meshStandardMaterial map={dots} color="#8EA3B4" roughness={0.75} metalness={0.15} />
      </mesh>

      {/* Traces + travelling pulses, one per side */}
      {[0, quarter, quarter * 2, quarter * 3].map((angle, i) => (
        <group key={angle}>
          <Trace rotation={[0, angle, 0]} />
          <Pulse rotation={[0, angle, 0]} speed={0.32 + i * 0.05} delay={i * 0.27} animate={animate} />
        </group>
      ))}

      {/* Chip body */}
      <mesh position={[0, 0.14, 0]}>
        <boxGeometry args={[1, 0.2, 1]} />
        <meshStandardMaterial color="#0B1219" roughness={0.4} metalness={0.5} />
      </mesh>

      {/* Marking on top of the chip */}
      <mesh position={[0, 0.245, 0]} rotation={[-quarter, 0, 0]}>
        <planeGeometry args={[0.78, 0.34]} />
        <meshBasicMaterial map={label} transparent toneMapped={false} />
      </mesh>

      {/* Two ring pads */}
      {[
        [-1.05, 0.065, -1.05],
        [1.05, 0.065, 0.95],
      ].map((position) => (
        <mesh key={position.join()} position={position} rotation={[-quarter, 0, 0]}>
          <torusGeometry args={[0.11, 0.022, 10, 24]} />
          <meshStandardMaterial color={CYAN} emissive={CYAN} emissiveIntensity={1.2} toneMapped={false} />
        </mesh>
      ))}

      {/* The one amber LED */}
      <mesh position={[0.95, 0.09, -1.0]}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshBasicMaterial color={AMBER} toneMapped={false} />
      </mesh>
      <pointLight position={[0.95, 0.25, -1.0]} intensity={2.5} color={AMBER} distance={1.5} />
    </group>
  )
}
