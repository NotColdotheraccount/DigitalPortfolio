import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Figure from '../ui/Figure.jsx'

// Photo grid: one large image plus the rest stacked beside it.
// Clicking any photo opens a lightbox you can page through.
export default function Gallery({ images = [] }) {
  const [index, setIndex] = useState(null) // null = closed
  const isOpen = index !== null

  useEffect(() => {
    if (!isOpen) return

    const onKey = (e) => {
      if (e.key === 'Escape') setIndex(null)
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % images.length)
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + images.length) % images.length)
    }

    document.addEventListener('keydown', onKey)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [isOpen, images.length])

  if (!images.length) return null

  const [first, ...rest] = images

  return (
    <>
      <div className="grid gap-3 xl:grid-cols-[2fr_1fr] xl:gap-4">
        <button
          type="button"
          onClick={() => setIndex(0)}
          className="overflow-hidden rounded-[18px] border border-hairline transition hover:scale-[1.012] hover:border-accent/50"
        >
          <Figure src={first.src} alt={first.alt} ratio="16 / 10" label="Photo 01" />
        </button>

        <div className="grid gap-3 xl:gap-4">
          {rest.map((image, i) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setIndex(i + 1)}
              className="overflow-hidden rounded-[18px] border border-hairline transition hover:scale-[1.012] hover:border-accent/50"
            >
              <Figure src={image.src} alt={image.alt} ratio="4 / 3" label={`Photo 0${i + 2}`} />
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
            className="fixed inset-0 z-50 grid place-items-center bg-black/85 p-4 backdrop-blur-sm"
            onClick={() => setIndex(null)}
          >
            <button
              type="button"
              onClick={() => setIndex(null)}
              aria-label="Close"
              className="absolute right-5 top-5 rounded-full border border-hairline px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-mid"
            >
              Close ✕
            </button>

            {/* stopPropagation so clicking the photo doesn't close the viewer */}
            <img
              src={images[index].src}
              alt={images[index].alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85dvh] max-w-full rounded-[14px] object-contain"
            />

            <p className="absolute bottom-6 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-low">
              {index + 1} / {images.length} · ← → to browse
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
