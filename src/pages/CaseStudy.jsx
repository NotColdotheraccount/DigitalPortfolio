import { Link, useParams } from 'react-router'
import { Badge, Tag } from '../components/ui/Tag.jsx'
import { getProject } from '../data/projects'
import NotFound from './NotFound.jsx'

// Milestone 6 builds the full case-study template.
export default function CaseStudy() {
  const { slug } = useParams() // the ":slug" part of the URL
  const project = getProject(slug)

  if (!project) return <NotFound />

  return (
    <article className="mx-auto max-w-[1160px] px-[22px] pt-[60px] xl:px-[140px] xl:pt-[110px]">
      <Link to="/" className="font-mono text-[12px] uppercase tracking-[0.12em] text-ink-low hover:text-accent">
        ← All projects
      </Link>

      <div className="mt-8">
        <Badge>{project.badge}</Badge>
      </div>

      <h1 className="mt-5 text-h1 font-bold xl:text-h1-xl">{project.title}</h1>
      <p className="mt-5 max-w-[40ch] font-display text-lead font-light">{project.summary}</p>

      <dl className="mt-10 flex flex-wrap gap-x-16 gap-y-6 border-t border-hairline pt-8">
        <div>
          <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint">Role</dt>
          <dd className="mt-2 text-[15px] text-ink-mid">{project.role}</dd>
        </div>
        <div>
          <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint">Year</dt>
          <dd className="mt-2 text-[15px] text-ink-mid">{project.year}</dd>
        </div>
        <div>
          <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint">Tech</dt>
          <dd className="mt-2 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </dd>
        </div>
      </dl>
    </article>
  )
}
