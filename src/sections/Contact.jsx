import { useEffect, useRef, useState } from 'react'
import Reveal from '../components/ui/Reveal.jsx'
import SectionLabel from '../components/ui/SectionLabel.jsx'
import { useContactForm } from '../hooks/useContactForm'
import { site } from '../data/site'

// One field: mono caption label, input, and an error line tied to the
// input with aria-describedby so screen readers read them together.
function Field({ label, name, type = 'text', textarea, value, error, onChange, onBlur, placeholder }) {
  const id = `field-${name}`
  const errorId = `${id}-error`
  const shared = {
    id,
    name,
    value,
    onChange,
    onBlur,
    placeholder,
    'aria-invalid': error ? 'true' : undefined,
    'aria-describedby': error ? errorId : undefined,
    className: `w-full rounded-[12px] border bg-white/[.02] px-4 py-[15px] text-[15px] text-ink-high outline-none transition placeholder:text-ink-low focus:border-accent focus:bg-accent/[.04] focus:shadow-[0_0_0_3px_rgba(34,211,238,.15)] ${
      error ? 'border-error' : 'border-white/12'
    }`,
  }

  return (
    <div className={textarea ? 'sm:col-span-2' : ''}>
      <label htmlFor={id} className="mb-2 block font-mono text-[10px] uppercase tracking-[0.16em] text-ink-low">
        {label}
      </label>

      {textarea ? <textarea rows={5} {...shared} /> : <input type={type} {...shared} />}

      {error && (
        <p id={errorId} role="alert" className="mt-2 font-mono text-[11px] text-error">
          ! {error}
        </p>
      )}
    </div>
  )
}

export default function Contact() {
  const { values, errors, status, handleChange, handleBlur, handleSubmit } = useContactForm()
  const [copied, setCopied] = useState(false)
  const timer = useRef(null)

  // Clear the pending timeout if the component unmounts mid-countdown
  useEffect(() => () => clearTimeout(timer.current), [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      timer.current = setTimeout(() => setCopied(false), 1600)
    } catch {
      // Clipboard blocked (insecure context, denied permission) — the
      // address is on screen anyway, so just do nothing.
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-[1160px] scroll-mt-28 px-[22px] pt-[60px] xl:px-[140px] xl:pt-[130px]">
      <SectionLabel number="06">Contact</SectionLabel>

      <Reveal>
        <div
          className="rounded-[28px] border border-accent/20 bg-white/[.015] px-6 py-12 text-center xl:px-16 xl:py-16"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 700px 300px at 50% 0%, rgba(34,211,238,.1), transparent)',
          }}
        >
          <h2 className="text-h2 font-bold xl:text-h2-xl">Let&apos;s build something.</h2>

          {/* Email + copy button */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-hairline bg-white/[.03] py-2 pl-5 pr-2">
            <a href={`mailto:${site.email}`} className="font-mono text-[14px] text-ink-mid hover:text-accent xl:text-[16px]">
              {site.email}
            </a>
            <span aria-hidden="true" className="h-4 w-px bg-white/15" />
            <button
              type="button"
              onClick={copyEmail}
              className="rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-accent transition-colors hover:bg-accent/10"
            >
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>

          {/* noValidate: our own messages instead of the browser's tooltips */}
          <form onSubmit={handleSubmit} noValidate className="mx-auto mt-10 grid max-w-[720px] gap-4 text-left sm:grid-cols-2">
            <Field
              label="Name"
              name="name"
              placeholder="Your name"
              value={values.name}
              error={errors.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Field
              label="Email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={values.email}
              error={errors.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Field
              label="Message"
              name="message"
              textarea
              placeholder="What would you like to build?"
              value={values.message}
              error={errors.message}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <div className="flex flex-col items-center gap-4 sm:col-span-2 sm:flex-row sm:justify-between">
              {/* role="status" announces the result without stealing focus */}
              <p role="status" className="font-mono text-[11px] uppercase tracking-[0.14em]">
                {status === 'sent' && (
                  <span className="flex items-center gap-2 text-success">
                    <span aria-hidden="true" className="size-[6px] rounded-full bg-success shadow-[0_0_10px_#4ade80]" />
                    Sent — I&apos;ll reply within 2 days
                  </span>
                )}
                {status === 'error' && (
                  <span className="text-error">! Something went wrong — email me directly</span>
                )}
              </p>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full rounded-full bg-accent px-[30px] py-[17px] font-semibold text-on-accent shadow-glow transition hover:-translate-y-0.5 hover:shadow-glow-strong disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {status === 'sending' ? 'Sending…' : 'Send'}
              </button>
            </div>
          </form>

          <div className="mt-10 flex justify-center gap-8">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-low transition-colors hover:text-accent"
              >
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
