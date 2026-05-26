import { useState } from 'react'

const plans = {
  monthly: {
    price: '₱999',
    period: '/month',
    note: 'Billed monthly via Paymongo',
  },
  yearly: {
    price: '₱9,990',
    period: '/year',
    note: 'Save 2 months — billed yearly',
  },
}

const included = [
  'Unlimited quotations',
  'Calendar management',
  'Customer directory',
  'Gmail, Outlook, Apple & Yahoo sync',
  'Paymongo payment links for customers',
  'Email support',
]

export function Pricing() {
  const [yearly, setYearly] = useState(false)
  const plan = yearly ? plans.yearly : plans.monthly

  return (
    <section id="pricing" className="section pricing">
      <div className="container text-center">
        <span className="section-label">Pricing</span>
        <h2 className="section-title">Simple plans for growing planners</h2>
        <p className="section-subtitle">
          Start with a plan that fits your business. Switch between monthly and
          yearly billing anytime.
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

        <article className="card pricing__card">
          <h3 className="pricing__plan-name">Professional</h3>
          <div className="pricing__price">
            <span className="pricing__amount">{plan.price}</span>
            <span className="pricing__period">{plan.period}</span>
          </div>
          <p className="pricing__note">{plan.note}</p>
          <ul className="pricing__features">
            {included.map((item) => (
              <li key={item}>
                <span aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a href="#" className="btn btn-primary btn-lg pricing__cta">
            Get started
          </a>
          <p className="pricing__footer">
            Credit card required · Powered by Paymongo
          </p>
        </article>
      </div>
    </section>
  )
}
