import React from "react";
import { useContext } from "react";
import Modal from "../Modal";
import BtnPrimary from "../BtnPrimary";
import { MyContext } from "../../services/MyContext";

export default function RemoveAlert({ openStatus, divClickFunction , id }) {
    const [,dispatch] = useContext(MyContext)
  return (
    <Modal openStatus={openStatus} divClickFunction={()=>divClickFunction(false)}>
      <h4 className="text-myWhite text-2xl pe-10 pb-5">Are you shur?</h4>
      <div className="flex gap-2">
        <BtnPrimary onClick={()=>divClickFunction(false)}>No</BtnPrimary>
        <BtnPrimary onClick={()=>dispatch({type:'removeTaskViaID' , payload :id })}>Yes</BtnPrimary>
      </div>
    </Modal>
  );
}
