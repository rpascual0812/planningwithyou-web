import { Link } from 'react-router-dom'

const productLinks = [
  { to: '/#features', label: 'Features' },
  { to: '/#integrations', label: 'Integrations' },
  { to: '/#payments', label: 'Payments' },
  { to: '/#pricing', label: 'Pricing' },
]

const legalLinks = [
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/terms-and-conditions', label: 'Terms and Conditions of Use' },
  {
    to: '/platform-terms',
    label: 'Platform Terms of Use: User Access & Responsibilities',
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
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
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
