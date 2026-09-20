import { motion, useReducedMotion } from 'motion/react'
import Chip from '../components/chip/Chip.jsx'
import Button from '../components/ui/Button.jsx'
import { useSectionNav } from '../hooks/useSectionNav'
import { site } from '../data/site'

// Staggered entrance: each child starts 80ms after the one before it.
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

export default function Hero() {
  const goToSection = useSectionNav()
  const reduce = useReducedMotion()

  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
  }

  return (
    <section className="mx-auto grid max-w-[1160px] items-center gap-12 px-[22px] pt-[60px] xl:grid-cols-[1fr_440px] xl:px-[140px] xl:pt-[110px]">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.p variants={item} className="flex items-center gap-3 font-mono text-label uppercase text-accent">
          <span aria-hidden="true" className="size-2 animate-led rounded-full bg-accent shadow-[0_0_12px_#22d3ee]" />
          {'// 01 — Hardware ⟷ Software'}
        </motion.p>

        <motion.h1 variants={item} className="mt-6 text-display font-bold xl:text-display-xl">
          {site.name.first}
          <br />
          <span className="text-accent">{site.name.last}</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-[34ch] font-display text-lead font-light text-ink-mid xl:text-lead-xl"
        >
          {site.tagline}
        </motion.p>

        <motion.p variants={item} className="mt-4 text-[15px] text-ink-low">
          {site.subline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button onClick={() => goToSection('projects')}>View Projects</Button>
          <Button variant="secondary" href={site.resume}>
            Resume
          </Button>
        </motion.div>
      </motion.div>

      {/* 3D chip on desktop, CSS board on phones / reduced motion */}
      <motion.div
        initial={{ opacity: 0, scale: reduce ? 1 : 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.3, delay: 0.15, ease: 'easeOut' }}
        className="mx-auto w-full max-w-[440px]"
      >
        <Chip />
      </motion.div>
    </section>
  )
}
