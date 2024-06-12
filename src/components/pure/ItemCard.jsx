import React from "react"
import { 
  Card,
  CardHeader, 
  CardTitle, 
  CardContent,
  CardDescription
} from "../ui/card"
import { 
  Avatar, 
  AvatarImage, 
  AvatarFallback 
} from "../ui/avatar"
import { NavLink } from "react-router-dom"
import { Separator } from "../ui/separator"
import DropDownItem from "./DropDownItem"
import ClubInfoItem from "./ClubInfoItem"
import Palette from 'react-palette';
const ItemCard = ({images,item_data,values,dataFromHook,titleDelete,titleEdit, descEdit,imagen, title, desc, itemId, onSubmit, buscarPorId, descDelete, item_info, inputs,withLink=false}) =>{

  return(
    <Card className={"overflow-hidden"}>
      <Palette src={imagen}>
          {({ data }) => (
            <CardHeader className={`w-full  flex flex-row justify-between gap-4 z-index-0`} style={{ backgroundColor: data.darkMuted}}>
        <div className="flex-row gap-4 flex items-center">
          <Avatar className="flex items-center p-2 w-16 h-16 border border-white">
            <AvatarImage src={imagen} />
            <AvatarFallback>L</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-white">
              {
                withLink ?
                  <NavLink to={`/adminPanel/clubes/${item_data.id}`}> 
                    {title}
                  </NavLink>
                  :
                  title
              }
            </CardTitle>
            <CardDescription className="text-white">{desc}</CardDescription>
          </div>
        </div>
        <DropDownItem 
          itemId={itemId} 
          onSubmit={onSubmit}
          buscarPorId={buscarPorId}
          isLoadingDetails={dataFromHook.isLoadingDetails}
          values={values}
          dataFromHook={dataFromHook}
          titleEdit={titleEdit}
          descEdit={descEdit}
          titleDelete={titleDelete}
          descDelete={descDelete}
          inputs={inputs}
          images={images}
          iconColor={"white"}
        />
      </CardHeader>
             )}
</Palette>
      <Separator/>
      <CardContent className="flex flex-col mt-6 gap-4">
        {
          item_info.map((item, index) => (
            <ClubInfoItem key={index} icon={item.icon} text={item.text(item_data)}/>
          ))
        }
      </CardContent>
    </Card>

  )
}

export default ItemCard
