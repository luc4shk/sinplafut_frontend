import DialogAddItem from "@/components/pure/DialogAddItem";
import Container from "@/components/ui/container";
import usePlayerLesion from "@/hooks/usePlayerLesion";
import usePlayers from "@/hooks/usePlayers";
import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import { Inputs } from "@/constants/Inputs";
import FormikValues from "@/constants/FormikValues";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import DropDownItem from "@/components/pure/DropDownItem";
import {DataTable} from "@/components/ui/data-table";
import Spinner from "@/components/ui/spinner";
import { toast } from "react-hot-toast";

const LesionesJugador = () =>{
  const {id} = useParams()
  console.log(id)
  const player = usePlayers()
  const playerLesions = usePlayerLesion(id)
  const {PLAYER_LESION_INPUTS} = Inputs()
  const {PLAYER_LESION} = FormikValues()

  console.log(playerLesions.playerLesions)


  const diasLesionado = (fecha_inicio,fecha_fin) =>{
    const inicio = new Date(fecha_inicio);
    const fin = new Date(fecha_fin);
    const diferenciaMs = fin - inicio;
    return Math.round(diferenciaMs / (1000 * 60 * 60 * 24))
  }

  const parseDate = (date) =>{
    const dateParts = date.split("-")
    return `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`
  }

  const parseData = (playerLesions) =>{
    return playerLesions.map((lesion,i)=>{
      const nuevaLesion = {...lesion}
      nuevaLesion.diasLesion = diasLesionado(nuevaLesion.fecha_inicio, nuevaLesion.fecha_fin)
      return nuevaLesion
    })
  }

  useEffect(()=>{player.fetchPlayerById(id)},[])

  const onSubmit={
    add: ({lesionId, fecha_inicio,fecha_fin}) =>{
      const new_fecha_inicio = parseDate(fecha_inicio)
      const new_fecha_fin = parseDate(fecha_fin)
      console.log(lesionId, new_fecha_inicio, new_fecha_fin)
      toast.promise(
        playerLesions.fetchLinkPlayerLesion(lesionId, new_fecha_inicio, new_fecha_fin),
        {
          loading: 'Añadiendo Lesión al jugador',
          success: ()=>{
            playerLesions.setOpenAdd(false)
            return'Lesión añadida con éxito 👌'},
          error:(error)=> error+"",
        }
      )
    },
    edit:({id,lesionId,fecha_inicio,fecha_fin}) =>{
      const int_lesionId = parseInt(lesionId)
      const new_fecha_inicio = parseDate(fecha_inicio)
      const new_fecha_fin = parseDate(fecha_fin)

      console.log(id,int_lesionId,new_fecha_inicio,new_fecha_fin)
      toast.promise(
        playerLesions.fetchUpdatePlayerLesion(id,int_lesionId,new_fecha_inicio,new_fecha_fin),
        {
          loading:"Editando Lesión",
          success:()=>{
            playerLesions.setOpenEdit(false)
            return "Lesión editada con éxito 👌"
          },
          error:(error)=>error,
        }
      )
    },
    delete:(id)=>
    toast.promise(
      playerLesions.fetchDeletePlayerLesion(id),
      {
        loading:"Eliminando Lesión",
        success:"Lesión eliminada con éxito 👌",
        error: (error) => error
      }
    )

  }

  const formTexts ={
    titleAdd:"Añadir Lesión",
    descAdd:`Rellena los campos para añadir una lesión a ${player.values.nombre}.`
  }

  const columns = [
    {
      accessorKey:"lesion",
      header:"Nombre"
    },
    {
      accessorKey:"fecha_inicio",
      header:"Fecha de Inicio"
    },
    {
      accessorKey:"fecha_fin",
      header:"Fecha de Fin"
    },
    {
      accessorKey:"diasLesion",
      header:({ column }) => {
      return (
        <Button
          variant="ghost"
          className={"p-0"}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Dias de lesión
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )},
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({row}) => {
        const playerLesions = usePlayerLesion(id)
        const deleteMessage = `${playerLesions.values.lesion}`;
        return (
          <DropDownItem
            itemId={row.original.id} 
            onSubmit={onSubmit}
            buscarPorId={playerLesions.fetchPlayerLesionById}
            isLoadingDetails={playerLesions.isLoadingDetails}
            values={PLAYER_LESION}
            dataFromHook={playerLesions}
            titleEdit={"Editar Lesión"}
            descEdit={"Edita los campos para modificar la lesión."}
            titleDelete={"¿Estás seguro?"}
            descDelete={"Se eleminará el la lesión: "}
            inputs={PLAYER_LESION_INPUTS}
            images={""}
            iconColor={"black"}
            withDeleteMessage
            deleteMessage={deleteMessage}
            hasChildren
          />
        )
     
    }
    }
  ]

  return(
    <>
      {
        player.isLoadingDetails && playerLesions.isLoading ?
          <Spinner/>:
    <Container>
      <div className="text-xl font-semibold flex flex-col items-center sm:flex-row justify-between"> 
        <p>Lesiones de {player.values.nombre} {player.values.apellido} - <i>{player.values.email}</i></p>
        <DialogAddItem
        dataHook={playerLesions}
        formTexts={formTexts}
        onSubmit={onSubmit}
        images={""}
        formValidation={PLAYER_LESION}
        inputs={PLAYER_LESION_INPUTS}
          styles={"hover:bg-zinc-100 sm:w-60 sm:mt-0 mt-2 w-full"}
      />
      </div>      
      <DataTable
        columns={columns}
        data={parseData(playerLesions.playerLesions)}
        placeholderSearch={"Buscar por nombre de lesión"}
        searchName={"lesion"}
      />
    </Container>
      }
</>
  )
}

export default LesionesJugador
