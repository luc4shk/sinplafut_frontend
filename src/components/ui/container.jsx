import React from "react";

const Container = ({width,children}) =>{
  return(
    <div className={`${width?width:"w-11/12"} m-auto my-8`}>{children}</div>
  )
}

export default Container
