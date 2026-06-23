const steps = [
  {
    step: '01',
    title: 'Create your quotation',
    text: 'Add event details, services, and pricing. Save customer info from your directory or add someone new.',
  },
  {
    step: '02',
    title: 'Send to your customer',
    text: 'Deliver the quotation by email. Your customer reviews terms and totals in a clear, branded view.',
  },
  {
    step: '03',
    title: 'Sync your calendar',
    text: 'Block dates and manage appointments. Connect Gmail, Outlook, Apple, or Yahoo to keep everything aligned.',
  },
  {
    step: '04',
    title: 'Get paid securely',
    text: 'Share a Xendit payment link so customers pay online. Funds flow to you through a secured checkout.',
  },
]

export function HowItWorks() {
  return (
    <section className="section how-it-works">
      <div className="container">
        <div className="how-it-works__header text-center">
          <span className="section-label">How it works</span>
          <h2 className="section-title">From quote to paid — in four steps</h2>
        </div>
        <ol className="how-it-works__steps">
          {steps.map((s) => (
            <li key={s.step} className="how-it-works__step card">
              <span className="how-it-works__number">{s.step}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
