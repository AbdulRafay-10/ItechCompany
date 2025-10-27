import React from 'react'
import { GiArchiveResearch } from "react-icons/gi";
import { LuVideotape } from "react-icons/lu";
import { MdRocketLaunch } from "react-icons/md";

const items = [
  {
    title: 'Research and planning',
    desc: 'Gather information about the target audience, market trends, and competitors to define scope and goals.',
    icon: (
      <GiArchiveResearch />
    ),
  },
  {
    title: 'Design and prototyping',
    desc: 'Create wireframes, mockups, and prototypes to design the UI/UX.',
    icon: (
      <LuVideotape />
    ),
  },
  {
    title: 'Development and testing',
    desc: 'Use cutting‑edge tech and frameworks to build and verify the product.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain-circuit-icon lucide-brain-circuit"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M9 13a4.5 4.5 0 0 0 3-4"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M12 13h4"/><path d="M12 18h6a2 2 0 0 1 2 2v1"/><path d="M12 8h8"/><path d="M16 8V5a2 2 0 0 1 2-2"/><circle cx="16" cy="13" r=".5"/><circle cx="18" cy="3" r=".5"/><circle cx="20" cy="21" r=".5"/><circle cx="20" cy="8" r=".5"/></svg>
    ),
  },
  {
    title: 'Launch and maintenance',
    desc: 'Deploy, monitor, and maintain to ensure performance and usability.',
    icon: (
      <MdRocketLaunch />
    ),
  },
]

function Process() {
  return (
    <section className="w-full py-12 bg-dark-section">
      <div className='w-full px-4 sm:px-6 md:px-8 lg:px-12'>
        <div className='flex flex-col justify-center items-center text-center space-y-3 mb-12'>
          <h2 className='bg-gradient-to-r from-[#c4d800] to-[#a8b800] bg-clip-text text-transparent text-2xl md:text-3xl font-semibold'>Our Process</h2>
          <h3 className='text-2xl md:text-3xl text-slate-100 font-semibold'>How we work</h3>
          <div className='w-24 h-1 bg-gradient-to-r from-[#c4d800] to-[#a8b800] rounded-full'></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto w-full">
          {items.map((it, idx) => (
            <div
              key={it.title}
              className={`proc-card ${idx % 2 === 0 ? 'direction-right' : 'direction-left'} ${idx === 0 ? 'pattern-trbl' : ''}  bg-gradient-card border border-slate-600 p-6 md:p-8 shadow-2xl hover:shadow-[#c4d800]/20 transition-all duration-300 relative min-h-[200px] md:min-h-[240px] rounded-2xl group hover:transform hover:-translate-y-2 backdrop-blur-sm`}
            >
              <span className="edge-top" />
              <span className="edge-bottom" />
              <span className="edge-side left" />
              <span className="edge-side right" />
              <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-[#c4d800] to-[#a8b800] text-slate-900 grid place-items-center mb-3 text-4xl group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                {it.icon}
              </div>
              <h4 className="text-lg md:text-xl font-semibold text-slate-100 mb-2">{it.title}</h4>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
