import { Route, Routes } from 'react-router'
import Home from './pages/Home.jsx'
import CaseStudy from './pages/CaseStudy.jsx'
import NotFound from './pages/NotFound.jsx'

// Milestone 2 wraps these in the layout (nav, background, footer)
// and adds animated page transitions.
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:slug" element={<CaseStudy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
