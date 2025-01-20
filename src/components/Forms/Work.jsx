import React, { useContext, useEffect, useRef, useState } from "react";
import ClockInput from "./ClockInput";
import Textarea from "./Textarea";
import CheckBox from "./CheckBox";
import BtnPrimary from "../BtnPrimary";
import "./Style.css";
import { MyContext } from "../../services/MyContext";
import useClock from "./useClock";

export default function Work() {
  const [clock , dispatchClock , totalMinutes]=useClock();
  const [suggestionsTime, setSuggestionsTime] = useState(0);
  const [titleValue, setTitleValue] = useState("");
  const [disabledStatus, setDisabledStatus] = useState(true);
  const [category, setCategory] = useState('')
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
    if ((totalMinutes || suggestionsTime) && titleValue.trim() && category ) {
      //check is fileds fill or not
      setDisabledStatus(false);
    } else {
      setDisabledStatus(true);
    }
  }, [totalMinutes, suggestionsTime, titleValue , category]);

  function timerCheckBoxHandler(event) {
    setSuggestionsTime(Number(event.target.value));
  }

  function addTaskHandler() {
    dispatch({
      type: "addTask",
      payload: {
        id: Math.random(),
        title: titleValue,
        type: "workTask",
        span: totalMinutes || suggestionsTime,
        isComplete: false,
        category : category
      },
    });
    dispatchClock({type:'reset'})
    setSuggestionsTime(0);
    setTitleValue("");
    setCategory("")
  }

  return (
    <section className="sectionStyle p-4 flex flex-col justify-between">
      <div className="grid grid-cols-2 gap-3 mb-3">
        <Textarea setTitleValue={setTitleValue} titleValue={titleValue} />
        <form className="flex flex-col gap-1 justify-evenly">
          <div className="flexCenter">
            <ClockInput clock={clock} dispatchClock={dispatchClock} />
          </div>
          <div
            ref={ref}
            className="flex flex-col gap-1 justify-evenly"
          >
            <CheckBox onChange={timerCheckBoxHandler} value={"30"} name={"work"} checked={suggestionsTime=='30'}>
              30 min
            </CheckBox>
            <CheckBox onChange={timerCheckBoxHandler} value={"45"} name={"work"} checked={suggestionsTime=='45'}>
              45 min
            </CheckBox>
            <CheckBox onChange={timerCheckBoxHandler} value={"60"} name={"work"} checked={suggestionsTime=='60'}>
              60 min
            </CheckBox>
          </div>
        </form>
      </div>
        <span className="block w-full h-[1px] bg-myWhite bg-opacity-30 rounded-full"></span>
        <form className="py-2 flex gap-1 justify-evenly text-base flex-wrap w-full md:gap-0 ">
          <CheckBox onChange={(e)=>setCategory(e.target.value)} value={'PR'} checked={category === 'PR'} name={'category'}>programming</CheckBox>
          <CheckBox onChange={(e)=>setCategory(e.target.value)} value={'EN'} checked={category === 'EN'} name={'category'}>english</CheckBox>
          <CheckBox onChange={(e)=>setCategory(e.target.value)} value={'PG'} checked={category === 'PG'} name={'category'}>personal growth</CheckBox>
          <CheckBox onChange={(e)=>setCategory(e.target.value)} value={'EX'} checked={category === 'EX'} name={'category'}>exercise</CheckBox>
        </form>
      <BtnPrimary onClick={addTaskHandler} disabledStatus={disabledStatus}>
        Add work
      </BtnPrimary>
    </section>
  );
}
