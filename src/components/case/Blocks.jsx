// Small building blocks used inside a case study.

// Declared outside ScopeCards: a component defined inside another
// component is rebuilt on every render, which throws away its state.
function Card({ label, items, accent }) {
  return (
    <div className="rounded-[16px] border border-hairline bg-white/[.015] p-5">
      <p
        className={`font-mono text-[10px] uppercase tracking-[0.16em] ${accent ? 'text-accent' : 'text-ink-faint'}`}
      >
        {label}
      </p>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item} className={`text-[14px]/[1.55] ${accent ? 'text-ink-mid' : 'text-ink-low'}`}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

// "IN SCOPE" / "OUT OF SCOPE" pair
export function ScopeCards({ inScope = [], outOfScope = [] }) {
  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2">
      <Card label="In scope" items={inScope} accent />
      <Card label="Out of scope" items={outOfScope} />
    </div>
  )
}

// Numbered vertical timeline for the work process
export function ProcessTimeline({ steps = [] }) {
  return (
    <ol className="mt-6 space-y-8 border-l-2 border-accent/25 pl-6">
      {steps.map((step, i) => (
        <li key={step.title} className="relative">
          <span
            aria-hidden="true"
            className="absolute -left-[31px] top-1 size-[11px] rounded-full border-2 border-accent bg-bg"
          />
          <p className="font-mono text-[11px] text-accent">{String(i + 1).padStart(2, '0')}</p>
          <h3 className="mt-1 font-display text-[18px] font-semibold">{step.title}</h3>
          <p className="mt-1 text-[15px]/[1.6] text-ink-low">{step.note}</p>
        </li>
      ))}
    </ol>
  )
}

// Three result figures; the first one is accented
export function StatCards({ stats = [] }) {
  return (
    <div className="mt-6 grid grid-cols-3 gap-3 xl:gap-4">
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={`rounded-[16px] border p-4 xl:p-5 ${
            i === 0 ? 'border-accent/40 bg-accent/[.06]' : 'border-hairline bg-white/[.015]'
          }`}
        >
          <p className={`font-display text-[26px] font-bold xl:text-[38px] ${i === 0 ? 'text-accent' : 'text-ink-high'}`}>
            {stat.value}
            {stat.unit && <span className="ml-1 text-[14px] font-medium text-ink-low">{stat.unit}</span>}
          </p>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-low xl:text-[12px]">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  )
}
