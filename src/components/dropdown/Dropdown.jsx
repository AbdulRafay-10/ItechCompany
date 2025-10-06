import React from 'react'
import { Link } from 'react-router-dom'

function Dropdown({ isOpen, items = [], onItemClick }) {
  if (!isOpen) return null

  return (
    <div className="absolute left-0 top-full mt-0 w-72 bg-white rounded-xl shadow-xl p-1 max-h-[70vh] overflow-auto border border-slate-100" role="menu">
      {items.map((item) => {
        const label = typeof item === 'string' ? item : item.name
        const path = typeof item === 'object' ? item.path : '#'
        
        return (
          <Link
            key={label}
            to={path}
            className="w-full text-left text-xl text-text font-semibold rounded-lg px-3 py-3 hover:bg-slate-100 hover:text-primary block"
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


