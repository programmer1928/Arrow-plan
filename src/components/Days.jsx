import React from 'react'
import { useState } from 'react'
import DayBtn from './DayBtn'

export default function Days() {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    
    <div className={`flexCenter fixed top-1/2 -translate-y-1/2 transition-all duration-150  group z-40 ${isOpen ? 'left-0' : 'right-[calc(100%-1.25rem)]'}`} style={{"filter":"drop-shadow(0px 0px 6px #2C3137)"}}>
        <ul className='bg-sections border-e border-y border-primary text-myWhite p-2 rounded-e-xl hover:*:text-primary *:transition-all *:duration-100'>
            {
                ['SUN','MON','TUE','WED','THU','FRI','SAT'].map(day=>{
                    return <DayBtn key={day} day={day}/>
                })
            }

        </ul>
        
        <button onClick={()=>setIsOpen(prev=>!prev)} className={`w-5 h-10  block rounded-e-full bg-sections outline outline-1  group-hover:border-e-primary group-hover:border-y-primary  border border-s-sections  group-hover:fill-primary  transition-all duration-150 ${isOpen ? "fill-primary border-y-primary border-e-primary outline-sections" :"fill-icon border-y-icon border-e-icon outline-icon hover:outline-primary"}`}>
            <svg className={`h-1/2 transition-all duration-150 ${isOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M301.7 250.3c3.1 3.1 3.1 8.2 0 11.3l-216 216c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L284.7 256 74.3 45.7c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l216 216z"/>
            </svg>
        </button>

    </div>
    <div onClick={()=>setIsOpen(false)}  className={` bg-sections/90 h-screen w-screen z-30 fixed top-0 left-0  ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}></div>

        </>


  )
}
