import { motion } from 'motion/react'
import { Link } from 'react-router'
import { useMagnetic } from '../../hooks/useMagnetic'

// One button, three looks. Renders as <Link>, <a> or <button> depending on
// what you pass: `to` for an internal route, `href` for an external link,
// neither for a plain button.
const VARIANTS = {
  primary:
    'bg-accent text-on-accent shadow-glow hover:shadow-glow-strong',
  secondary:
    'border border-white/15 text-ink-high hover:border-accent/60 hover:text-accent',
  ghost:
    'text-ink-low hover:text-accent',
}

export default function Button({
  variant = 'primary',
  to,
  href,
  children,
  className = '',
  fullWidth = false,
  ...props
}) {
  const { ref: magneticRef, style: magneticStyle, handlers } = useMagnetic()

  const base = [
    'inline-flex items-center justify-center rounded-full font-semibold transition-colors',
    variant === 'ghost' ? 'px-2 py-1 text-[14px]' : 'px-[30px] py-[17px] text-[15px]',
    VARIANTS[variant],
    fullWidth ? 'w-full' : '',
    className,
  ].join(' ')

  const content =
    to ? (
      <Link to={to} className={base} {...props}>
        {children}
      </Link>
    ) : href ? (
      <a href={href} target="_blank" rel="noreferrer" className={base} {...props}>
        {children}
      </a>
    ) : (
      <button type="button" className={base} {...props}>
        {children}
      </button>
    )

  return (
    <motion.span
      ref={magneticRef}
      style={magneticStyle}
      {...handlers}
      className={fullWidth ? 'block w-full' : 'inline-block'}
    >
      {content}
    </motion.span>
  )
}
