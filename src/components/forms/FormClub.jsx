import React from "react";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "../ui/errorMessage";
import { usePrevImage } from "@/hooks/usePrevImage";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";

//Componente para los formularios del Club (Añadir, Editar)
const FormClub = ({onSubmit,initialValues, validationSchema, isEdit=false}) =>{

  const { watch,handleSubmit, register, formState:{
    errors
  }} = useForm({
    resolver:yupResolver(validationSchema),
    defaultValues:initialValues
  })

  const {prev} = usePrevImage(watch, isEdit, "imagen")

  return(
    <>
      {
        prev && (
        <Avatar className="p-2 flex items-center  m-auto w-16 h-16 border rounded-full">
          <AvatarImage src={prev} />
          <AvatarFallback>L</AvatarFallback>
        </Avatar>)
      }
      <form
        onSubmit={handleSubmit(
          onSubmit
        )}
      >
        <div className="flex flex-col gap-4 py-4">
          <div className="flex flex-row items-center gap-4">
            <div>
              <Input 
                {...register("nombre")}
                className={`text-base ${errors.nombre ? "ring-2 ring-red-500":""}`}
                name="nombre" placeholder="Nombre"/>
              <ErrorMessage
                validate={errors.nombre}
              >
                {errors.nombre?.message} 
              </ErrorMessage>
            </div>
            <div>
              <Input 
                {...register("direccion")}
                className={`text-base ${errors.direccion ? "ring-2 ring-red-500":""}`}
                name="direccion" placeholder="Direccion"   />
              <ErrorMessage
                validate={errors.direccion}
              >
                {errors.direccion?.message}
              </ErrorMessage>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4">
            <div>
              <Input
                {...register("telefono")}
                className={`text-base ${errors.telefono ? "ring-2 ring-red-500":""}`}
                name="telefono" placeholder="Teléfono" />
              <ErrorMessage
                validate={errors.telefono}
              >
                {errors.telefono?.message}
              </ErrorMessage>
            </div>
            <div>
              <Input 
                {...register("ciudad")}
                className={`text-base ${errors.ciudad ? "ring-2 ring-red-500":""}`}
                name="ciudad" placeholder="Ciudad"  />
              <ErrorMessage
                validate={errors.ciudad}
              >
                {errors.ciudad?.message}
              </ErrorMessage>
            </div> 
          </div>
          <div className="flex flex-row items-center gap-4">
            <div>
              <Input 
                {...register("pais")}
                className={`text-base ${errors.pais ? "ring-2 ring-red-500":""}`}
                name="pais" placeholder="País"  />
              <ErrorMessage
                validate={errors.pais}
              >
                {errors.pais?.message}
              </ErrorMessage>
            </div>
            <div>
              <Input 
                {...register("estadio")}
                className={`text-base ${errors.estadio? "ring-2 ring-red-500":""}`}
                name="estadio" placeholder="Estadio"  />
              <ErrorMessage
                validate={errors.estadio}
              >
                {errors.estadio?.message}
              </ErrorMessage>

            </div>
          </div>
          <div className="flex flex-col items-center">
            <Input 
              {...register("imagen")}
              className={`text-base ${errors.imagen ? "ring-2 ring-red-500":""}`} 
              type="file" 
              name={"imagen"} 
              placeholder=""
            />
            <ErrorMessage 
              className={"mt-2"}
              validate={errors.imagen}
            >
              {errors.imagen?.message}
            </ErrorMessage>
          </div>
        </div>
        <button 
          className="rounded-md text-white w-full bg-slate-900 hover:bg-slate-800 p-2"
        >{!isEdit ? "Añadir" : "Guardar"}</button>

      </form>
    </>
  )

}

export default FormClub
