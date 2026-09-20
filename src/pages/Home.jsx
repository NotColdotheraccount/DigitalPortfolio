import About from '../sections/About.jsx'
import Awards from '../sections/Awards.jsx'
import Contact from '../sections/Contact.jsx'
import Hero from '../sections/Hero.jsx'
import Projects from '../sections/Projects.jsx'
import Stack from '../sections/Stack.jsx'
import { usePageMeta } from '../hooks/usePageMeta'
import { site } from '../data/site'

// Home is just the running order. Each section owns its own content.
export default function Home() {
  usePageMeta({
    title: 'Aqeef Danish — Hardware meets software',
    description: `${site.subline} ${site.tagline}`,
  })

  return (
    <>
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Awards />

      <Contact />
    </>
  )
}
