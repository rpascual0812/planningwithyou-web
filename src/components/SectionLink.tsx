import type { MouseEvent, ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { scrollToSection } from '../utils/scrollToSection'

type SectionLinkProps = {
  sectionId: string
  children: ReactNode
  className?: string
}

export function SectionLink({
  sectionId,
  children,
  className,
}: SectionLinkProps) {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    if (pathname === '/') {
      window.history.pushState(null, '', `#${sectionId}`)
      scrollToSection(sectionId)
      return
    }

    navigate({ pathname: '/', hash: `#${sectionId}` })
  }

  return (
    <a href={`/#${sectionId}`} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
