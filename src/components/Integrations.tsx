const providers = [
  {
    name: 'Gmail',
    color: '#ea4335',
    description: 'Sync email and Google Calendar',
  },
  {
    name: 'Outlook',
    color: '#0078d4',
    description: 'Microsoft 365 mail & calendar',
  },
  {
    name: 'Apple',
    color: '#a2aaad',
    description: 'iCloud Mail & Calendar',
  },
  {
    name: 'Yahoo',
    color: '#6001d2',
    description: 'Yahoo Mail & Calendar',
  },
]

export function Integrations() {
  return (
    <section id="integrations" className="section integrations">
      <div className="container">
        <div className="integrations__layout">
          <div className="integrations__copy">
            <span className="section-label">Integrations</span>
            <h2 className="section-title">
              Connect the tools you already use
            </h2>
            <p className="integrations__desc">
              Link your email and calendar from Gmail, Outlook, Apple, or Yahoo.
              Keep appointments and messages in sync so you never miss a client
              follow-up or event date.
            </p>
            <ul className="integrations__list">
              <li>Two-way calendar sync</li>
              <li>Send quotations from connected email</li>
              <li>One dashboard for all providers</li>
            </ul>
          </div>
          <div className="integrations__grid">
            {providers.map((p) => (
              <article
                key={p.name}
                className="card integrations__card"
              >
                <span
                  className="integrations__badge"
                  style={{ background: p.color }}
                >
                  {p.name.charAt(0)}
                </span>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
