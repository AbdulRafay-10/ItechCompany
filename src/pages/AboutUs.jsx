import React from 'react'
import AboutHero from '../components/aboutus/AboutHero'
import AboutTrusted from '../components/aboutus/AboutTrusted'
import VisionMission from '../components/aboutus/VisionMission'
import LeadershipTeam from '../components/aboutus/LeadershipTeam'

function AboutUs() {
  return (
    <main className="w-full">
      <section className="w-full pt-20 md:pt-12">
      <div className='flex flex-col justify-center items-center text-center space-y-3 mb-2'>
          <h1 className='text-primary text-3xl md:text-4xl font-semibold'>ABOUT US</h1>
          <div className='w-16 h-1 bg-primary rounded-full'></div>
        </div>
      </section>
      <AboutHero />
      <AboutTrusted />
      <VisionMission />
      <LeadershipTeam />
    </main>
  )
}

export default AboutUs


