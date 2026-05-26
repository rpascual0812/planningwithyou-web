const features = [
  {
    icon: '📋',
    title: 'Event quotations',
    description:
      'Build professional quotations for weddings, corporate events, parties, and any occasion. Customize line items, totals, and terms — then send directly to your customer.',
  },
  {
    icon: '📅',
    title: 'Built-in calendar',
    description:
      'Manage bookings, site visits, and event dates in one place. See your schedule at a glance and avoid double-booking.',
  },
  {
    icon: '👥',
    title: 'Customer directory',
    description:
      'Save customer names, phone numbers, mobile numbers, and addresses. Pull contact details into quotations in seconds.',
  },
  {
    icon: '✉️',
    title: 'Send & track',
    description:
      'Email quotations from the system and keep a record of what was sent. Follow up without leaving your workflow.',
  },
]

export function Features() {
  return (
    <section id="features" className="section features">
      <div className="container text-center">
        <span className="section-label">Features</span>
        <h2 className="section-title">Everything you need to quote &amp; plan</h2>
        <p className="section-subtitle">
          From first inquiry to signed agreement — create, send, schedule, and
          collect payment without juggling spreadsheets.
        </p>
        <div className="features__grid">
          {features.map((f) => (
            <article key={f.title} className="card features__card">
              <span className="features__icon" aria-hidden="true">
                {f.icon}
              </span>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
