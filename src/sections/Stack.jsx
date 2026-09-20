import Reveal from '../components/ui/Reveal.jsx'
import SectionLabel from '../components/ui/SectionLabel.jsx'
import { StackPill } from '../components/ui/Tag.jsx'
import { stack } from '../data/site'

// No percentage bars anywhere: "Python 90%" tells a recruiter nothing.
// Grouped chips say what you've actually worked with.
export default function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-[1160px] scroll-mt-28 px-[22px] pt-[60px] xl:px-[140px] xl:pt-[130px]">
      <SectionLabel number="03">Stack</SectionLabel>

      <div className="grid gap-[18px] md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
        {stack.map((group, i) => (
          <Reveal key={group.id} delay={i * 0.08} className="h-full">
            <div
              className="relative h-full rounded-[20px] border border-hairline p-6 pt-8 xl:rounded-[24px]"
              style={{
                background: 'linear-gradient(180deg, rgba(34,211,238,.05), rgba(255,255,255,.012))',
              }}
            >
              {/* Silkscreen label — sits on the border like a PCB component marking */}
              <span className="absolute -top-[9px] left-6 bg-bg px-2 font-mono text-[10px] uppercase tracking-[0.16em] text-accent xl:text-[11px]">
                {group.id} · {group.title}
              </span>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <StackPill key={item}>{item}</StackPill>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
