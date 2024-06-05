import React, {useContext}from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import * as yup from "yup"
import { UserContext } from "@/context/UserContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {ErrorMessage} from "@/components/ui/errorMessage";
import FormikValues from "@/constants/FormikValues";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Form from "@/components/forms/Form";
import {Formik} from "formik";




const Index = () =>{

  const { LOGIN } = FormikValues()
  const {register,setValue,handleSubmit, 
    formState: {
      errors
    }} = useForm({
      resolver:yupResolver(LOGIN.validationSchema)
    })
  const {logIn} = useContext(UserContext)
  const navigate = useNavigate()



  return(
    <>
      <div className="w-3/4 font-karla min-h-screen m-auto flex items-center justify-center z-10">

        <div className="flex items-start justify-between ">
          <Card className={"w-2/5 p-6 "}>
            <CardContent className={"flex flex-col p-0 gap-4"}>
              <form 
                onSubmit={handleSubmit(({email, password})=>{
                  logIn(email,password)
                  navigate("/adminPanel")
                })}
                className="flex flex-col p-0 gap-4">
                <div>
                  <Input 
                    {...register("email")}
                    className={`text-base ${errors.email  ? "ring-2 ring-red-500":""}`} 
                    type="email" 
                    name={"email"} 
                    placeholder="Correo Electrónico"/>
                  <ErrorMessage 
                    className={"mt-2"}
                    validate={errors.email}
                  >
                    {errors.email?.message}
                  </ErrorMessage>
                </div>
                <div>
                  <Input 
                    {...register("password")}
                    className={`text-base ${errors.password ? "ring-2 ring-red-500":""}`} 
                    type="password" 
                    name={"password"} 
                    placeholder="Contraseña"/>
                  <ErrorMessage 
                    className={"mt-2"}
                    validate={errors.password}
                  >
                    {errors.password?.message}
                  </ErrorMessage>
                </div>
                <Button 
                  type="submit"
                  className="w-full text-base">Iniciar Sesión</Button>
              </form>
              <div className='text-center'>
                <a className={"text-base w-full text-center text-blue-500 cursor-pointer  hover:underline"}>¿Olvidaste tu contraseña?</a>
              </div>
              <Separator/>
              <Button className="text-base w-full text-slate-900 bg-gray-100 border">Registrarse</Button>
            </CardContent>
          </Card>
          <div className="w-2/4  flex flex-col ">
            <h1 className="font-extrabold tracking-tight min-w-7xl text-7xl w-full">SINPLAFUT</h1>
            <p className="font-geist max-w-xl text-lg leading-7 [&:not(:first-child)]:mt-6">Planifica tu éxito en el fútbol con nosotros. Tácticas modernas, entrenamiento de alto nivel. Únete ya y haz que cada sesión cuente.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
