export default function Footer() {
  const toTop = () => {
    // Respect the OS "reduce motion" setting: jump instead of gliding
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <footer className="mx-auto flex max-w-[1160px] items-center justify-between px-[22px] py-12 xl:px-[140px] xl:py-16">
      <p className="font-mono text-[13px] text-ink-faint">© 2026 Aqeef Danish</p>

      <button
        type="button"
        onClick={toTop}
        className="rounded-full border border-hairline px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-low transition-colors hover:border-accent/60 hover:text-accent"
      >
        Back to top ↑
      </button>
    </footer>
  )
}
