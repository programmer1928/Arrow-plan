import React from 'react'

export default function Modal({children , openStatus , divClickFunction}) {
  return (
    <>
    <dialog className='sectionStyle w-max backdrop-blur p-7 rounded-xl  z-50 text-myWhite text-lg peer fixed top-1/2 -translate-y-1/2 ' open={openStatus}>
        {children}
    </dialog>
    <div onClick={divClickFunction}  className='bg-sections/90 h-screen w-screen z-40 fixed top-0 left-0 opacity-0 invisible peer-open:opacity-100 peer-open:visible'></div>
    </>
  )
}
