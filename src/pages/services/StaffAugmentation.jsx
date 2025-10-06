import heroImage from '../../assets/Services/Staff/heroImg.webp'
import p1 from '../../assets/Services/Staff/p1.webp'
import p2 from '../../assets/Services/Staff/p2.webp'
import React from 'react'
import ServiceHero from '../../components/services/ServiceHero'
import ServiceOverview from '../../components/services/ServiceOverview'
import ServiceSidebar from '../../components/services/ServiceSidebar'
import ServiceShowcase from '../../components/services/ServiceShowcase'
import ServiceContact from '../../components/services/ServiceContact'
import Process from '../../components/home/Process'
import Testimonials from '../../components/home/Testimonials'

const StaffAugmentation = () => {
  const serviceData = {
    title: 'STAFF AUGMENTATION',
    heroImage: heroImage,
    heroImageAlt: 'Staff Augmentation Services',
    overview: [
      'Our staff augmentation services provide you with skilled professionals to complement your existing team. We offer flexible engagement models that allow you to scale your development capacity based on project requirements.',
      'We carefully vet and match developers, designers, and other IT professionals to your specific needs and company culture. Our augmented staff seamlessly integrate with your team and work according to your processes and standards.',
      'Whether you need short-term support for a specific project or long-term team expansion, we provide the right talent at the right time.'
    ],
    whyChooseUs: [
      'Pre-vetted and skilled professionals',
      'Flexible engagement models',
      'Seamless team integration',
      'Cost-effective scaling solutions',
      'Ongoing support and management'
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
                <button className='btn-fill-left-right w-full bg-primary text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2'>
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
      <ServiceShowcase images={serviceData.showcaseImages} title={serviceData.title} />
      <Process />
      <Testimonials />
      <ServiceContact />
    </div>
  )
}

export default StaffAugmentation
