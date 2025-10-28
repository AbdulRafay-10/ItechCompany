import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Dropdown from '../dropdown/Dropdown'
import logo from '../../assets/logo.jpeg'

function Navbar({ onOpenRightSidebar }) {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const servicesRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target)
      ) {
        setIsServicesOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  useEffect(() => {
    function onResize() {
      const desktop = window.matchMedia('(min-width: 901px)').matches
      setIsServicesOpen(false)
    }
    window.addEventListener('resize', onResize)
    onResize()
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Auto-close services dropdown on route changes
  useEffect(() => {
    setIsServicesOpen(false)
  }, [location.pathname])

  const serviceItems = [
    { name: 'UI/UX Designing', path: '/services/ui-ux-design' },
    { name: 'Mobile App Development', path: '/services/mobile-app-development' },
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'E-commerce Solutions', path: '/services/ecommerce-solutions' },
    { name: 'DevOps', path: '/services/devops' },
    { name: 'Testing & Quality Assurance', path: '/services/testing-qa' },
    { name: 'Digital Marketing', path: '/services/digital-marketing' },
    { name: 'SEO', path: '/services/seo' },
    { name: 'Staff Augmentation', path: '/services/staff-augmentation' },
  ]

  return (
    <header className="fixed left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm shadow-xl border-b border-slate-700">
      <div className="w-full px-0 md:px-12 py-3 md:py-4 grid grid-cols-[auto_1fr_auto] items-center relative">
        <div className="flex items-center gap-2 pl-0 ml-0">
         <Link to="/" className="md:static absolute left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0"><img src={logo} alt="logo" className="h-8 md:h-10 w-auto hover:scale-105 transition-transform duration-300" /></Link>
        </div>

        <nav className="hidden md:flex flex-1 items-center justify-center gap-5">
          <Link to="/case-studies" className="font-semibold text-sm tracking-wide text-slate-200 hover:text-[#c4d800] transition-colors duration-300 relative group">
            CASE STUDIES
            <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-[#c4d800] to-[#a8b800] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>

          <div
            className="relative"
            ref={servicesRef}
          >
            <button
              className="inline-flex items-center gap-2 font-semibold text-sm tracking-wide text-slate-200 hover:text-[#c4d800] transition-colors duration-300 relative group"
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setIsServicesOpen((v) => !v)
              }}
            >
              SERVICES
              <span className={`inline-block border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-6 border-t-current transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-[#c4d800] to-[#a8b800] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </button>

            <Dropdown
              isOpen={isServicesOpen}
              items={serviceItems}
              onItemClick={() => setIsServicesOpen(false)}
            />
          </div>

          <Link to="/about" className="font-semibold text-sm tracking-wide text-slate-200 hover:text-[#c4d800] transition-colors duration-300 relative group">
            ABOUT US
            <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-[#c4d800] to-[#a8b800] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <Link to="/lets-connect" className="font-semibold text-sm tracking-wide text-slate-200 hover:text-[#c4d800] transition-colors duration-300 relative group">
            LETS CONNECT
            <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-[#c4d800] to-[#a8b800] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
        </nav>

        <div className="flex items-center justify-end gap-2 pr-0 mr-0">
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-[#c4d800]/10 flex-col transition-colors duration-300 group"
            aria-label="Contact Sidebar"
            onClick={() => onOpenRightSidebar?.()}
          >
            <span className="block h-[2px] w-6 bg-[#c4d800] group-hover:bg-[#a8b800] transition-colors duration-300" />
            <span className="block h-[2px] w-6 bg-[#c4d800] group-hover:bg-[#a8b800] my-1.5 transition-colors duration-300" />
            <span className="block h-[2px] w-6 bg-[#c4d800] group-hover:bg-[#a8b800] transition-colors duration-300" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar


