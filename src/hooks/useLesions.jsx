import {addLesion, deleteLesion, getAllLesions, getLesionById, updateLesion} from "@/service/lesion";

import React,{useEffect, useState}from "react";

const useLesions = () =>{
  const [lesions, setLesions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);
  const [values, setValues] = useState({});
  const [openAdd,setOpenAdd]= useState(false)
  const [openEdit,setOpenEdit]= useState(false)

  useEffect(()=>{fetchLesions()},[])

  const fetchLesions = async () => {
    try {
      setIsLoading(true)
      const response = await getAllLesions();
      setLesions(response.data.data);
    } catch (error) {
      console.error("Error fetching lesions:", error);
      throw error.response.data.message
    } finally {
      setIsLoading(false);
    }
  };

  const fetchLesionById = async (id) => {
    setIsLoadingDetails(true);
    try {
      const response = await getLesionById(id);
      console.log("lesion", id, response.data.data)
      setValues(response.data.data);

      setIsLoadingDetails(true)
    } catch (error) {
      throw error.response.data.message
    } finally {
      setIsLoadingDetails(false);
    }
  }


  const fetchAddLesion = async (nombre, tratamiento, observaciones) =>{
    try{
      const response = await addLesion(nombre, tratamiento, observaciones)
      await fetchLesions()
      return response 
    }
    catch(error){
      console.error("Error adding lesion:", error);
      throw error.response.data.message
    }
  }

  const fetchUpdateLesion = async (id, nombre, tratamiento, observaciones) => {
    try {
      await updateLesion(id, nombre, tratamiento, observaciones);
      await fetchLesions();
    } catch (error) {
      console.error(`Error updating lesion with id ${id}:`, error);
      throw error.response.data.message
    }
  }

  const fetchDeleteLesion = async (id) =>{
    try {
      await deleteLesion(id);
      await fetchLesions();
    } catch (error) {
      console.error(`Error deleting lesion with id ${id}:`, error);
      throw error.response.data.message
    }

  }

  


  return{
    lesions,
    isLoading,
    isLoadingDetails,
    values,
    setOpenAdd,
    openAdd,
    fetchAddLesion,
    fetchLesionById,
    fetchUpdateLesion,
    openEdit,
    setOpenEdit,
    fetchDeleteLesion
  }

}

export default useLesions
