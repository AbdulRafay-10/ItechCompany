import React, { useState } from 'react'
import Schedule from '../../components/home/Schedule'

function TalkToExpertButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Floating Button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-[90] px-8 py-4 rounded-full bg-primary text-white font-semibold text-xl shadow-lg hover:bg-blue-700 transition-colors"
        aria-label="Talk to an expert"
      >
        Talk to an Expert
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-[90]">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <div className="absolute inset-0 flex items-center justify-center p-3 md:p-6" onClick={() => setOpen(false)}>
            <div className="relative w-full max-w-[1200px] bg-white rounded-2xl shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="absolute top-3 right-3 h-10 w-10 rounded-full bg-white text-gray-700 shadow hover:bg-gray-100"
                aria-label="Close"
                onClick={() => setOpen(false)}
              >
                ×
              </button>
              {/* Reuse existing Schedule component inside modal */}
              <div className="max-h-[90vh] overflow-auto">
                <Schedule />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default TalkToExpertButton


