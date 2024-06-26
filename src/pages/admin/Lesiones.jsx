import React from "react"
import { DataTable } from "@/components/ui/data-table"
import Container from "@/components/ui/container"
import DialogAddItem from "@/components/pure/DialogAddItem"
import useLesions from "@/hooks/useLesions"
import {Inputs} from "@/constants/Inputs"
import FormikValues from "@/constants/FormikValues"
import DropDownItem from "@/components/pure/DropDownItem"
import { toast } from "react-hot-toast"
import Spinner from "@/components/ui/spinner"

const Lesiones = () =>{

  const lesion = useLesions()
  const {LESION_INPUTS} = Inputs()
  const {LESION} = FormikValues()

  //Métodos de las lesiones
  const onSubmit={
    add: ({nombre, tratamiento, observaciones}) =>{
      toast.promise(
        lesion.fetchAddLesion(nombre, tratamiento, observaciones),
        {
          loading: 'Añadiendo Lesión',
          success: ()=>{
            lesion.setOpenAdd(false)
            return'Lesión añadida con éxito 👌'},
          error:(error)=> error+"",
        }
      )
    },
    edit:({id, nombre, tratamiento, observaciones}) =>{
      toast.promise(

        lesion.fetchUpdateLesion(id, nombre, tratamiento,observaciones),
        {
          loading:"Editando Lesión",
          success:()=>{
            lesion.setOpenEdit(false)
            return "Lesión editada con éxito 👌"
          },
          error:(error)=>error,
        }
      )
    },
    delete:(id)=>
    toast.promise(
      lesion.fetchDeleteLesion(id),
      {
        loading:"Eliminando Lesión",
        success:"Lesión eliminada con éxito 👌",
        error: (error) => error
      }
    )

  }

  const columns = [
    {
      accessorKey:"nombre",
      header:"Nombre"
    },
    {
      accessorKey:"tratamiento",
      header:"Tratamiento"
    },
    {
      accessorKey:"observaciones",
      header:"Observaciones"
    },
    {
      //Columna de acciones para cada celda
      id: "actions",
      enableHiding: false,
      cell: ({row}) => {
        const lesion = useLesions()
        return (
          <DropDownItem
            itemId={row.original.id} 
            onSubmit={onSubmit}
            buscarPorId={lesion.fetchLesionById}
            isLoadingDetails={lesion.isLoadingDetails}
            values={LESION}
            dataFromHook={lesion}
            titleEdit={"Editar lesión"}
            descEdit={"Edita los campos para modificar la lesión."}
            titleDelete={"¿Estás seguro?"}
            descDelete={"Se eleminará la lesión: "}
            inputs={LESION_INPUTS}
            images={""}
            iconColor={"black"}
          />
        )

      }}

  ]

  const formTexts ={
    titleAdd:"Añadir Lesión",
    descAdd:"Rellena los campos para añadir una lesión."
  }



  return(

    <Container>  
      <DialogAddItem
        dataHook={lesion}
        formTexts={formTexts}
        onSubmit={onSubmit}
        images={""}
        formValidation={LESION}
        inputs={LESION_INPUTS}
      />
      {
        lesion.isLoading ?
          <Spinner/>
        : 
      <DataTable 
        columns={columns} 
        data={lesion.lesions}
        placeholderSearch={"Buscar por nombre"} 
        searchName={"nombre"}
      />
      }
    </Container>)

}

export default Lesiones

