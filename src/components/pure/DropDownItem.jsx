import React from "react"
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
import Form from "../forms/Form"
import {EllipsisVertical} from "lucide-react"

const DropDownItem = ({images,titleEdit, descEdit,titleDelete,descDelete,itemId,dataFromHook, values, onSubmit, buscarPorId, inputs,iconColor,hasChildren, children, withDeleteMessage=false,deleteMessage}) =>{



  return(
    <DropdownMenu >
      <DropdownMenuTrigger className="w-8 h-8">
        <div className="relative top-0 flex items-center cursor-pointer right-0 hover:bg-[rgba(0,0,0,0.2)] rounded-md h-8 p-2">
          <EllipsisVertical color={iconColor} size={15}/>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" md:mr-[55px]  mr-[35px]">
        <DropdownMenuLabel>Acciones</DropdownMenuLabel>
        <DropdownMenuSeparator/>
        {hasChildren&&children}
        <Dialog  
          open={dataFromHook.openEdit}
          onOpenChange={dataFromHook.setOpenEdit}
        >
          <DialogTrigger onClick={()=>{
            buscarPorId(itemId)
          }} className="text-sm cursor-default px-2 py-1.5 text-left hover:bg-slate-100 w-full rounded-sm">Editar</DialogTrigger>
          <DialogContent className="max-w-[425px]">
            {
              dataFromHook.isLoadingDetails? <div>Cargando...</div>:(
                <>
                  <DialogHeader>
                    <DialogTitle>{titleEdit}</DialogTitle>
                    <DialogDescription>
                      {descEdit}
                    </DialogDescription>
                  </DialogHeader>
                  <Form
                    initialValues={values?.edit.initialValues(dataFromHook.values)}
                    validationSchema={values?.edit.validationSchema}
                    onSubmit={onSubmit.edit}
                    inputs={inputs}
                    imgNombre={images?.form}
                    isEdit
                  />
                </>
              )}
          </DialogContent>
        </Dialog>
        <AlertDialog
        >
          <AlertDialogTrigger 
            onClick={()=>buscarPorId(itemId)}
            className="text-sm cursor-default px-2 py-1.5 text-left hover:bg-slate-100 w-full rounded-sm">Eliminar</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>{titleDelete}</AlertDialogTitle>
              <AlertDialogDescription>
                {descDelete}<b>{withDeleteMessage?deleteMessage:dataFromHook.values.nombre}</b>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction
                onClick={()=>onSubmit.delete(itemId)}
              >Eliminar</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropDownItem
