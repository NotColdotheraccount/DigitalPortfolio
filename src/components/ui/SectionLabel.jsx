// The "// 03 — STACK" heading rows: solder pad, mono label, fading rule.
export default function SectionLabel({ number, children, note }) {
  return (
    <div className="mb-10 flex items-center gap-4">
      {/* Real heading for screen readers and document outline; the visible
          version is the mono label beside it. */}
      <h2 className="sr-only">{children}</h2>
      {/* solder pad */}
      <span
        aria-hidden="true"
        className="size-[9px] shrink-0 rounded-full border-2 border-accent bg-bg"
      />
      <span className="shrink-0 font-mono text-label uppercase text-accent">
        {`// ${number} — ${children}`}
      </span>
      <span
        aria-hidden="true"
        className="h-px flex-1 [background:linear-gradient(90deg,rgba(34,211,238,.28),transparent)]"
      />
      {note && <span className="hidden shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-faint xl:block">{note}</span>}
    </div>
  )
}
