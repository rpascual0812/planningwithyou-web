import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'

type LegalPageProps = {
  title: string
  lastUpdated: string
  children: ReactNode
}

export function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
  return (
    <>
      <Header />
      <main className="legal-page">
        <div className="container legal-page__inner">
          <Link to="/" className="legal-page__back">
            ← Back to home
          </Link>
          <header className="legal-page__header">
            <h1>{title}</h1>
            <p className="legal-page__updated">Last updated: {lastUpdated}</p>
          </header>
          <article className="legal-page__content">{children}</article>
        </div>
      </main>
      <Footer />
    </>
  )
}
