import React from "react";
import BtnPrimary from "./BtnPrimary";
import RemoveAllModal from "./RemoveAllModal";
import { useState } from "react";

export default function RemoveAllBtn() {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <BtnPrimary onClick={()=>setIsOpen(true)} className={"myShadow"}>Remove All</BtnPrimary>
      <RemoveAllModal openStatus={isOpen}  divClickFunction={()=>setIsOpen(false)}></RemoveAllModal>
    </>
  );
}
