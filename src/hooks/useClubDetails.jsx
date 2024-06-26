import { useEffect, useState } from "react";
import { useClubs }from "@/hooks/useClubs";
import useTeams from "@/hooks/useTeams";
import { useParams } from "react-router-dom";
import FormikValues from "@/constants/FormikValues";
import { Inputs } from "@/constants/Inputs";
import { toast } from "react-hot-toast";

const useClubDetails = () => {
  const { id } = useParams();
  const clubHook = useClubs();
  const team = useTeams();
  const { TEAM } = FormikValues();
  const { TEAM_INPUTS } = Inputs();
  const [isLoading,setIsLoading] = useState(true)

  useEffect(() => {
    
    clubHook.fetchClubById(id);
    clubHook.fetchTeamsById(id);
    setIsLoading(false)
  }, []);


  const onSubmit = {
    add: ({nombre,telefono,categoria,club,escudo}) =>{
      const file = escudo[0]
      setIsLoading(true)
      toast.promise(
        team.fetchAddTeam(nombre, telefono, categoria, id,file),
        {
          loading: 'Añadiendo Equipo',
          success: ()=>{
            team.setOpenAdd(false)
            clubHook.fetchTeamsById(id)
            setIsLoading(false)
            return 'Equipo añadido con éxito 👌'},
          error:(error)=> error+"errororroororr",
        }
      )
    },
    edit:({iditem,nombre, telefono, categoria, club, escudo})=>{
      const file = escudo[0]
      console.log(iditem,nombre,telefono,categoria,id,file)
      setIsLoading(true)
      toast.promise(
        team.fetchUpdateTeam(iditem,nombre,telefono, categoria, id,file),
        {
          loading:"Editando Equipo",
          success:()=>{
            clubHook.fetchTeamsById(id)
            team.setOpenEdit(false)
            setIsLoading(false)
            return "Equipo editado con éxito"
          },
          error:(error)=>error,
        }
      )
    },
    delete: (id_team) =>{
      setIsLoading(true)
      toast.promise(
        team.fetchDeleteTeam(id_team),
        {
          loading:"Eliminando Equipo",
          success:()=>{
            clubHook.fetchTeamsById(id)
            setIsLoading(false)
            return "Equipo eliminado con éxito 👌"},
          error: (error) => error
        }
      )

    }
  }


  const formTexts = {
    titleAdd: "Añadir Equipo",
    descAdd: "Completa los siguientes campos para poder agregar un equipo",
    titleEdit: "Editar Equipo",
    descEdit: "Rellena los campos para editar tu equipo",
    titleDelete: "Eliminar Equipo",
    descDelete: "Esta acción eliminará al equipo "
  };

  const images = {
    form: "escudo",
    data: "escudo"
  };

  return { 
    clubHook, 
    team, 
    isLoading,
    onSubmit, 
    formTexts, 
    images, 
    TEAM, 
    TEAM_INPUTS };
};

export default useClubDetails;

