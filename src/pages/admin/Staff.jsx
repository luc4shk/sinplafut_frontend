import {DataTable} from "@/components/ui/data-table";
import Spinner from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import useStaff from "@/hooks/useStaff";
import React from "react";
import {Inputs} from "@/constants/Inputs";
import FormikValues from "@/constants/FormikValues";
import Form from "@/components/forms/Form";
import { toast } from "react-hot-toast";
import DropDownItem from "@/components/pure/DropDownItem";
import { ChevronDownIcon } from "lucide-react";
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
  DropdownMenuItem,
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
import EquipoDetalles from "./EquipoDetalles";


const Staff = ({teamId}) =>{


  const staff = useStaff(teamId)
  const {STAFF,LINK_PLAYER} = FormikValues()
  const {STAFF_INPUTS,LINK_PLAYER_INPUTS} = Inputs()
  const labelTipos = {
    entrenador: "Entrenador",
    preparador_fisico: "Preparador Físico",
    medico: "Médico",
    director_tecnico: "Director Técnico",
    asistente_tecnico: "Asistente Técnico"
};

  const parseDate = (date) =>{
    const dateParts = date.split("-")
    return `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`
  }

  const parseData = (staff) =>{
    return staff.map((s,i)=>{
      const nuevoStaff = {...s}
      nuevoStaff.tipo = labelTipos[s.tipo] 
      return nuevoStaff
    })
  }

const onSubmit = {
    //Método para agregar un staff
    add: ({nombre, apellido, email, documento, fecha_nacimiento, telefono, equipoId, tipo}) =>{
      const new_fecha_nacimiento = parseDate(fecha_nacimiento)
      toast.promise(
        staff.fetchAddStaff(nombre, apellido, email, documento, new_fecha_nacimiento, telefono, equipoId, tipo),
        {
          loading: 'Añadiendo miembro del Staff',
          success: ()=>{
            staff.setOpenAdd(false)
            return'Miembro añadido con éxito 👌'},
          error:(error)=> error+"",
        }
      )
    },
    //Método para editar un jugador
    edit:({id, nombre, apellido, email, documento, fecha_nacimiento, telefono, equipo_id, tipo})=>{
      const new_fecha_nacimiento = parseDate(fecha_nacimiento)
      toast.promise(
        staff.fetchUpdateStaff(id, nombre, apellido, email, documento, new_fecha_nacimiento, telefono, equipo_id, tipo),
        {
          loading: 'Editando miembro del Staff',
          success: ()=>{
            staff.setOpenAdd(false)
            return'Miembro editado con éxito 👌'},
          error:(error)=> error+"",
        }
      )
    },
    //Método para desvincular un jugador
    unlink:(id)=>{
      toast.promise(
        staff.fetchUnlinkStaff(id),
        {
          loading: 'Desvinculando miembro del Staff',
          success: ()=>{
            staff.setOpenAdd(false)
            return'Miembro  desvinculado con éxito 👌'},
          error:(error)=> error+"",
        }
      )

    },
    //Método para vincular un jugador
    link:({email,equipoId})=>{
      toast.promise(
        staff.fetchLinkStaff(email,equipoId),
        {
          loading: 'Vinculando miembro del Staff',
          success: ()=>{
            staff.setOpenLink(false)
            return'Miembro vinculado con éxito 👌'},
          error:(error)=> error+"",
        }

      )
    },
    //Método para eliminar un jugador
    delete:(id)=>{
      toast.promise(
        staff.fetchDeleteStaff(id),
        {
          loading: 'Eliminando miembro del Staff',
          success: ()=>{
            return'Staff eliminado con éxito 👌'},
          error:(error)=> error+"",
        }

      )
    }

  }


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
      accessorKey: "tipo",
      header: "Rol"
    },
 {
      //Columna de acciones para cada celda
      id: "actions",
      enableHiding: false,
      cell: ({row}) => {
        const staff = useStaff(teamId)
        const deleteMessage = `${staff.values.nombre} ${staff.values.apellido} - ${staff.values.documento}`;
        return (
          <DropDownItem
            itemId={row.original.id} 
            onSubmit={onSubmit}
            buscarPorId={staff.fetchStaffById}
            isLoadingDetails={staff.isLoadingDetails}
            values={STAFF}
            dataFromHook={staff}
            titleEdit={"Editar Miembro"}
            descEdit={"Edita los campos para modificar el miembro del staff."}
            titleDelete={"¿Estás seguro?"}
            descDelete={"Se eliminará el miembro "}
            inputs={STAFF_INPUTS}
            images={""}
            iconColor={"black"}
            withDeleteMessage
            deleteMessage={deleteMessage}
            hasChildren
          >
                        <AlertDialog
            >
              <AlertDialogTrigger 
                onClick={()=>staff.fetchStaffById(row.original.id)}
                className="text-sm cursor-default px-2 py-1.5 text-left hover:bg-slate-100 w-full rounded-sm">Desvincular</AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>¿Desvincular Miembro?</AlertDialogTitle>
                  <AlertDialogDescription>
                    ¿Estas seguro que deseas desvincular el miembro <b>{staff.values.nombre} {staff.values.apellido}</b> con documento <b>{staff.values.documento}</b>?
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
    staff.isLoading? 
      <Spinner
      />
    :
    <>
      <div className="flex justify-between items-center">
        <div className="flex-col sm:flex-row flex gap-2">
          <Dialog 
            open={staff.openAdd} 
            onOpenChange={staff.setOpenAdd}
          >
            <DialogTrigger asChild>
              <Button 
                onClick={()=>staff.setOpenAdd(true)}  
                variant="outline"
                className="hover:bg-zinc-100 ">Añadir Miembro</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Añadir Miembro</DialogTitle>
                <DialogDescription>
                  Rellena los campos para agregar un miembro.
                </DialogDescription>
              </DialogHeader>
              <Form
                onSubmit={onSubmit.add}
                initialValues={STAFF?.add.initialValues(teamId)}
                validationSchema={STAFF?.add.validationSchema}
                inputs={STAFF_INPUTS}
              />
            </DialogContent>
          </Dialog>
          <Dialog 
            open={staff.openLink} 
            onOpenChange={staff.setOpenLink}
          >
            <DialogTrigger asChild>
              <Button 
                onClick={()=>staff.setOpenLink(true)}  
                variant="outline"
                className="hover:bg-zinc-100 ">Vincular Miembro</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Vincular Miembro</DialogTitle>
                <DialogDescription>
                  Escribe el correo del miembro que quieres vincular.
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
                <DropdownMenuContent align="end" className={"w-[200px]"}>
                  <DropdownMenuCheckboxItem
                    className="capitalize"
                    checked={staff.entrenador}
                    onCheckedChange={(value) =>{
                      staff.setEntrenador(!!value)
                      value?staff.fetchStaffByType(teamId,"entrenador"):staff.fetchStaffByTeam(teamId)
                      staff.setPreparadorFisico(false)
                      staff.setMedico(false)
                      staff.directorTecnico(false)
                      staff.asistenteTecnico(false)
                    }}
                  >
                    Entrenador
                  </DropdownMenuCheckboxItem>
                 <DropdownMenuCheckboxItem
                className="capitalize"
                checked={staff.preparadorFisico}
                onCheckedChange={(value) => {
                    staff.setPreparadorFisico(!!value);
                    value ? staff.fetchStaffByType(teamId, "preparador_fisico") : staff.fetchStaffByTeam(teamId);
                    staff.setEntrenador(false);
                    staff.setMedico(false);
                    staff.setDirectorTecnico(false);
                    staff.setAsistenteTecnico(false);
                }}
            >
                Preparador Físico
            </DropdownMenuCheckboxItem>

            <DropdownMenuCheckboxItem
                className="capitalize"
                checked={staff.medico}
                onCheckedChange={(value) => {
                    staff.setMedico(!!value);
                    value ? staff.fetchStaffByType(teamId, "medico") : staff.fetchStaffByTeam(teamId);
                    staff.setEntrenador(false);
                    staff.setPreparadorFisico(false);
                    staff.setDirectorTecnico(false);
                    staff.setAsistenteTecnico(false);
                }}
            >
                Médico
            </DropdownMenuCheckboxItem>

            <DropdownMenuCheckboxItem
                className="capitalize"
                checked={staff.directorTecnico}
                onCheckedChange={(value) => {
                    staff.setDirectorTecnico(!!value);
                    value ? staff.fetchStaffByType(teamId, "director_tecnico") : staff.fetchStaffByTeam(teamId);
                    staff.setEntrenador(false);
                    staff.setPreparadorFisico(false);
                    staff.setMedico(false);
                    staff.setAsistenteTecnico(false);
                }}
            >
                Director Técnico
            </DropdownMenuCheckboxItem>

            <DropdownMenuCheckboxItem
                className="capitalize"
                checked={staff.asistenteTecnico}
                onCheckedChange={(value) => {
                    staff.setAsistenteTecnico(!!value);
                    value ? staff.fetchStaffByType(teamId, "asistente_tecnico") : staff.fetchStaffByTeam(teamId);
                    staff.setEntrenador(false);
                    staff.setPreparadorFisico(false);
                    staff.setMedico(false);
                    staff.setDirectorTecnico(false);
                }}
            >
                Asistente Técnico
            </DropdownMenuCheckboxItem>

                </DropdownMenuContent>
              </DropdownMenu>

        </div>

        <DataTable
          data={parseData(staff.staff)}
          columns={columns}
          placeholderSearch={"Buscar por correo"}
          searchName={"email"}
        />
      </>
      }
</>
      )
      
}

      export default Staff
