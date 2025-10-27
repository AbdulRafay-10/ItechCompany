import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Sidebar({ isOpen, onClose }) {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const servicesRef = useRef(null)

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

  // Auto-close services dropdown when sidebar closes
  useEffect(() => {
    if (!isOpen) {
      setIsServicesOpen(false)
    }
  }, [isOpen])

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
    <div className={`${isOpen ? 'block' : 'hidden'} fixed inset-0 bg-black/25 z-[70]`} onClick={onClose}>
      <aside className="absolute right-0 top-0 bottom-0 w-full sm:w-[500px] bg-white p-6 sm:p-12 shadow-2xl overflow-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
          <h3 className="font-bold text-3xl sm:text-4xl text-text mb-2">Contact Info</h3>
          <button className="text-2xl leading-none" aria-label="Close" onClick={onClose}>×</button>
        </div>
        
        {/* Navigation - Only visible on mobile (below sm breakpoint) */}
        <div className="block sm:hidden border-b border-slate-200 py-3 mb-6">
          <h4 className="text-3xl font-bold opacity-90 mb-6">Navigation</h4>
          <div className="space-y-1">
            <Link 
              to="/case-studies" 
              onClick={onClose}
              className="block w-full text-left py-3 hover:text-primary text-xl font-semibold"
            >
              Case Studies
            </Link>
            
            <div className="relative" ref={servicesRef}>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setIsServicesOpen((v) => !v)
                }}
                className="flex w-full items-center justify-between py-3 text-left hover:text-primary text-xl font-semibold"
                type="button"
              >
                <span>Services</span>
                <span className={`inline-block border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-6 border-t-current transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <div className="relative mt-2">
                  <div className="bg-white rounded-lg shadow-xl p-2 max-h-[60vh] overflow-auto border border-slate-100">
                    {serviceItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block w-full text-left text-xl text-text font-semibold rounded-lg px-3 py-2 hover:bg-slate-100 hover:text-primary"
                        onClick={() => {
                          setIsServicesOpen(false)
                          onClose()
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <Link 
              to="/about" 
              onClick={onClose}
              className="block w-full text-left py-3 hover:text-primary text-xl font-semibold"
            >
              About Us
            </Link>
            
            <Link 
              to="/lets-connect" 
              onClick={onClose}
              className="block w-full text-left py-3 hover:text-primary text-xl font-semibold"
            >
              Let's Connect
            </Link>
          </div>
        </div>

        <div className="border-b border-slate-200 py-3 mb-6">
          <div className="flex items-center gap-4 sm:gap-8 py-6">
            <span className="w-6 h-6 sm:w-8 sm:h-8 grid place-items-center text-primary flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 sm:w-12 sm:h-12"><path d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h2.04c.995 0 1.86.67 2.108 1.636l.519 2.078a2.25 2.25 0 01-.563 2.157l-1.21 1.21a16.5 16.5 0 006.364 6.364l1.21-1.21a2.25 2.25 0 012.157-.563l2.078.519A2.25 2.25 0 0119.5 19.71v2.04c0 1.243-1.007 2.25-2.25 2.25H16.5C9.044 24 3 17.956 3 10.5V9c0-1.243 1.007-2.25 2.25-2.25H6.75z"/></svg>
            </span>
            <div className="min-w-0">
              <div className="text-[11px] uppercase opacity-70">Phone</div>
              <div className="font-semibold text-xl sm:text-2xl break-words">+1 267-344-8878</div>
            </div>
          </div>
          <div className="flex items-center gap-4 sm:gap-8 py-6">
            <span className="w-6 h-6 sm:w-8 sm:h-8 grid place-items-center text-primary flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 sm:w-12 sm:h-12"><path d="M1.5 6.75A2.25 2.25 0 013.75 4.5h16.5A2.25 2.25 0 0122.5 6.75v10.5A2.25 2.25 0 0120.25 19.5H3.75A2.25 2.25 0 011.5 17.25V6.75zm3.03.72a.75.75 0 00-1.06 1.06l7.5 7.5a.75.75 0 001.06 0l7.5-7.5a.75.75 0 00-1.06-1.06L12 14.19 4.53 7.47z"/></svg>
            </span>
            <div className="min-w-0">
              <div className="text-[11px] uppercase opacity-70">Email</div>
              <div className="font-semibold text-xl sm:text-2xl break-words">info@itecexperts.com</div>
            </div>
          </div>
          <div className="flex items-center gap-4 sm:gap-8 py-6">
            <span className="w-6 h-6 sm:w-8 sm:h-8 grid place-items-center text-primary flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 sm:w-12 sm:h-12"><path fill-rule="evenodd" d="M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5zM12.75 6a.75.75 0 00-1.5 0v6a.75.75 0 00.33.62l3.75 2.5a.75.75 0 10.84-1.24l-3.42-2.28V6z" clip-rule="evenodd"/></svg>
            </span>
            <div className="min-w-0">
              <div className="text-[11px] uppercase opacity-70">Office Hours</div>
              <div className="font-semibold text-xl sm:text-2xl break-words">9:00 AM - 6:00 PM</div>
            </div>
          </div>
        </div>

        <div className="border-b border-slate-200 py-3 mb-6">
          <h4 className="text-3xl sm:text-4xl font-bold opacity-90 mb-6">Connect With Us</h4>
          <div className="flex gap-3 sm:gap-4">
            <button className="w-12 h-12 sm:w-14 sm:h-14 rounded text-primary grid place-items-center" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.943v5.663H9.35V9h3.414v1.561h.048c.476-.9 1.636-1.852 3.366-1.852 3.6 0 4.266 2.37 4.266 5.455v6.288zM5.337 7.433a2.063 2.063 0 110-4.126 2.063 2.063 0 010 4.126zM7.114 20.452H3.558V9h3.556v11.452z"/></svg>
            </button>
            <button className="w-12 h-12 sm:w-14 sm:h-14 rounded text-primary grid place-items-center" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692V11.06h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.765v2.316h3.59l-.467 3.646h-3.123V24h6.128C23.407 24 24 23.407 24 22.676V1.325C24 .593 23.407 0 22.675 0z"/></svg>
            </button>
            <button className="w-12 h-12 sm:w-14 sm:h-14 rounded text-primary grid place-items-center" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.263 2.242 1.325 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.35 2.633-1.325 3.608-.975.975-2.242 1.263-3.608 1.325-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.325-.975-.975-1.263-2.242-1.325-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.35-2.633 1.325-3.608C4.533 2.583 5.8 2.295 7.166 2.233 8.432 2.175 8.812 2.163 12 2.163zm0 1.837c-3.156 0-3.523.012-4.766.069-1.023.047-1.58.216-1.948.384-.491.191-.84.418-1.208.787-.369.368-.596.717-.787 1.208-.168.368-.337.925-.384 1.948-.057 1.243-.069 1.61-.069 4.766s.012 3.523.069 4.766c.047 1.023.216 1.58.384 1.948.191.491.418.84.787 1.208.368.369.717.596 1.208.787.368.168.925.337 1.948.384 1.243.057 1.61.069 4.766.069s3.523-.012 4.766-.069c1.023-.047 1.58-.216 1.948-.384.491-.191.84-.418 1.208-.787.369-.368.596-.717.787-1.208.168-.368.337-.925.384-1.948.057-1.243.069-1.61.069-4.766s-.012-3.523-.069-4.766c-.047-1.023-.216-1.58-.384-1.948-.191-.491-.418-.84-.787-1.208-.368-.369-.717-.596-1.208-.787-.368-.168-.925-.337-1.948-.384-1.243-.057-1.61-.069-4.766-.069zm0 2.9a5.1 5.1 0 110 10.2 5.1 5.1 0 010-10.2zm0 1.8a3.3 3.3 0 100 6.6 3.3 3.3 0 000-6.6zm4.95-2.85a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>
            </button>

          </div>
        </div>
      </aside>
    </div>
  )
}

export default Sidebar


