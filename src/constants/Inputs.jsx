import React from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useClubs } from "@/hooks/useClubs"
import {club} from "@/service/axios"


export const Inputs = () =>{

const { clubes } = useClubs()
  console.log("clubes->",clubes)

const TEAM_INPUTS = [
  {
      name:"nombre",
      type:"text",
      place:"Nombre",
    },
    {
      name:"telefono",
      type:"text",
      place:"Teléfono",
    },
    {
      isSelect:true,
      name:"categoria",
      place:"Categoría",
      estilosSel:"w-full border rounded-md p-2",
      estilos:"col-span-2",
      element:
        <>        
        <option value={""} selected disabled hidden>Categoría</option>
        <option value={"infantil"}>Infantil</option>
        <option value={"juvenil"}>Juvenil</option>
        <option value={"sub_15"}>Sub-15</option>
        <option value={"sub_17"}>Sub-17</option>
        <option value={"sub_20"}>Sub-20</option>
        <option value={"mayores"}>Mayores</option>
        </>

    },
    {
      isSelect:true,
      name:"club",
      place:"Club",
      estilosSel:"w-full border rounded-md p-2",
      estilos:"col-span-2",
      element:
        <>
        <option value={""} selected disabled hidden>Club</option>
          {
      clubes.map((club,i)=>(
        <option value={club.id}>{club.nombre}</option>
      ))
          }
        </>
    },
    {
      name:"escudo",
      type:"file",
    },
    {
      name:"iditem",
      estilos:"hidden" 
    }
   
]

const CLUB_INPUTS = [
  {
    name:"nombre",
    type:"text",
    place:"Nombre"
  },
  {
    name:"direccion",
    type:"text",
    place:"Dirección"
  },
  {
    name:"telefono",
    type:"text",
    place:"Teléfono"
  },
  {
    name:"ciudad",
    type:"text",
    place:"Ciudad"
  },
  {
    name:"pais",
    type:"text",
    place:"País"
  },
  {
    name:"estadio",
    type:"text",
    place:"Estadio"
  },
  {
    name:"imagen",
    type:"file",
  },
  {
    name:"iditem",
    estilos:"hidden" 

  }


]

  return{
    TEAM_INPUTS,
    CLUB_INPUTS
  }

}
