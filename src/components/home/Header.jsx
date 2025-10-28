import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import f3 from '../../assets/images/technology.png'

function Header() {
  return (
    <section className="w-full bg-gradient-hero p-12">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-8 md:py-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center justify-center">
        <div className="space-y-6 text-center md:text-left">
          <div className="text-4xl md:text-7xl font-extrabold">
            <motion.h1
              className="text-slate-100 leading-tight"
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              Ideate,
              <br />
              <span className="bg-gradient-to-r from-[#c4d800] to-[#a8b800] bg-clip-text text-transparent">Innovate &amp; Build</span>
            </motion.h1>
          </div>
          <motion.p
            className="text-base md:text-lg text-slate-300 leading-relaxed"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          >
            In today's digital age, having a robust online presence is essential for small
            and medium-sized businesses to thrive. A tailored eCommerce website and
            mobile app can significantly enhance your brand's visibility, streamline
            operations, and boost sales
          </motion.p>
          <div className="flex flex-wrap gap-4 pt-3 justify-center md:justify-start">
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            >
              <Link to="/case-studies" className="btn-primary-gradient px-8 py-3 rounded-lg text-slate-900 font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300">
                Why Us ?
              </Link>
            </motion.div>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.35 }}
            >
              <Link to="/lets-connect" className="btn-primary-gradient px-8 py-3 rounded-lg text-slate-900 font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300">
                Lets Discuss
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="flex items-center justify-center md:justify-end"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          {/* Replace src with your actual image file once added */}
          <motion.img
            src={f3}
            alt="Header visual"
            className="w-full max-w-[500px] md:max-w-[600px] h-auto object-contain"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.25 }}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Header


