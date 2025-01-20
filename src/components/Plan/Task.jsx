import React, { useContext, useState } from "react";
import { MyContext } from "../../services/MyContext";
import "./Style.css";
import Modal from "../Modal";
import RemoveAlert from "./RemoveAlert";
export default function Task({
  id,
  isComplete,
  title,
  type,
  span,
  editMode,
  removeMode,
  category,
  setTaskInfo,
}) {
  const [isDone, setIsDone] = useState(isComplete);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false)
  const [, dispatch] = useContext(MyContext);
  

  return (
    <>
    {
      isRemoveModalOpen &&
      <RemoveAlert divClickFunction={setIsRemoveModalOpen} openStatus={isRemoveModalOpen} id={id}/>
    }
    
    <div
      className={`${type} ${category} ${isDone && !(editMode || removeMode) ? "completedTask" : ""}`}
      onClick={() => {
        if(removeMode){
          setIsRemoveModalOpen(true)
        }else{
          if (type === "workTask") {
            if (!editMode) {
              setIsDone((prev) => !prev);
              dispatch({
                type: "toggelComplete",
                payload: id,
              });
            } else {
              setTaskInfo({id,isComplete ,title,type,span , category})
            }
          }
        }
      }}
    >
      <p className={removeMode && type === "offTask" ? '!text-primary hover:scale-110 cursor-pointer' : ''}>
        {title}
        <span
          className={`absolute z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 duration-150 transition-all  
          ${isDone && !(editMode || removeMode)
              ? "opacity-100 visible fill-myGreen"
              : "opacity-0 invisible fill-icon"
          }`}
        >
          <svg
            className="svgShadow h-10 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
          </svg>
        </span>
      </p>

      <span className={removeMode && type === "offTask" ? '!bg-primary ' : ''}>
        <svg className={removeMode && type === "offTask" ? '!fill-primary ' : ''} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
        </svg>
      </span>

      <i className="!hidden workTask offTask">
        این کد کصشر بوده و فقط بخاطر مشکل ریکت با تیلویند هست
      </i>
    </div>
    </>
  );
}
