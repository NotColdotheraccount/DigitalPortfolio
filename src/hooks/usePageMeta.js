import { useEffect } from 'react'

// A single-page app never reloads, so the tab title and description would
// otherwise stay frozen on whatever index.html said. This updates both
// whenever a page mounts — it's what search results and shared links show.
export function usePageMeta({ title, description }) {
  useEffect(() => {
    if (title) document.title = title

    if (description) {
      const tag = document.querySelector('meta[name="description"]')
      if (tag) tag.setAttribute('content', description)
    }
  }, [title, description])
}
