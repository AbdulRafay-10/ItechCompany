import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import StairsTransition from './components/transition/StairsTransition'
import TalkToExpertButton from './components/transition/TalkToExpertButton'
import Footer from './components/footer/Footer'
import Sidebar from './components/sidebar/Sidebar'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'

// Import Service Pages
import UIUXDesign from './pages/services/UIUXDesign'
import WebDevelopment from './pages/services/WebDevelopment'
import MobileAppDevelopment from './pages/services/MobileAppDevelopment'
import EcommerceSolutions from './pages/services/EcommerceSolutions'
import DevOps from './pages/services/DevOps'
import TestingQA from './pages/services/TestingQA'
import DigitalMarketing from './pages/services/DigitalMarketing'
import StaffAugmentation from './pages/services/StaffAugmentation'
import LetsConnect from './pages/LetsConnect'
import CaseStudiesPage from './pages/CaseStudies'

function App() {
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false)

  return (
    <Router>
      <div className='w-full'>
        <Navbar
          onOpenRightSidebar={() => setIsRightSidebarOpen(true)}
        />

        <main className="pt-24" style={{ minHeight: '60vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            
            {/* Service Routes */}
            <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
            <Route path="/services/ecommerce-solutions" element={<EcommerceSolutions />} />
            <Route path="/services/devops" element={<DevOps />} />
            <Route path="/services/testing-qa" element={<TestingQA />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/services/staff-augmentation" element={<StaffAugmentation />} />
            <Route path="/lets-connect" element={<LetsConnect />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
          </Routes>
        </main>

        <Footer />

        {/* Route change transition overlay */}
        <StairsTransition />

        <Sidebar
          isOpen={isRightSidebarOpen}
          onClose={() => setIsRightSidebarOpen(false)}
        />

        {/* Floating CTA visible across the site */}
        <TalkToExpertButton />
      </div>
    </Router>
  )
}

export default App
