import React from 'react'

const ServiceHero = ({ title, image, imageAlt }) => {
  return (
    <section className='w-full py-16'>
      <div className='w-full max-w-[1400px] mx-auto px-4 md:px-8'>
        {/* Page Title */}
        <div className='flex flex-col justify-center items-center text-center space-y-3 mb-16'>
          <h1 className='text-primary text-3xl md:text-4xl font-semibold'>{title}</h1>
          <div className='w-16 h-1 bg-primary rounded-full'></div>
        </div>

        {/* Main Image */}
        <div className='w-full max-w-4xl mx-auto'>
          <img 
            src={image} 
            alt={imageAlt} 
            className='w-full h-auto rounded-2xl shadow-lg'
          />
        </div>
      </div>
    </section>
  )
}

export default ServiceHero
