import React from "react";

export const ErrorMessage = ({children,validate, className}) =>{
  return(
    validate &&
    <div className={`${className} mt-2 text-sm text-red-500`}>{children}</div>
    
  )
}
