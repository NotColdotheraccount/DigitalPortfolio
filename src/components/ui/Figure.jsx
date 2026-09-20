import { useState } from 'react'

// An image that degrades gracefully: if the file is missing (or hasn't been
// added yet) it shows the striped placeholder from the design instead of a
// broken-image icon.
export default function Figure({ src, alt, ratio = '4 / 3', className = '', label }) {
  const [failed, setFailed] = useState(!src)

  return (
    <div
      className={`relative overflow-hidden bg-image ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {failed ? (
        <div
          aria-hidden="true"
          className="grid size-full place-items-center [background-image:repeating-linear-gradient(135deg,rgba(255,255,255,.035)_0_10px,transparent_10px_20px)]"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-faint">
            {label ?? 'Image'}
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className="size-full object-cover"
        />
      )}
    </div>
  )
}
