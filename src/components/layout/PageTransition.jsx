import { useEffect } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { useLocation } from 'react-router'

// Fades each route in and out. AnimatePresence in App.jsx keeps the old
// page mounted just long enough to play its exit animation.
export default function PageTransition({ children }) {
  const reduce = useReducedMotion()
  const { pathname } = useLocation()

  // A new page should start at the top, not wherever you were scrolled to
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : 12 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } }}
      exit={{ opacity: 0, y: reduce ? 0 : -12, transition: { duration: 0.25, ease: 'easeIn' } }}
    >
      {children}
    </motion.div>
  )
}
