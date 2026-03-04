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
    if (title) document.title = `${title} | DTS`
    const meta = document.querySelector('meta[name="description"]')
    if (meta && description) meta.setAttribute('content', description)
  }, [title, description])

  return (
    <div className="antialiased selection:bg-primary-500/30 selection:text-white">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
