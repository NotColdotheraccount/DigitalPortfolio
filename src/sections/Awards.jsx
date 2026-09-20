import Reveal from '../components/ui/Reveal.jsx'
import SectionLabel from '../components/ui/SectionLabel.jsx'
import { awards } from '../data/site'

// Desktop: five columns hanging off one cyan rule, each with a solder pad.
// Mobile: the same years stacked, each with its own rule.
export default function Awards() {
  const years = awards.map((a) => a.year)
  const range = `${Math.min(...years)} — ${Math.max(...years)}`

  return (
    <section id="awards" className="mx-auto max-w-[1160px] scroll-mt-28 px-[22px] pt-[60px] xl:px-[140px] xl:pt-[130px]">
      <SectionLabel number="05" note={range}>
        Awards
      </SectionLabel>

      <div className="grid gap-8 md:grid-cols-3 xl:grid-cols-5 xl:gap-0">
        {awards.map((group, i) => (
          <Reveal key={group.year} delay={i * 0.06}>
            <div
              className={[
                'relative border-t border-accent-line pt-6',
                'xl:h-full xl:border-r xl:border-r-hairline xl:pr-6',
                i === 0 ? 'xl:pl-0' : 'xl:pl-6',
                i === awards.length - 1 ? 'xl:border-r-0 xl:pr-0' : '',
              ].join(' ')}
            >
              {/* solder pad sitting on the rule */}
              <span
                aria-hidden="true"
                className={`absolute -top-[5px] size-[9px] rounded-full border-2 border-accent bg-bg ${i === 0 ? 'left-0' : 'left-0 xl:left-6'}`}
              />

              <h3 className="font-display text-[28px] font-semibold">{group.year}</h3>

              <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item.text}
                    className={`text-[14px]/[1.5] ${item.type === 'award' ? 'text-ink-mid' : 'text-ink-low'}`}
                  >
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
