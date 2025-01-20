import React, { useContext, useState } from "react";
import Container from "../Container";
import BtnPrimary from "../BtnPrimary";
import ClockInput from "./ClockInput";
import { MyContext } from "../../services/MyContext";
import { minutesToTime } from "../../utils/TimeFormater";
import useClock from "./useClock";

export default function StartTime() {
  const [,dispatch] = useContext(MyContext)
  const [clock , dispatchClock , totalMinutes]=useClock();


  function startTimeHandler() {
    dispatch({
      type:'startTime',
      payload : minutesToTime(totalMinutes)
    })
  }
  return (
    <Container>
      <section  onKeyDown={e=>e.key === 'Enter' ? startTimeHandler():null}  className="sectionStyle p-4 text-lg">
        <p className="text-center text-2xl">Start Time</p>
        <div className="flexCenter gap-2 my-4">
          <ClockInput clock={clock} dispatchClock={dispatchClock} />
        </div>
        <BtnPrimary disabledStatus={!Boolean(totalMinutes)} onClick={startTimeHandler}>Start plan</BtnPrimary>
      </section>
    </Container>
  );
}
