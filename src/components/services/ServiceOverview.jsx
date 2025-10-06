import React from 'react'

const ServiceOverview = ({ overview, whyChooseUs }) => {
  return (
    <div className='space-y-8'>
      {/* Overview Section */}
      <div>
        <h2 className='text-5xl font-semibold text-gray-800 mb-4 -mt-12 '>Overview</h2>
        <div className='text-gray-600 leading-relaxed space-y-4'>
          {overview.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div>
        <h3 className='text-xl font-semibold text-gray-800 mb-4'>Why Choose Us</h3>
        <ul className='space-y-3'>
          {whyChooseUs.map((item, index) => (
            <li key={index} className='flex items-start space-x-3'>
              <svg className='w-5 h-5 text-primary mt-0.5 flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
              </svg>
              <span className='text-gray-600'>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ServiceOverview
