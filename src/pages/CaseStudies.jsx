import React, { useMemo, useState } from 'react'
import project1 from '../assets/projects/project (1).png'
import project2 from '../assets/projects/project (2).png'
import project3 from '../assets/projects/project (3).png'
import project4 from '../assets/projects/project (4).png'
import project5 from '../assets/projects/project (5).png'
import project6 from '../assets/projects/project (6).png'
import project7 from '../assets/projects/project (7).png'

function CaseStudiesPage() {
  const projects = [
    { id: 1, title: 'Project One', category: 'Web Development', image: project1 },
    { id: 2, title: 'Project Two', category: 'Full Stack', image: project2 },
    { id: 3, title: 'Project Three', category: 'Mobile App', image: project3 },
    { id: 4, title: 'Project Four', category: 'SaaS', image: project4 },
    { id: 5, title: 'Project Five', category: 'Web Application', image: project5 },
    { id: 6, title: 'Project Six', category: 'Web Development', image: project6 },
    { id: 7, title: 'Project Seven', category: 'EdTech Solution', image: project7 },
  ]


  const categoryMap = {
    All: () => true,
    'Web App': (p) => /web/i.test(p.category),
    'UI/UX': (p) => /ui|ux|design/i.test(p.category),
    'Mobile App': (p) => /mobile/i.test(p.category),
    'CMS': (p) => /cms/i.test(p.category),
  }

  const [activeFilter, setActiveFilter] = useState('All')
  const filtered = useMemo(() => projects.filter(categoryMap[activeFilter] || categoryMap.All), [projects, activeFilter])

  return (
    <section className='w-full py-16'>
      <div className='w-full max-w-[1400px] mx-auto px-4 md:px-8'>
        <div className='flex flex-col justify-center items-center text-center space-y-4 mb-12'>
          <h1 className='text-primary text-3xl md:text-4xl font-semibold'>CASE STUDIES</h1>
          <p className='text-lg text-slate-600 max-w-2xl'>A selection of our recent work.</p>
        </div>




        <div className='flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-10'>
          {Object.keys(categoryMap).map((label) => (
            <button
              key={label}
              type='button'
              onClick={() => setActiveFilter(label)}
              className={`px-12 py-3 rounded-full text-sm md:text-base font-semibold border transition-colors ${
                activeFilter === label
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-primary border-slate-200 hover:border-primary hover:text-primary'
              }`}
            >
              {label}
            </button>
          ))}
        </div>




        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-8'>
          {filtered.map((p) => (
            <div key={p.id} className='group relative rounded-xl overflow-hidden'>
              <img
                src={p.image}
                alt={p.title}
                className='w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105'
              />
              <div className='absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end'>
                <div className='p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <h3 className='text-primary text-xl font-semibold'>{p.title}</h3>
                  <p className='text-white/90 text-sm'>{p.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudiesPage


