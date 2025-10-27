import React from 'react'
import { Link } from 'react-router-dom'

function Dropdown({ isOpen, items = [], onItemClick }) {
  if (!isOpen) return null

  return (
    <div className="absolute left-0 top-full mt-0 w-64 bg-slate-800/95 backdrop-blur-sm rounded-xl shadow-2xl p-1 max-h-[70vh] overflow-auto border border-slate-600 z-[60]" role="menu" onClick={(e) => e.stopPropagation()}>
      {items.map((item) => {
        const label = typeof item === 'string' ? item : item.name
        const path = typeof item === 'object' ? item.path : '#'
        
        return (
          <Link
            key={label}
            to={path}
            className="w-full text-left text-sm text-slate-200 font-semibold rounded-lg px-3 py-2 hover:bg-slate-700/50 hover:text-[#c4d800] block transition-colors duration-300"
            onClick={() => onItemClick?.(label)}
          >
            {label}
          </Link>
        )
      })}
    </div>
  )
}

export default Dropdown


