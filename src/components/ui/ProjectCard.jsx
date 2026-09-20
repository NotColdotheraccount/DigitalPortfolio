import { motion, useReducedMotion } from 'motion/react'
import { Link } from 'react-router'
import Figure from './Figure.jsx'
import { Badge, Tag } from './Tag.jsx'

// The whole card is one link, so the entire area is clickable and screen
// readers announce it as a single destination. `tilt` alternates per column
// so a row of cards doesn't lean the same way.
export default function ProjectCard({ project, tilt = 0.4 }) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      whileHover={reduce ? undefined : { y: -6, rotate: tilt }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="group h-full"
    >
      <Link
        to={`/projects/${project.slug}`}
        className="flex h-full flex-col overflow-hidden rounded-[22px] border border-hairline bg-white/[.018] transition-[border-color,box-shadow] duration-[350ms] hover:border-accent/55 hover:shadow-card-hover"
      >
        <Figure
          src={project.images.card}
          alt={project.images.gallery[0]?.alt ?? project.title}
          ratio="4 / 3"
          label={`${project.title} 4:3`}
          className="border-b border-hairline"
        />

        <div className="flex flex-1 flex-col items-start gap-4 p-[26px]">
          <Badge>{project.badge}</Badge>

          <h3 className="text-h3 font-semibold xl:text-h3-xl">{project.title}</h3>

          <p className="text-[15px]/[1.6] text-ink-low">{project.summary}</p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>

          <span className="mt-auto pt-2 text-[14px] font-semibold text-accent">
            View case study →
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
