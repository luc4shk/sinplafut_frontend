import { useEffect } from "react";
import { useClubs }from "@/hooks/useClubs";
import useTeams from "@/hooks/useTeams";
import { useParams } from "react-router-dom";
import FormikValues from "@/constants/FormikValues";
import { Inputs } from "@/constants/Inputs";
import { toast } from "react-hot-toast";

const useClubDetails = () => {
  const { id } = useParams();
  const club = useClubs();
  const team = useTeams();
  const { TEAM } = FormikValues();
  const { TEAM_INPUTS } = Inputs();

  useEffect(() => {
    club.fetchClubById(id);
    club.fetchTeamsById(id);
  }, [team.teams]);


  const onSubmit = {
    add: ({nombre,telefono,categoria,club,escudo}) =>{
      const file = escudo[0]
      toast.promise(
        team.fetchAddTeam(nombre, telefono, categoria, club,file),
        {
          loading: 'Añadiendo Equipo',
          success: ()=>{
            team.setOpenAdd(false)
            return'Equipo añadido con éxito 👌'},
          error:(error)=> error+"",
        }
      )
    },
    edit:({iditem,nombre, telefono, categoria, club, escudo})=>{
      const file = escudo[0]
      toast.promise(
        team.fetchUpdateTeam(iditem,nombre,telefono, categoria, club,file),
        {
          loading:"Editando Equipo",
          success:()=>{
            team.setOpenEdit(false)
            return "Equipo editado con éxito"
          },
          error:(error)=>error,
        }
      )
    },
    delete: (id) =>{
      toast.promise(
        team.fetchDeleteTeam(id),
        {
          loading:"Eliminando Equipo",
          success:"Equipo eliminado con éxito 👌",
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
    club, 
    team, 
    onSubmit, 
    formTexts, 
    images, 
    TEAM, 
    TEAM_INPUTS };
};

export default useClubDetails;

