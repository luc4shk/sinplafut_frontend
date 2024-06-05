import React from "react"
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "../ui/errorMessage";
import { usePrevImage } from "@/hooks/usePrevImage";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const Form = ({inputs,onSubmit,initialValues,imgNombre, validationSchema, isEdit=false}) =>{


  const {watch, handleSubmit, register, formState:{
    errors
  }} = useForm({
    resolver:yupResolver(validationSchema),
    defaultValues:initialValues
  })

  const {prev} = usePrevImage(watch, isEdit,imgNombre)
  console.log(errors)

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
        <div className="grid grid-cols-2 gap-4 py-4">
          {
            inputs.map((item,i)=>{

              return(
                item.isSelect?
                  <div className={item.estilos?item.estilos:""} key={i}>
                    <select
                      {...register(item.name)}
                      name={item.name}
                      className={item.estilosSel}
                    >
                      {item.element}
                    </select>
                    <ErrorMessage
                      validate={errors[item.name]}
                    >
                      {errors[item.name]?.message} 
                    </ErrorMessage>
                  </div>
                  :
                  <div
                    key={i}
                    className={item.estilos ? item.estilos : item.type==="file" ? "col-span-2":""}
                  >
                    <Input 
                      {...register(item.name)}
                      className={`text-base  ${errors[item.name] ? "ring-2 ring-red-500":""}`}
                      name={item.name} 
                      placeholder={item.place?item.place:""}
                      type={item.type}
                    />
                    <ErrorMessage
                      validate={errors[item.name]}
                    >
                      {errors[item.name]?.message} 
                    </ErrorMessage>
                  </div>
              )
            }
            )
          }
        </div>
        <button 
          className="rounded-md text-white w-full bg-slate-900 hover:bg-slate-800 p-2"
        >{!isEdit ? "Añadir" : "Guardar"}</button>
      </form>
    </>
  )

}

export default Form
