import { useState, useEffect } from 'react';
import { getAllClubs, getClubById, updateClub, deleteClub, addClub, getTeamsById } from '@/service/club';

export const useClubs = () => {
  const [clubes, setClubes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);
  const [values, setValues] = useState({});
  const [clubTeams, setClubTeams] = useState([]);
  const [openAdd,setOpenAdd]= useState(false)
  const [openEdit,setOpenEdit]= useState(false)

 
 useEffect(() => {
    fetchClub();
  }, []);


  const fetchClub = async () => {
    try {
      setIsLoading(true)
      const response = await getAllClubs();
      setClubes(response.data.data);
    } catch (error) {
      console.error("Error fetching clubs:", error);
      throw error.response.data.message
    } finally {
      setIsLoading(false);
    }
  };

  const fetchAddClub= async (nombre, direccion, telefono, ciudad, pais, estadio,imagen) => {
    try {
      await addClub(nombre, direccion, telefono, ciudad, pais, estadio,imagen);
      await fetchClub();
    } catch (error) {
      console.error("Error adding club:", error);
      throw error.response.data.message
    }
  };



  const fetchUpdateClub = async (id,nombre, direccion, telefono, ciudad, pais, estadio,imagen) => {
    try {
      await updateClub(id,nombre, direccion, telefono, ciudad, pais, estadio,imagen);
      await fetchClub();
    } catch (error) {
      console.error(`Error updating club with id ${id}:`, error);
      throw error.response.data.message
    }
  };



  const fetchDeleteClub = async (id) => {
    try {
      await deleteClub(id);
      await fetchClub();
    } catch (error) {
      console.error(`Error deleting club with id ${id}:`, error);
      throw error.response.data.message
    }
  };

  const fetchClubById= async (id) => {
    setIsLoadingDetails(true);
    try {
      const response = await getClubById(id);
      setValues(response.data.data);
      console.log(response.data.data)
      setIsLoadingDetails(true)
    } catch (error) {
      throw error.response.data.message
    } finally {
      setIsLoadingDetails(false);
    }
  };

  const fetchTeamsById= async (id) => {
    setIsLoadingDetails(true);
    try {
      const response = await getTeamsById(id);
      setClubTeams(response.data.data);
      console.log(response.data.data)
      setIsLoadingDetails(true)
    } catch (error) {
      console.log(error)
      throw error.response.data.message
    } finally {
      setIsLoadingDetails(false);
    }
  };


  return {
    clubes,
    isLoading,
    isLoadingDetails,
    values,
    fetchAddClub,
    fetchUpdateClub,
    fetchDeleteClub,
    fetchTeamsById,
    fetchClubById,
    openAdd,
    setOpenAdd,
    openEdit,
    setOpenEdit,
    clubTeams
  };
};

