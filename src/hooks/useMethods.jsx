import {addMethod,deleteMethod,getAllMethods, getMethodById, updateMethod} from "@/service/metodo";
import { useEffect, useState } from "react"

export const useMethods = () =>{
  const [metodos, setMetodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);
  const [values, setValues] = useState({});
  const [openAdd,setOpenAdd]= useState(false)
  const [openEdit,setOpenEdit]= useState(false)

  useEffect(()=>{
    fetchMethod()
  },[])

  const fetchMethod = async () => {
    try {
      setIsLoading(true)
      const response = await getAllMethods();
      setMetodos(response.data.data);
    } catch (error) {
      throw error.response.data.message
    } finally {
      setIsLoading(false);
    }
  };

  const fetchAddMethod = async (nombre, descripcion, carga, intensidad, duracion) => {
    try {
      await addMethod(nombre, descripcion, carga, intensidad, duracion);
      await fetchMethod();
    } catch (error) {
      console.log(error)
      throw error
    }
  };

  const fetchUpdateMethod = async (nombre, descripcion, carga, intensidad, duracion) => {
    try {
      await updateMethod(nombre, descripcion, carga, intensidad, duracion);
      await fetchMethod();
    } catch (error) {
      throw error.response.data.message
    }
  };

  const fetchDeleteMethod = async (id) => {
    try {
      await deleteMethod(id);
      await fetchMethod();
    } catch (error) {
      throw error.response.data.message
    }
  };

  const fetchMethodById= async (id) => {
    setIsLoadingDetails(true);
    try {
      const response = await getMethodById(id);
      setValues(response.data.data);
      setIsLoadingDetails(true)
    } catch (error) {
      throw error.response.data.message
    } finally {
      setIsLoadingDetails(false);
    }
  };

return {
    metodos,
    isLoading,
    isLoadingDetails,
    values,
    fetchAddMethod,
    fetchUpdateMethod,
    fetchDeleteMethod,
    fetchMethodById,
    openAdd,
    setOpenAdd,
    openEdit,
    setOpenEdit,
  };

}
