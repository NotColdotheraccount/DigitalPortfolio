import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import { useInView } from 'motion/react'
import ChipScene from './ChipScene.jsx'

// Wraps the scene in a canvas and stops rendering when it scrolls away —
// otherwise the animation keeps burning battery below the fold.
export default function ChipCanvas({ animate = true }) {
  const holder = useRef(null)
  const inView = useInView(holder, { margin: '100px' })

  return (
    <div ref={holder} className="size-full">
      <Canvas
        // Cap the pixel ratio at 2: beyond that you can't see the
        // difference, but the GPU still pays for every extra pixel.
        dpr={[1, 2]}
        frameloop={inView && animate ? 'always' : 'demand'}
        camera={{ position: [0, 7, 1.3], fov: 32 }}
        // Look down at the board so it reads as a diamond facing the viewer
        onCreated={({ camera }) => camera.lookAt(0, 0, 0)}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ChipScene animate={animate} />

        {/* Subtle bloom so the emissive traces glow instead of just being bright */}
        <EffectComposer>
          <Bloom intensity={0.7} luminanceThreshold={0.35} luminanceSmoothing={0.3} mipmapBlur />
        </EffectComposer>
      </Canvas>
    </div>
  )
}
