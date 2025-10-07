import React, { useEffect, useState } from 'react'
import img from '../../assets/AboutUs/meeting.webp'

function AboutTrusted() {
  const [projectsCount, setProjectsCount] = useState(0)

  useEffect(() => {
    const target = 150
    const durationMs = 1500
    const stepMs = 20
    const increment = Math.ceil(target / (durationMs / stepMs))
    const id = setInterval(() => {
      setProjectsCount((v) => {
        const next = v + increment
        if (next >= target) {
          clearInterval(id)
          return target
        }
        return next
      })
    }, stepMs)
    return () => clearInterval(id)
  }, [])
  return (
    <section className="w-full bg-gray-50  ">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 py-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-8">
          <h3 className="text-3xl tracking-widest text-primary font-bold">WORKS ABOUT</h3>
          <h2 className="text-2xl md:text-5xl font-bold text-text ">Trusted by 150+ <br /> Happy Customers</h2>
          <p className="text-text/80 text-lg">
          At Itec Experts, we take pride in our proven track record of success. With over 150+ happy customers around the globe, we consistently deliver solutions that exceed expectations. Our clients trust us because we go the extra mile to understand their unique needs and tailor our mobile app and web development services accordingly. Their 100% satisfaction speaks to the quality, reliability, and innovation we bring to every project, ensuring long-term partnerships and successful digital transformations
          </p>
          <ul className="space-y-3 gap-3 text-2xl text-text font-semibold">
            <li>100% Client Satisfaction</li>
            <li>World Class Service</li>
          </ul>
          <button type="button" className="px-16 py-6 rounded-md bg-primary text-white font-semibold w-max text-lg">Talk To A Consultant</button>
        </div>

        <div className="relative">
          {/* 150+ card: desktop top-right, mobile bottom-center */}
          <div className="absolute right-1/2 translate-x-1/2 bottom-4 md:bottom-auto md:translate-x-0 md:right-[-4rem] md:-top-16 bg-white rounded-md shadow-lg px-8 md:px-12 py-4 md:py-7 text-center">
            <p className="text-5xl font-extrabold text-primary">{projectsCount}+</p>
            <p className="text-lg text-text/70">Completed Projects</p>
          </div>
          <img src={img} alt="meeting" className="w-full h-full rounded-xl" />
        </div>
      </div>
    </section>
  )
}

export default AboutTrusted


