import About from '../sections/About.jsx'
import Awards from '../sections/Awards.jsx'
import Hero from '../sections/Hero.jsx'
import Projects from '../sections/Projects.jsx'
import Stack from '../sections/Stack.jsx'
import SectionLabel from '../components/ui/SectionLabel.jsx'

// Home is just the running order. Each section owns its own content.
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Awards />

      {/* Milestone 5: the real contact panel and form */}
      <section
        id="contact"
        className="mx-auto max-w-[1160px] scroll-mt-28 px-[22px] pt-[60px] xl:px-[140px] xl:pt-[130px]"
      >
        <SectionLabel number="06">Contact</SectionLabel>
        <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-ink-faint">
          Section arrives in milestone 5
        </p>
      </section>
    </>
  )
}
