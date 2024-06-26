import {addStaff, deleteStaff, getStaffById, getStaffByTeam, getStaffByType, linkStaff, unlinkStaff, updateStaff} from "@/service/cuerpoTecnico";
import React,{useState, useEffect}from "react";

const useStaff = (idTeam) =>{

  const [staff, setStaff] = useState([]);
  const [entrenador, setEntrenador] = useState(false);
  const [preparadorFisico, setPreparadorFisico] = useState(false);
  const [medico, setMedico] = useState(false);
  const [directorTecnico, setDirectorTecnico] = useState(false);
  const [asistenteTecnico, setAsistenteTecnico] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);
  const [values, setValues] = useState({});
  const [openAdd,setOpenAdd]= useState(false)
  const [openLink,setOpenLink]= useState(false)
  const [openEdit,setOpenEdit]= useState(false)

  useEffect(()=>{fetchStaffByTeam(idTeam)},[])

  const fetchStaffByTeam = async (idTeam) =>{
    try {
      setIsLoading(true)
      const response = await getStaffByTeam(idTeam);
      setStaff(response.data);
    } catch (error) {
      console.error("Error fetching Staff:", error);
      throw error.response.data.message
    } finally {
      setIsLoading(false);
    }

  }

  const fetchStaffById= async (idStaff) => {
    setIsLoadingDetails(true);
    try {
      const response = await getStaffById(idStaff);
      setValues(response.data.data);
      setIsLoadingDetails(true)
    } catch (error) {
      throw error.response.data.message
    } finally {
      setIsLoadingDetails(false);
    }
  };

  const fetchStaffByType = async (idTeam,tipo) =>{
    try {
      setIsLoading(true)
      const response = await getStaffByType(idTeam,tipo);
      setStaff(response.data);
    } catch (error) {
      console.error("Error fetching staff by type:", error);
      throw error.response.data.message
    } finally {
      setIsLoading(false);
    }

  }

  const fetchAddStaff = async (nombre, apellido, email, documento, fecha_nacimiento, telefono, idEquipo, tipo) => {
    try {
      await addStaff(nombre, apellido, email, documento, fecha_nacimiento, telefono, idEquipo, tipo);
      await fetchStaffByTeam(idTeam);
    } catch (error) {
      console.error("Error adding staff:", error);
      throw error.response.data.message
    }
  };

  const fetchUpdateStaff = async (idStaff, nombre, apellido, email, documento, fecha_nacimiento, telefono, idEquipo, tipo) => {
    try {
      await updateStaff(idStaff, nombre, apellido, email, documento, fecha_nacimiento, telefono, idEquipo, tipo);
      await fetchStaffByTeam(idTeam);
    } catch (error) {
      console.error(`Error updating staff with id ${id}:`, error);
      throw error.response.data.message
    }
  };

  const fetchUnlinkStaff = async (idStaff) =>{
    try{
      const response = await unlinkStaff(idStaff)
      await fetchStaffByTeam(idTeam);
      return response
    }
    catch(error){
      console.log("Error unlinking staff: ", error)
      throw error.response.data.message
    }
  }

  const fetchLinkStaff = async (email,equipoId) =>{
    try{
      const response = await linkStaff(email,equipoId)
      await fetchStaffByTeam(idTeam);
      return response
    }
    catch(error){
      console.log("Error linking staff: ", error)
      throw error.response.data.message
    }
  }

  const fetchDeleteStaff = async (idStaff) =>{
    try{
      const response = await deleteStaff(idStaff)
      await fetchStaffByTeam(idTeam);
      return response
    }
    catch(error){
      console.log("Error deleting staff: ", error)
      throw error.response.data.message
    }
  }


  return{
    values,
    entrenador,
    setEntrenador,
    preparadorFisico,
    setPreparadorFisico,
    medico,
    setMedico,
    directorTecnico,
    setDirectorTecnico,
    asistenteTecnico,
    setAsistenteTecnico,
    isLoading,
    openLink,
    openAdd,
    openEdit,
    setOpenLink,
    setOpenAdd,
    setOpenEdit,
    isLoadingDetails,
    staff,
    fetchStaffByTeam,
    fetchStaffById,
    fetchStaffByType,
    fetchAddStaff,
    fetchUpdateStaff,
    fetchUnlinkStaff,
    fetchLinkStaff,
    fetchDeleteStaff
  }

}

export default useStaff
