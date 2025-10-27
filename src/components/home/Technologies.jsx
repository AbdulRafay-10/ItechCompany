import React from 'react'
import Node from "../../assets/techStacks/js.png"
import Python from "../../assets/techStacks/python.png"
import Laravel from "../../assets/techStacks/larawel.png"
import MongoDB from "../../assets/techStacks/mongo.png"
import MySQL from "../../assets/techStacks/mysql.png"
import Wordpress from "../../assets/techStacks/wp.png"
import Vue from "../../assets/techStacks/v.png"
import Flutter from "../../assets/techStacks/flutter.png"
import Firebase from "../../assets/techStacks/Firebase.png"
import Figma from "../../assets/techStacks/figma.png"
import Express from "../../assets/techStacks/expressjs.png"
import Django from "../../assets/techStacks/django.png"
import Ruby from "../../assets/techStacks/ruby.png"
import Next from "../../assets/techStacks/next.png"
import ReactLogo from "../../assets/techStacks/reactblue.png"
import Bootstrap from "../../assets/techStacks/Bootstrap.png"
import Tailwind from "../../assets/techStacks/tailwind.png"
import HTML5 from "../../assets/techStacks/html5.png"
import Android from "../../assets/techStacks/Android.png"
import Adobe from "../../assets/techStacks/Adobe.png"
import Sketch from "../../assets/techStacks/sketch.png"

const Technologies = () => {
  const techCategories = [
    {
      title: 'Backend End Development',
      technologies: [
        { name: 'Node.js', icon: Node }, // Add your Node.js icon here
        { name: 'Python', icon: Python }, // Add your Python icon here
        { name: 'Laravel', icon: Laravel }, // Add your Laravel icon here
        { name: 'MongoDB', icon: MongoDB }, // Add your MongoDB icon here
        { name: 'MySQL', icon: MySQL }, // Add your MySQL icon here
        { name: 'Express.js', icon: Express  }, // Add your Express.js icon here
        { name: 'Django', icon: Django }, // Add your Django icon here
        { name: 'Ruby on Rails', icon: Ruby }, // Add your Ruby on Rails icon here
      ]
    },
    {
      title: 'Front End Development',
      technologies: [
        { name: 'Next.js', icon: Next }, // Add your Next.js icon here
        { name: 'React', icon: ReactLogo }, // Add your React icon here
        { name: 'Bootstrap', icon: Bootstrap }, // Add your Bootstrap icon here
        { name: 'WordPress', icon: Wordpress }, // Add your WordPress icon here
        { name: 'Tailwind', icon: Tailwind }, // Add your Tailwind icon here
        { name: 'HTML5', icon: HTML5 }, // Add your HTML5 icon here
        { name: 'Vue.js', icon: Vue }, // Add your Vue.js icon here
      ]
    },
    {
      title: 'Mobile App Development',
      technologies: [
        { name: 'Android', icon: Android }, // Add your Android icon here
        { name: 'React Native', icon: ReactLogo }, // Add your React Native icon here
        { name: 'Flutter', icon: Flutter }, // Add your Flutter icon here
        { name: 'Firebase', icon: Firebase }, // Add your Firebase icon here
        { name: 'Figma', icon: Figma }, // Add your Figma icon here
        { name: 'Adobe XD', icon: Adobe  }, // Add your Adobe XD icon here
        { name: 'Sketch', icon: Sketch }, // Add your Sketch icon here
      ]
    }
  ]

  return (
    <section className='w-full py-12 bg-gradient-hero'>
      <div className='w-full max-w-[1400px] mx-auto px-4 md:px-8'>
        {/* Header */}
        <div className='flex flex-col justify-center items-center text-center space-y-2 mb-12'>
          <h1 className='bg-gradient-to-r from-[#c4d800] to-[#a8b800] bg-clip-text text-transparent text-2xl md:text-3xl font-semibold'>TECHNOLOGIES</h1>
          <div className='w-16 h-1 bg-gradient-to-r from-[#c4d800] to-[#a8b800] rounded-full'></div>
        </div>

        {/* Technology Categories */}
        <div className='space-y-12'>
          {techCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className=''>
              {/* Category Title */}
              <div className='flex items-center mb-6'>
                <h2 className='text-lg md:text-xl font-semibold bg-gradient-to-r from-[#c4d800] to-[#a8b800] bg-clip-text text-transparent mr-6 whitespace-nowrap'>
                  {category.title}
                </h2>
                <div className='flex-1 h-px bg-gradient-to-r from-[#c4d800] to-transparent'></div>
              </div>

              {/* Technology Grid */}
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 md:gap-6'>
                {category.technologies.map((tech, techIndex) => (
                  <div 
                    key={techIndex} 
                    className='flex flex-col items-center justify-center p-3 rounded-xl bg-gradient-card hover:shadow-lg transition-all duration-300 group cursor-pointer hover:transform hover:-translate-y-1'
                  >
                    {/* Technology Icon Placeholder */}
                    <div className='w-10 h-10 md:w-16 md:h-16 mb-2 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                      {tech.icon ? (
                        <img 
                          src={tech.icon} 
                          alt={tech.name} 
                          className='w-6 h-6 md:w-12 md:h-12 object-contain group-hover:filter group-hover:drop-shadow-lg transition-all duration-300'
                        />
                      ) : (
                        <div className='w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-[#c4d800] to-[#a8b800] rounded flex items-center justify-center'>
                          <span className='text-xs text-white font-medium'>
                            {tech.name.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    {/* Technology Name */}
                    <span className='text-xs md:text-sm font-medium text-slate-300 text-center leading-tight group-hover:text-slate-100 transition-colors duration-300'>
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies
