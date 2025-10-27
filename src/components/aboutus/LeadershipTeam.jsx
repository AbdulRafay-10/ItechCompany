import React from 'react'
import p1 from "../../assets/Team-Members/awais.jpeg"
import p2 from "../../assets/Team-Members/anees.jpg"
import p3 from "../../assets/Team-Members/rafay.jpg"
import sulaiman from "../../assets/Team-Members/sulaiman.jpg"
import taha from "../../assets/Team-Members/taha.jpeg"


const team = [
  { name: 'Awais Khan', title: 'Founder & CEO', img: p1, imgPosition: 'center 30%' }, 
  { name: 'Anees Khan', title: 'CEO', img: p2, imgPosition: 'center 0%' },
  { name: 'Taha Khan', title: 'Project Manager', img: taha , imgPosition: 'center 0%' },
  { name: 'Abdul Rafay', title: 'Full Stack Developer', img: p3, imgPosition: 'center 10%' },
  { name: 'Sulaiman Khan', title: 'UI/UX Designer', img: sulaiman , imgPosition: 'center 0%' },
  
]

function LeadershipTeam() {
  return (
    <section className="w-full py-16">
      <div className="max-w-[1200px] mx-auto px-4 md:px-12">
        <div className="text-center mb-10">
          <p className="text-primary text-sm tracking-widest font-semibold">EXPERT TEAM</p>
          <h2 className="text-2xl md:text-3xl font-bold text-text">Meet Our Leadership</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {team.map((m) => (
            <Card key={m.name} member={m} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Card({ member }) {
  return (
    <div className="rounded-xl text-center relative overflow-hidden bg-transparent">
      {/* Top image */}
      <div className="relative w-full aspect-square bg-gray-100 rounded-t-xl overflow-hidden">
        <img 
          src={member.img} 
          alt={member.name} 
          className="absolute inset-0 w-full h-full object-cover object-center" 
          style={{ objectPosition: member.imgPosition || 'center 35%' }}
          loading="lazy"
        />
      </div>

      {/* Body */}
      <div className="bg-white rounded-b-xl pt-6 pb-4 sm:pt-8 sm:pb-6">
        <h4 className="font-semibold text-lg sm:text-xl">{member.name}</h4>
        <p className="text-sm sm:text-lg text-primary font-semibold">{member.title}</p>
      </div>
    </div>
  )
}

export default LeadershipTeam


