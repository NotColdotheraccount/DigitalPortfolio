import { Link } from 'react-router'

// Full-width card at the end of a case study. Cycles through the list,
// so the last project links back to the first.
export default function NextProject({ project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group relative block overflow-hidden rounded-[24px] border border-hairline bg-white/[.015] p-7 transition-[border-color,box-shadow] hover:border-accent/50 hover:shadow-[0_0_60px_rgba(34,211,238,.12)] xl:p-10"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 [background:radial-gradient(ellipse_at_right,rgba(34,211,238,.12),transparent_70%)]"
      />

      <div className="relative flex items-center justify-between gap-6">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">Next project</p>
          <h2 className="mt-3 font-display text-[28px] font-semibold xl:text-[44px]">{project.title}</h2>
          <p className="mt-2 text-[15px] text-ink-low">{project.summary}</p>
        </div>

        <span
          aria-hidden="true"
          className="shrink-0 text-[28px] text-accent transition-transform group-hover:translate-x-1 xl:text-[40px]"
        >
          →
        </span>
      </div>
    </Link>
  )
}
