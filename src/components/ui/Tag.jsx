// Small labels used across the site.

// Tech tag — "BeagleBone", "Flask"…
export function Tag({ children }) {
  return (
    <span className="rounded-full bg-accent-tint px-[10px] py-[6px] font-mono text-[11px] text-[#7FDCEC]">
      {children}
    </span>
  )
}

// Stack pill — the bigger, quieter chips on the stack cards
export function StackPill({ children }) {
  return (
    <span className="rounded-full bg-white/6 px-[14px] py-[9px] text-[13px] font-medium text-ink-mid">
      {children}
    </span>
  )
}

// Award / role badge — amber, used sparingly
export function Badge({ children }) {
  return (
    <span className="inline-block rounded-full border border-amber/35 px-[11px] py-[6px] font-mono text-[11px] uppercase tracking-[0.14em] text-amber">
      {children}
    </span>
  )
}
