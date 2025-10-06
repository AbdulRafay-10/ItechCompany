import React from 'react'

const ServiceShowcase = ({ images, title }) => {
  return (
    <section className='w-full py-16'>
      <div className='w-full max-w-[1400px] mx-auto px-4 md:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* Left Image Set */}
          <div className='space-y-4'>
            <div className='grid grid-cols-2 gap-4'>
              {images.darkTheme?.map((image, index) => (
                <div key={index} className='bg-white rounded-lg p-4 '>
                  <img 
                    src={image} 
                    alt={`${title} dark theme ${index + 1}`}
                    className='w-full h-auto rounded-lg'
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Set */}
          <div className='space-y-4'>
            <div className='grid grid-cols-2 gap-4'>
              {images.lightTheme?.map((image, index) => (
                <div key={index} className='bg-white rounded-lg p-4 shadow-sm'>
                  <img 
                    src={image} 
                    alt={`${title} light theme ${index + 1}`}
                    className='w-full h-auto rounded-lg'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceShowcase
