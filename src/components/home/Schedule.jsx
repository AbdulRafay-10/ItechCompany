import React, { useState } from 'react'

const Schedule = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [selectedTimezone, setSelectedTimezone] = useState('Pakistan, Maldives Time (UTC+5)')

  // Generate calendar days
  const generateCalendarDays = () => {
    const startOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1)
    const endOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0)
    const startOfWeek = new Date(startOfMonth)
    startOfWeek.setDate(startOfMonth.getDate() - startOfMonth.getDay())
    
    const days = []
    const today = new Date()
    today.setHours(0, 0, 0, 0) // Reset time to start of day for accurate comparison
    
    for (let i = 0; i < 42; i++) {
      const date = new Date(startOfWeek)
      date.setDate(startOfWeek.getDate() + i)
      
      const isCurrentMonth = date.getMonth() === currentMonth.getMonth()
      const isPast = date < today
      const isToday = date.toDateString() === new Date().toDateString()
      const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString()
      
      days.push({
        date,
        day: date.getDate(),
        isCurrentMonth,
        isPast,
        isToday,
        isSelected,
        isAvailable: isCurrentMonth && !isPast
      })
    }
    
    return days
  }

  // Generate time slots
  const generateTimeSlots = () => {
    const slots = []
    const startHour = 9 // 9 AM
    const endHour = 17 // 5 PM
    
    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
        const displayTime = new Date(2024, 0, 1, hour, minute).toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        })
        
        slots.push({
          time,
          displayTime,
          isSelected: selectedTime === time
        })
      }
    }
    
    return slots
  }

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  const handleDateSelect = (day) => {
    if (day.isAvailable) {
      setSelectedDate(day.date)
      setSelectedTime(null)
    }
  }

  const handleTimeSelect = (time) => {
    setSelectedTime(time)
  }

  const handleNextStep = () => {
    if (currentStep === 1 && selectedDate && selectedTime) {
      setCurrentStep(2)
    }
  }

  const handlePrevStep = () => {
    setCurrentStep(1)
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleScheduleEvent = () => {
    // Here you would typically send the data to your backend
    console.log('Scheduling event:', {
      date: selectedDate,
      time: selectedTime,
      ...formData
    })
    alert('Event scheduled successfully!')
    
    // Reset form
    setCurrentStep(1)
    setSelectedDate(null)
    setSelectedTime(null)
    setFormData({ name: '', email: '', message: '' })
  }

  const navigateMonth = (direction) => {
    const newMonth = new Date(currentMonth)
    newMonth.setMonth(currentMonth.getMonth() + direction)
    setCurrentMonth(newMonth)
    setSelectedDate(null)
    setSelectedTime(null)
  }

  return (
    <section className='w-full py-16 bg-gray-50'>
      <div className='w-full max-w-[1400px] mx-auto px-4 md:px-8'>
        {/* Header */}
        <div className='flex flex-col justify-center items-center text-center space-y-3 mb-16'>
          <h1 className='text-primary text-3xl md:text-4xl font-semibold'>SCHEDULE A FREE CONSULTATION</h1>
          <div className='w-16 h-1 bg-primary rounded-full'></div>
        </div>

         <div className='max-w-7xl mx-auto'>
           {currentStep === 1 ? (
             /* Step 1: Date and Time Selection */
            <div className={`flex flex-col md:flex-row gap-6 md:gap-8 ${selectedDate ? 'max-w-6xl' : 'max-w-4xl'} mx-auto transition-all duration-300`}>
               {/* Left Side - Meeting Info */}
               <div className='bg-white rounded-2xl p-8 shadow-lg flex-shrink-0  sm:w-[300px]'>
                 <div className='flex flex-col items-center mb-6'>
                   <div className='w-20 h-20 rounded-full bg-gray-200 mb-4 flex items-center justify-center'>
                     <span className='text-3xl'>👨‍💼</span>
                   </div>
                   <h3 className='text-xl font-semibold text-gray-800 mb-2'>Farhan</h3>
                   <h2 className='text-2xl font-bold text-gray-900 text-center'>Let's Talk About Your Project</h2>
                 </div>
                 
                 <div className='space-y-4 text-gray-600'>
                   <div className='flex items-center'>
                     <svg className='w-5 h-5 mr-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                       <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                     </svg>
                     <span>30 min</span>
                   </div>
                   <div className='flex items-center'>
                     <svg className='w-5 h-5 mr-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                       <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' />
                     </svg>
                     <span>Web conferencing details provided upon confirmation.</span>
                   </div>
                 </div>
               </div>

               {/* Right Side - Calendar */}
               <div className='bg-white rounded-2xl p-8 shadow-lg relative flex-grow'>
                 {/* Schedule Badge */}
                 <div className='absolute -top-3 -right-3 bg-gray-600 text-white text-xs px-3 py-1 rounded-full transform rotate-12'>
                   Schedule
                 </div>
                 
                 <h3 className='text-xl font-semibold text-gray-800 mb-6'>Select a Date & Time</h3>
                 
                 
                 <div className={`flex flex-col md:flex-row gap-4 md:gap-6 ${selectedDate ? '' : 'justify-center'}`}>
                   {/* Calendar */}
                   <div className={selectedDate ? 'flex-shrink-0' : 'max-w-lg'}>
                     {/* Month Navigation */}
                     <div className='flex items-center justify-between mb-4'>
                       <button
                         onClick={() => navigateMonth(-1)}
                         className='p-2 hover:bg-gray-100 rounded-lg transition-colors'
                       >
                         <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                           <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
                         </svg>
                       </button>
                       <h4 className='text-lg font-semibold'>
                         {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                       </h4>
                       <button
                         onClick={() => navigateMonth(1)}
                         className='p-2 hover:bg-gray-100 rounded-lg transition-colors'
                       >
                         <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                           <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                         </svg>
                       </button>
                     </div>

                    {/* Week Days Header */}
                    <div className='grid grid-cols-7 gap-1 mb-2'>
                      {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map(day => (
                        <div key={day} className='text-center text-[10px] sm:text-xs font-medium text-gray-500 py-1 sm:py-2'>
                          {day}
                        </div>
                      ))}
                    </div>

                    {/* Calendar Days */}
                    <div className='grid grid-cols-7 gap-1 sm:gap-2'>
                       {generateCalendarDays().map((day, index) => (
                         <button
                           key={index}
                           onClick={() => handleDateSelect(day)}
                           disabled={!day.isAvailable}
                           className={`
                            h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 text-xs sm:text-sm rounded-full transition-colors font-bold
                             ${day.isCurrentMonth ? '' : 'text-gray-300'}
                             ${day.isPast ? 'cursor-not-allowed text-gray-400 bg-gray-100' : ''}
                             ${day.isSelected ? 'bg-primary text-white shadow-lg' : ''}
                             ${day.isAvailable && !day.isSelected ? 'text-primary bg-blue-50 hover:bg-blue-200 cursor-pointer' : ''}
                             ${day.isToday && !day.isSelected ? 'text-primary bg-blue-50 hover:bg-blue-200' : ''}
                           `}
                         >
                           {day.day}
                         </button>
                       ))}
                     </div>

                     {/* Timezone Dropdown */}
                     <div className='mt-4'>
                       <div className='flex items-center text-sm text-gray-500 mb-2'>
                         <svg className='w-4 h-4 mr-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                           <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                         </svg>
                         <span>Time zone</span>
                       </div>
                       <select
                         value={selectedTimezone}
                         onChange={(e) => setSelectedTimezone(e.target.value)}
                         className='w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors bg-white'
                       >
                         <option value='Pakistan, Maldives Time (UTC+5)'>Pakistan, Maldives Time (UTC+5)</option>
                         <option value='India Standard Time (UTC+5:30)'>India Standard Time (UTC+5:30)</option>
                         <option value='Bangladesh Standard Time (UTC+6)'>Bangladesh Standard Time (UTC+6)</option>
                         <option value='Eastern Time (UTC-5)'>Eastern Time (UTC-5)</option>
                         <option value='Central Time (UTC-6)'>Central Time (UTC-6)</option>
                         <option value='Mountain Time (UTC-7)'>Mountain Time (UTC-7)</option>
                         <option value='Pacific Time (UTC-8)'>Pacific Time (UTC-8)</option>
                         <option value='Greenwich Mean Time (UTC+0)'>Greenwich Mean Time (UTC+0)</option>
                         <option value='Central European Time (UTC+1)'>Central European Time (UTC+1)</option>
                         <option value='Australian Eastern Time (UTC+10)'>Australian Eastern Time (UTC+10)</option>
                         <option value='Japan Standard Time (UTC+9)'>Japan Standard Time (UTC+9)</option>
                         <option value='China Standard Time (UTC+8)'>China Standard Time (UTC+8)</option>
                       </select>
                     </div>
                   </div>

                   {/* Time Selection - Only shows when date is selected */}
                    {selectedDate && (
                      <div className='flex-grow min-w-0 md:min-w-64 pt-6 md:pt-16'>
                       <div className='mb-4'>
                         <span className='text-lg font-semibold text-gray-800'>
                           {selectedDate.toLocaleDateString('en-US', { 
                             weekday: 'long', 
                             month: 'long', 
                             day: 'numeric' 
                           })}
                         </span>
                       </div>
                       <div className='space-y-2 max-h-96 overflow-y-auto pr-6'>
                         {generateTimeSlots().map((slot) => {
                           const isSelected = selectedTime === slot.time
                           
                           if (isSelected) {
                             // Split button for selected time
                             return (
                               <div key={slot.time} className='flex gap-0'>
                                 <button
                                   onClick={() => setSelectedTime(null)}
                                   className='flex-1 p-3 text-left rounded-l-lg bg-gray-600 text-white font-medium border-r border-gray-500'
                                 >
                                   {slot.displayTime}
                                 </button>
                                 <button
                                   onClick={handleNextStep}
                                   className='flex-1 bg-primary text-white py-3 px-4 rounded-r-lg font-semibold hover:bg-blue-700 transition-colors'
                                 >
                                   Next
                                 </button>
                               </div>
                             )
                           } else {
                             // Regular time button
                             return (
                               <button
                                 key={slot.time}
                                 onClick={() => handleTimeSelect(slot.time)}
                                 className='w-full p-3 text-left rounded-lg border border-gray-200 hover:border-primary hover:bg-blue-50 transition-colors bg-white text-gray-700'
                               >
                                 {slot.displayTime}
                               </button>
                             )
                           }
                         })}
                       </div>
                     </div>
                   )}
                 </div>
               </div>
            </div>
          ) : (
            /* Step 2: Booking Form */
            <div className='flex gap-8 max-w-6xl mx-auto'>
              {/* Left Side - Meeting Info with Meeting Details */}
              <div className='bg-white rounded-2xl p-8 shadow-lg flex-shrink-0 w-80'>
                <div className='flex flex-col items-center mb-6'>
                  <div className='w-20 h-20 rounded-full bg-gray-200 mb-4 flex items-center justify-center'>
                    <span className='text-3xl'>👨‍💼</span>
                  </div>
                  <h3 className='text-xl font-semibold text-gray-800 mb-2'>Farhan</h3>
                  <h2 className='text-2xl font-bold text-gray-900 text-center'>Let's Talk About Your Project</h2>
                </div>
                
                <div className='space-y-4 text-gray-600 mb-6'>
                  <div className='flex items-center'>
                    <svg className='w-5 h-5 mr-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                    <span>30 min</span>
                  </div>
                  <div className='flex items-center'>
                    <svg className='w-5 h-5 mr-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' />
                    </svg>
                    <span>Web conferencing details provided upon confirmation.</span>
                  </div>
                </div>

                {/* Meeting Details */}
                <div className='bg-gray-50 rounded-lg p-4'>
                  <h4 className='font-semibold text-gray-800 mb-3'>Meeting Details</h4>
                  <div className='space-y-2 text-gray-600'>
                    <div className='flex items-center'>
                      <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
                      </svg>
                      <span className='text-sm'>{selectedDate?.toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className='flex items-center'>
                      <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                      </svg>
                      <span className='text-sm'>{new Date(2024, 0, 1, ...selectedTime.split(':').map(Number)).toLocaleTimeString('en-US', {
                        hour: 'numeric',
                        minute: '2-digit',
                        hour12: true
                      })} (30 minutes)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Booking Form */}
              <div className='bg-white rounded-2xl p-8 shadow-lg flex-grow'>
                <div className='flex items-center justify-between mb-6'>
                  <h3 className='text-2xl font-semibold text-gray-800'>Confirm Your Meeting</h3>
                  <button
                    onClick={handlePrevStep}
                    className='text-primary hover:text-blue-700 transition-colors'
                  >
                    ← Back
                  </button>
                </div>

                {/* Contact Form */}
                <form onSubmit={(e) => e.preventDefault()} className='space-y-6'>
                  <div>
                    <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-2'>
                      Full Name *
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors'
                      placeholder='Enter your full name'
                    />
                  </div>

                  <div>
                    <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>
                      Email Address *
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors'
                      placeholder='Enter your email address'
                    />
                  </div>

                  <div>
                    <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-2'>
                      Message (Optional)
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors resize-none'
                      placeholder='Tell us about your project or any specific topics you would like to discuss'/>
                  </div>

                  <button
                    type='button'
                    onClick={handleScheduleEvent}
                    disabled={!formData.name || !formData.email}
                    className='w-full bg-primary text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors'
                  >
                    Schedule Event
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Schedule