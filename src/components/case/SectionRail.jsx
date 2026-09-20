import { useScrollSpy } from '../../hooks/useScrollSpy'

// Desktop: a sticky list beside the text. Mobile: a scrollable chip row
// pinned under the nav. Both highlight the section you're reading.
export default function SectionRail({ sections }) {
  const ids = sections.map((s) => s.id)
  const active = useScrollSpy(ids)

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <>
      {/* Desktop rail */}
      <nav aria-label="Sections" className="sticky top-[110px] hidden self-start xl:block">
        <ul className="space-y-1">
          {sections.map((s, i) => {
            const isActive = active === s.id
            return (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => go(s.id)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`block border-l-2 py-2 pl-4 text-left font-mono text-[11px] uppercase tracking-[0.14em] transition-colors ${
                    isActive ? 'border-accent text-accent' : 'border-white/10 text-ink-faint hover:text-ink-low'
                  }`}
                >
                  {String(i + 1).padStart(2, '0')} {s.label}
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Mobile chip row — clips at the right edge on purpose, to hint at scroll */}
      <nav
        aria-label="Sections"
        className="-mx-[22px] mb-8 flex gap-2 overflow-x-auto px-[22px] pb-1 [scrollbar-width:none] xl:hidden"
      >
        {sections.map((s, i) => {
          const isActive = active === s.id
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => go(s.id)}
              className={`shrink-0 rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors ${
                isActive ? 'border-accent bg-accent text-on-accent' : 'border-hairline text-ink-low'
              }`}
            >
              {String(i + 1).padStart(2, '0')} {s.label}
            </button>
          )
        })}
      </nav>
    </>
  )
}
