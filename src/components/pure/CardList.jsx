import React from "react";
import Container from "../ui/container";
import ItemCard from "./ItemCard";
import SkeletonCard from "@/components/pure/SkeletonCard";
import DialogAddItem from "./DialogAddItem";
import Spinner from "../ui/spinner";

const CardList = ({link,images,withLink,dataFromHook,data,formTexts,formValidation, onSubmit, buscarPorId, item_info, inputs,hasLoading=false,loading}) =>{


  return(
    <Container>
      <DialogAddItem 
        dataHook={dataFromHook}
        formTexts={formTexts}
        onSubmit={onSubmit}
        images={images}
        formValidation={formValidation}
        inputs={inputs}
      />
      <div className="grid  mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {
         
            data.map((item,i)=>{
              return(
                <ItemCard 
                  key={i}
                  item_data={item}
                  dataFromHook={dataFromHook}
                  itemId={item.id}
                  imagen={item[images.data]}
                  title={item.nombre}
                  titleEdit={formTexts.titleEdit}
                  descEdit={formTexts.descEdit}
                  titleDelete={formTexts.titleDelete}
                  desc={item.pais}
                  onSubmit={onSubmit}
                  buscarPorId={buscarPorId}
                  values={formValidation}
                  descDelete={formTexts.descDelete}
                  item_info={item_info}
                  images={images}
                  inputs={inputs}
                  withLink={withLink}
                  link={link}
                /> 
              )
            })

        }
      </div>
    </Container>

  )

}

export default CardList

