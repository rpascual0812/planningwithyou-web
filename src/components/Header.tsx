import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SectionLink } from './SectionLink'

const navLinks = [
  { sectionId: 'features', label: 'Features' },
  { sectionId: 'integrations', label: 'Integrations' },
  { sectionId: 'payments', label: 'Payments' },
  { sectionId: 'pricing', label: 'Pricing' },
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
            <SectionLink key={link.sectionId} sectionId={link.sectionId}>
              {link.label}
            </SectionLink>
          ))}
        </nav>
        <div className="header__actions">
          <SectionLink sectionId="pricing" className="btn btn-secondary header__sign-in">
            Sign in
          </SectionLink>
          <SectionLink sectionId="pricing" className="btn btn-primary">
            Get started
          </SectionLink>
        </div>
      </div>
    </header>
  )
}
