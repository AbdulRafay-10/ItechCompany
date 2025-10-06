import React, { useEffect, useRef, useState } from 'react'
import { Splide } from '@splidejs/splide'
import '@splidejs/splide/css'
import project1 from "../../assets/projects/project (1).png"
import project2 from "../../assets/projects/project (2).png"
import project3 from "../../assets/projects/project (3).png"
import project4 from "../../assets/projects/project (4).png"
import project5 from "../../assets/projects/project (5).png"
import project6 from "../../assets/projects/project (6).png"
import project7 from "../../assets/projects/project (7).png"
import { GiAchievement } from "react-icons/gi";
import { GrUserExpert, GrMultimedia } from "react-icons/gr";
import { GoProjectSymlink } from "react-icons/go";

const projects = [
  { id: 1, category: "Web Development", image: project1 },
  { id: 2, category: "Full Stack Development", image: project2 },
  { id: 3, category: "Mobile Development", image: project3 },
  { id: 4, category: "SaaS Application", image: project4 },
  { id: 5, category: "Web Application", image: project5 },
  { id: 6, category: "Web Development", image: project6 },
  { id: 7, category: "EdTech Solution", image: project7 }
]

const stats = [
  { number: 150, label: "Happy Clients", icon: <GiAchievement /> },
  { number: 250, label: "Finished Project", icon: <GoProjectSymlink /> },
  { number: 100, label: "Skilled Experts", icon: <GrUserExpert /> },
  { number: 1200, label: "Media Posts", icon: <GrMultimedia /> }
]

function CaseStudies() {
  const splideRef = useRef(null)
  const [visible, setVisible] = useState(false)

  // Ref for stats section
  const statsRef = useRef(null)

  // Trigger when stats section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (statsRef.current) {
      observer.observe(statsRef.current)
    }
  }, [])

  // Splide Init
  useEffect(() => {
    const timer = setTimeout(() => {
      if (splideRef.current) {
        try {
          const splide = new Splide(splideRef.current, {
            type: 'loop',
            perPage: 3,
            perMove: 1,
            gap: '1.5rem',
            pagination: true,
            arrows: true,
            autoplay: false,
            breakpoints: {
              768: { perPage: 2 },
              640: { perPage: 1 }
            },
          })
          splide.mount()
          return () => splide.destroy()
        } catch (error) {
          console.error('Splide initialization failed:', error)
        }
      }
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  // Function for animating count
  const useCountUp = (target, start = 0, duration = 2000) => {
    const [count, setCount] = useState(start)

    useEffect(() => {
      if (!visible) return

      let startTime
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)
        setCount(Math.floor(progress * target))
        if (progress < 1) requestAnimationFrame(animate)
      }

      requestAnimationFrame(animate)
    }, [visible, target, duration])

    return count
  }

  return (
    <section className='w-full py-16'>
      {/* Header */}
      <div className='w-full max-w-[1400px] mx-auto px-4 md:px-8'>
        <div className='flex flex-col justify-center items-center text-center space-y-3 mb-16'>
          <h1 className='text-primary text-3xl md:text-4xl font-semibold'>CASE STUDIES</h1>
          <h3 className='text-3xl md:text-5xl text-text font-semibold'>Our Success Stories</h3>
          <p className='text-lg text-slate-600 max-w-2xl'>
            Explore our portfolio of successful projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>
      </div>

      {/* Splide Slider */}
      <div className='mb-20 '>
        <div className="splide" ref={splideRef}>
          <div className="splide__track">
            <ul className="splide__list">
              {projects.map((project) => (
                <li key={project.id} className="splide__slide">
                  <div className='relative overflow-hidden group rounded-xl'>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className='w-full h-64 md:h-80 lg:h-96 object-cover transition-transform duration-300 group-hover:scale-105'
                      style={{ objectPosition: 'center 20%' }}
                    />
                    <div className='absolute inset-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center'>
                      <div className='text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
                        <p className='text-sm'>{project.category}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div ref={statsRef} className='w-full bg-gray-50 py-16'>
        <div className='w-full max-w-[1400px] mx-auto px-4 md:px-8'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {stats.map((stat, index) => {
              const count = useCountUp(stat.number, 0, 2000)
              return (
                <div key={index} className='flex flex-col items-center text-center'>
                  <div className='flex items-center gap-3 mb-2'>
                    <div className='text-primary text-[85px]'>
                      {stat.icon}
                    </div>
                    <div className='flex flex-col'>
                      <h1 className='text-4xl md:text-5xl font-bold text-text'>
                        {count}
                      </h1>
                      <p className='text-slate-600 font-medium'>
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
