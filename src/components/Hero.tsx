export function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__content">
        <div className="hero__text">
          <p className="hero__eyebrow">Event planning, simplified</p>
          <h1 className="hero__title">
            Quotations, calendars &amp; payments —{' '}
            <span className="gradient-text">all in one flow</span>
          </h1>
          <p className="hero__subtitle">
            Create polished quotations for any event, send them to customers,
            manage your schedule, sync with Gmail, Outlook, Apple &amp; Yahoo —
            and get paid securely through Paymongo.
          </p>
          <div className="hero__cta">
            <a href="#pricing" className="btn btn-primary btn-lg">
              Start for free
            </a>
            <a href="#features" className="btn btn-secondary btn-lg">
              See how it works
            </a>
          </div>
          <ul className="hero__stats">
            <li>
              <strong>Any event</strong>
              <span>Weddings, corporate, parties &amp; more</span>
            </li>
            <li>
              <strong>4 providers</strong>
              <span>Email &amp; calendar sync</span>
            </li>
            <li>
              <strong>Paymongo</strong>
              <span>Subscriptions &amp; customer payments</span>
            </li>
          </ul>
        </div>
        <div className="hero__visual" aria-hidden="true">
          <div className="hero-mockup card">
            <div className="hero-mockup__bar">
              <span />
              <span />
              <span />
            </div>
            <div className="hero-mockup__body">
              <div className="hero-mockup__quote">
                <span className="hero-mockup__label">Quotation #1042</span>
                <h3>Sunset Garden Wedding</h3>
                <p>March 15, 2026 · 120 guests</p>
                <div className="hero-mockup__line" />
                <div className="hero-mockup__row">
                  <span>Venue &amp; catering</span>
                  <span>₱185,000</span>
                </div>
                <div className="hero-mockup__row">
                  <span>Photography package</span>
                  <span>₱45,000</span>
                </div>
                <div className="hero-mockup__total">
                  <span>Total</span>
                  <span>₱230,000</span>
                </div>
              </div>
              <div className="hero-mockup__side">
                <div className="hero-mockup__calendar">
                  <span>Calendar</span>
                  <div className="hero-mockup__grid">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <span
                        key={i}
                        className={i === 5 ? 'hero-mockup__day--active' : ''}
                      />
                    ))}
                  </div>
                </div>
                <div className="hero-mockup__paid">
                  <span className="hero-mockup__check">✓</span>
                  Payment received via secure link
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
