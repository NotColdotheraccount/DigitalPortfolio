import { Link, useParams } from 'react-router'
import { getProject } from '../data/projects'
import NotFound from './NotFound.jsx'

// Milestone 1: proves the /projects/:slug route reads the right data.
// Milestone 6 builds the full case-study template.
export default function CaseStudy() {
  const { slug } = useParams() // the ":slug" part of the URL
  const project = getProject(slug)

  if (!project) return <NotFound />

  return (
    <main className="mx-auto min-h-dvh max-w-[1160px] px-[22px] py-[60px] xl:py-[130px]">
      <Link to="/" className="font-mono text-[12px] uppercase tracking-[0.12em] text-ink-low hover:text-accent">
        ← All projects
      </Link>
      <div className="mt-8">
        <p className="inline-block rounded-full border border-amber/35 px-[11px] py-[6px] font-mono text-[11px] uppercase tracking-[0.14em] text-amber">
          {project.badge}
        </p>
      </div>
      <h1 className="mt-5 text-h1 font-bold xl:text-h1-xl">{project.title}</h1>
      <p className="mt-5 max-w-[40ch] font-display text-lead font-light">{project.summary}</p>
    </main>
  )
}
