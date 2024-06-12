import React, {useState} from "react";
import { useClubs } from "@/hooks/useClubs";
import FormikValues from "@/constants/FormikValues";
import { toast } from "react-hot-toast";
import CardList from "@/components/pure/CardList";
import { CLUB_INFO } from "@/constants/InfoCards";
import { Inputs } from "@/constants/Inputs";

const Clubes = () =>{


  const club = useClubs() 
  const { CLUB } = FormikValues()
  const { CLUB_INPUTS} = Inputs()

  const images = {
    form:"imagen",
    data:"logoUrl"
  }

  const onSubmit={
    add:({nombre, direccion, telefono, ciudad, pais, estadio,imagen})=>{
      const file = imagen[0]
      toast.promise(
        club.fetchAddClub(nombre, direccion, telefono, ciudad, pais, estadio,file),
        {
          loading: 'Añadiendo Club',
          success: ()=>{
            club.setOpenAdd(false)
            return'Club añadido con éxito 👌'},
          error:(error)=> error+"",
        }
      )
    },
    edit:({iditem,nombre, direccion, telefono, ciudad, pais, estadio,imagen})=>{
      const file = imagen[0]
      console.log("aaaa",iditem,nombre, direccion, telefono, ciudad, pais, estadio,file)
      toast.promise(
        club.fetchUpdateClub(iditem,nombre, direccion, telefono, ciudad, pais, estadio,file),
        {
          loading:"Editando Club",
          success:()=>{
            club.setOpenEdit(false)
            return "Club editado con éxito"
          },
          error:(error)=>error,
        }
      )

    },
    delete:(id)=>
    toast.promise(
      club.fetchDeleteClub(id),
      {
        loading:"Eliminando Club",
        success:"Club eliminado con éxito 👌",
        error: (error) => error
      }
    )

  }

  const titleEdit = "Editar Equipo"
  const descEdit = "Rellena los campos para editar tu equipo"
  const titleDelete = "Eliminar Equipo"
  const descDelete = "Esta acción eliminar al equipo "


  return(
    <>
      <CardList
        dataFromHook={club}
        data={club.clubes}
        titleAdd={"Añadir Club"}
        descAdd={"Completa los siguientes campos para poder agregar un club"}
        dataFormValues={CLUB}
        onSubmit={onSubmit}
        buscarPorId={club.fetchClubById}
        titleEdit={titleEdit}
        descEdit={descEdit}
        titleDelete={titleDelete}
        descDelete={descDelete}
        item_info={CLUB_INFO}
        images={images}
        inputs={CLUB_INPUTS}
        withLink
      />
    </>
  )

}

export default Clubes
