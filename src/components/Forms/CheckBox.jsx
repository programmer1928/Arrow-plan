import React from 'react'

export default function CheckBox({children , ...rest}) {
  return (
    <label className='flex items-center gap-2 cursor-pointer'>
        <input
        className='appearance-none hidden peer'
        type="radio"
        {...rest}
        />
        <div className='shadow-lg shadow-black/20 flex rounded-full peer-checked:[&>span>i]:opacity-100'>
            <span className='size-6 flexCenter shrink-0 rounded-full bg-sections bg-gradient-to-tl from-myWhite/10 shadow-inner shadow-black/70 outline-none myShadow'>
                <i className='size-1/2 shadow-purple-700/50 shadow-inner rounded-full bg-primary block opacity-0'></i>
            </span>
        </div>
        <span className='capitalize'>{children}</span>
  </label>
  )
}
