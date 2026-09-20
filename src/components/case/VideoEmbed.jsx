import { useState } from 'react'

// Pulls the video id out of either YouTube URL shape.
function youTubeId(url) {
  const match = url.match(/(?:youtu\.be\/|v=)([A-Za-z0-9_-]{11})/)
  return match ? match[1] : null
}

// The iframe only mounts after a click. Embedding it on page load would
// pull in YouTube's player scripts and cookies for every visitor.
export default function VideoEmbed({ url, title }) {
  const [playing, setPlaying] = useState(false)
  const id = youTubeId(url)
  if (!id) return null

  return (
    <div className="relative overflow-hidden rounded-[18px] border border-hairline bg-image" style={{ aspectRatio: '16 / 9' }}>
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="size-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="group grid size-full place-items-center"
          style={{
            backgroundImage: `url(https://i.ytimg.com/vi/${id}/hqdefault.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <span className="absolute inset-0 bg-bg/55 transition-colors group-hover:bg-bg/40" />
          <span className="relative grid size-16 place-items-center rounded-full border border-accent/60 bg-bg/70 text-accent transition group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(34,211,238,.4)]">
            ▶
          </span>
        </button>
      )}
    </div>
  )
}
