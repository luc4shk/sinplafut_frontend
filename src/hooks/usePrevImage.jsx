import React, {useState, useEffect}from "react";

export const usePrevImage = (watch,isEdit,name) =>{
  const file = watch(name)
  const [prev, setPrev] = useState(file)
  const [first, setFirst] = useState(file)

  useEffect(()=>{
    getUrl(file)
  },[file])

  const getUrl = (file) =>{
    console.log(file)
    if(typeof file !== 'string'){
      if(file && file[0]){
        const newUrl = URL.createObjectURL(file[0]);
        setPrev(newUrl)
      }else if(isEdit){
          setPrev(first)
      }else{
        setPrev(null)
      }

    }
  } 

  return{
      prev
    }
}
