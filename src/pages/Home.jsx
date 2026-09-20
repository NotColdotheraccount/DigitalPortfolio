import Button from '../components/ui/Button.jsx'
import ProjectCard from '../components/ui/ProjectCard.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import SectionLabel from '../components/ui/SectionLabel.jsx'
import { useSectionNav } from '../hooks/useSectionNav'
import { site } from '../data/site'
import { projects } from '../data/projects'

// Shared padding for every section band
const band = 'mx-auto max-w-[1160px] px-[22px] xl:px-[140px]'
const sectionTop = 'scroll-mt-28 pt-[60px] xl:pt-[130px]'

// Milestone 4 replaces these placeholders with the real sections.
function Placeholder({ id, number, label, children }) {
  return (
    <section id={id} className={`${band} ${sectionTop}`}>
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
          <Button onClick={() => goToSection('projects')}>View Projects</Button>
          <Button variant="secondary" href={site.resume}>
            Resume
          </Button>
        </div>
      </section>

      <Placeholder id="about" number="02" label="About">
        Section arrives in milestone 4
      </Placeholder>

      <section id="projects" className={`${band} ${sectionTop}`}>
        <SectionLabel number="04" note={`${projects.length} modules`}>
          Projects
        </SectionLabel>

        <div className="grid gap-[18px] md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08} className="h-full">
              {/* alternate the hover tilt so a row doesn't lean as one */}
              <ProjectCard project={project} tilt={i % 2 === 0 ? 0.4 : -0.4} />
            </Reveal>
          ))}
        </div>
      </section>

      <Placeholder id="contact" number="06" label="Contact">
        Section arrives in milestone 5
      </Placeholder>
    </>
  )
}
