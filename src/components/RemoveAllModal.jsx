import React from "react";
import Modal from "./Modal";
import BtnPrimary from "./BtnPrimary";
import { useContext } from "react";
import { MyContext } from "../services/MyContext";

export default function RemoveAllModal({ openStatus, divClickFunction }) {
    const [,dispatch] = useContext(MyContext)
  return (
    <Modal openStatus={openStatus} divClickFunction={divClickFunction}>
      <h4 className="text-myWhite text-2xl pe-10 pb-5">Are you shur?</h4>
      <div className="flex gap-2">
        <BtnPrimary onClick={()=>divClickFunction(false)}>No</BtnPrimary>
        <BtnPrimary onClick={()=>dispatch({type:'cleanAll'})}>Yes</BtnPrimary>
      </div>
    </Modal>
  );
}
