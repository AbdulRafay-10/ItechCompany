import React from 'react'
import imgA from '../../assets/AboutUs/header1.webp'
import imgC from '../../assets/AboutUs/header2.webp'
import iconHeading from '../../assets/images/Computer.svg'
import logo from '../../assets/AboutUs/small-1.webp'
import { PiCertificateLight } from "react-icons/pi";

function AboutHero() {
  return (
    <section className="w-full ">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 py-10 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        <div className="relative flex items-center justify-center md:justify-start min-h-[280px] md:min-h-[480px]">
          {/* Mobile: single image */}
          <div className="w-full max-w-[560px] md:hidden">
            <img src={imgA} alt="about-hero" className="w-full rounded-lg shadow-2xl" />
          </div>

          {/* Desktop/Tablet: layered composition */}
          <div className="hidden md:block relative w-full max-w-[520px] overflow-visible -ml-14 -mt-72">
            <img src={imgA} alt="team-1" className="absolute left-0 top-6 w-[100%] rounded-lg shadow-2xl" />
            <img src={imgC} alt="team-3" className="absolute left-[28%] top-[84%] w-[100%] rounded-lg shadow-2xl" />
            <div className="absolute left-[78%] top-[54%] w-[65%] h-[300px] rounded-lg shadow-2xl bg-white p-6 flex items-center justify-center text-center">
              <div>
                <p className="text-3xl font-semibold text-text mb-1">7 Years Of</p>
                <p className="text-4xl font-extrabold text-primary leading-none">Experience</p>
              </div>
            </div>
            <div className="pt-[85%]" />
          </div>
        </div>

        <div className="space-y-6 text-center md:text-left md:pl-6 lg:pl-10">
          <h2 className="text-3xl md:text-5xl font-semibold text-black">We Help Companies Scale Business</h2>
          <p className="text-black  md:text-lg max-w-[640px] mx-auto md:mx-0">
            We are a software development company providing end‑to‑end, compliant services for SMBs,
            startups and organizations. Our certified teams build scalable web, mobile and cloud
            solutions that accelerate your growth while ensuring quality and security.
          </p>
          {/* Compliant Organization block */}
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3 text-center sm:text-left">
              <div className='text-primary text-7xl'>
                <PiCertificateLight />
              </div>
            
              <div>
                <p className="text-2xl font-semibold text-text">Compliant Organization</p>
                <p className="text-black  md:text-lg max-w-[640px] mx-auto md:mx-0 ">
                  We are a registered firm under a legal entity with the Pakistan Software Export Board (PSEB),
                  the Securities & Exchange Commission of Pakistan (SECP), the Federal Board of Revenue (FBR),
                  and the Pakistan Software Houses Association (P@SHA).
                </p>
              </div>
            </div>
            <div className="border-[2px] border-primary rounded-md p-4 md:w-[420px] md:ml-auto md:mt-8 lg:w-[520px] lg:mt-12 mx-auto">
              <div className="flex items-center justify-center">
                <img src={logo} alt="compliant-logos" className="max-w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero


