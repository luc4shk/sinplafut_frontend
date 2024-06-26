import React, {useEffect} from "react";
import {DataTable} from "@/components/ui/data-table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Form from "@/components/forms/Form";
import useTeams from "@/hooks/useTeams";
import { Inputs } from "@/constants/Inputs";
import { toast } from "react-hot-toast";
import FormikValues from "@/constants/FormikValues";
import usePlayers from "@/hooks/usePlayers";
import DropDownItem from "@/components/pure/DropDownItem";
import Spinner from "@/components/ui/spinner";
import { ArrowUpDown } from "lucide-react";
import {DropdownMenuItem} from "@radix-ui/react-dropdown-menu";
import {NavLink} from "react-router-dom";


const Jugador = ({teamId}) =>{

  const team = useTeams()
  const player = usePlayers()
  useEffect(()=>{
    team.fetchPlayersByTeam(teamId)
  },[])

  const {PLAYER_INPUTS, PLAYER_INPUTS_EDIT, LINK_PLAYER_INPUTS} = Inputs()
  const {PLAYER, LINK_PLAYER} = FormikValues() 

  const parseDate = (date) =>{
    const dateParts = date.split("-")
    return `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`
  }
  const onSubmit = {
    //Método para agregar un jugador
    add: ({nombre, apellido, fecha_nacimiento, documento, email, direccion, celular, numero_camiseta, tipo_sangre, nivel_hemoglobina, consumo_o2, lactato_sangre, equipoId}) =>{
      const new_fecha_nacimiento = parseDate(fecha_nacimiento)
      toast.promise(
        player.fetchAddPlayer(nombre, apellido, new_fecha_nacimiento, documento, email, direccion, celular, numero_camiseta, tipo_sangre, nivel_hemoglobina, consumo_o2, lactato_sangre, equipoId),
        {
          loading: 'Añadiendo Jugador',
          success: ()=>{
            team.fetchPlayersByTeam(teamId);
            player.setOpenAdd(false)
            return'Jugador añadido con éxito 👌'},
          error:(error)=> error+"",
        }
      )
    },
    //Método para editar un jugador
    edit:({playerId, nombre, apellido, fecha_nacimiento, documento, email, direccion, celular, estado, numero_camiseta, tipo_sangre, nivel_hemoglobina, consumo_o2, lactato_sangre, equipoId})=>{
      const new_fecha_nacimiento = parseDate(fecha_nacimiento)
      toast.promise(
        player.fetchEditPlayer(playerId,nombre, apellido, new_fecha_nacimiento, documento, email, direccion, celular,estado, numero_camiseta, tipo_sangre, nivel_hemoglobina, consumo_o2, lactato_sangre, equipoId),
        {
          loading: 'Editando Jugador',
          success: ()=>{
            team.fetchPlayersByTeam(teamId);
            player.setOpenAdd(false)
            return'Jugador editado con éxito 👌'},
          error:(error)=> error+"",
        }
      )
    },
    //Método para desvincular un jugador
    unlink:(id)=>{
      toast.promise(
        player.fetchUnlinkPlayer(id),
        {
          loading: 'Desvinculando Jugador',
          success: ()=>{
            team.fetchPlayersByTeam(teamId);
            player.setOpenAdd(false)
            return'Jugador desvinculado con éxito 👌'},
          error:(error)=> error+"",
        }
      )

    },
    //Método para vincular un jugador
    link:({email,equipoId})=>{
      toast.promise(
        player.fetchLinkPlayer(email,equipoId),
        {
          loading: 'Vinculando Jugador',
          success: ()=>{
            team.fetchPlayersByTeam(teamId);
            player.setOpenAdd(false)
            return'Jugador vinculado con éxito 👌'},
          error:(error)=> error+"",
        }

      )
    },
    //Método para eliminar un jugador
    delete:(id)=>{
      toast.promise(
        player.fetchDeletePlayer(id),
        {
          loading: 'Eliminando Jugador',
          success: ()=>{
            team.fetchPlayersByTeam(teamId);
            return'Jugador eliminado con éxito 👌'},
          error:(error)=> error+"",
        }

      )
    }

  }

  //Columnas de la tabla
  const columns = [
    {
      accessorKey: "documento",
 header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className={"p-0"}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Documento
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )},

    },
    {
      accessorKey: "nombre",
      header: "Nombre",
    },
    {
      accessorKey: "apellido",
      header: "Apellido",
    },
    {
      accessorKey: "email",
       header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className={"p-0 "}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )},
    },
    {
      accessorKey: "fecha_nacimiento",
      header: "Fecha de nacimiento",
    },
    {
      accessorKey: "estado",
      header: "Estado",
    },
    {
      //Columna de acciones para cada celda
      id: "actions",
      enableHiding: false,
      cell: ({row}) => {
        const player = usePlayers()
        console.log(row.original.id)
        const deleteMessage = `${player.values.nombre} ${player.values.apellido} - ${player.values.documento}`;
        return (
          <DropDownItem
            itemId={row.original.id} 
            onSubmit={onSubmit}
            buscarPorId={player.fetchPlayerById}
            isLoadingDetails={player.isLoadingDetails}
            values={PLAYER}
            dataFromHook={player}
            titleEdit={"Editar Jugador"}
            descEdit={"Edita los campos para modificar tu jugador."}
            titleDelete={"¿Estás seguro?"}
            descDelete={"Se eleminará el Jugador "}
            inputs={PLAYER_INPUTS_EDIT}
            images={""}
            iconColor={"black"}
            withDeleteMessage
            deleteMessage={deleteMessage}
            hasChildren
          >
            
            <DropdownMenuItem
              className="hover:boder-0 text-sm cursor-default  text-left hover:bg-slate-100 w-full rounded-sm"
            >            
              <NavLink 
                className={"cursor-default w-full block px-2 py-1.5"}
              to={`/adminPanel/lesionesJugador/${row.original.id}`}
            >
              Ver lesiones
            </NavLink>
            </DropdownMenuItem>            
            <AlertDialog
            >
              <AlertDialogTrigger 
                onClick={()=>player.fetchPlayerById(row.original.id)}
                className="text-sm cursor-default px-2 py-1.5 text-left hover:bg-slate-100 w-full rounded-sm">Desvincular</AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>¿Desvincular Jugador?</AlertDialogTitle>
                  <AlertDialogDescription>
                    ¿Estas seguro que desas desvincular al jugador <b>{player.values.nombre} {player.values.apellido}</b> con documento <b>{player.values.documento}</b>?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancelar</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={()=>onSubmit.unlink(row.original.id)}
                  >Desvincular</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

          </DropDownItem>
        )
      }
    }



  ]


  return(
    <>
      {
        team.isLoading?
          <Spinner/>
          :
          <>
            <div className="flex justify-between items-center">
              <div className="flex-col sm:flex-row flex gap-2">
                <Dialog 
                  open={team.openAdd} 
                  onOpenChange={team.setOpenAdd}
                >
                  <DialogTrigger asChild>
                    <Button 
                      onClick={()=>team.setOpenAdd(true)}  
                      variant="outline"
                      className="hover:bg-zinc-100 ">Añadir Jugador</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Añadir Jugador</DialogTitle>
                      <DialogDescription>
                        Rellena los campos para agregar tu jugador.
                      </DialogDescription>
                    </DialogHeader>
                    <Form
                      onSubmit={onSubmit.add}
                      initialValues={PLAYER?.add.initialValues(teamId)}
                      validationSchema={PLAYER?.add.validationSchema}
                      inputs={PLAYER_INPUTS}
                    />
                  </DialogContent>
                </Dialog>
                <Dialog 
                  open={player.openAdd} 
                  onOpenChange={player.setOpenAdd}
                >
                  <DialogTrigger asChild>
                    <Button 
                      onClick={()=>player.setOpenAdd(true)}  
                      variant="outline"
                      className="hover:bg-zinc-100 ">Vincular Jugador</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Vincular Jugador</DialogTitle>
                      <DialogDescription>
                        Escribe el correo de el jugador que quieres vincular.
                      </DialogDescription>
                    </DialogHeader>
                    <Form
                      onSubmit={onSubmit.link}
                      initialValues={LINK_PLAYER?.add.initialValues(teamId)}
                      validationSchema={LINK_PLAYER?.add.validationSchema}
                      inputs={LINK_PLAYER_INPUTS}
                    />
                  </DialogContent>
                </Dialog>

              </div>
              <DropdownMenu  className={"md:ml-0 ml-2"} >
                <DropdownMenuTrigger  asChild>
                  <Button variant="outline" className="w-[124px] shadow-sm">
                    Estados
                    <ChevronDownIcon className="ml-2 h-4 w-4" /> 
                  </Button>
                </DropdownMenuTrigger >
                <DropdownMenuContent align="end" className={"w-[161px]"}>
                  <DropdownMenuCheckboxItem
                    className="capitalize"
                    checked={player.activos}
                    onCheckedChange={(value) =>{
                      player.setActivos(!!value)
                      value?team.fetchPlayersByState(teamId,"activo"):team.fetchPlayersByTeam(teamId)
                      player.setLesionados(false)
                    }}
                  >
                    Activos
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    className="capitalize"
                    checked={player.lesionados}
                    onCheckedChange={(value) =>{
                      player.setLesionados(!!value)
                      value?team.fetchPlayersByState(teamId,"lesionado"):team.fetchPlayersByTeam(teamId)
                      player.setActivos(false)
                    }
                    }
                  >
                    Lesionados
                  </DropdownMenuCheckboxItem>

                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <DataTable 
              columns={columns} 
              data={team.teamPlayers} 
              placeholderSearch={"Buscar por correo"} 
              searchName={"email"}
            />

          </>
      }
    </>
  )
}

export default Jugador
