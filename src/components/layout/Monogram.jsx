import { asset } from '../../data/site'

// The logo + wordmark used in the nav and the mobile menu.
export default function Monogram() {
    return (
        <span className="flex items-center gap-3">
      <img
          src={asset('images/Logo.png')}
          alt="Logo"
          className="size-8 rounded-full object-cover"
      />
    </span>
    )
}