import React from "react";
import {useSession}from "@/hooks/useSession";
import Container from "@/components/ui/container";
import { DataTable } from "@/components/ui/data-table";

const Session = () =>{
  const sesion = useSession()
  console.log(sesion)

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
      accessorKey: "tipo",
      header: "Tipo",
    },
    {
      accessorKey: "equipo",
      header: "Equipo",
    },
    {
      accessorKey: "metodos",
      header: "Metodos",
    },
  ]
  return(
    <Container>
      <DataTable columns={columns} data={sesion.sessions} placeholderSearch={"Buscar por nombre"} searchName={"nombre"}/>
    </Container>
  )
}

export default Session
