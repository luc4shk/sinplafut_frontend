import React, {useState}from "react";
import { addPlayer, deletePlayer, editPlayer, getPlayerById, linkPlayer, unlinkPlayer } from "@/service/jugador";

const usePlayers= () =>{

  const [isLoadingDetails, setIsLoadingDetails] = useState(false);
  const [openAdd,setOpenAdd]= useState(false)
  const [activos,setActivos]= useState(false)
  const [lesionados,setLesionados]= useState(false)
  const [values, setValues] = useState({});



  const fetchAddPlayer = async (nombre, apellido, fecha_nacimiento, documento, email, direccion, celular, numero_camiseta, tipo_sangre, nivel_hemoglobina, consumo_o2, lactato_sangre, equipoId) => {
    try {
      await addPlayer(nombre, apellido, fecha_nacimiento, documento, email, direccion, celular, numero_camiseta, tipo_sangre, nivel_hemoglobina, consumo_o2, lactato_sangre, equipoId);
    } catch (error) {
      console.error("Error adding player: ", error)
      throw error.response.data.message
    }
  };

  const fetchEditPlayer = async (playerId,nombre, apellido, fecha_nacimiento, documento, email, direccion, celular,estado, numero_camiseta, tipo_sangre, nivel_hemoglobina, consumo_o2, lactato_sangre, equipoId) => {
    try {
      await editPlayer(playerId,nombre, apellido, fecha_nacimiento, documento, email, direccion, celular,estado, numero_camiseta, tipo_sangre, nivel_hemoglobina, consumo_o2, lactato_sangre, equipoId);
    } catch (error) {
      console.error("Error editing player: ", error)
      throw error.response.data.message
    }
  };

  const fetchPlayerById = async (id) =>{
    setIsLoadingDetails(true);
    try{
      const response = await getPlayerById(id)
      console.log(response)
      setValues(response.data.data);
      setIsLoadingDetails(true)
    }
    catch(error){
      console.error("Error fetching player by id: ", error)
      throw error.response.data.message
    }finally{
      setIsLoadingDetails(false);
    }
  }

  const fetchUnlinkPlayer = async (id) =>{
    try{
      const response = await unlinkPlayer(id)
      return response

    }
    catch(error){
      console.log("Error unlinking player: ", error)
      throw error.response.data.message
    }
  }

  const fetchLinkPlayer = async (email,id) =>{
    try{
      const response = await linkPlayer(email,id)
      return response
    }
    catch(error){
      console.log("Error linking player: ", error)
      throw error.response.data.message
    }
  }

  const fetchDeletePlayer = async (id) =>{
    try{
      const response = await deletePlayer(id)
      return response
    }
    catch(error){
      console.log("Error deleting player: ", error)
      throw error.response.data.message
    }
  }

  return{
    fetchAddPlayer,
    fetchEditPlayer,
    fetchPlayerById,
    fetchUnlinkPlayer,
    fetchDeletePlayer,
    fetchLinkPlayer,
    isLoadingDetails,
    setOpenAdd,
    openAdd,
    activos,
    setActivos,
    lesionados,
    setLesionados,
    values
  }
}

export default usePlayers
