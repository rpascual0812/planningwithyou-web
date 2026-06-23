import { Link } from 'react-router-dom'
import { SectionLink } from './SectionLink'

const productLinks = [
  { sectionId: 'features', label: 'Features' },
  { sectionId: 'integrations', label: 'Integrations' },
  { sectionId: 'payments', label: 'Payments' },
  { sectionId: 'pricing', label: 'Pricing' },
]

const legalLinks = [
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/terms-and-conditions', label: 'Terms of Service' },
  { to: '/refund-policy', label: 'Refund Policy' },
  {
    to: '/platform-terms',
    label: 'Terms of Use',
  },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link to="/">
            <img src="/logo.png" alt="" width={36} height={36} />
          </Link>
          <div>
            <strong>Planning With You</strong>
            <p>planningwithyou.com</p>
          </div>
        </div>
        <nav className="footer__nav" aria-label="Product">
          {productLinks.map((link) => (
            <SectionLink key={link.sectionId} sectionId={link.sectionId}>
              {link.label}
            </SectionLink>
          ))}
        </nav>
        <nav className="footer__legal" aria-label="Legal">
          {legalLinks.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="footer__copy">
          © {year} Planning With You. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
