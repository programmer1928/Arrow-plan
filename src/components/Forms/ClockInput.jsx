import React, { useEffect, useReducer, useState } from "react";
import Input from "./Input";



export default function ClockInput({ setClockValue , clock , dispatchClock }) {
  useEffect(() => {
    if (setClockValue && clock) {
      setClockValue(clock.min + clock.hour*60)
      // setClockValue(clock)
    }
  }, [clock])
  
  return (
    <>
    {
    clock &&
      <>
        <Input setValueAsClock={dispatchClock} value={clock.hour} className={"w-16  md:w-20 "} maxNumber={23} />
        <p className="text-3xl">:</p>
        <Input setValueAsClock={dispatchClock} value={clock.min} className={"w-16  md:w-20 "} maxNumber={59} />
      </>
    }
    </>
  );
}
