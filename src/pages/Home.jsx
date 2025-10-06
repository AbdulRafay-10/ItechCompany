import React from 'react'
import Header from "../components/home/Header"
import Services from '../components/home/Services'
import Process from '../components/home/Process'
import CaseStudies from '../components/home/CaseStudies'
import Technologies from '../components/home/Technologies'
import Testimonials from '../components/home/Testimonials'
import Schedule from '../components/home/Schedule'


function Home() {
  return (
    <div>
        <Header/>
        <Services/>
        <Process/>
        <CaseStudies/>
        <Technologies/>
        <Testimonials/>
        <Schedule/>
    </div>
  )
}

export default Home
