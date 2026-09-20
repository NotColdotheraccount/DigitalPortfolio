import { useState } from 'react'
import { site } from '../data/site'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Returns an error message for one field, or '' when it's fine.
function validateField(name, value) {
  const v = value.trim()
  if (name === 'name') return v ? '' : 'Please enter your name.'
  if (name === 'email') {
    if (!v) return 'Please enter your email.'
    return EMAIL_RE.test(v) ? '' : 'That email address looks incomplete.'
  }
  if (name === 'message') {
    if (!v) return 'Please write a message.'
    return v.length >= 10 ? '' : 'A little more detail, please (10 characters minimum).'
  }
  return ''
}

export function useContactForm() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [touched, setTouched] = useState({})
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  // Validate on blur, then re-validate on every change once a field
  // has been touched — so errors appear late but clear as you fix them.
  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (touched[name]) setErrors((err) => ({ ...err, [name]: validateField(name, value) }))
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched((t) => ({ ...t, [name]: true }))
    setErrors((err) => ({ ...err, [name]: validateField(name, value) }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Check everything, not just what's been touched
    const nextErrors = {
      name: validateField('name', values.name),
      email: validateField('email', values.email),
      message: validateField('message', values.message),
    }
    setErrors(nextErrors)
    setTouched({ name: true, email: true, message: true })
    if (Object.values(nextErrors).some(Boolean)) return

    // No Web3Forms key set yet? Fall back to opening the mail app,
    // so the form still does something useful.
    if (!site.contactAccessKey) {
      const subject = encodeURIComponent(`Portfolio message from ${values.name}`)
      const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`)
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
      setStatus('sent')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: site.contactAccessKey,
          name: values.name,
          email: values.email,
          message: values.message,
          subject: `Portfolio message from ${values.name}`,
        }),
      })
      const data = await res.json()

      if (data.success) {
        setStatus('sent')
        setValues({ name: '', email: '', message: '' })
        setTouched({})
      } else {
        setStatus('error')
      }
    } catch {
      // Network failure, offline, blocked request…
      setStatus('error')
    }
  }

  return { values, errors, status, handleChange, handleBlur, handleSubmit }
}
