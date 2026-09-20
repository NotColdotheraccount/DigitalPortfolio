import { useState } from 'react'
import { Link } from 'react-router'
import { site } from '../../data/site'
import { NAV_LINKS, useSectionNav } from '../../hooks/useSectionNav'
import Button from '../ui/Button.jsx'
import MobileMenu from './MobileMenu.jsx'
import Monogram from './Monogram.jsx'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const goToSection = useSectionNav()

  return (
    <>
      <header className="sticky top-0 z-30 px-3 pt-3 xl:px-6 xl:pt-[18px]">
        <nav
          aria-label="Main"
          className="mx-auto flex max-w-[1200px] items-center justify-between rounded-full border border-accent/20 bg-[rgba(10,14,17,.6)] px-5 py-3 backdrop-blur-[20px] xl:px-[22px] xl:py-[14px]"
        >
          <Link to="/" title="Home">
            <Monogram />
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => goToSection(link.id)}
                className="group relative text-[14px] font-medium text-[#A8B4C2] transition-colors hover:text-accent"
              >
                {link.label}
                {/* underline that wipes in from the left on hover */}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-[220ms] group-hover:scale-x-100" />
              </button>
            ))}

            {/* Button brings the magnetic hover with it */}
            <Button href={site.resume} className="!px-5 !py-[11px] !text-[14px]">
              Resume
            </Button>
          </div>

          {/* Mobile: hamburger. aria-expanded tells screen readers the state. */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="flex flex-col gap-[5px] p-2 md:hidden"
          >
            <span aria-hidden="true" className="block h-[1.5px] w-[18px] bg-ink-mid" />
            <span aria-hidden="true" className="block h-[1.5px] w-[18px] bg-ink-mid" />
          </button>
        </nav>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} onNavigate={goToSection} />
    </>
  )
}
