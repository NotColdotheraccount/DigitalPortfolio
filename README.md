# Aqeef Danish — Portfolio

Personal portfolio. React + Vite + Tailwind CSS v4 + Motion, hosted on GitHub Pages.

## Run locally
Needs Node 22+.

```bash
npm install
npm run dev      # http://localhost:5173
```

## Edit content
- `src/data/site.js` — bio, links, stack, awards
- `src/data/projects.js` — projects (lines marked `TODO` still need real values)
- `public/images/` — photos (`scripts/download-wix-images.ps1` fetches the old Wix ones)
- `public/resume.pdf` — resume

## Deploy
Push to `main`. GitHub Actions builds and publishes automatically (`.github/workflows/deploy.yml`).
One-time: repo **Settings → Pages → Source: GitHub Actions**.
