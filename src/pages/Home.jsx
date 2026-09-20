import { Link } from 'react-router'
import { site } from '../data/site'
import { projects } from '../data/projects'

// Milestone 1: a "hello world" that proves tokens, fonts and routing work.
// Milestone 4 replaces this with the real sections.
export default function Home() {
  return (
    <main className="relative min-h-dvh overflow-hidden px-[22px] py-[60px] xl:px-[140px] xl:py-[130px]">
      {/* Dot substrate — decorative, so hidden from screen readers */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50 [background-image:radial-gradient(rgb(34_211_238/0.1)_1px,transparent_1px)] [background-size:22px_22px] xl:[background-size:26px_26px]"
      />

      <div className="relative mx-auto max-w-[1160px]">
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

        <nav aria-label="Projects" className="mt-12 flex flex-wrap gap-3">
          {projects.map((p) => (
            <Link
              key={p.slug}
              to={`/projects/${p.slug}`}
              className="rounded-full bg-accent-tint px-4 py-2 font-mono text-[12px] text-[#7fdcec] transition-colors hover:text-accent"
            >
              {p.title} →
            </Link>
          ))}
        </nav>

        <p className="mt-16 font-mono text-label uppercase text-ink-low">
          Milestone 1 · scaffold live
        </p>
      </div>
    </main>
  )
}
