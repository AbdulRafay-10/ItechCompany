import React from 'react'
import ServiceHero from '../../components/services/ServiceHero'
import ServiceOverview from '../../components/services/ServiceOverview'
import ServiceSidebar from '../../components/services/ServiceSidebar'
import ServiceShowcase from '../../components/services/ServiceShowcase'
import ServiceContact from '../../components/services/ServiceContact'
import Process from '../../components/home/Process'
import Testimonials from '../../components/home/Testimonials'
import heroImage from '../../assets/Services/UI-UX/heroImg.webp'
import p1 from '../../assets/Services/UI-UX/p1.webp'
import p2 from '../../assets/Services/UI-UX/p2.webp'

const UIUXDesign = () => {
  // Service-specific data
  const serviceData = {
    title: 'UI/UX DESIGN',
    heroImage: heroImage, // Replace with actual image
    heroImageAlt: 'UI/UX Design Process',
    overview: [
      'At iTec Experts, we specialize in creating exceptional user experiences through innovative UI/UX design. Our team combines creativity with technical expertise to deliver designs that not only look stunning but also provide seamless user interactions.',
      'We understand that great design goes beyond aesthetics. Our approach focuses on understanding user behavior, business goals, and technical constraints to create solutions that drive engagement and conversion.',
      'From wireframing and prototyping to final implementation, we ensure every design decision is backed by user research and industry best practices.'
    ],
    whyChooseUs: [
      'Expertise in latest design trends and technologies',
      'User-centered approach with comprehensive research',
      'Collaborative and iterative design process',
      'Scalable design solutions for all platforms',
      'Fast turnaround times without compromising quality'
    ],
    showcaseImages: {
      darkTheme: [p1, p2],
    }
  }

  return (
    <div className='w-full'>
      {/* Hero Section with Sidebar */}
      <section className='w-full py-16'>
        <div className='w-full max-w-[1400px] mx-auto px-4 md:px-8'>
          {/* Centered Title */}
          <div className='flex flex-col justify-center items-center text-center space-y-3 mb-16'>
            <h1 className='text-primary text-3xl md:text-4xl font-semibold'>{serviceData.title}</h1>
            <div className='w-16 h-1 bg-primary rounded-full'></div>
          </div>
          
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
            {/* Left side - Image */}
            <div className='lg:col-span-2'>
              <div className='w-full max-w-4xl mx-auto'>
                <img 
                  src={serviceData.heroImage} 
                  alt={serviceData.heroImageAlt} 
                  className='w-full h-auto rounded-2xl shadow-lg'
                />
              </div>
            </div>
            
            {/* Right side - Sidebar */}
            <div className='lg:col-span-1'>
              <ServiceSidebar />
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview Section */}
      <section className='w-full py-0'>
        <div className='w-full max-w-[1400px] mx-auto px-4 md:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
            {/* Left side - Service Overview (2/3 width) */}
            <div className='lg:col-span-2'>
              <ServiceOverview 
                overview={serviceData.overview}
                whyChooseUs={serviceData.whyChooseUs}
              />
            </div>
            
            {/* Right side - Company Brochure (1/3 width, same as sidebar) */}
            <div className='lg:col-span-1 -mt-9'>
              <div className='bg-gray-50 rounded-lg p-6 h-fit'>
                <h4 className='text-3xl border-l-4 border-primary pl-4 font-semibold text-gray-800 mb-3'>Explore Our Company Brochure</h4>
                <p className='text-gray-600 text-xl mb-4'>
                Discover more about our services, expertise, and what makes us stand out by visiting our comprehensive company brochure. It's your guide to learning how we can help you achieve your goals with tailored solutions and expert support. Click the link below to explore!.
                </p>
                <button className='btn-fill-left-right w-full bg-primary text-primary py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2'>
                  <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
                  </svg>
                  <span>Download Service</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <ServiceShowcase 
        images={serviceData.showcaseImages}
        title={serviceData.title}
      />

      {/* Process Section - Imported from Home */}
      <Process />

      {/* Testimonials Section - Imported from Home */}
      <Testimonials />

      {/* Contact Section */}
      <ServiceContact />
    </div>
  )
}

export default UIUXDesign
