import { useEffect } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react'
import { useMediaQuery } from '../../hooks/useMediaQuery'

// A soft cyan light that follows the cursor with a little lag.
// Mouse-only: a finger already points at what it's touching.
export default function CursorGlow() {
  const hasMouse = useMediaQuery('(pointer: fine)')
  const reduce = useReducedMotion()

  const x = useMotionValue(-500)
  const y = useMotionValue(-500)
  // Low stiffness = the glow trails behind the cursor instead of sticking to it
  const glowX = useSpring(x, { stiffness: 120, damping: 20, mass: 0.6 })
  const glowY = useSpring(y, { stiffness: 120, damping: 20, mass: 0.6 })

  const enabled = hasMouse && !reduce

  useEffect(() => {
    if (!enabled) return

    const onMove = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }

    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [enabled, x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden="true"
      style={{ left: glowX, top: glowY }}
      className="pointer-events-none fixed z-0 size-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-screen [background:radial-gradient(circle,rgba(34,211,238,.06),transparent_65%)]"
    />
  )
}
