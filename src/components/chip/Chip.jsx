import { Suspense, lazy } from 'react'
import { useReducedMotion } from 'motion/react'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import ChipFallback from './ChipFallback.jsx'

// React.lazy means three.js is only downloaded when this component is
// actually rendered — phones never pay for a library they won't use.
const ChipCanvas = lazy(() => import('./ChipCanvas.jsx'))

export default function Chip() {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const reduce = useReducedMotion()

  if (!isDesktop || reduce) {
    return (
      <ChipFallback caption={reduce ? 'Static chip · reduced motion' : 'Static chip · no 3D under 768px'} />
    )
  }

  return (
    <div className="aspect-square w-full">
      {/* Until the 3D bundle arrives, show the CSS board so there's no gap */}
      <Suspense fallback={<ChipFallback caption="Loading chip…" />}>
        <ChipCanvas />
      </Suspense>
    </div>
  )
}
