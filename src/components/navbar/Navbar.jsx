import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Dropdown from '../dropdown/Dropdown'
import logo from '../../assets/images/logo.webp'

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
    { name: 'Staff Augmentation', path: '/services/staff-augmentation' },
  ]

  return (
    <header className="fixed left-0 right-0 z-50 bg-white shadow-sm">
      <div className="w-full px-0 md:px-20 py-6 md:py-10 grid grid-cols-[auto_1fr_auto] items-center relative">
        <div className="flex items-center gap-2 pl-0 ml-0">
         <Link to="/" className="md:static absolute left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0"><img src={logo} alt="logo" className="h-12 md:h-16 w-auto" /></Link>
        </div>

        <nav className="hidden md:flex flex-1 items-center justify-center gap-7">
          <Link to="/case-studies" className="font-semibold text-xl tracking-wide text-text hover:text-primary">CASE STUDIES</Link>

          <div
            className="relative"
            ref={servicesRef}
          >
            <button
              className="inline-flex items-center gap-2 font-semibold text-xl tracking-wide text-text hover:text-primary"
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setIsServicesOpen((v) => !v)
              }}
            >
              SERVICES
              <span className={`inline-block border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-6 border-t-current ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>

            <Dropdown
              isOpen={isServicesOpen}
              items={serviceItems}
              onItemClick={() => setIsServicesOpen(false)}
            />
          </div>

          <Link to="/about" className="font-semibold text-xl tracking-wide text-text hover:text-primary">ABOUT US</Link>
          <Link to="/lets-connect" className="font-semibold text-xl tracking-wide text-text hover:text-primary">LETS CONNECT</Link>
        </nav>

        <div className="flex items-center justify-end gap-2 pr-0 mr-0">
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-black/5 flex-col"
            aria-label="Contact Sidebar"
            onClick={() => onOpenRightSidebar?.()}
          >
            <span className="block h-[2px] w-6 bg-primary" />
            <span className="block h-[2px] w-6 bg-primary my-1.5" />
            <span className="block h-[2px] w-6 bg-primary" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar


