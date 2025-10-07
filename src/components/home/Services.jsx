import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Computer from "../../assets/images/Computer.svg"
import Phone from "../../assets/images/Phone.svg"
import web from "../../assets/images/web.svg"
import cart from "../../assets/images/cart.svg"
import Magnifier from "../../assets/images/Magnifier.svg"
import marketing from "../../assets/images/marketing.svg"
import test from "../../assets/images/test.svg"
import Devops from "../../assets/images/Devops.svg"

const cards = [
  {
    title: 'UI/UX Designing',
    subtitle: 'User-centered design expertise',
    img: Computer,
  },
  {
    title: 'Mobile App Development',
    subtitle: 'Building intuitive mobile applications',
    img: Phone,
  },
  {
    title: 'Web Development',
    subtitle: 'Creating scalable web applications',
    img: web,
  },
  {
    title: 'Ecommerce Solution',
    subtitle: 'Ecommerce Solution for your business',
    img: cart,
  },
  {
    title: 'DevOps',
    subtitle: 'Automate and streamline your development processes',
    img: Devops,
  },
  
  {
    title: 'Digital Marketing',
    subtitle: 'Grow your online presence with targeted strategies',
    img: marketing,
  },
  
  {
    title: 'Staff Augmentation',
    subtitle: 'Access skilled professionals when you need them',
    img: Magnifier,
  },
  {
    title: 'Testing & Quality Assurance',
    subtitle: 'Ensure your product meets high standards',
    img: test,
  },

  
]

function Services() {
  return (
    <>
    <section className='w-full py-16'>
      <div className='w-full max-w-[1400px] mx-auto px-1 md:px-2 overflow-hidden'>
        <div className='flex flex-col justify-center items-center text-center space-y-3 mb-10'>
          <h1 className='text-primary text-3xl md:text-4xl font-semibold'>SERVICES</h1>
          <h3 className='text-3xl md:text-5xl text-text font-semibold'>Transform Your Business</h3>
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
              <div className='h-full min-h-[520px] md:min-h-[560px] rounded-2xl bg-white shadow-md hover:shadow-lg border border-slate-200 flex flex-col items-center text-center p-8 md:p-10 transition-shadow'>
                <img src={c.img} alt={c.title} className='w-48 h-48 md:w-56 md:h-56 object-contain mb-6' />
                <h4 className='text-2xl md:text-3xl font-semibold text-text mb-2'>{c.title}</h4>
                <p className='text-base md:text-lg text-slate-600 mb-6 px-3'>{c.subtitle}</p>
                <div className='flex-1' />
                <button
                  type='button'
                  className='btn-water relative inline-flex items-center justify-center gap-2 w-full max-w-[260px] md:max-w-[300px] px-7 py-3.5 rounded-full border border-primary text-primary font-semibold md:text-lg transition-colors duration-300 mt-auto'
                >
                  Discover More
                  <span className='inline-block'>›</span>
                </button>
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
