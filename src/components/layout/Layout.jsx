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
    const fullTitle = title ? `${title} | DTS` : 'DTS | Design to scale'
    const fullUrl = `${BASE_URL}${pathname}`

    document.title = fullTitle

    const setMeta = (selector, attr, value) => {
      const el = document.querySelector(selector)
      if (el && value) el.setAttribute(attr, value)
    }

    setMeta('meta[name="description"]', 'content', description)
    setMeta('link[rel="canonical"]', 'href', fullUrl)
    setMeta('meta[property="og:title"]', 'content', fullTitle)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:url"]', 'content', fullUrl)
    setMeta('meta[name="twitter:title"]', 'content', fullTitle)
    setMeta('meta[name="twitter:description"]', 'content', description)
  }, [title, description, pathname])

  return (
    <div className="antialiased selection:bg-primary-500/30 selection:text-white">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
