import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { Link, useParams } from 'react-router'
import { ProcessTimeline, ScopeCards, StatCards } from '../components/case/Blocks.jsx'
import Gallery from '../components/case/Gallery.jsx'
import NextProject from '../components/case/NextProject.jsx'
import SectionRail from '../components/case/SectionRail.jsx'
import VideoEmbed from '../components/case/VideoEmbed.jsx'
import Figure from '../components/ui/Figure.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import { Badge, Tag } from '../components/ui/Tag.jsx'
import { getNextProject, getProject } from '../data/projects'
import { usePageMeta } from '../hooks/usePageMeta'
import NotFound from './NotFound.jsx'

const SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'scope', label: 'Project scope' },
  { id: 'role', label: 'My role' },
  { id: 'process', label: 'Work process' },
  { id: 'results', label: 'Results' },
]

// Heading row inside the body column
function Heading({ number, children }) {
  return (
    <div className="mb-4 flex items-center gap-4">
      {/* real heading for the document outline; the mono label is the visual one */}
      <h2 className="sr-only">{children}</h2>
      <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
        {`// ${number} — ${children}`}
      </span>
      <span aria-hidden="true" className="h-px flex-1 [background:linear-gradient(90deg,rgba(34,211,238,.28),transparent)]" />
    </div>
  )
}

function Meta({ label, children }) {
  return (
    <div>
      <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint">{label}</dt>
      <dd className="mt-2 text-[15px] text-ink-mid">{children}</dd>
    </div>
  )
}

export default function CaseStudy() {
  const { slug } = useParams()
  const project = getProject(slug)
  const reduce = useReducedMotion()

  usePageMeta({
    title: project ? `${project.title} — Aqeef Danish` : 'Project not found',
    description: project?.summary,
  })

  const heroRef = useRef(null)
  // Track this element's progress through the viewport, 0 → 1…
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start end', 'end start'] })
  // …and map that to a gentle vertical drift for the parallax.
  const heroY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-30, 30])

  if (!project) return <NotFound />

  const next = getNextProject(slug)

  return (
    <article className="mx-auto max-w-[1160px] px-[22px] pt-[60px] xl:px-[140px] xl:pt-[110px]">
      <Link to="/" className="font-mono text-[12px] uppercase tracking-[0.12em] text-ink-low hover:text-accent">
        ← All projects
      </Link>

      {/* Header */}
      <header className="mt-8 grid gap-10 xl:grid-cols-[1fr_340px] xl:items-end">
        <div>
          <Badge>{project.badge}</Badge>
          <h1 className="mt-5 text-h1 font-bold xl:text-h1-xl">{project.title}</h1>
          <p className="mt-5 max-w-[42ch] font-display text-lead font-light text-ink-mid">{project.summary}</p>
        </div>

        <dl className="grid grid-cols-2 gap-6 border-t border-hairline pt-6 xl:grid-cols-1 xl:border-0 xl:pt-0">
          <Meta label="Role">{project.role}</Meta>
          <Meta label="Year">{project.year}</Meta>
          <div className="col-span-2 xl:col-span-1">
            <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint">Tech</dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </dd>
          </div>
        </dl>
      </header>

      {/* Hero image with parallax drift */}
      <div ref={heroRef} className="mt-12 overflow-hidden rounded-[22px] border border-accent/20 shadow-[0_40px_100px_rgba(0,0,0,.6)]">
        <motion.div style={{ y: heroY }}>
          <Figure
            src={project.images.hero}
            alt={project.images.gallery[0]?.alt ?? project.title}
            ratio="16 / 10"
            priority
            label="Hero image"
            className="xl:[aspect-ratio:21/9]"
          />
        </motion.div>
      </div>

      {/* Body: sticky rail + text column */}
      <div className="mt-14 grid gap-0 xl:mt-20 xl:grid-cols-[220px_1fr] xl:gap-[70px]">
        <SectionRail sections={SECTIONS} />

        <div className="flex max-w-[760px] flex-col gap-16">
          <section id="overview" className="scroll-mt-28">
            <Heading number="01">Overview</Heading>
            <p className="text-[16px]/[1.75] text-ink-body">{project.overview}</p>
          </section>

          <section id="scope" className="scroll-mt-28">
            <Heading number="02">Project scope</Heading>
            <p className="text-[16px]/[1.75] text-ink-body">{project.scope.text}</p>
            <ScopeCards inScope={project.scope.inScope} outOfScope={project.scope.outOfScope} />
          </section>

          <section id="role" className="scroll-mt-28">
            <Heading number="03">My role</Heading>
            <p className="text-[16px]/[1.75] text-ink-body">{project.myRole}</p>
          </section>

          <section id="process" className="scroll-mt-28">
            <Heading number="04">Work process</Heading>
            <ProcessTimeline steps={project.process} />
          </section>

          <section id="results" className="scroll-mt-28">
            <Heading number="05">Results &amp; outcome</Heading>
            <p className="text-[16px]/[1.75] text-ink-body">{project.results.text}</p>
            <StatCards stats={project.results.stats} />
          </section>
        </div>
      </div>

      {/* Gallery */}
      <Reveal className="mt-20">
        <div className="mb-6 flex items-center gap-4">
          <span className="shrink-0 font-mono text-label uppercase text-accent">{'// Gallery'}</span>
          <span aria-hidden="true" className="h-px flex-1 [background:linear-gradient(90deg,rgba(34,211,238,.28),transparent)]" />
          <span className="hidden shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-faint xl:block">
            Click to enlarge
          </span>
        </div>
        <Gallery images={project.images.gallery} />
      </Reveal>

      {/* Optional video */}
      {project.video && (
        <Reveal className="mt-6">
          <VideoEmbed url={project.video} title={`${project.title} demo`} />
        </Reveal>
      )}

      {/* Next project */}
      <Reveal className="mt-20">
        <NextProject project={next} />
      </Reveal>
    </article>
  )
}
