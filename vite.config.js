import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  // './' = asset paths are relative to index.html.
  // This lets the same build work on any GitHub Pages URL:
  //   notcoldotheraccount.github.io/            (user site)
  //   notcoldotheraccount.github.io/portfolio/  (project site)
  // It only works because we use HashRouter (see main.jsx).
  base: './',
})
