import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import f3 from '../../assets/images/f3.webp'

function Header() {
  return (
    <section className="w-full">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 py-10 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center justify-center">
        <div className="space-y-8 text-center md:text-left">
          <div className="text-6xl md:text-7xl font-extrabold">
            <motion.h1
              className="text-text leading-tight"
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              Ideate,
              <br />
              <span className="text-primary">Innovate &amp; Build</span>
            </motion.h1>
          </div>
          <motion.p
            className="text-lg md:text-2xl text-text leading-relaxed"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          >
            In today's digital age, having a robust online presence is essential for small
            and medium-sized businesses to thrive. A tailored eCommerce website and
            mobile app can significantly enhance your brand's visibility, streamline
            operations, and boost sales
          </motion.p>
          <div className="flex flex-wrap gap-5 pt-4 justify-center md:justify-start">
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            >
              <Link to="/case-studies" className="px-16 py-5 rounded-md bg-primary text-white font-bold text-xl shadow">
                Why Us ?
              </Link>
            </motion.div>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.35 }}
            >
              <Link to="/lets-connect" className="px-16 py-5 rounded-md bg-primary text-white font-bold text-xl shadow">
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
            className="w-full max-w-[680px] md:max-w-[760px] h-auto object-contain"
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


