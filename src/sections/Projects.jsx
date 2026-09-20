import ProjectCard from '../components/ui/ProjectCard.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import SectionLabel from '../components/ui/SectionLabel.jsx'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-[1160px] scroll-mt-28 px-[22px] pt-[60px] xl:px-[140px] xl:pt-[130px]">
      <SectionLabel number="04" note={`${projects.length} modules`}>
        Projects
      </SectionLabel>

      {/* Driven by the array, so a fourth project needs no layout changes */}
      <div className="grid gap-[18px] md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.08} className="h-full">
            <ProjectCard project={project} tilt={i % 2 === 0 ? 0.4 : -0.4} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
