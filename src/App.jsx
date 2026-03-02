import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Maintenance from './pages/services/Maintenance'
import SitewebOptimise from './pages/services/SitewebOptimise'
import RegieIT from './pages/services/RegieIT'
import PackSaasAI from './pages/services/PackSaasAI'
import DonneesB2B from './pages/services/DonneesB2B'
import MarketingDigital from './pages/services/MarketingDigital'
import Expertises from './pages/Expertises'
import Solutions from './pages/Solutions'
import Dabilio from './pages/solutions/Dabilio'
import Axis from './pages/solutions/Axis'
import AxisPay from './pages/solutions/AxisPay'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"                           element={<Home />} />
        <Route path="/a-propos"                   element={<About />} />
        <Route path="/services"                   element={<Services />} />
        <Route path="/services/maintenance"       element={<Maintenance />} />
        <Route path="/services/siteweb-optimise"  element={<SitewebOptimise />} />
        <Route path="/services/regie-it"          element={<RegieIT />} />
        <Route path="/services/pack-saas-ai"      element={<PackSaasAI />} />
        <Route path="/services/donnees-b2b"       element={<DonneesB2B />} />
        <Route path="/services/marketing-digital" element={<MarketingDigital />} />
        <Route path="/expertises"                 element={<Expertises />} />
        <Route path="/solutions"                  element={<Solutions />} />
        <Route path="/solutions/dabilio"          element={<Dabilio />} />
        <Route path="/solutions/axis"             element={<Axis />} />
        <Route path="/solutions/axis-pay"         element={<AxisPay />} />
        <Route path="/contact"                    element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
