import Button from '../components/ui/Button.jsx'
import Figure from '../components/ui/Figure.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import SectionLabel from '../components/ui/SectionLabel.jsx'
import { site } from '../data/site'

// Short labels instead of brand logos — swap in an icon set later if you like.
const SHORT = { LinkedIn: 'in', Instagram: 'ig' }

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1160px] scroll-mt-28 px-[22px] pt-[60px] xl:px-[140px] xl:pt-[130px]">
      <SectionLabel number="02">About</SectionLabel>

      <div className="grid gap-10 xl:grid-cols-[1fr_360px] xl:gap-16">
        {/* Portrait first on mobile, second on desktop */}
        <Reveal className="xl:order-2">
          <Figure
            src={site.portrait}
            alt="Aqeef Danish"
            ratio="3 / 4"
            priority
            label="Portrait 3:4"
            className="rounded-[18px] border border-accent/20"
          />
        </Reveal>

        <Reveal delay={0.08} className="xl:order-1">
          <p className="max-w-[68ch] font-display text-lead font-light leading-[1.5] text-ink-body xl:text-lead-xl">
            {site.bio}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                title={s.label}
                className="grid size-[46px] place-items-center rounded-full border border-hairline font-mono text-[12px] text-[#A8B4C2] transition-colors hover:border-accent/60 hover:text-accent"
              >
                {SHORT[s.label] ?? s.label.slice(0, 2).toLowerCase()}
              </a>
            ))}

            <Button variant="secondary" href={site.resume}>
              View Resume
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
