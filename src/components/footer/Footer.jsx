import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.webp'
function Footer() {
  return (
    <footer className="bg-dark-section text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Left Column - Company Branding & Description */}
          <div className="space-y-3">
            {/* Logo */}
            <div className="flex items-center space-x-2 mr-10">
              <img src={logo} alt="" className='brightness-0 invert' />
            </div>
            
            {/* Tagline */}
            <p className="text-sm text-gray-300 ">Inspiring Business Through Technology</p>
            
            {/* Description */}
            <p className="text-sm text-gray-300 leading-relaxed">
              We are Software Development<br />
              Company Provides Brand-Centric<br />
              services for Small-Medium Businesses,<br />
              Startups Entrepreneurs, and<br />
              Organizations.
            </p>
          </div>

          {/* Second Column - Company Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-1">
              <li><Link to="/" className="text-sm text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/case-studies" className="text-sm text-gray-300 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/lets-connect" className="text-sm text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Third Column - Solutions */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-white">Solutions</h3>
            <ul className="space-y-1">
              <li><Link to="/services/ui-ux-design" className="text-sm text-gray-300 hover:text-white transition-colors">UI/UX Designing</Link></li>
              <li><Link to="/services/mobile-app-development" className="text-sm text-gray-300 hover:text-white transition-colors">Mobile App Development</Link></li>
              <li><Link to="/services/web-development" className="text-sm text-gray-300 hover:text-white transition-colors">Web Development</Link></li>
              <li><Link to="/services/ecommerce-solutions" className="text-sm text-gray-300 hover:text-white transition-colors">E-commerce Solutions</Link></li>
              <li><Link to="/services/devops" className="text-sm text-gray-300 hover:text-white transition-colors">DevOps</Link></li>
              <li><Link to="/services/testing-qa" className="text-sm text-gray-300 hover:text-white transition-colors">Testing & Quality Assurance</Link></li>
              <li><Link to="/services/digital-marketing" className="text-sm text-gray-300 hover:text-white transition-colors">Digital Marketing</Link></li>
              <li><Link to="/services/staff-augmentation" className="text-sm text-gray-300 hover:text-white transition-colors">Staff Augmentation</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            
            {/* Address */}
            <div className="flex items-start space-x-3">
              <svg className="w-4 h-4 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm text-gray-300">8603 Bustleton ave Philadelphia PA 19152</span>
            </div>

            {/* Emails */}
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:sales@itecexperts.com" className="text-sm text-gray-300 hover:text-white transition-colors">sales@itecexperts.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contact@itecexperts.com" className="text-sm text-gray-300 hover:text-white transition-colors">contact@itecexperts.com</a>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="space-y-1">
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+12673446878" className="text-sm text-gray-300 hover:text-white transition-colors">+1 267-344-6878</a>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+923369321077" className="text-sm text-gray-300 hover:text-white transition-colors">+92 336 9321077</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright & Secondary Navigation */}
      <div className="bg-[#131c2f] border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-gray-300">
              ItecExperts Pvt Ltd © Copyright {new Date().getFullYear()}
            </div>
            
            {/* Secondary Navigation */}
            <div className="flex space-x-4">
              <Link to="/about" className="text-sm text-gray-300 hover:text-white transition-colors">About</Link>
              <Link to="/lets-connect" className="text-sm text-gray-300 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer