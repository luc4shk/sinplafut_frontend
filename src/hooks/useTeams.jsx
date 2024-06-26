import React, {useEffect, useState} from "react";
import { getAllTeams, addTeam, updateTeam, deleteTeam, getTeamById, getPlayersByTeam, getPlayersByState} from "@/service/team";

const useTeams = () =>{
  


  const [teams, setTeams] = useState([])
  const [teamPlayers, setTeamPlayers] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);
  const [values, setValues] = useState({});
  const [openAdd,setOpenAdd]= useState(false)
  const [openEdit,setOpenEdit]= useState(false)

  

  const fetchAddTeam = async (nombre, telefono, categoria, clubId, escudoTeam) => {
    try {
      await addTeam(nombre, telefono, categoria, clubId, escudoTeam);
    } catch (error) {
      console.error("Error adding team:", error);
      throw error.response.data.message
    }
  };

  const fetchUpdateTeam = async (id,nombre, telefono, categoria, clubId, escudoTeam)=>{
    try{
      await updateTeam(id,nombre, telefono, categoria, clubId, escudoTeam)
    }catch(error){
      console.log("Error updating team:", error)
      throw error.response.data.message
    }
  }

  const fetchDeleteTeam = async (id) =>{
    try{
      await deleteTeam(id)
    }catch(error){
      console.log("Error deleting team:", error)
      throw error.response.data.message
    }
  }

  const fetchTeamById = async (id) =>{
    setIsLoadingDetails(true);
    try {
      const response = await getTeamById(id);
      setValues(response.data.data);
      setIsLoadingDetails(true)
    } catch (error) {
      console.error(`Error fetching team with id ${id}:`, error);
    } finally {
      setIsLoadingDetails(false);
    }

  }

  const fetchPlayersByTeam = async (id) =>{
    try {
      setIsLoading(true)
      const response = await getPlayersByTeam(id);
      setTeamPlayers(response.data.data);
    } catch (error) {
      console.error("Error fetching players by team:", error);
      throw error.response.data.message
    } finally {
      setIsLoading(false);
    }

  } 

  const fetchPlayersByState = async (id,estado) =>{
    try {
      setIsLoading(true)
      const response = await getPlayersByState(id,estado);
      setTeamPlayers(response.data.data);
    } catch (error) {
      console.error("Error fetching players by state:", error);
      throw error.response.data.message
    } finally {
      setIsLoading(false);
    }

  } 


  return{
    teams,
    isLoading,
    isLoadingDetails,
    values,
    fetchAddTeam,
    fetchUpdateTeam,
    fetchDeleteTeam,
    fetchTeamById,
    fetchPlayersByTeam,
    fetchPlayersByState,
    openAdd,
    setOpenAdd,
    openEdit,
    setOpenEdit,
    teamPlayers,
    setTeamPlayers
    

  }


}

export default useTeams
