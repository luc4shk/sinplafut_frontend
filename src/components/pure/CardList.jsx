import React from "react";
import Container from "../ui/container";
import FormClub from "@/components/forms/FormClub";
import ItemCard from "./ItemCard";
import SkeletonCard from "@/components/pure/SkeletonCard";
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import FormikValues from "@/constants/FormikValues";
import Form from "../forms/Form";

const CardList = ({imageName,dataFromHook,data,titleDelete, titleAdd , descAdd, descDelete,titleEdit,descEdit,dataFormValues, onSubmit, onSubmitEdit, onSubmitDelete, buscarPorId, item_info, inputs}) =>{



  const buttonHandleClick = () =>{
    dataFromHook.setOpenAdd(true)
  }

  return(
      <Container>
        <Dialog open={dataFromHook.openAdd} onOpenChange={dataFromHook.setOpenAdd}>
          <DialogTrigger asChild>
            <Button onClick={()=>buttonHandleClick()}variant="outline"className="hover:bg-zinc-100 md:w-60 w-full">{titleAdd}</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{titleAdd}</DialogTitle>
              <DialogDescription>
                {descAdd}
              </DialogDescription>
            </DialogHeader>
            <Form
              onSubmit={onSubmit}
              initialValues={dataFormValues?.add.initialValues}
              validationSchema={dataFormValues?.add.validationSchema}
              inputs={inputs}
              imgNombre={imageName==="logoUrl"?"imagen":"escudo"}
            />
            </DialogContent>
        </Dialog>
        <div className="grid  mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            dataFromHook.isLoading ? 
              Array.from({length:8}).map((item,i)=>(
                <SkeletonCard key={i}/>
              ))
              :
              data.map((item)=>{
                return(
                  <>
                    <ItemCard 
                      item_data={item}
                      dataFromHook={dataFromHook}
                      itemId={item.id}
                      imagen={item[imageName]}
                      title={item.nombre}
                      titleEdit={titleEdit}
                      descEdit={descEdit}
                      titleDelete={titleDelete}
                      desc={item.nombre}
                      onSubmitEdit={onSubmitEdit}
                      onSubmitDelete={onSubmitDelete}
                      buscarPorId={buscarPorId}
                      values={dataFormValues}
                      descDelete={descDelete}
                      item_info={item_info}
                      imgName={imageName}
                      inputs={inputs}
                    /> 
                  </>
                )
              })

          }
        </div>
      </Container>

  )

}

export default CardList

