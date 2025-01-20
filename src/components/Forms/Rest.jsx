import React, { useContext, useEffect, useRef, useState } from 'react'
import ClockInput from './ClockInput'
import CheckBox from './CheckBox'
import BtnPrimary from '../BtnPrimary'
import "./Style.css"
import { MyContext } from '../../services/MyContext'
import useClock from './useClock'

export default function Rest() {
  const [ClockValue, setClockValue] = useState(0);
  const [clock , dispatchClock , totalMinutes]=useClock();
  const [suggestionsTime, setSuggestionsTime] = useState(0);
  const [disabledStatus, setDisabledStatus] = useState(true);
  const [, dispatch] = useContext(MyContext);
  const ref = useRef();

  useEffect(() => {
    if (totalMinutes) {
      ref.current.classList.add("disabledElement");
    } else {
      ref.current.classList.remove("disabledElement");
    }
  }, [totalMinutes]);

  useEffect(() => {
    if (totalMinutes || suggestionsTime) {
      //check is fileds fill or not
      setDisabledStatus(false);
    } else {
      setDisabledStatus(true);
    }
  }, [totalMinutes, suggestionsTime]);

  function checkBoxHandler(event) {
    setSuggestionsTime(event.target.value);
  }

  function addTaskHandler() {
    dispatch({
      type: "addTask",
      payload: {
        id: Math.random(),
        title:  totalMinutes ? totalMinutes+'′' : suggestionsTime +(suggestionsTime==='Lunch'||suggestionsTime==='Dinner'?'':'′'),
        type: "offTask",
        span: Number(totalMinutes || (suggestionsTime==='Lunch'||suggestionsTime==='Dinner'?60:suggestionsTime)),
        isComplete: false,
      },
    });
    dispatchClock({type:'reset'});
    setSuggestionsTime(0);
  }

  return (
    <section className='sectionStyle p-4 flex flex-col justify-between'>
      
      <div className='flexCenter'>
      <ClockInput clock={clock} dispatchClock={dispatchClock} />
      </div>

      <form ref={ref} className='grid grid-cols-2 gap-3 mb-3'>
        <div className='flex flex-col gap-1 justify-evenly'>
          <CheckBox checked={suggestionsTime=='5'} onChange={checkBoxHandler} value={5} name={'rest'}>5 min</CheckBox>
          <CheckBox checked={suggestionsTime=='10'} onChange={checkBoxHandler} value={10} name={'rest'}>10 min</CheckBox>
          <CheckBox checked={suggestionsTime=='30'} onChange={checkBoxHandler} value={30} name={'rest'}>30 min</CheckBox>
        </div>
        <div className='flex flex-col gap-1 justify-evenly'>
          <CheckBox checked={suggestionsTime=='Lunch'} onChange={checkBoxHandler} value={'Lunch'} name={'rest'}>Lunch</CheckBox>
          <CheckBox checked={suggestionsTime=='Dinner'} onChange={checkBoxHandler} value={'Dinner'} name={'rest'}>Dinner</CheckBox>
        </div>
      </form>

      <BtnPrimary onClick={addTaskHandler} disabledStatus={disabledStatus}>Add rest</BtnPrimary>

    </section>
  )
}
