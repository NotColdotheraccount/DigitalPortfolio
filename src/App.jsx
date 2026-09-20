import { AnimatePresence } from 'motion/react'
import { Route, Routes, useLocation } from 'react-router'
import Background from './components/layout/Background.jsx'
import Footer from './components/layout/Footer.jsx'
import Nav from './components/layout/Nav.jsx'
import PageTransition from './components/layout/PageTransition.jsx'
import CaseStudy from './pages/CaseStudy.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  // AnimatePresence needs the location as a key, otherwise React swaps the
  // page instantly and the exit animation never gets a chance to play.
  const location = useLocation()

  return (
    <>
      {/* Keyboard users can jump straight past the nav */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:font-semibold focus:text-on-accent"
      >
        Skip to content
      </a>

      <Background />
      <Nav />

      <main id="main">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/projects/:slug"
              element={
                <PageTransition>
                  <CaseStudy />
                </PageTransition>
              }
            />
            <Route
              path="*"
              element={
                <PageTransition>
                  <NotFound />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </>
  )
}
