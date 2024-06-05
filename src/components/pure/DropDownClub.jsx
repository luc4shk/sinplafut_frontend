import React, {useState} from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import FormClub from "../forms/FormClub";
import FormikValues from "@/constants/FormikValues";
import { useClubs } from "@/hooks/useClubs";
import {EllipsisVertical} from "lucide-react"
import { toast } from "react-hot-toast";

const DropDownClub = ({idClub, editar, eliminar, buscarPorId,values, isLoadingDetails}) =>{


  const {openEdit, setOpenEdit} = useClubs()
  const {CLUB} = FormikValues()

  return(
    <DropdownMenu >
      <DropdownMenuTrigger className="w-8 h-8">
        <div className="relative top-0 flex items-center cursor-pointer right-0 hover:bg-zinc-50 rounded-md h-8 p-2">
          <EllipsisVertical size={15}/>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" md:mr-[55px]  mr-[35px]">
        <DropdownMenuLabel>Acciones</DropdownMenuLabel>
        <DropdownMenuSeparator/>
        <Dialog  
          open={openEdit}
          onOpenChange={setOpenEdit}
        >
          <DialogTrigger onClick={()=>{
            buscarPorId(idClub)
          }} className="text-sm cursor-default px-2 py-1.5 text-left hover:bg-slate-100 w-full rounded-sm">Editar</DialogTrigger>
          <DialogContent className="max-w-[425px]">
            {
              isLoadingDetails? <div>Cargando...</div>:(
                <>
                  <DialogHeader>
                    <DialogTitle>Editar Club</DialogTitle>
                    <DialogDescription>
                      Haz cambios al club aquí. Dale en guardar cuando estes listo.
                    </DialogDescription>
                  </DialogHeader>
                  <FormClub
                    initialValues={CLUB.edit.initialValues(values)}
                    validationSchema={CLUB.edit.validationSchema}
                    onSubmit={({nombre, direccion, telefono, ciudad, pais, estadio,imagen})=>{
                      const file = imagen[0]
                      console.log(nombre, direccion, telefono, ciudad, pais, estadio,file)
                      toast.promise(
                        editar(idClub,nombre, direccion, telefono, ciudad, pais, estadio,file),
                        {
                          loading:"Editando Club",
                          success:()=>{

                           setOpenEdit(false)
                           return "Club editado con éxito"
                          },
                          error:(error)=>error,
                        }
                      )

                    }}
                    isEdit
                  />
                </>
              )}
          </DialogContent>
        </Dialog>
        <AlertDialog
        >
          <AlertDialogTrigger 
          onClick={()=>buscarPorId(idClub)}
          className="text-sm cursor-default px-2 py-1.5 text-left hover:bg-slate-100 w-full rounded-sm">Eliminar</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>¿Estas seguro?</AlertDialogTitle>
              <AlertDialogDescription>
                Esta accion eliminará al club <b>{values.nombre}</b>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction
            onClick={()=>
                toast.promise(

                  eliminar(idClub),
                  {
                    loading:"Eliminando Club",
                    success:"Club eliminado con éxito 👌",
                    error: (error) => error
                  }
                )
                }
              >Eliminar</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

      </DropdownMenuContent>
    </DropdownMenu>

  )
}

export default DropDownClub
