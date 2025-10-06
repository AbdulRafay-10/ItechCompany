import React, { useState } from 'react'
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa'
import p1 from "../../assets/Team-Members/amir.jpeg"
import p2 from "../../assets/Team-Members/AwaisPFP.jpg"
import p3 from "../../assets/Team-Members/IMG_20250414_150226.jpg"
import p4 from "../../assets/Team-Members/WhatsApp Image 2025-05-28 at 16.04.01.jpeg.jpg"
import p5 from "../../assets/Team-Members/WhatsApp Image 2025-06-19 at 15.56.17_0862dfae.jpg"
import p6 from "../../assets/Team-Members/WhatsApp Image 2025-08-21 at 15.45.09_ead2bf6b.jpg"

const team = [
  { name: 'Ali Raza', title: 'Founder & CEO', img: p1, imgPosition: 'center 30%', socials: { instagram: 'https://instagram.com/', twitter: 'https://twitter.com/', facebook: 'https://facebook.com/' } },
  { name: 'Farhan', title: 'Business Development Manager', img: p2, socials: { instagram: 'https://instagram.com/', twitter: 'https://twitter.com/', facebook: 'https://facebook.com/' } },
  { name: 'Dildar Ahmed Dad', title: 'Project Manager', img: p3, socials: { instagram: 'https://instagram.com/', twitter: 'https://twitter.com/', facebook: 'https://facebook.com/' } },
  { name: 'Mohsin Khan', title: 'HR Manager', img: p4, socials: { instagram: 'https://instagram.com/', twitter: 'https://twitter.com/', facebook: 'https://facebook.com/' } },
  { name: 'Nasir Ahmad', title: 'Digital Marketing & SEO Expert', img: p5, socials: { instagram: 'https://instagram.com/', twitter: 'https://twitter.com/', facebook: 'https://facebook.com/' } },
  { name: 'Nasir Ahmad', title: 'Digital Marketing & SEO Expert', img: p6, socials: { instagram: 'https://instagram.com/', twitter: 'https://twitter.com/', facebook: 'https://facebook.com/' } }
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
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl  text-center relative overflow-visible bg-transparent">
      {/* Top image */}
      <div className="relative w-full h-80 bg-gray-100 rounded-t-xl overflow-hidden">
        <img src={member.img} alt={member.name} className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: member.imgPosition || 'center top' }} />
      </div>

      {/* Diamond with plus positioned relative to the whole card, above title */}
      <div className="absolute right-6 top-[304px] w-12 h-12 bg-white rotate-45 rounded-xl  z-50">
        <button
          type="button"
          aria-label={open ? 'Close socials' : 'Open socials'}
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setOpen((v) => !v) }}
          className="absolute inset-0 -rotate-45 text-primary text-3xl grid place-items-center z-50"
        >
          {open ? '×' : '+'}
        </button>
      </div>

      {/* Socials stack near the diamond */}
      <div className={`absolute right-6 top-[160px] -translate-y-3 flex flex-col items-center gap-3 transition-all duration-300 z-40 ${open ? 'opacity-100 -translate-y-10' : 'opacity-0 translate-y-0 pointer-events-none'}`}>
        <a href={member.socials?.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="h-12 w-12 rounded-full bg-[#1877F2] text-white grid place-items-center shadow"><FaInstagram /></a>
        <a href={member.socials?.twitter} target="_blank" rel="noreferrer" aria-label="Twitter" className="h-12 w-12 rounded-full bg-[#1DA1F2] text-white grid place-items-center shadow"><FaTwitter /></a>
        <a href={member.socials?.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="h-12 w-12 rounded-full bg-[#1877F2] text-white grid place-items-center shadow"><FaFacebookF /></a>
      </div>

      {/* Body */}
      <div className="bg-white rounded-b-xl pt-8 pb-6 relative z-10">
        <h4 className="font-semibold text-xl">{member.name}</h4>
        <p className="text-lg  text-primary font-semibold">{member.title}</p>
      </div>
    </div>
  )
}

export default LeadershipTeam


