import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router'
import './index.css'
import App from './App.jsx'

// HashRouter keeps the route after a "#": site.com/#/projects/smart-bus-stop
// GitHub Pages only ever sees "site.com/", so refreshing never 404s.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
