import React from 'react'
import { Link } from 'react-router-dom'
import f3 from '../../assets/images/f3.webp'

function Header() {
  return (
    <section className="w-full">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 py-10 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center justify-center">
        <div className="space-y-8 text-center md:text-left">
          <div className="text-6xl md:text-7xl font-extrabold">
            <h1 className="text-text leading-tight">
              Ideate,
              <br />
              <span className="text-primary">Innovate &amp; Build</span>
            </h1>
          </div>
          <p className="text-lg md:text-2xl text-text leading-relaxed">
            In today's digital age, having a robust online presence is essential for small
            and medium-sized businesses to thrive. A tailored eCommerce website and
            mobile app can significantly enhance your brand's visibility, streamline
            operations, and boost sales
          </p>
          <div className="flex flex-wrap gap-5 pt-4 justify-center md:justify-start">
            <Link to="/case-studies" className="px-16 py-5 rounded-md bg-primary text-white font-bold text-xl shadow">
              Why Us ?
            </Link>
            <Link to="/lets-connect" className="btn-water px-16 py-5 rounded-md border border-primary text-primary font-bold text-xl">
              Lets Discuss
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center md:justify-end">
          {/* Replace src with your actual image file once added */}
          <img src={f3} alt="Header visual" className="w-full max-w-[680px] md:max-w-[760px] h-auto object-contain" />
        </div>
      </div>
    </section>
  )
}

export default Header


