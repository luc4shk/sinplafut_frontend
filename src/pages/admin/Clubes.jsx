import React, {useState} from "react";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { useClubs } from "@/hooks/useClubs";
import FormClub from "@/components/forms/FormClub";
import FormikValues from "@/constants/FormikValues";
import { toast } from "react-hot-toast";
import ClubCard from "@/components/pure/ClubCard";
import SkeletonCard from "@/components/pure/SkeletonCard";
import CardList from "@/components/pure/CardList";
import { CLUB_INFO } from "@/constants/InfoCards";
import { Inputs } from "@/constants/Inputs";

const Clubes = () =>{


  const club = useClubs() 
  const { CLUB } = FormikValues()
  const { CLUB_INPUTS} = Inputs()

  const onSubmit = ({nombre, direccion, telefono, ciudad, pais, estadio,imagen})=>{
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
  }

  const onSubmitEdit = ({iditem,nombre, direccion, telefono, ciudad, pais, estadio,imagen})=>{
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

  }

  const onSubmitDelete = (id)=>
    toast.promise(

      club.fetchDeleteClub(id),
      {
        loading:"Eliminando Club",
        success:"Club eliminado con éxito 👌",
        error: (error) => error
      }
    )

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
          onSubmitEdit={onSubmitEdit}
          onSubmitDelete={onSubmitDelete}
          buscarPorId={club.fetchClubById}
          titleEdit={titleEdit}
          descEdit={descEdit}
          titleDelete={titleDelete}
          descDelete={descDelete}
          item_info={CLUB_INFO}
          imageName="logoUrl"
          inputs={CLUB_INPUTS}
    />
    {/*
    <>
      <Container>
        <Dialog open={openAdd} onOpenChange={setOpenAdd}>
          <DialogTrigger asChild>
            <Button onClick={()=>setOpenAdd(true)}variant="outline"className="hover:bg-zinc-100 md:w-60 w-full">Añadir Club</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Añadir Club</DialogTitle>
              <DialogDescription>
                Completa los siguientes campos para poder agregar un club
              </DialogDescription>
            </DialogHeader>
            <FormClub  
              onSubmit={(
                {nombre, direccion, telefono, ciudad, pais, estadio,imagen}
              )=>{
                const file = imagen[0]
                toast.promise(
                  fetchAddClub(nombre, direccion, telefono, ciudad, pais, estadio,file),
                  {
                    loading: 'Añadiendo Club',
                    success: ()=>{
                      setOpenAdd(false)
                      return'Club añadido con éxito 👌'},
                    error:(error)=> error+"",
                  }
                )
              }}
              initialValues={CLUB.add.initialValues}
              validationSchema={CLUB.add.validationSchema}
            />
          </DialogContent>
        </Dialog>
        <div className="grid  mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            isLoading ? 
              Array.from({length:8}).map((item,i)=>(
                <SkeletonCard key={i}/>
              ))
              :
              clubes.map((club)=>{
                return(
                  <ClubCard 
                    key={club.id}  
                    club={club} 
                    eliminar={fetchDeleteClub} 
                    buscarPorId={fetchClubById} 
                    editar={fetchUpdateClub}
                    values={values}
                    isLoadingDetails={isLoadingDetails}
                  /> 
                )
              })
          }
        </div>
      </Container>
      */}
</>
  )

}

export default Clubes
