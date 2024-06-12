import React from "react"
import * as Yup from "yup"
import { useClubs } from "@/hooks/useClubs"
const FormikValues = () =>{

  const {clubes} = useClubs()

  const getClubId = (clubId) =>{
    const club = clubes.filter((club)=>club.id===clubId)
    return club[0].id
  }

  const LOGIN = {
    validationSchema:Yup.object({
      email: Yup
      .string("Ingresa tu correo")
      .email("Ingresa un email válido")
      .required("El email es requerido"),
      password: Yup
      .string("Ingresa tu contraseña")
      .required("La contraseña es requerida"),
    })

  }


  const CLUB = {
    add: {
      initialValues: {
        nombre: "",
        ciudad: "",
        direccion: "",
        estadio: "",
        pais: "",
        telefono: "",
        imagen: ""
      },
      validationSchema: Yup.object().shape({
        nombre: Yup.string()
        .required('El nombre es obligatorio.')
        .max(30, 'El nombre no debe contener mas de 30 caracteres.')
        .min(3, 'El nombre debe contener mínimo 3 caracteres.'),
        direccion: Yup.string()
        .required('La dirección es obligatoria.')
        .max(25, 'La dirección no puede contener más de 25 caracteres.')
        .min(3, 'La dirección debe contener mínimo 3 caracteres.'),
        telefono: Yup.string()
        .required('El teléfono es obligatorio')
        .matches(/^[0-9]+$/, 'El teléfono solo puede contener números')
        .min(7, 'El teléfono debe contener 7 caracteres')
        .max(7, 'El teléfono debe contener 7 caracteres'),
        ciudad: Yup.string()
        .required('La ciudad es obligatoria')
        .max(25, 'La ciudad no puede contener más de 25 caracteres.')
        .min(3, 'La ciudad debe contener mínimo 3 caracteres.'),
        pais: Yup.string()
        .required('El país es obligatorio')
        .max(25, 'El país no puede contener más de 25 caracteres.')
        .min(3, 'El país debe contener mínimo 3 caracteres.'),
        estadio: Yup.string()
        .required('El estadio es obligatorio')
        .max(25, 'El estadio no puede contener más de 25 caracteres.')
        .min(3, 'El estadio debe contener mínimo 3 caracteres.'),
        imagen: Yup
        .mixed()
        .test("Requerida", "La imagen es requerida", value => {
          return value && value[0]; 
        }),


      })
    },
    edit: {
      initialValues: (values)=>({
        nombre: values?.nombre ?? null,
        ciudad: values?.ciudad ?? null,
        direccion: values?.direccion ?? null,
        estadio: values?.estadio ?? null,
        pais: values?.pais ?? null,
        telefono: values?.telefono ?? null,
        imagen: values?.logoUrl?? null,
        iditem: values?.id?? null
      }),
      validationSchema: 
      Yup.object().shape({
        nombre: Yup.string()
        .required('El nombre es obligatorio.')
        .max(30, 'El nombre no debe contener mas de 30 caracteres.')
        .min(3, 'El nombre debe contener mínimo 3 caracteres.'),
        direccion: Yup.string()
        .required('La dirección es obligatoria.')
        .max(25, 'La dirección no puede contener más de 25 caracteres.')
        .min(3, 'La dirección debe contener mínimo 3 caracteres.'),
        telefono: Yup.string()
        .required('El teléfono es obligatorio')
        .matches(/^[0-9]+$/, 'El teléfono solo puede contener números')
        .min(7, 'El teléfono debe contener 7 caracteres')
        .max(7, 'El teléfono debe contener 7 caracteres'),
        ciudad: Yup.string()
        .required('La ciudad es obligatoria')
        .max(25, 'La ciudad no puede contener más de 25 caracteres.')
        .min(3, 'La ciudad debe contener mínimo 3 caracteres.'),
        pais: Yup.string()
        .required('El país es obligatorio')
        .max(25, 'El país no puede contener más de 25 caracteres.')
        .min(3, 'El país debe contener mínimo 3 caracteres.'),
        estadio: Yup.string()
        .required('El estadio es obligatorio')
        .max(25, 'El estadio no puede contener más de 25 caracteres.')
        .min(3, 'El estadio debe contener mínimo 3 caracteres.'),


      })

    }

  }

  const TEAM = {
    add:{
      initialValues: {
        nombre: "",
        telefono: "",
        categoria: "",
        escudo: ""

      },
      validationSchema:Yup.object({
        nombre: Yup.string()
        .required('El nombre es obligatorio.')
        .max(30, 'El nombre no debe contener mas de 30 caracteres.')
        .min(3, 'El nombre debe contener mínimo 3 caracteres.'),
        telefono: Yup.string()
        .required('El teléfono es obligatorio')
        .matches(/^[0-9]+$/, 'El teléfono solo puede contener números')
        .min(10, 'El teléfono debe contener 10 caracteres')
        .max(10, 'El teléfono debe contener 10 caracteres'),
        categoria: Yup.string().required("Selecciona una categoría"),
        club: Yup.string().required("Selecciona un club"),
        escudo: Yup
        .mixed()
        .test("Requerida", "La imagen es requerida", value => {
          return value && value[0]; 
        }),


      })

    },
    edit:{
      initialValues: (values)=>({
        nombre: values?.nombre ?? null,
        telefono: values?.telefono ?? null,
        categoria: values?.categoria ?? null,
        club: values?.categoria && getClubId(values.clubId),
        escudo: values?.escudo?? null,
        iditem: values?.id?? null
      }),
      validationSchema:Yup.object({
        nombre: Yup.string()
        .required('El nombre es obligatorio.')
        .max(30, 'El nombre no debe contener mas de 30 caracteres.')
        .min(3, 'El nombre debe contener mínimo 3 caracteres.'),
        telefono: Yup.string()
        .required('El teléfono es obligatorio')
        .matches(/^[0-9]+$/, 'El teléfono solo puede contener números')
        .min(10, 'El teléfono debe contener 10 caracteres')
        .max(10, 'El teléfono debe contener 10 caracteres'),
        categoria: Yup.string().required("Selecciona una categoría"),
        club: Yup.string().required("Selecciona un club"),
      })

    }
  }

  const METODO = {
    add:{
      initialValues: {
        nombre: "",
        descripcion: "",
        duracion:"",
        tipoCarga:"",
        tipoIntensidad:"",
      },
      validationSchema:Yup.object({
        nombre: Yup.string()
        .required('El nombre es obligatorio.')
        .max(30, 'El nombre no debe contener mas de 30 caracteres.')
        .min(3, 'El nombre debe contener mínimo 3 caracteres.'),
        descripcion: Yup.string()
        .required('La descripcion es obligatoria.')
        .max(30, 'La descripción no debe contener mas de 230 caracteres.')
        .min(10, 'La descripción debe contener mínimo 10 caracteres.'),
        duracion: Yup.string()
        .required('El la duración es obligatoria')
        .matches(/^[0-9]+$/, 'El teléfono solo puede contener números.'),
        //.min(7, 'El teléfono debe contener 7 caracteres')
        //.max(7, 'El teléfono debe contener 7 caracteres'),
        tipoCarga: Yup.string().required("Selecciona una carga."),
        tipoIntensidad: Yup.string().required("Selecciona una intensidad."),
      })

    },
    edit:{
      initialValues: (values)=>({
        nombre: values?.nombre ?? null,
        descripcion: values?.descripcion ?? null,
        duracion: values?.duracion?? null,
        tipoCarga: values?.carga?? null,
        tipoIntensidad: values?.intensidad ?? null,
        id: values?.id?? null
      }),
      validationSchema:Yup.object({
        nombre: Yup.string()
        .required('El nombre es obligatorio.')
        .max(30, 'El nombre no debe contener mas de 30 caracteres.')
        .min(3, 'El nombre debe contener mínimo 3 caracteres.'),
        descripcion: Yup.string()
        .required('La descripcion es obligatoria.')
        .max(30, 'La descripción no debe contener mas de 30 caracteres.')
        .min(10, 'La descripción debe contener mínimo 10 caracteres.'),
        duracion: Yup.string()
        .required('El la duración es obligatoria')
        .matches(/^[0-9]+$/, 'El teléfono solo puede contener números'),
        //.min(7, 'El teléfono debe contener 7 caracteres')
        //.max(7, 'El teléfono debe contener 7 caracteres'),
        tipoCarga: Yup.string().required("Selecciona una categoría"),
        tipoIntensidad: Yup.string().required("Selecciona una intensidad"),
      })

    }
  }
  
 const SESION = {
    add: {
      initialValues: {
        nombre: "",
        descripcion: "",
        fecha_inicio: "",
        hora: "",
        duracion: "",
        tipo: "",
        equipoId: "",
        metodos: ""
      },
      validationSchema: Yup.object().shape({
        nombre: Yup.string()
        .required('El nombre es obligatorio.')
        .max(30, 'El nombre no debe contener mas de 30 caracteres.')
        .min(3, 'El nombre debe contener mínimo 3 caracteres.'),
        descripcion: Yup.string()
        .required('La descripción es obligatoria.')
        .max(30, 'La descripción no puede contener más de 30 caracteres.')
        .min(10, 'La descripción debe contener mínimo 10 caracteres.'),
        fecha_inicio: Yup.string()
        .required('La fecha es obligatoria'),
        hora: Yup.string()
        .required('La hora es obligatoria'),
        duracion: Yup.string()
        .required('La duración es obligatoria'),
        //.max(25, 'La duración no puede contener más de 25 caracteres.')
        //.min(3, 'La duración debe contener mínimo 3 caracteres.'),
        tipo: Yup.string()
        .required('El tipo es obligatorio'),
        equipoId: Yup.string()
        .required('El equipo es obligatorio'),
        metodos: Yup.array().typeError('Selecciona al menos un método')

      })
    },
    edit: {
      initialValues: (values)=>({
        nombre: values?.nombre ?? null,
        descripcion: values?.descripcion ?? null,
        fecha_inicio: values?.fecha_inicio ?? null,
        hora: values?.hora ?? null,
        duracion: values?.duracion ?? null,
        tipo: values?.tipo ?? null,
        equipoId: values?.equipoId ?? null,
        metodos: values?.metodos ?? null,
        iditem: values?.id?? null
      }),
      validationSchema: 
      Yup.object().shape({
        nombre: Yup.string()
        .required('El nombre es obligatorio.')
        .max(30, 'El nombre no debe contener mas de 30 caracteres.')
        .min(3, 'El nombre debe contener mínimo 3 caracteres.'),
        direccion: Yup.string()
        .required('La dirección es obligatoria.')
        .max(25, 'La dirección no puede contener más de 25 caracteres.')
        .min(3, 'La dirección debe contener mínimo 3 caracteres.'),
        telefono: Yup.string()
        .required('El teléfono es obligatorio')
        .matches(/^[0-9]+$/, 'El teléfono solo puede contener números')
        .min(7, 'El teléfono debe contener 7 caracteres')
        .max(7, 'El teléfono debe contener 7 caracteres'),
        ciudad: Yup.string()
        .required('La ciudad es obligatoria')
        .max(25, 'La ciudad no puede contener más de 25 caracteres.')
        .min(3, 'La ciudad debe contener mínimo 3 caracteres.'),
        pais: Yup.string()
        .required('El país es obligatorio')
        .max(25, 'El país no puede contener más de 25 caracteres.')
        .min(3, 'El país debe contener mínimo 3 caracteres.'),
        estadio: Yup.string()
        .required('El estadio es obligatorio')
        .max(25, 'El estadio no puede contener más de 25 caracteres.')
        .min(3, 'El estadio debe contener mínimo 3 caracteres.'),


      })

    }
 }


  return{
    LOGIN,
    CLUB,
    TEAM,
    METODO,
    SESION
  }
}

export default FormikValues
