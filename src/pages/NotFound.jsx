import { Link } from 'react-router'
import { usePageMeta } from '../hooks/usePageMeta'

export default function NotFound() {
  usePageMeta({ title: 'Page not found — Aqeef Danish' })

  return (
    <section className="grid min-h-[70dvh] place-items-center px-[22px] text-center">
      <div>
        <p className="font-mono text-label uppercase text-accent">{'// Error 404 — no signal'}</p>
        <h1 className="mt-5 text-h2 font-bold xl:text-h2-xl">Page not found.</h1>
        <Link
          to="/"
          className="mt-10 inline-block rounded-full bg-accent px-[30px] py-[17px] font-semibold text-on-accent shadow-glow transition hover:-translate-y-0.5 hover:shadow-glow-strong"
        >
          Back home
        </Link>
      </div>
    </section>
  )
}
