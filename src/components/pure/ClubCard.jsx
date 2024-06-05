import React from "react";
import {Card, CardHeader, CardTitle, CardDescription, CardContent} from "@/components/ui/card";
import { Signpost, Home, MapPin} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator";
import { NavLink } from "react-router-dom";
import DropDownClub from "./DropDownClub";
const ClubCard = ({club, editar, eliminar, buscarPorId, isLoadingDetails, values}) =>{

  return(
    <Card>
      <CardHeader className="w-full bg-zinc-100 flex flex-row justify-between gap-4">
        <div className="flex-row gap-4 flex items-center">
          <Avatar className="p-2 w-16 h-16 border ">
            <AvatarImage src={club.logoUrl} />
            <AvatarFallback>L</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>
              <NavLink to={"/hola"}> 
            {club.nombre}
              </NavLink>
            </CardTitle>
            <CardDescription>{club.pais}</CardDescription>
          </div>
        </div>
        <DropDownClub 
         idClub={club.id} 
         editar={editar}
         eliminar={eliminar}
         buscarPorId={buscarPorId}
         isLoadingDetails={isLoadingDetails}
         values={values}
        />
      </CardHeader>
      <Separator/>
      <CardContent className="flex flex-col mt-6 gap-4">
        <div className=" flex gap-4 items-center">
          <Home className="bg-gray-100 p-2 rounded-md" size={38}  />
          <p className="text-lg">{club.estadio}</p>
        </div>
        <div className="flex gap-4 items-center">
          <Signpost className="bg-gray-100 p-2 rounded-md" size={38}/>
          <p className="text-lg">{club.direccion}</p>

        </div> 
        <div className="flex gap-4 items-center">
          <MapPin className="bg-gray-100 p-2 rounded-md" size={38}/>
          <p className="text-lg">{club.ciudad}</p>
        </div> 
      </CardContent>
    </Card>

  )
}

export default ClubCard
