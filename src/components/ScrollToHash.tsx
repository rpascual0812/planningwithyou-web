import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToSection } from '../utils/scrollToSection'

export function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (pathname !== '/' || !hash) return

    const sectionId = hash.replace('#', '')
    if (!sectionId) return

    const frame = requestAnimationFrame(() => {
      scrollToSection(sectionId)
    })

    return () => cancelAnimationFrame(frame)
  }, [pathname, hash])

  return null
}
