import React, {useEffect, useState} from "react";
import { getAllTeams, addTeam, updateTeam, deleteTeam, getTeamById} from "@/service/team";

const useTeams = () =>{

  const [teams, setTeams] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);
  const [values, setValues] = useState({});
  const [openAdd,setOpenAdd]= useState(false)
  const [openEdit,setOpenEdit]= useState(false)

  useEffect(()=>{
    fetchTeam()
  },[])

  const fetchTeam = async () =>{
      try {
      setIsLoading(true)
      const response = await getAllTeams();
      setTeams(response.data.data);
    } catch (error) {
      console.error("Error fetching teams:", error);
      throw error.response.data.message
    } finally {
      setIsLoading(false);
    }
  
  } 

  const fetchAddTeam = async (nombre, telefono, categoria, clubId, escudoTeam) => {
    try {
      await addTeam(nombre, telefono, categoria, clubId, escudoTeam);
      await fetchTeam();
    } catch (error) {
      console.error("Error adding team:", error);
      throw error.response.data.message
    }
  };

  const fetchUpdateTeam = async (id,nombre, telefono, categoria, clubId, escudoTeam)=>{
    try{
      await updateTeam(id,nombre, telefono, categoria, clubId, escudoTeam)
      await fetchTeam()
    }catch(error){
      console.log("Error updating team:", error)
      throw error.response.data.message
    }
  }

  const fetchDeleteTeam = async (id) =>{
    try{
      await deleteTeam(id)
      await fetchTeam()
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



  return{
    teams,
    isLoading,
    isLoadingDetails,
    values,
    fetchAddTeam,
    fetchUpdateTeam,
    fetchDeleteTeam,
    fetchTeamById,
    openAdd,
    setOpenAdd,
    openEdit,
    setOpenEdit,

  }


}

export default useTeams
