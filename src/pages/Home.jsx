import { Link } from 'react-router'
import { useSectionNav } from '../hooks/useSectionNav'
import SectionLabel from '../components/ui/SectionLabel.jsx'
import { site } from '../data/site'
import { projects } from '../data/projects'

// Shared padding for every section band
const band = 'mx-auto max-w-[1160px] px-[22px] xl:px-[140px]'

// Milestone 4 replaces these placeholders with the real sections.
// The ids matter now: the nav scrolls to them.
function Placeholder({ id, number, label, children }) {
  return (
    <section id={id} className={`${band} scroll-mt-28 pt-[60px] xl:pt-[130px]`}>
      <SectionLabel number={number}>{label}</SectionLabel>
      <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-ink-faint">{children}</p>
    </section>
  )
}

export default function Home() {
  // "#projects" can't be an href here — HashRouter already uses the "#"
  const goToSection = useSectionNav()

  return (
    <>
      <section className={`${band} pt-[60px] xl:pt-[110px]`}>
        <p className="flex items-center gap-3 font-mono text-label uppercase text-accent">
          <span aria-hidden="true" className="size-2 animate-led rounded-full bg-accent shadow-[0_0_12px_#22d3ee]" />
          {'// 01 — Hardware ⟷ Software'}
        </p>

        <h1 className="mt-6 text-display font-bold xl:text-display-xl">
          {site.name.first}
          <br />
          <span className="text-accent">{site.name.last}</span>
        </h1>

        <p className="mt-8 max-w-[34ch] font-display text-lead font-light text-ink-mid xl:text-lead-xl">
          {site.tagline}
        </p>
        <p className="mt-4 text-[15px] text-ink-low">{site.subline}</p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => goToSection('projects')}
            className="rounded-full bg-accent px-[30px] py-[17px] text-center font-semibold text-on-accent shadow-glow transition hover:-translate-y-0.5 hover:shadow-glow-strong"
          >
            View Projects
          </button>
          <a
            href={site.resume}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 px-[30px] py-[17px] text-center font-semibold text-ink-high transition-colors hover:border-accent/60 hover:text-accent"
          >
            Resume
          </a>
        </div>
      </section>

      <Placeholder id="about" number="02" label="About">
        Section arrives in milestone 4
      </Placeholder>

      <section id="projects" className={`${band} scroll-mt-28 pt-[60px] xl:pt-[130px]`}>
        <SectionLabel number="04" note={`${projects.length} modules`}>
          Projects
        </SectionLabel>
        <div className="flex flex-wrap gap-3">
          {projects.map((p) => (
            <Link
              key={p.slug}
              to={`/projects/${p.slug}`}
              className="rounded-full bg-accent-tint px-4 py-2 font-mono text-[12px] text-[#7fdcec] transition-colors hover:text-accent"
            >
              {p.title} →
            </Link>
          ))}
        </div>
      </section>

      <Placeholder id="contact" number="06" label="Contact">
        Section arrives in milestone 5
      </Placeholder>
    </>
  )
}
