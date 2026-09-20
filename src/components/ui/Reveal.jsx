import { motion, useReducedMotion } from 'motion/react'

// Fades a block in as it scrolls into view, once. `delay` staggers siblings.
// whileInView uses the browser's IntersectionObserver under the hood, so it
// costs nothing while the element is off screen.
export default function Reveal({ children, delay = 0, className = '' }) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }} // fire at 20% visible
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}
