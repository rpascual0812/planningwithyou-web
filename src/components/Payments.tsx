export function Payments() {
  return (
    <section id="payments" className="section payments">
      <div className="container text-center">
        <span className="section-label">Payments</span>
        <h2 className="section-title">Powered by Xendit</h2>
        <p className="section-subtitle">
          Register your card for monthly or yearly subscriptions. Send customers
          a secured payment link so they can pay you online — all connected
          through Xendit.
        </p>
        <div className="payments__grid">
          <article className="card payments__card">
            <div className="payments__icon">💳</div>
            <h3>Your subscription</h3>
            <p>
              Add your credit card to Xendit when you sign up. Choose monthly
              or yearly billing and manage your Planning With You plan in one
              place.
            </p>
          </article>
          <article className="card payments__card payments__card--highlight">
            <div className="payments__icon">🔗</div>
            <h3>Customer payment links</h3>
            <p>
              Generate a secured checkout link inside the system. Your customers
              pay through Xendit — you get notified when payment is complete.
            </p>
          </article>
          <article className="card payments__card">
            <div className="payments__icon">🔒</div>
            <h3>Secure by design</h3>
            <p>
              Card data is handled by Xendit&apos;s PCI-compliant
              infrastructure. Your business stays protected while you focus on
              events.
            </p>
          </article>
        </div>
        <div className="payments__ribbon">
          <span>Xendit</span>
          <span aria-hidden="true">·</span>
          <span>Subscriptions</span>
          <span aria-hidden="true">·</span>
          <span>Payment links</span>
          <span aria-hidden="true">·</span>
          <span>Secured checkout</span>
        </div>
      </div>
    </section>
  )
}
