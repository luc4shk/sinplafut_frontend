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
import Entrenamientos from "@/pages/admin/Entrenamientos"
import {useSession} from "@/hooks/useSession"
import { useMethods } from "@/hooks/useMethods"
import useTeams from "@/hooks/useTeams"


export const Inputs = () =>{

  const { clubes } = useClubs()
  const { metodos } = useMethods()
  const { teams } = useTeams()

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
              <option key={i} value={club.id}>{club.nombre}</option>
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

  const METODO_INPUTS = [
    {
      name:"nombre",
      type:"text",
      place:"Nombre"
    },
    {
      name:"descripcion",
      type:"text",
      place:"Descripción"
    },
    {
      name:"duracion",
      type:"text",
      estilos:"col-span-2",
      place:"Duración en minutos"
    },
    {
      isSelect:true,
      name:"tipoCarga",
      estilosSel:"w-full border rounded-md p-2",
      estilos:"col-span-2",
      element:
        <>        
          <option value={""} selected disabled hidden>Tipo de Carga</option>
          <option value={"ligera"}>Ligera</option>
          <option value={"media"}>Media</option>
          <option value={"pesada"}>Pesada</option>
        </>
    },
    {
      isSelect:true,
      name:"tipoIntensidad",
      estilosSel:"w-full border rounded-md p-2",
      estilos:"col-span-2",
      element:
        <>        
          <option value={""} selected disabled hidden>Tipo de Intensidad</option>
          <option value={"baja"}>Baja</option>
          <option value={"media"}>Media</option>
          <option value={"alta"}>Alta</option>
        </>
    }
  ]

  const METODO_INPUTS_EDIT= [
    {
      name:"nombre",
      type:"text",
      place:"Nombre"
    },
    {
      name:"descripcion",
      type:"text",
      place:"Descripción"
    },
    {
      name:"duracion",
      type:"text",
      estilos:"hidden",
      place:"Duración en minutos"
    },
    {
      isSelect:true,
      name:"tipoCarga",
      estilosSel:"w-full border rounded-md p-2",
      estilos:"col-span-2",
      element:
        <>        
          <option value={""} selected disabled hidden>Tipo de Carga</option>
          <option value={"ligera"}>Ligera</option>
          <option value={"media"}>Media</option>
          <option value={"pesada"}>Pesada</option>
        </>
    },
    {
      isSelect:true,
      name:"tipoIntensidad",
      estilosSel:"w-full border rounded-md p-2",
      estilos:"col-span-2",
      element:
        <>        
          <option value={""} selected disabled hidden>Tipo de Intensidad</option>
          <option value={"baja"}>Baja</option>
          <option value={"media"}>Media</option>
          <option value={"alta"}>Alta</option>
        </>
    }
  ]

  const  SESION_INPUTS = [
    {
      name:"nombre",
      type:"text",
      place:"Nombre"
    },
    {
      name:"duracion",
      type:"text",
      place:"Duración",
    },
    {
      name:"fecha_inicio",
      type:"date",
    },
    {
      name:"hora",
      type:"time",
    },
    {
      name:"descripcion",
      type:"text",
      place:"Descripción",
      estilos:"col-span-2",

    },
    {
      isSelect:true,
      name:"tipo",
      estilosSel:"w-full border rounded-md p-2",
      estilos:"col-span-2",
      element: 
        <>
          <option value={""} selected disabled hidden>Selecciona el tipo</option>
          <option value={"aprendizaje_tecnico"}>Aprendizaje Técnico</option>
          <option value={"acondicionamiento_fisico"}>Acondicionamiento Físico</option>
          <option value={"control"}>Control</option>
          <option value={"desarrollo"}>Desarrollo</option>
          <option value={"recuperacion"}>Recuperación</option>
          <option value={"mixto"}>Mixto</option>
        </>

    },
    {
      isSelect:true,
      name:"equipoId",
      estilosSel:"w-full border rounded-md p-2",
      estilos:"col-span-2",
      element: 
        <>
          <option value={""} selected disabled hidden>Seleccion el equipo</option>
          {teams.map((item,i)=>(
        <option key={i} value={item.id}>{item.nombre}</option>
      ))}
        </>
    },
    {
      isCheckbox:true,
      estilos:"col-span-2",
      title:"Selecciona los métodos",
      estilosTitle:"text-md font-bold",
      name: "metodos",
      element: metodos.map((item) => ({
        name: "metodos",
        idCheckbox: item.id,
        nameCheckbox: item.nombre,
        descripcionCheckbox: item.descripcion,
        cargaCheckbox: item.carga,
        intensidadCheckbox: item.intensidad,
        duracionCheckbox: item.duracion,
        estilosPair:"flex gap-2",
        type: "checkbox",
        estilos:"text-md",
        place:""
      }))
    }


  ]

  return{
    TEAM_INPUTS,
    CLUB_INPUTS,
    METODO_INPUTS,
    METODO_INPUTS_EDIT,
    SESION_INPUTS
  }

}
