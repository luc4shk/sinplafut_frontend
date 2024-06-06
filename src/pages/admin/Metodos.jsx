import React from "react"; import Container from "@/components/ui/container";
import Form from "@/components/forms/Form";
import { Button } from "@/components/ui/button";
import { Inputs } from "@/constants/Inputs";
import FormikValues from "@/constants/FormikValues";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ArrowUpDown } from "lucide-react";
import {DataTable} from "@/components/ui/data-table";
import { useMethods } from "@/hooks/useMethods";
import { toast } from "react-hot-toast";
import DropDownItem from "@/components/pure/DropDownItem";


const Metodos = () =>{

  const {METODO_INPUTS, METODO_INPUTS_EDIT} = Inputs()
  const {METODO}= FormikValues()
  const metodo = useMethods()


  const onSubmit = {

    add:({nombre, descripcion, tipoCarga, tipoIntensidad, duracion})=>(
      toast.promise(
        metodo.fetchAddMethod(nombre, descripcion, tipoCarga, tipoIntensidad, duracion),
        {
          loading: 'Añadiendo Metodo',
          success: ()=>{
            metodo.setOpenAdd(false)
            return'Metodo añadido con éxito 👌'},
          error:(error)=> error+"",
        }
      )

    ),
    edit:({id,nombre, descripcion, tipoCarga, tipoIntensidad, duracion})=>{
      const numberDur = parseInt(duracion)
      console.log(id,nombre, descripcion,tipoCarga,tipoIntensidad,numberDur)
      toast.promise(

        metodo.fetchUpdateMethod(id,nombre, descripcion, tipoCarga, tipoIntensidad, numberDur),
        {
          loading:"Editando Método",
          success:()=>{
            metodo.setOpenEdit(false)
            return "Método editado con éxito"
          },
          error:(error)=>error,
        }
      )
    },
    delete: (id)=>{
      toast.promise(
        metodo.fetchDeleteMethod(id),
        {
          loading:"Eliminando Método",
          success:"Método eliminado con éxito",
          error:(error)=>error,
        }
      )
    }
  }

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
      {
      accessorKey: "carga",
      header:"Carga"

    },
    {
      accessorKey: "intensidad",
      header: "Intensidad"
    },
    {
      accessorKey: "duracion",
      header: "Duración",
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({row}) => {
        const metodo = useMethods()
        return (
          <DropDownItem
          itemId={row.original.id} 
          onSubmit={onSubmit}
          buscarPorId={metodo.fetchMethodById}
          isLoadingDetails={metodo.isLoadingDetails}
          values={METODO}
          dataFromHook={metodo}
          titleEdit={"Editar Método"}
          descEdit={"Edita los campos para modificar tu método"}
          titleDelete={"¿Estás seguro?"}
          descDelete={"Se eleminará el método "}
          inputs={METODO_INPUTS_EDIT}
          images={""}

          />
          
        )
      }
    }
  ]

  return(
    <Container>
      <Dialog open={metodo.openAdd} onOpenChange={metodo.setOpenAdd}>
        <DialogTrigger asChild>
          <Button onClick={()=>metodo.setOpenAdd(true)}  variant="outline"className="hover:bg-zinc-100 md:w-60 w-full">Añadir Método</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Añadir Método</DialogTitle>
            <DialogDescription>
              Rellena los campos para agregar tu método
            </DialogDescription>
          </DialogHeader>
          <Form
            onSubmit={onSubmit.add}
            initialValues={METODO?.add.initialValues}
            validationSchema={METODO?.add.validationSchema}
            inputs={METODO_INPUTS}
          />
        </DialogContent>
      </Dialog>
      <DataTable columns={columns} data={metodo.metodos} placeholderSearch={"Buscar por nombre"} searchName={"nombre"}/>
    </Container>
  )
}

export default Metodos
