import React from 'react'
import Node from "../../assets/techStacks/js.png"
import Python from "../../assets/techStacks/python.png"
import Laravel from "../../assets/techStacks/larawel.png"
import MongoDB from "../../assets/techStacks/mongo.png"
import MySQL from "../../assets/techStacks/mysql.png"
import Wordpress from "../../assets/techStacks/wp.png"
import Vue from "../../assets/techStacks/v.png"
import Flutter from "../../assets/techStacks/flutter.png"
import Firebase from "../../assets/techStacks/firebase.png"
import Figma from "../../assets/techStacks/figma.png"

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
        { name: 'Express.js', icon: null }, // Add your Express.js icon here
        { name: 'Django', icon: null }, // Add your Django icon here
        { name: 'Ruby on Rails', icon: null }, // Add your Ruby on Rails icon here
      ]
    },
    {
      title: 'Front End Development',
      technologies: [
        { name: 'Next.js', icon: null }, // Add your Next.js icon here
        { name: 'React', icon: null }, // Add your React icon here
        { name: 'Bootstrap', icon: null }, // Add your Bootstrap icon here
        { name: 'WordPress', icon: Wordpress }, // Add your WordPress icon here
        { name: 'Tailwind', icon: null }, // Add your Tailwind icon here
        { name: 'HTML5', icon: null }, // Add your HTML5 icon here
        { name: 'Vue.js', icon: Vue }, // Add your Vue.js icon here
      ]
    },
    {
      title: 'Mobile App Development',
      technologies: [
        { name: 'Android', icon: null }, // Add your Android icon here
        { name: 'React Native', icon: null }, // Add your React Native icon here
        { name: 'Flutter', icon: Flutter }, // Add your Flutter icon here
        { name: 'Firebase', icon: Firebase }, // Add your Firebase icon here
        { name: 'iOS', icon: null }, // Add your iOS icon here
        { name: 'Figma', icon: Figma }, // Add your Figma icon here
        { name: 'Adobe XD', icon: null }, // Add your Adobe XD icon here
        { name: 'Sketch', icon: null }, // Add your Sketch icon here
      ]
    }
  ]

  return (
    <section className='w-full py-16'>
      <div className='w-full max-w-[1400px] mx-auto px-4 md:px-8'>
        {/* Header */}
        <div className='flex flex-col justify-center items-center text-center space-y-3 mb-16'>
          <h1 className='text-primary text-3xl md:text-4xl font-semibold'>TECHNOLOGIES</h1>
          <div className='w-16 h-1 bg-primary rounded-full'></div>
        </div>

        {/* Technology Categories */}
        <div className='space-y-16'>
          {techCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className=''>
              {/* Category Title */}
              <div className='flex items-center mb-8'>
                <h2 className='text-xl md:text-2xl font-semibold text-primary mr-8 whitespace-nowrap'>
                  {category.title}
                </h2>
                <div className='flex-1 h-px bg-gray-300'></div>
              </div>

              {/* Technology Grid */}
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 md:gap-8'>
                {category.technologies.map((tech, techIndex) => (
                  <div 
                    key={techIndex} 
                    className='flex flex-col items-center justify-center p-4  rounded-lg   transition-shadow duration-300  group cursor-pointer'
                  >
                    {/* Technology Icon Placeholder */}
                    <div className='w-12 h-12 md:w-20 md:h-20 mb-3  rounded-lg flex items-center justify-center group-hover:bg-gray-50 transition-colors'>
                      {tech.icon ? (
                        <img 
                          src={tech.icon} 
                          alt={tech.name} 
                          className='w-8 h-8 md:w-24 md:h-24 object-contain'
                        />
                      ) : (
                        <div className='w-8 h-8 md:w-10 md:h-10 bg-gray-200 rounded flex items-center justify-center'>
                          <span className='text-xs text-gray-500 font-medium'>
                            {tech.name.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    {/* Technology Name */}
                    <span className='text-sm md:text-base font-medium text-gray-700 text-center leading-tight'>
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
