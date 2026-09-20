import { useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useLocation } from 'react-router'
import { site } from '../../data/site'
import { NAV_LINKS } from '../../hooks/useSectionNav'
import Monogram from './Monogram.jsx'

export default function MobileMenu({ open, onClose, onNavigate }) {
  const { pathname } = useLocation()

  // Close when the route changes (e.g. tapping a project card)
  useEffect(() => {
    onClose()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  // While the sheet is open: lock the page behind it and listen for Escape
  useEffect(() => {
    if (!open) return

    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)

    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-40 flex flex-col bg-[rgba(8,11,13,.92)] backdrop-blur-[20px] md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="flex items-center justify-between px-5 py-6">
            <Monogram />
            <button type="button" onClick={onClose} aria-label="Close menu" className="relative size-10">
              <span aria-hidden="true" className="absolute inset-x-[11px] top-1/2 h-[1.5px] rotate-45 bg-ink-mid" />
              <span aria-hidden="true" className="absolute inset-x-[11px] top-1/2 h-[1.5px] -rotate-45 bg-ink-mid" />
            </button>
          </div>

          <nav aria-label="Mobile" className="flex flex-1 flex-col gap-1 px-5 pt-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => {
                  onClose()
                  onNavigate(link.id)
                }}
                className="border-l-2 border-transparent py-4 pl-4 text-left font-display text-[17px] font-medium text-ink-mid transition-colors hover:border-accent hover:text-accent"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="px-5 pb-10">
            <a
              href={site.resume}
              target="_blank"
              rel="noreferrer"
              className="block rounded-full bg-accent py-[17px] text-center font-semibold text-on-accent"
            >
              Resume
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
