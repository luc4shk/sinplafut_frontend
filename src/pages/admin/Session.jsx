import React from "react";
import {useSession}from "@/hooks/useSession";
import Container from "@/components/ui/container";
import { DataTable } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import { Inputs } from "@/constants/Inputs";
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
import FormikValues from "@/constants/FormikValues";
import FormSesion from "@/components/forms/FormSesion";
import { toast } from "react-hot-toast";
import useTeams from "@/hooks/useTeams";
import {Trash2} from "lucide-react"


const Session = () =>{
  const sesion = useSession()
  const team = useTeams()
  const {SESION}= FormikValues()
  const {SESION_INPUTS} = Inputs()

  const parseTipoSesion = {
    aprendizaje_tecnico:"Aprendizaje Técnico",
    acondicionamiento_fisico:"Acondicionamiento Físico",
    control:"Control",
    desarrollo:"Desarrollo",
    recuperacion:"Recuperación",
    mixto:"Mixto"

  }

  const findTeamName = (teamsToFind,equipoId)=>{
    return teamsToFind && teamsToFind.find(equipo=>equipo.id===equipoId)?.nombre
  }

  const parseData = (sesiones) =>{
    return sesiones.map(sesion => {
      const nuevaSesion = {...sesion}
      nuevaSesion.tipo_sesion= parseTipoSesion[sesion.tipo_sesion]
      nuevaSesion.metodos = sesion.metodos.map(metodo =>metodo.nombre).toString().replaceAll(","," - ")
      nuevaSesion.equipoId = findTeamName(team.teams,sesion.equipoId)
      return nuevaSesion
    })
  } 

  const parseMetodos = (metodos) =>{
    return metodos.map((item)=>JSON.parse(item))
  }

  const parseDate = (date) =>{
    const dateParts = date.split("-")
    return `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`
  }

  const onSubmit ={
    add:({nombre, descripcion, fecha_inicio, hora, duracion, tipo, equipoId, metodos})=>{
      const metodosFinal = parseMetodos(metodos)
      const fecha_inicio_final= parseDate(fecha_inicio)
      console.log(nombre, descripcion, fecha_inicio_final, hora, duracion, tipo, equipoId, metodosFinal),
        toast.promise(
          sesion.fetchAddSession(nombre, descripcion, fecha_inicio_final, hora, duracion, tipo, equipoId, metodosFinal),
          {
            loading: 'Añadiendo Sesión',
            success: ()=>{
              sesion.setOpenAdd(false)
              return'Sesión añadida con éxito 👌'},
            error:(error)=> error+"",
          }
        )
    },
    delete:(id)=>{
      toast.promise(
        sesion.fetchDeleteSession(id),
        {
          loading:"Eliminando Sesión",
          success:"Sesión eliminada con éxito",
          error:(error)=>error,
        }
      )

    }
  }

  const columns = [
    {
      accessorKey: "nombre",
      header: "Nombre",
    },
    {
      accessorKey: "descripcion",
      header: "Descripción",
    },
    {
      accessorKey: "fecha_inicio",
      header: "Fecha de Inicio",
    },
    {
      accessorKey: "hora",
      header: "Hora",
    },
    {
      accessorKey: "duracion",
      header: "Duración",
    },
    {
      accessorKey: "tipo_sesion",
      header: "Tipo",
    },
    {
      accessorKey: "equipoId",
      header: "Equipo",
    },
    {
      accessorKey: "metodos",
      header: "Metodos",
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({row}) => {
  const sesion = useSession()
        return (
          <AlertDialog
          >
            <AlertDialogTrigger 
              onClick={()=>sesion.fetchSessionById(row.original.id)}
              className="text-sm cursor-default px-2 py-1.5 text-left hover:bg-slate-100 cursor-pointer poiw-full rounded-sm"><Trash2 className="text-slate-600"/></AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>{"¿Estás seguro?"}</AlertDialogTitle>
                <AlertDialogDescription>
                  Se eliminará la sesión <b>{row.original.nombre}</b>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction
                  onClick={()=>onSubmit.delete(row.original.id)}
                >Eliminar</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )
      }
    }
  ]
  return(
    <Container>
      <Dialog open={sesion.openAdd} onOpenChange={sesion.setOpenAdd}>
        <DialogTrigger asChild>
          <Button onClick={()=>sesion.setOpenAdd(true)}  variant="outline"className="hover:bg-zinc-100 md:w-60 w-full">Añadir Sesión</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Añadir Sesión</DialogTitle>
            <DialogDescription>
              Rellena los campos para agregar tu sesión
            </DialogDescription>
          </DialogHeader>
          <FormSesion
            onSubmit={onSubmit.add}
            initialValues={SESION?.add.initialValues}
            validationSchema={SESION?.add.validationSchema}
            inputs={SESION_INPUTS}
          />
        </DialogContent>
      </Dialog>

      <DataTable columns={columns} data={parseData(sesion.sessions)} placeholderSearch={"Buscar por nombre"} searchName={"nombre"}/>
    </Container>
  )
}

export default Session
