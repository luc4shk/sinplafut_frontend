import React,{useEffect, useState} from "react";
import {addSession, deleteSession, getAllSessions, getSessionById, getSessionMethods} from "@/service/sesion";


export const useSession = () =>{
  const [sessions, setSessions] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);
  const [values, setValues] = useState({});
  const [openAdd,setOpenAdd]= useState(false)
  const [openEdit,setOpenEdit]= useState(false)

  useEffect(()=>{
    fetchSession()
  },[])


  const fetchSession = async () =>{
      try {
      setIsLoading(true)
      const response = await getAllSessions();
      setSessions(response.data.data);
    } catch (error) {
      throw error.response.data.message
    } finally {
      setIsLoading(false);
    }
  
  } 

  const fetchAddSession = async (nombre, descripcion, fecha_inicio, hora, duracion, tipo, equipoId, metodos) => {
    try {
      await addSession(nombre, descripcion, fecha_inicio, hora, duracion, tipo, equipoId, metodos);
      await fetchSession();
    } catch (error) {
      throw error.response.data.message
    }
  };

  const fetchDeleteSession = async (id) =>{
    try{
      await deleteSession(id)
      await fetchSession()
    }catch(error){
      throw error.response.data.message
    }
  }


  const fetchSessionById = async (id) =>{
    setIsLoadingDetails(true);
    try {
      const response = await getSessionById(id);
      setValues(response.data.data);
      console.log(response.data.data)
      setIsLoadingDetails(true)
    } catch (error) {
    } finally {
      setIsLoadingDetails(false);
    }

  }

  const fetchSessionMethods = async (id) =>{
    setIsLoadingDetails(true);
    try {
      const response = await getSessionMethods(id);
      setIsLoadingDetails(true)
      return response.data.data
    } catch (error) {
    } finally {
      setIsLoadingDetails(false);
    }

  }

  return{
    sessions,
    isLoading,
    isLoadingDetails,
    values,
    fetchSession,
    fetchSessionById,
    fetchAddSession,
    fetchDeleteSession,
    fetchSessionMethods,
    openAdd,
    setOpenAdd,
    openEdit,
    setOpenEdit
  

}
}
