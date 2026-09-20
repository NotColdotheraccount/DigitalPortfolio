// The "AD" badge + wordmark used in the nav and the mobile menu.
export default function Monogram() {
  return (
    <span className="flex items-center gap-3">
      <span
        className="grid size-8 place-items-center rounded-full font-display text-[12px] font-bold text-on-accent"
        style={{ background: 'radial-gradient(circle at 35% 30%, #22D3EE, #0E7490)' }}
      >
        AD
      </span>
      <span className="font-mono text-[11px] tracking-[0.12em] text-ink-low">AQEEF.DEV</span>
    </span>
  )
}
