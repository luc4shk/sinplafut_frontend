import React from "react";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { ArrowUpDown, MoreHorizontal} from "lucide-react";
import { DropdownMenu, DropdownMenuSeparator,DropdownMenuTrigger,DropdownMenuLabel,DropdownMenuItem, DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import Container from "@/components/ui/container";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Inputs } from "@/constants/Inputs";
import FormikValues from "@/constants/FormikValues";


const Entrenamientos = () =>{

  //Nombre, Descripción, fecha de inicio, hora, duracion, tipodesesion {select},equipo, metodos de entrenamiento
  //

  const data = [
    {
      nombre: "Entrenameinto 1",
      descripción: "Este entrenamiento...",
      fechaInicio: "14:00",
      hora: "8:00",
      duracion: "10:00:00",
      tipoDeSesion: "Express",
      equipo: "Cúcuta",
      metodosDeEntreno: "Algun entreno interesante",
    },

  ]

  const columns = [
    {
      accessorKey: "status",
      header: "Status",
    },
    {
      accessorKey: "nombre",
      header: ({column}) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Nombre
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },

    {
      accessorKey: "descripcion",
      header: () => <div className="text-right">Descripción</div>,
      //cell: ({row}) => {
      // const amount = parseFloat(row.getValue("amount"))
      // Format the amount as a dollar amount
      //const formatted = new Intl.NumberFormat("en-US", {
      // style: "currency",
      //currency: "USD"
      //}).format(amount)

      //}
    },
    /*{
    id: "actions",
    enableHiding: false,
    cell: ({row}) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }*/
    {
      accessorKey: "status",
      header: "Status",

    },
    {
      accessorKey: "fechaDeInicio",
      header: "FechaDeinicio",
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
      accessorKey: "tipoDeSesión",
      header: "Tipo de Sesión",
    },
    {
      accessorkey: "equipo",
      header: "Equipo",
    },
    {
      accessorkey: "metodosDeEntreno",
      header: "Metodos De Entreno",
    },


  ]

      //<Dialog open={dataFromHook.openAdd} onOpenChange={dataFromHook.setOpenAdd}>
      //<Button onClick={()=>buttonHandleClick()}variant="outline"className="hover:bg-zinc-100 md:w-60 w-full">{titleAdd}</Button>


  return(

    <Container>

      <Button variant="outline">Añadir Entrenamiento</Button>
      <DataTable columns={columns} data={data} placeholderSearch={"Busqueda por nombre"}/>
    </Container>
  )
}

export default Entrenamientos
