// Shown instead of the 3D chip on phones and when "reduce motion" is on.
// Pure CSS, so nothing extra downloads.
export default function ChipFallback({ caption = 'Static chip · no 3D under 768px' }) {
  return (
    <div className="grid place-items-center" aria-hidden="true">
      <div className="relative grid size-[260px] place-items-center xl:size-[300px]">
        <div className="absolute size-[240px] animate-breathe rounded-full [background:radial-gradient(circle,rgba(34,211,238,.18),transparent_70%)]" />

        <div className="relative size-[190px] rotate-45 rounded-[24px] border border-accent/30 [background:linear-gradient(160deg,#0D151C,#080D11)]">
          <div className="absolute inset-0 rounded-[24px] opacity-60 [background-image:radial-gradient(rgb(34_211_238/0.25)_1px,transparent_1px)] [background-size:16px_16px]" />

          <div className="absolute left-1/2 top-1/2 grid size-[70px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[8px] border border-accent/50 bg-[#0B1219]">
            <span className="-rotate-45 font-mono text-[10px] tracking-[0.14em] text-accent">AD·01</span>
          </div>

          <span className="absolute right-5 top-5 size-2 animate-led rounded-full bg-amber shadow-[0_0_12px_#fbbf24]" />
        </div>
      </div>

      <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-faint">{caption}</p>
    </div>
  )
}
