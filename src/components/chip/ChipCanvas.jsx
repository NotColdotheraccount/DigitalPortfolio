import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { useInView } from 'motion/react'
import ChipScene from './ChipScene.jsx'

// Wraps the scene in a canvas and stops rendering when it scrolls away —
// otherwise the animation keeps burning battery below the fold.
export default function ChipCanvas({ animate = true }) {
  const holder = useRef(null)
  const inView = useInView(holder, { margin: '100px' })

  return (
    // The soft glow behind the board is CSS, not a post-processing pass:
    // a bloom effect makes the canvas opaque, which showed up as a square
    // of slightly-wrong background behind the chip.
    <div ref={holder} className="relative size-full">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[12%] rounded-full [background:radial-gradient(circle,rgba(34,211,238,.10),transparent_70%)]"
      />
      <Canvas
        className="relative"
        // Cap the pixel ratio at 2: beyond that you can't see the
        // difference, but the GPU still pays for every extra pixel.
        dpr={[1, 2]}
        frameloop={inView && animate ? 'always' : 'demand'}
        camera={{ position: [0, 7, 1.3], fov: 32 }}
        // Look down at the board so it reads as a diamond facing the viewer
        onCreated={({ camera, gl }) => {
          camera.lookAt(0, 0, 0)
          gl.setClearAlpha(0) // keep the canvas transparent behind the board
        }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ChipScene animate={animate} />
      </Canvas>
    </div>
  )
}
