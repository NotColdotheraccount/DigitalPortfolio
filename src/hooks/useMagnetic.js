import { useRef } from 'react'
import { useMotionValue, useReducedMotion, useSpring } from 'motion/react'

// "Magnetic" hover: the element leans a few pixels toward the cursor and
// springs back when you leave. Desktop mouse only — on a touch screen
// there is no cursor to lean toward, and it is skipped entirely when the
// visitor asks for reduced motion.
export function useMagnetic({ strength = 6, radius = 80 } = {}) {
  const ref = useRef(null)
  const reduce = useReducedMotion()

  // Raw values the pointer sets…
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  // …smoothed into a spring so the movement feels physical, not linear.
  const x = useSpring(rawX, { stiffness: 200, damping: 15 })
  const y = useSpring(rawY, { stiffness: 200, damping: 15 })

  const enabled = !reduce && typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches

  const onMouseMove = (e) => {
    if (!enabled || !ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const dx = e.clientX - (rect.left + rect.width / 2)
    const dy = e.clientY - (rect.top + rect.height / 2)

    // Distance as a 0–1 fraction of the radius, capped at 1,
    // so the pull eases off instead of snapping at the edge.
    const distance = Math.min(Math.hypot(dx, dy) / radius, 1)
    const scale = (strength * distance) / (Math.hypot(dx, dy) || 1)

    rawX.set(dx * scale)
    rawY.set(dy * scale)
  }

  const onMouseLeave = () => {
    rawX.set(0)
    rawY.set(0)
  }

  return { ref, style: { x, y }, handlers: { onMouseMove, onMouseLeave } }
}
