import React from "react";
import Container from "@/components/ui/container";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { ArrowUpDown, MoreHorizontal} from "lucide-react";
import Form from "@/components/forms/Form";
import { Inputs } from "@/constants/Inputs";
import { Button } from "@/components/ui/button";
import FormikValues from "@/constants/FormikValues";
import {DataTable} from "@/components/ui/data-table";

const Metodos = () =>{

  const {METODO_INPUTS} = Inputs()
  const {METODO}= FormikValues()
  const titleAdd = "Titulo"
  const descAdd = "Descipción"
  const dataFormValues = METODO

  const data = [
    {
      nombre: "Método 1",
      descripcion: "Este Metodo...",
      carga: "Ligera",
      intensidad: "Baja",
      duracion: "1:00:00",
    },
    {
      nombre: "Método 2",
      descripcion: "Este Metodo...",
      carga: "Ligera",
      intensidad: "Baja",
      duracion: "1:00:00",
    },

  ]

  const columns = [

    {
      accessorKey: "nombre",
      header: ({column}) => {
        return (
          <Button
            variant="ghost"
            className="p-0"
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
      header: "Descripción",
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
      accessorKey: "carga",
      header: "Carga",

    },
    {
      accessorKey: "intensidad",
      header: "Intensidad",
    },
    {
      accessorKey: "duracion",
      header: "Duración",
    },
    {
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
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
    }
  ]

  return(
    <Container>
      <Dialog >
        <DialogTrigger asChild>
          <Button variant="outline"className="hover:bg-zinc-100 md:w-60 w-full">{titleAdd}</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{titleAdd}</DialogTitle>
            <DialogDescription>
              {descAdd}
            </DialogDescription>
          </DialogHeader>
          <Form
            //onSubmit={onSubmit}
            initialValues={dataFormValues?.add.initialValues}
            validationSchema={dataFormValues?.add.validationSchema}
            inputs={METODO_INPUTS}
            //imgNombre={imageName==="logoUrl"?"imagen":"escudo"}
          />
        </DialogContent>
      </Dialog>
      <DataTable columns={columns} data={data} placeholderSearch={"Buscar por nombre"} searchName={"nombre"}/>
    </Container>
  )
}

export default Metodos
