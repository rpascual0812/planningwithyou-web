import { useState } from 'react'

type PaidTier = {
  id: string
  name: string
  featured?: boolean
  monthly: { price: string; note: string }
  yearly: { price: string; note: string }
  features: string[]
  cta: string
}

const freeTier = {
  id: 'free',
  name: 'Free',
  price: '₱0',
  period: 'forever',
  note: 'No credit card required',
  features: [
    'Unlimited quotations',
    'Calendar management',
    'Customer directory',
    'Paymongo payment links for customers',
    'Reports & analytics',
  ],
  cta: 'Get started free',
}

const paidTiers: PaidTier[] = [
  {
    id: 'professional',
    name: 'Professional',
    featured: true,
    monthly: {
      price: '₱995',
      note: 'Billed monthly via Paymongo',
    },
    yearly: {
      price: '₱9,950',
      note: 'Save 2 months — billed yearly',
    },
    features: [
      'Unlimited quotations',
      'Calendar management',
      'Customer directory',
      'Gmail, Outlook, Apple & Yahoo sync',
      'Paymongo payment links for customers',
      'Reports & analytics',
      'Email support',
    ],
    cta: 'Get started',
  },
  {
    id: 'ai-plus',
    name: 'AI Plus',
    monthly: {
      price: '₱1,999',
      note: 'Billed monthly via Paymongo',
    },
    yearly: {
      price: '₱19,990',
      note: 'Save 2 months — billed yearly',
    },
    features: [
      'Everything in Professional',
      'AI-assisted quotation drafting',
      'Smart event & pricing suggestions',
      'Automated follow-up reminders',
      'Priority email & chat support',
    ],
    cta: 'Get started with AI',
  },
]

export function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section id="pricing" className="section pricing">
      <div className="container text-center">
        <span className="section-label">Pricing</span>
        <h2 className="section-title">Simple plans for growing planners</h2>
        <p className="section-subtitle">
          Start free, then upgrade when you need more quotations, integrations,
          and AI-powered workflows.
        </p>

        <div className="pricing__toggle" role="group" aria-label="Billing period">
          <button
            type="button"
            className={!yearly ? 'pricing__toggle-btn--active' : ''}
            onClick={() => setYearly(false)}
            aria-pressed={!yearly}
          >
            Monthly
          </button>
          <button
            type="button"
            className={yearly ? 'pricing__toggle-btn--active' : ''}
            onClick={() => setYearly(true)}
            aria-pressed={yearly}
          >
            Yearly
            <span className="pricing__save">Save 17%</span>
          </button>
        </div>

        <div className="pricing__grid">
          <article className="card pricing__card">
            <h3 className="pricing__plan-name">{freeTier.name}</h3>
            <div className="pricing__price">
              <span className="pricing__amount">{freeTier.price}</span>
              <span className="pricing__period">{freeTier.period}</span>
            </div>
            <p className="pricing__note">{freeTier.note}</p>
            <ul className="pricing__features">
              {freeTier.features.map((item) => (
                <li key={item}>
                  <span aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a href="#" className="btn btn-secondary btn-lg pricing__cta">
              {freeTier.cta}
            </a>
          </article>

          {paidTiers.map((tier) => {
            const billing = yearly ? tier.yearly : tier.monthly
            return (
              <article
                key={tier.id}
                className={`card pricing__card${tier.featured ? ' pricing__card--featured' : ''}`}
              >
                {tier.featured && (
                  <span className="pricing__badge">Most popular</span>
                )}
                <h3 className="pricing__plan-name">{tier.name}</h3>
                <div className="pricing__price">
                  <span className="pricing__amount">{billing.price}</span>
                  <span className="pricing__period">
                    {yearly ? '/year' : '/month'}
                  </span>
                </div>
                <p className="pricing__note">{billing.note}</p>
                <ul className="pricing__features">
                  {tier.features.map((item) => (
                    <li key={item}>
                      <span aria-hidden="true">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#" className="btn btn-primary btn-lg pricing__cta">
                  {tier.cta}
                </a>
                <p className="pricing__footer">
                  Credit card required · Powered by Paymongo
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
