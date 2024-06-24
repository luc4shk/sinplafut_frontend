import React from "react";
import {DataTable} from "@/components/ui/data-table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import Form from "@/components/forms/Form";


const Jugador = () =>{

  const data=[{
    "nombre": "Luis",
    "apellido": "Ascencio",
    "fecha_nacimiento": "10/05/2003",
    "documento": "1004927102",
    "email": "luis@luis.com",
    "estado": "activo",

  },
    {
      "nombre": "Jaider",
      "apellido": "Oliveros",
      "fecha_nacimiento": "10/10/2002",
      "documento": "1234567890",
      "email": "jaider@mail.com",
      "estado": "lesionado",
    }
  ]

  const columns = [
    {
      accessorKey: "documento",
      header: "Documento",
    },
    {
      accessorKey: "nombre",
      header: "Nombre",
    },
    {
      accessorKey: "apellido",
      header: "Apellido",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "fecha_nacimiento",
      header: "Fecha de nacimiento",
    },
    {
      accessorKey: "estado",
      header: "Estado",
    }

  ]

  return(
    <>
    <Dialog 
      //open={sesion.openAdd} 
      //onOpenChange={sesion.setOpenAdd}
    >
      <DialogTrigger asChild>
        <Button 
        //onClick={()=>sesion.setOpenAdd(true)}  
        variant="outline"
        className="hover:bg-zinc-100 md:w-60 w-full">Añadir Jugador</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Añadir Jugador</DialogTitle>
          <DialogDescription>
            Rellena los campos para agregar tu jugador.
          </DialogDescription>
        </DialogHeader>
        {/*<Form
            onSubmit={onSubmit.add}
            initialValues={SESION?.add.initialValues}
            validationSchema={SESION?.add.validationSchema}
            inputs={SESION_INPUTS}
          />*/}
      </DialogContent>
    </Dialog>

    <DataTable 
      columns={columns} 
      data={data} 
      placeholderSearch={"Buscar por documento"} 
      searchName={"documento"}
    />
    </>
  )
}

export default Jugador
