import React from "react";
import CardList from "@/components/pure/CardList";
import Container from "@/components/ui/container";
import useTeams from "@/hooks/useTeams";
import FormikValues from "@/constants/FormikValues";
import { toast } from "react-hot-toast";
import { TEAM_INFO } from "@/constants/InfoCards";
import { Inputs } from "@/constants/Inputs";

const Teams = () =>{

  const team = useTeams()
  const {TEAM} = FormikValues()
  const {TEAM_INPUTS} = Inputs()

  const onSubmit = ({nombre,telefono,categoria,club,escudo}) =>{
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
  }

  const onSubmitEdit = ({iditem,nombre, telefono, categoria, club, escudo})=>{
    const file = escudo[0]
    console.log(iditem,nombre, telefono, categoria, club, escudo)
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
  }

  const onSubmitDelete = (id) =>{
    toast.promise(

      team.fetchDeleteTeam(id),
      {
        loading:"Eliminando Equipo",
        success:"Equipo eliminado con éxito 👌",
        error: (error) => error
      }
    )

  }

  const titleEdit = "Editar Equipo"
  const descEdit = "Rellena los campos para editar tu equipo"
  const titleDelete = "Eliminar Equipo"
  const descDelete = "Esta acción eliminar al equipo "

  return(
        <CardList 
          dataFromHook={team}
          data={team.teams}
          titleAdd={"Añadir Equipo"}
          descAdd={"Completa los siguientes campos para poder agregar un equipo"}
          dataFormValues={TEAM}
          onSubmit={onSubmit}
          onSubmitEdit={onSubmitEdit}
          onSubmitDelete={onSubmitDelete}
          buscarPorId={team.fetchTeamById}
          titleEdit={titleEdit}
          descEdit={descEdit}
          titleDelete={titleDelete}
          descDelete={descDelete}
          item_info={TEAM_INFO}
          imageName="escudo"
          inputs={TEAM_INPUTS}
        />
  )
}
export default Teams
