import {deletePlayerLesion, getPlayerLesionById, getPlayerLesions, linkPlayerLesion, updatePlayerLesion} from "@/service/jugador";
import React, {useEffect, useState} from "react";

const usePlayerLesion = (idPlayer) =>{

  const [playerLesions, setPlayerLesions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);
  const [values, setValues] = useState({});
  const [openAdd,setOpenAdd]= useState(false)
  const [openEdit,setOpenEdit]= useState(false)


  useEffect(()=>{fetchPlayerLesions(idPlayer)},[])

  const fetchPlayerLesions = async (id) =>{
    try{
      setIsLoading(true)
      const response = await getPlayerLesions(id)
      setPlayerLesions(response.data.data)
    }
    catch(error){
      console.error(`Error fetching player lesions:`, error);
      throw error.response.data.message
    }finally{
      setIsLoading(false)
    }
  }

  const fetchPlayerLesionById = async (id) => {
    setIsLoadingDetails(true);
    try {
      const response = await getPlayerLesionById(id);
      setValues(response.data.data);
      setIsLoadingDetails(true)
    } catch (error) {
      throw error.response.data.message
    } finally {
      setIsLoadingDetails(false);
    }
  };

  const fetchLinkPlayerLesion = async (idLesion, fecha_inicio, fecha_fin) =>{
    try{
      const response = await linkPlayerLesion(idPlayer,idLesion,fecha_inicio,fecha_fin)
      await fetchPlayerLesions(idPlayer)
      return response
    }
    catch(error){
      console.error(`Error linking a lesion:`, error);
      throw error.response.data.message
    }
  }

  const fetchUpdatePlayerLesion = async (idLesionUrl,idLesion, fecha_inicio, fecha_fin) => {
    try{
      const response = await updatePlayerLesion(idLesionUrl,idLesion,fecha_inicio,fecha_fin)
      await fetchPlayerLesions(idPlayer)
      return response
    }
    catch(error){
      console.error(`Error updating player lesion`,error)
      throw error.response.data.message
    }
  }

  const fetchDeletePlayerLesion = async (id) => {
    try{
      const response = await deletePlayerLesion(id)
      await fetchPlayerLesions(idPlayer)
      return response
    }
    catch(error){
      console.error(`Error deleting player lesion`,error)
      throw error.response.data.message

    }
  }

  return{
    playerLesions,
    isLoading,
    isLoadingDetails,
    values,
    openAdd,
    openEdit,
    fetchPlayerLesions,
    fetchLinkPlayerLesion,
    fetchUpdatePlayerLesion,
    fetchDeletePlayerLesion,
    fetchPlayerLesionById,
    setOpenAdd,
    setOpenEdit
  }


}


export default usePlayerLesion
