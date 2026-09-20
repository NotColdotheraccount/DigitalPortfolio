import ProjectCard from '../components/ui/ProjectCard.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import SectionLabel from '../components/ui/SectionLabel.jsx'
import { projects, projectsByCategory } from '../data/projects'

// Sub-heading for each group — quieter than a section label so the
// "// 04 — PROJECTS" row still reads as the top of the section.
function GroupHeading({ name, count }) {
  return (
    <div className="mb-6 flex items-center gap-4">
      <h3 className="shrink-0 font-display text-[18px] font-semibold text-ink-high">{name}</h3>
      <span aria-hidden="true" className="h-px flex-1 bg-hairline" />
      <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-faint">
        {count} {count === 1 ? 'project' : 'projects'}
      </span>
    </div>
  )
}

export default function Projects() {
  // Driven entirely by the `category` field in the data file:
  // add a new category name there and a new group appears here.
  const groups = projectsByCategory()

  return (
    <section id="projects" className="mx-auto max-w-[1160px] scroll-mt-28 px-[22px] pt-[60px] xl:px-[140px] xl:pt-[130px]">
      <SectionLabel number="04" note={`${projects.length} modules`}>
        Projects
      </SectionLabel>

      <div className="flex flex-col gap-14 xl:gap-20">
        {groups.map((group) => (
          <div key={group.name}>
            <GroupHeading name={group.name} count={group.items.length} />

            <div className="grid gap-[18px] md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
              {group.items.map((project, i) => (
                <Reveal key={project.slug} delay={i * 0.08} className="h-full">
                  <ProjectCard project={project} tilt={i % 2 === 0 ? 0.4 : -0.4} />
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
