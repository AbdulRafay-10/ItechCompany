import React from 'react'
import ServiceContact from '../components/services/ServiceContact'
import Testimonials from '../components/home/Testimonials'

function LetsConnect() {
  return (
    <div>
      <ServiceContact />
      <div className='mt-16 mb-16'>
        <Testimonials />
      </div>
      
    </div>
  )
}

export default LetsConnect
