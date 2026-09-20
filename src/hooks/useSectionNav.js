import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router'

// The nav links point at sections of the Home page (#about, #projects…).
// We can't use plain href="#about" because HashRouter already owns the "#".
// So: if we're on Home, scroll. If we're on a case study, go Home first,
// then scroll once the page has rendered.
export function useSectionNav() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return useCallback(
    (id) => {
      const scrollTo = () => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }

      if (pathname === '/') {
        scrollTo()
      } else {
        navigate('/')
        // wait one frame so Home exists in the DOM before scrolling
        requestAnimationFrame(() => requestAnimationFrame(scrollTo))
      }
    },
    [navigate, pathname],
  )
}

export const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]
