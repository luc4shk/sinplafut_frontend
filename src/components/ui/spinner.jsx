import React from "react";
import { SyncLoader } from "react-spinners";

const Spinner = () =>{
  return(
    <SyncLoader
      color={"#666"}
      loading={true}
      cssOverride={{
        display: "flex",
        justifyContent:"center",
        alignItems:"center",
        borderColor: "red",
        width:"100%",
        height:"70vh"
      }}
      size={8}
      aria-label="Loading Spinner"
      data-testid="loader"
    />

  )
}

export default Spinner
