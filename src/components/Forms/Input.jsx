import React, { useEffect, useRef, useState } from "react";

export default function Input({maxNumber , className , setValueAsClock , value}) {
    const ref = useRef(null)


    useEffect(()=>{
        if (value && ref.current) {
            if (Number(value) > maxNumber) {
                ref.current.classList.add('border');
                ref.current.classList.add('border-primary')
            }else{                
                ref.current.classList.remove('border');
                ref.current.classList.remove('border-primary')
            }
        }else{
            ref.current.classList.remove('border');
            ref.current.classList.remove('border-primary')
        }
    },[value])
  return (
    <div className="shadow-lg rounded-xl shadow-black/20">
      <input
        ref={ref}
        className={`bg-sections placeholder:text-icon bg-gradient-to-tl from-myWhite/5 p-3 rounded-xl shadow-inner shadow-black/70 outline-none myShadow text-center ${className}`}
        maxLength={2}
        type="text"
        placeholder="00"
        value={value|| ''}
        onChange={(e) => {
          const value = Number(e.target.value);
          if (/^\d*$/.test(value)) {
              setValueAsClock({type:maxNumber === 23 ? 'hour' : 'min' , payload : value});
          }
      }}
      />
    </div>
  );
}
