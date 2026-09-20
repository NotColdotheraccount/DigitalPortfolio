import { useEffect, useState } from 'react'

// Reads a CSS media query from JavaScript and keeps it up to date
// (so rotating a phone or resizing a window is handled).
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() =>
    typeof window === 'undefined' ? false : window.matchMedia(query).matches,
  )

  useEffect(() => {
    const list = window.matchMedia(query)
    const onChange = (e) => setMatches(e.matches)

    list.addEventListener('change', onChange)
    return () => list.removeEventListener('change', onChange)
  }, [query])

  return matches
}
