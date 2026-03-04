import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children, title, description }) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    const BASE_URL = 'https://dts.dabil.io'
    const fullTitle = title ? `${title} | DTS` : 'DTS | Digital Transformation Services'
    const desc = description || 'DTS accompagne la transformation digitale des entreprises à Madagascar.'
    const url = `${BASE_URL}${pathname}`

    document.title = fullTitle

    const setMeta = (sel, val) => {
      const el = document.querySelector(sel)
      if (el) el.setAttribute('content', val)
    }
    const setLink = (sel, val) => {
      const el = document.querySelector(sel)
      if (el) el.setAttribute('href', val)
    }

    setMeta('meta[name="description"]', desc)
    setLink('link[rel="canonical"]', url)
    setMeta('meta[property="og:title"]', fullTitle)
    setMeta('meta[property="og:description"]', desc)
    setMeta('meta[property="og:url"]', url)
    setMeta('meta[name="twitter:title"]', fullTitle)
    setMeta('meta[name="twitter:description"]', desc)
  }, [title, description, pathname])

  return (
    <div className="antialiased selection:bg-primary-500/30 selection:text-white">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
