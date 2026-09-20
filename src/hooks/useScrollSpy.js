import { useEffect, useState } from 'react'

// Tracks which section is currently in view, for the case-study rail.
// IntersectionObserver does the work in the browser, so nothing runs
// on every scroll tick.
export function useScrollSpy(ids, { rootMargin = '-20% 0px -70% 0px' } = {}) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Among the sections currently crossing the band, take the highest
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin, threshold: 0 },
    )

    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean)
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [ids, rootMargin])

  return active
}
