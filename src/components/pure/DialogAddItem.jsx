import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Form from "../forms/Form";
import { Button } from "../ui/button";


const DialogAddItem = ({dataHook, formTexts, onSubmit, images, formValidation, inputs, styles}) =>{

  const buttonHandleClick = () =>{
    dataHook.setOpenAdd(true)
  }


  return(
    <Dialog open={dataHook.openAdd} onOpenChange={dataHook.setOpenAdd}>
      <DialogTrigger asChild>
        <Button onClick={()=>buttonHandleClick()}variant="outline"className={`${styles?styles:"hover:bg-zinc-100 md:w-60 w-full"}`}>{formTexts.titleAdd}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{formTexts.titleAdd}</DialogTitle>
          <DialogDescription>
            {formTexts.descAdd}
          </DialogDescription>
        </DialogHeader>
        <Form
          onSubmit={onSubmit.add}
          initialValues={formValidation?.add.initialValues}
          validationSchema={formValidation?.add.validationSchema}
          inputs={inputs}
          imgNombre={images.form}
        />
      </DialogContent>
    </Dialog>
  )

}

export default DialogAddItem
