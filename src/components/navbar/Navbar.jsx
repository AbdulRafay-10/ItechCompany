import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Dropdown from '../dropdown/Dropdown'
import logo from '../../assets/images/logo.webp'

function Navbar({ onOpenRightSidebar, onOpenMobileMenu }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const servicesRef = useRef(null)
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === 'undefined') return true
    return window.matchMedia('(min-width: 901px)').matches
  })

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
      setIsDesktop(desktop)
    }
    window.addEventListener('resize', onResize)
    onResize()
    return () => window.removeEventListener('resize', onResize)
  }, [])

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="w-full px-0 md:px-20 py-10 grid grid-cols-[auto_1fr_auto] items-center">
        <div className="flex items-center gap-2 pl-0 ml-0">
          <div className="md:hidden mr-2">
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-black/5 flex-col"
              aria-label="Open Menu"
              onClick={() => {
                setIsMobileMenuOpen(true)
                onOpenMobileMenu?.()
              }}
            >
              <span className="block h-[2px] w-6 bg-primary" />
              <span className="block h-[2px] w-6 bg-primary my-1.5" />
              <span className="block h-[2px] w-6 bg-primary" />
            </button>
          </div>
         <Link to="/"><img src={logo} alt="logo" className="h-16 w-auto" /></Link>
        </div>

        <nav className="hidden md:flex flex-1 items-center justify-center gap-7">
          <Link to="/case-studies" className="font-semibold text-xl tracking-wide text-text hover:text-primary">CASE STUDIES</Link>

          <div
            className="relative"
            ref={servicesRef}
            onMouseEnter={() => isDesktop && setIsServicesOpen(true)}
            onMouseLeave={() => isDesktop && setIsServicesOpen(false)}
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

      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed right-0 top-0 bottom-0 w-72 bg-white z-50 shadow-2xl p-4 flex flex-col gap-3">
            <Link to="/case-studies" className="text-left font-semibold tracking-wide text-text hover:text-primary">CASE STUDIES</Link>
            <div className="relative">
              <button
                className="inline-flex items-center gap-2 font-semibold tracking-wide text-text hover:text-primary"
                onClick={() => setIsServicesOpen((v) => !v)}
              >
                SERVICES
              </button>
              <Dropdown isOpen={isServicesOpen} items={serviceItems} onItemClick={() => setIsServicesOpen(false)} />
            </div>
            <Link to="/about" className="text-left font-semibold tracking-wide text-text hover:text-primary">ABOUT US</Link>
            <Link to="/lets-connect" className="text-left font-semibold tracking-wide text-text hover:text-primary">LETS CONNECT</Link>
          </div>
        </>
      )}
    </header>
  )
}

export default Navbar


