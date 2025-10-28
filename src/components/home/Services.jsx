import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Computer from "../../assets/images/Computer.svg"
import Phone from "../../assets/images/Phone.svg"
import web from "../../assets/images/web.svg"
import cart from "../../assets/images/cart.svg"
import Magnifier from "../../assets/images/Magnifier.svg"
import marketing from "../../assets/images/marketing.svg"
import Magnifier from "../../assets/images/Magnifier.svg"
import seoIcon from "../../assets/images/Magnifier.svg"
import test from "../../assets/images/test.svg"
import Devops from "../../assets/images/Devops.svg"

const cards = [
  {
    title: 'UI/UX Designing',
    subtitle: 'User-centered design expertise',
    img: Computer,
    path: '/services/ui-ux-design',
  },
  {
    title: 'Mobile App Development',
    subtitle: 'Building intuitive mobile applications',
    img: Phone,
    path: '/services/mobile-app-development',
  },
  {
    title: 'Web Development',
    subtitle: 'Creating scalable web applications',
    img: web,
    path: '/services/web-development',
  },
  {
    title: 'Ecommerce Solution',
    subtitle: 'Ecommerce Solution for your business',
    img: cart,
    path: '/services/ecommerce-solutions',
  },
  {
    title: 'DevOps',
    subtitle: 'Automate and streamline your development processes',
    img: Devops,
    path: '/services/devops',
  },
  
  {
    title: 'Digital Marketing',
    subtitle: 'Grow your online presence with targeted strategies',
    img: marketing,
    path: '/services/digital-marketing',
  },
  {
    title: 'SEO',
    subtitle: 'Increase rankings and organic traffic sustainably',
    img: seoIcon,
    path: '/services/seo',
  },
  
  {
    title: 'Staff Augmentation',
    subtitle: 'Access skilled professionals when you need them',
    img: Magnifier,
    path: '/services/staff-augmentation',
  },
  {
    title: 'Testing & Quality Assurance',
    subtitle: 'Ensure your product meets high standards',
    img: test,
    path: '/services/testing-qa',
  },

  
]

function Services() {
  return (
    <>
    <section className='w-full py-12 bg-dark-section'>
      <div className='w-full max-w-[1400px] mx-auto px-1 md:px-2 overflow-hidden'>
        <div className='flex flex-col justify-center items-center text-center space-y-2 mb-8'>
          <h1 className='bg-gradient-to-r from-[#c4d800] to-[#a8b800] bg-clip-text text-transparent text-2xl md:text-3xl font-semibold'>SERVICES</h1>
          <h3 className='text-2xl md:text-3xl text-slate-100 font-semibold'>Transform Your Business</h3>
          <div className='w-24 h-1 bg-gradient-to-r from-[#c4d800] to-[#a8b800] rounded-full'></div>
        </div>

        <Slider
          dots={true}
          arrows={false}
          infinite={true}
          speed={500}
          slidesToShow={3}
          slidesToScroll={1}
          responsive={[
            { breakpoint: 1280, settings: { slidesToShow: 3 } },
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
          ]}
        >
          {cards.map((c) => (
            <div key={c.title} className='px-1 md:px-2'>
              <div className='h-full min-h-[400px] md:min-h-[440px] rounded-2xl bg-gradient-card shadow-2xl hover:shadow-[#c4d800]/20 border border-slate-600 flex flex-col items-center text-center p-6 md:p-8 transition-all duration-300 hover:transform hover:-translate-y-2 group backdrop-blur-sm'>
                <div className='w-32 h-32 md:w-40 md:h-40 mb-4 rounded-2xl bg-gradient-to-br from-[#c4d800] to-[#a8b800] p-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-2xl'>
                  <img src={c.img} alt={c.title} className='w-full h-full object-contain' />
                </div>
                <h4 className='text-lg md:text-xl font-semibold text-slate-100 mb-2'>{c.title}</h4>
                <p className='text-sm md:text-base text-slate-300 mb-4 px-3'>{c.subtitle}</p>
                <div className='flex-1' />
                <Link
                  to={c.path || '#'}
                  className='btn-water relative inline-flex items-center justify-center gap-2 w-full max-w-[200px] md:max-w-[240px] px-5 py-2.5 rounded-full font-semibold text-sm md:text-base transition-all duration-300 mt-auto'
                >
                  Discover More
                  <span className='inline-block'>›</span>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
    </>
  )
}

export default Services
