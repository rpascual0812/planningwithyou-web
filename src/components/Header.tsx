import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
  { to: '/#features', label: 'Features' },
  { to: '/#integrations', label: 'Integrations' },
  { to: '/#payments', label: 'Payments' },
  { to: '/#pricing', label: 'Pricing' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <Link to="/" className="header__brand">
          <img src="/logo.png" alt="Planning With You" width={44} height={44} />
          <span>Planning With You</span>
        </Link>
        <nav className="header__nav" aria-label="Main">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="header__actions">
          <Link to="/#pricing" className="btn btn-secondary header__sign-in">
            Sign in
          </Link>
          <Link to="/#pricing" className="btn btn-primary">
            Get started
          </Link>
        </div>
      </div>
    </header>
  )
}
