import React from "react"
import { 
  Card,
  CardHeader, 
  CardTitle, 
  CardContent,
  CardDescription
} from "../ui/card"
import { Home , Signpost, MapPin} from "lucide-react"
import { 
  Avatar, 
  AvatarImage, 
  AvatarFallback 
} from "../ui/avatar"
import { NavLink } from "react-router-dom"
import { Separator } from "../ui/separator"
import DropDownItem from "./DropDownItem"

import { TEAM_INFO} from "@/constants/InfoCards";
import ClubInfoItem from "./ClubInfoItem"
const ItemCard = ({images,item_data,values,dataFromHook,titleDelete,titleEdit, descEdit,imagen, title, desc, itemId, onSubmit, buscarPorId, descDelete, item_info, inputs}) =>{



  return(
    <Card>
      <CardHeader className="w-full bg-zinc-100 flex flex-row justify-between gap-4">
        <div className="flex-row gap-4 flex items-center">
          <Avatar className="p-2 w-16 h-16 border ">
            <AvatarImage src={imagen} />
            <AvatarFallback>L</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>
              <NavLink to={"/hola"}> 
                {title}
              </NavLink>
            </CardTitle>
            <CardDescription>{desc}</CardDescription>
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
        />
             </CardHeader>
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
