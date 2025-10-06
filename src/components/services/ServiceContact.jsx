import React, { useState } from 'react'

const ServiceContact = () => {
  const [activeTab, setActiveTab] = useState('address')

  const offices = [
    { name: 'Peshawar Head Office', address: '123 Main Street, Peshawar, Pakistan' },
    { name: 'Lahore Office', address: '456 Business District, Lahore, Pakistan' },
    { name: 'United States Office', address: '8603 Bustleton ave Philadelphia PA 19152' }
  ]

  return (
    <section className='w-full py-16 bg-white'>
      <div className='w-full max-w-[1400px] mx-auto px-4 md:px-8'>
        {/* Section Header */}
        <div className='flex flex-col justify-center items-center text-center space-y-3 mb-16'>
          <h2 className='text-primary text-4xl font-semibold uppercase tracking-wider'>GET IN TOUCH</h2>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Left Side - Contact Form */}
          <div>
            <h3 className='text-5xl font-semibold text-gray-800 mb-4'>Need Help?</h3>
            <p className='text-gray-600 mb-8 text-2xl'>Reach out to the world's most reliable IT services</p>
            
            <form className='space-y-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <label htmlFor='name' className='block text-lg font-medium text-gray-700 mb-2 '>Name</label>
                  <input
                    type='text'
                    id='name'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors'
                    placeholder='Your Name'
                  />
                </div>
                <div>
                  <label htmlFor='email' className='block text-lg font-medium text-gray-700 mb-2'>Email</label>
                  <input
                    type='email'
                    id='email'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors'
                    placeholder='Your Email'
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor='phone' className='block text-lg font-medium text-gray-700 mb-2'>Phone</label>
                <input
                  type='tel'
                  id='phone'
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors'
                  placeholder='Your Phone Number'
                />
              </div>
              
              <div>
                <label htmlFor='service' className='block text-lg font-medium text-gray-700 mb-2'>How can we help you?</label>
                <select
                  id='service'
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors'
                >
                  <option value=''>Select a service</option>
                  <option value='ui-ux'>UI/UX Design</option>
                  <option value='web-dev'>Web Development</option>
                  <option value='mobile-app'>Mobile App Development</option>
                  <option value='ecommerce'>E-commerce Solutions</option>
                  <option value='devops'>DevOps</option>
                  <option value='testing'>Testing & QA</option>
                  <option value='marketing'>Digital Marketing</option>
                  <option value='staff'>Staff Augmentation</option>
                </select>
              </div>
              
              <div>
                <label htmlFor='message' className='block text-lg font-medium text-gray-700 mb-2'>Please describe what you need</label>
                <textarea
                  id='message'
                  rows={4}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors resize-none'
                  placeholder='Tell us about your project...'
                />
              </div>
              
              <button
                type='submit'
                className='w-full bg-primary text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
              >
                Get a free consultation
              </button>
            </form>
          </div>

          {/* Right Side - Contact Information */}
          <div>
            {/* Tabs */}
            <div className='flex items-end space-x-6 mb-6 border-b border-gray-200 '>
              <button
                onClick={() => setActiveTab('address')}
                className={`px-0 py-2 -mb-px text-5xl font-semibold transition-colors border-b-2 ${
                  activeTab === 'address'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-600 hover:text-primary'
                }`}
              >
                Address
              </button>
              <button
                onClick={() => setActiveTab('maps')}
                className={`px-0 py-2 -mb-px text-5xl font-semibold transition-colors border-b-2 ${
                  activeTab === 'maps'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-600 hover:text-primary'
                }`}
              >
                Google Map
              </button>
            </div>

            {activeTab === 'address' ? (
              <>
                {/* Office Locations */}
                <div className='space-y-12 mb-8'>
                  {offices.map((office, index) => (
                    <div key={index} className='flex items-start space-x-3 text-2xl'>
                      <svg className='w-8 h-8 text-primary mt-0.5 flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                      </svg>
                      <div>
                        <h4 className='font-semibold text-gray-800' >{office.name}</h4>
                        <p className='text-gray-600 text-xl'>{office.address}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Email */}
                <div className='mb-6 '>
                  <h4 className='font-semibold text-gray-800 mb-7 text-3xl'>SEND US MAIL</h4>
                  <div className='space-y-6'>
                    <div className='flex items-center space-x-3 text-2xl'>
                      <svg className='w-8 h-8 text-primary flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                      </svg>
                      <a href='mailto:sales@itecexperts.com' className='text-gray-600 hover:text-primary transition-colors'>sales@itecexperts.com</a>
                    </div>
                    <div className='flex items-center space-x-3 text-2xl'>
                      <svg className='w-8 h-8 text-primary flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                      </svg>
                      <a href='mailto:contact@itecexperts.com' className='text-gray-600 hover:text-primary transition-colors'>contact@itecexperts.com</a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <h4 className='font-semibold text-gray-800 mb-3 text-3xl'>CALL US</h4>
                  <div className='space-y-6'>
                    <div className='flex items-center space-x-3 text-2xl'>
                      <svg className='w-8 h-8 text-primary flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                      </svg>
                      <a href='tel:+12673446878' className='text-gray-600 hover:text-primary transition-colors'>+1 267-344-6878</a>
                    </div>
                    <div className='flex items-center space-x-3 text-2xl'>
                      <svg className='w-8 h-8 text-primary flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                      </svg>
                      <a href='tel:+923369321077' className='text-gray-600 hover:text-primary transition-colors'>+92 336 9321077</a>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className='w-full h-[600px] rounded-lg overflow-hidden shadow'>
                <iframe
                  title='Itec Experts Location'
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                  className='w-full h-full'
                  src={`https://www.google.com/maps?q=${encodeURIComponent('123 Main Street, Peshawar, Pakistan')}&output=embed`}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceContact
