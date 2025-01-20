import React from "react";

export default function BtnPrimary({ children  ,className ,  disabledStatus = false , ...rest}) {
  return (
    <button {...rest}  disabled={disabledStatus}  className={`w-full flexCenter cursor-pointer enabled:active:scale-95 bg-primary bg-gradient-to-r from-myWhite/20 duration-75 font-bold text-base md:text-lg transition-all text-background rounded-lg overflow-hidden py-1 md:py-3 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}>
      {children}
    </button>
  );
}
