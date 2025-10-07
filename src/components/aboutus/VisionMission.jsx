import React from 'react'
import mission from '../../assets/AboutUs/mission.webp'

function VisionMission() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2">
      <img src={mission} alt="" className="hidden md:block" />
        <div className="bg-[#001d4c] text-white p-8 md:p-16">
          <div className="flex flex-col md:flex-row gap-8 text-center md:text-left">
            <div className="flex-1 space-y-10 relative">
              <span className="absolute -top-12 left-4 text-white/10 text-7xl md:text-8xl font-extrabold tracking-tight select-none pointer-events-none">Vision</span>
              <h3 className="text-4xl font-bold relative">Our Vision</h3>
              <p className="text-white text-lg leading-8 md:leading-8">
              Our vision is to create innovative solutions that empower businesses and individuals to thrive in a digital world. We believe in leveraging cutting-edge technologies to deliver exceptional value to our clients and contribute to a better society. Through a culture of collaboration, agility, and continuous improvement, we strive to be a trusted partner and a leader in the IT industry. Our ultimate goal is to make technology accessible, secure, and sustainable for everyone, while driving positive change and creating a better future.
              </p>
            </div>
            <div className="flex-1 space-y-10 relative">
              <span className="absolute -top-12 left-4 text-white/10 text-7xl md:text-8xl font-extrabold tracking-tight select-none pointer-events-none">Mission</span>
              <h3 className="text-4xl font-bold relative">Our Mission</h3>
              <p className="text-white text-lg leading-8 md:leading-8">
              ItecExperts Pvt Ltd provide innovative technology solutions to our clients, stay ahead of industry trends, continuously improve our services, be a trusted partner to our clients, and foster a culture of excellence within our company.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisionMission


