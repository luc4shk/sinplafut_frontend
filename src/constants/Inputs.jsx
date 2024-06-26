import React from "react"
import { useClubs } from "@/hooks/useClubs"
import { useMethods } from "@/hooks/useMethods"
import useTeams from "@/hooks/useTeams"
import useLesions from "@/hooks/useLesions"


export const Inputs = () =>{

  const { clubes } = useClubs()
  const { metodos } = useMethods()
  const { teams } = useTeams()
  const { lesions } = useLesions()
  console.log("INPUTS clubes",clubes)
  console.log("INPUTS metodos",metodos)
  console.log("INPUTS teams",teams)

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
      estilos:"hidden",
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

  const PLAYER_INPUTS = [
    {
      name: "nombre",
      type: "text",
      place: "Nombre"
    },
    {
      name: "apellido",
      type: "text",
      place: "Apellido"
    },
    {
      name: "fecha_nacimiento",
      type: "date",
    },
    {
      name: "documento",
      type: "text",
      place: "Documento"
    },
    {
      name: "email",
      type: "email",
      place: "Email"
    },
    {
      name: "direccion",
      type: "text",
      place: "Dirección"
    },
    {
      name: "celular",
      type: "text",
      place: "Celular"
    },
    {
      name: "numero_camiseta",
      type: "text",
      place: "Número de Camiseta"
    },
    {
      isSelect:true,
      name: "tipo_sangre",
      estilosSel:"w-full border rounded-md p-2",
      estilos:"col-span-2",
      element:
        <>        
          <option value={""} selected disabled hidden>Tipo de Sangre</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </>


    },
    {
      name: "nivel_hemoglobina",
      type: "text",
      place: "Nivel de Hemoglobina"
    },
    {
      name: "consumo_o2",
      type: "text",
      place: "Consumo de Oxígeno"
    },
    {
      name: "lactato_sangre",
      type: "text",
      place: "Lactato en Sangre",
      estilos:"col-span-2",
    },
    {
      name: "equipoId",
      estilos:"hidden"
    }
  ];

  const PLAYER_INPUTS_EDIT= [
    {
      name: "nombre",
      type: "text",
      place: "Nombre"
    },
    {
      name: "apellido",
      type: "text",
      place: "Apellido"
    },
    {
      name: "fecha_nacimiento",
      type: "date",
    },
    {
      name: "documento",
      type: "text",
      place: "Documento"
    },
    {
      name: "email",
      type: "email",
      estilos:"col-span-2",
      place: "Email"
    },
    {
      name: "direccion",
      type: "text",
      place: "Dirección"
    },
    {
      name: "celular",
      type: "text",
      place: "Celular"
    },

    {
      isSelect:true,
      name: "estado",
      estilosSel:"w-full border rounded-md p-2",
      element:
        <>        
          <option value="activo">Activo</option>
          <option value="lesionado">Lesionado</option>
          <option value="retirado">Retirado</option>
        </>

    },
    {
      isSelect:true,
      name: "tipo_sangre",
      estilosSel:"w-full border rounded-md p-2",
      element:
        <>        
          <option value={""} selected disabled hidden>Tipo de Sangre</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </>


    },
    {
      name: "numero_camiseta",
      type: "text",
      place: "Número de Camiseta"
    },
    {
      name: "nivel_hemoglobina",
      type: "text",
      place: "Nivel de Hemoglobina"
    },
    {
      name: "consumo_o2",
      type: "text",
      place: "Consumo de Oxígeno"
    },
    {
      name: "lactato_sangre",
      type: "text",
      place: "Lactato en Sangre",
    },
    {
      name: "equipoId",
      estilos:"hidden"
    }
  ];

  const LINK_PLAYER_INPUTS= [
    {
      name: "email",
      type: "text",
      place: "Correo",
      estilos:"col-span-2"
    },
    {
      name: "equipoId",
      estilos:"hidden"
    }
  ]

  const LESION_INPUTS = [
    {
      name: "nombre",
      type: "text",
      place:"Nombre",
      estilos:"col-span-2",
    },
    {
      name: "tratamiento",
      type: "text",
      place:"Tratamiento",
      estilos:"col-span-2",
    },
    {
      name: "observaciones",
      type: "text",
      place:"Observaciones",
      estilos:"col-span-2",
    },
    {
      name:"id",
      estilos:"hidden"
    }
  ]

  const PLAYER_LESION_INPUTS = [
    {
      isSelect:true,
      name:"lesionId",
      estilosSel:"w-full border rounded-md p-2",
      estilos:"col-span-2",
      element:
        <>        
          <option value={""} selected disabled hidden>Lesión</option>
          {
            lesions.map((lesion,i)=>(
              <option key={i} value={lesion.id}>{lesion.nombre}</option>
            ))
          }
        </>

    },
    {
      name:"fecha_inicio",
      type:"date",
    },
    {
      name:"fecha_fin",
      type:"date",
    },
  ]



  return{
    TEAM_INPUTS,
    CLUB_INPUTS,
    METODO_INPUTS,
    METODO_INPUTS_EDIT,
    SESION_INPUTS,
    PLAYER_INPUTS,
    PLAYER_INPUTS_EDIT,
    LINK_PLAYER_INPUTS,
    LESION_INPUTS,
    PLAYER_LESION_INPUTS
  }

}
