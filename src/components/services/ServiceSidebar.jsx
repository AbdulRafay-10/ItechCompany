import React from 'react'
import { Link } from 'react-router-dom'

const ServiceSidebar = () => {
  const services = [
    { name: 'UI/UX Designing', path: '/services/ui-ux-design' },
    { name: 'Mobile App Development', path: '/services/mobile-app-development' },
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'E-commerce Solutions', path: '/services/ecommerce-solutions' },
    { name: 'DevOps', path: '/services/devops' },
    { name: 'Testing & Quality Assurance', path: '/services/testing-qa' },
    { name: 'Digital Marketing', path: '/services/digital-marketing' },
    { name: 'Staff Augmentation', path: '/services/staff-augmentation', isSpecial: true }
  ]

  return (
    <div className='space-y-8'>
      {/* Services Navigation */}
      <div>
        <ul className='space-y-2 border-[1px] border-gray-200 p-5'>
          {services.map((service, index) => (
            <li key={index}>
              <Link 
                to={service.path}
                className={`btn-fill-left-right text-lg font-bold block py-4.5 border-t-0 border-r-0 border-l-0 px-3 rounded-md border border-gray-200 hover:border-primary transition-all duration-300 ${
                  service.isSpecial 
                    ? 'border-b-0' : ''
                }`}
              >
                {service.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default ServiceSidebar
