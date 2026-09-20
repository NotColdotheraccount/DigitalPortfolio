// Page background: PCB dot substrate + two vertical trace rails with
// signal pulses travelling along them. Purely decorative, so the whole
// thing is aria-hidden and ignores pointer events.
import { useReducedMotion } from 'motion/react'

function Rail({ side, delay }) {
  const reduce = useReducedMotion()

  return (
    <div
      className="absolute top-0 bottom-0 w-px"
      style={{
        [side]: '96px',
        background:
          'linear-gradient(180deg, transparent, rgba(34,211,238,.28) 12%, rgba(34,211,238,.28) 88%, transparent)',
      }}
    >
      {/* the pulse: a small glowing dot that runs down the rail */}
      {!reduce && (
        <span
          className="absolute left-1/2 size-[3px] -translate-x-1/2 rounded-full bg-accent shadow-[0_0_10px_3px_rgba(34,211,238,.6)]"
          style={{ animation: `rail-pulse 6.5s ${delay}s linear infinite` }}
        />
      )}
    </div>
  )
}

export default function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      {/* Dot substrate */}
      <div className="absolute inset-0 opacity-50 [background-image:radial-gradient(rgb(34_211_238/0.1)_1px,transparent_1px)] [background-size:22px_22px] xl:[background-size:26px_26px]" />

      {/* Trace rails — desktop only, they'd crowd a phone screen */}
      <div className="hidden xl:block">
        <Rail side="left" delay={0} />
        <Rail side="right" delay={3.2} />
      </div>

      {/* Soft glow behind the hero, top-centre */}
      <div className="absolute inset-x-0 top-0 h-[600px] [background:radial-gradient(ellipse_700px_380px_at_50%_0%,rgba(34,211,238,.07),transparent)]" />
    </div>
  )
}
