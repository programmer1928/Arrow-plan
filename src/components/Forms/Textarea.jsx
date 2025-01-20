import React from 'react'

export default function Textarea({setTitleValue , titleValue}) {
  return (
    <textarea value={titleValue} onChange={e=>setTitleValue(e.target.value)} placeholder='Your work title...' className='bg-sections placeholder:text-icon bg-gradient-to-tl from-myWhite/5 p-3 rounded-xl shadow-inner shadow-black/70 outline-none myShadow '></textarea>
  )
}
