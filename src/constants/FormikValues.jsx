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
        escudo: "",


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
        //club: Yup.string().required("Selecciona un club"),
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
        // club: values?.categoria && getClubId(values.clubId),
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
        //club: Yup.string().required("Selecciona un club"),
      })

    }
  }

  const PLAYER = {
    add:{
      initialValues: (id)=>
      ({
        nombre: "",
        apellido: "",
        fecha_nacimiento: "",
        documento: "",
        email: "",
        direccion: "",
        celular: "",
        estado: "activo",
        numero_camiseta: "",
        tipo_sangre: "",
        nivel_hemoglobina: "",
        consumo_o2: "",
        lactato_sangre: "",
        equipoId: id
      }),
      validationSchema: Yup.object().shape({
        nombre: Yup.string()
        .required('El nombre es obligatorio.')
        .max(40, 'El nombre no debe contener mas de 40 caracteres.')
        .min(2, 'El nombre debe contener mínimo 2 caracteres.'),
        apellido: Yup.string()
        .required('El apellido es obligatorio.')
        .max(45, 'El apellido no puede contener más de 45 caracteres.')
        .min(2, 'El apellido debe contener mínimo 2 caracteres.'),
        fecha_nacimiento: Yup.string()
        .required('La fecha de nacimiento es obligatoria.'),
        documento: Yup.string()
        .required('El documento es obligatorio.')
        .matches(/^\d{10}$/, 'El documento debe tener 10 números.'),
        email: Yup.string()
        .email('Formato de email inválido.')
        .required('El email es obligatorio.'),
        direccion: Yup.string()
        .required('La dirección es obligatoria.')
        .max(45, 'La dirección no puede contener más de 45 caracteres.')
        .min(10, 'La dirección debe contener más de 10 caracteres.'),
        celular: Yup.string()
        .required('El celular es obligatorio.')
        .matches(/^[0-9]{10}$/, 'El celular debe tener 10 dígitos numéricos.'),
        estado: Yup.string()
        .required('El estado es obligatorio.'),
        numero_camiseta: Yup.string()
        .required('El número de camiseta es obligatorio.')
        .matches(/^[0-9]{1,2}$/, 'La camiseta debe tener un número entre 0 y 99'),
        tipo_sangre: Yup.string()
        .required('El tipo de sangre es obligatorio.'),
nivel_hemoglobina: Yup.number()
        .required('El nivel de hemoglobina es obligatorio.')
        .max(18,'El nivel de hemoglobina debe ser un número del 15 al 18')
        .min(15,'El nivel de hemoglobina debe ser un número del 15 al 18')
        .typeError('El nivel del consumo de hemoglobina es obligatorio.'),
        consumo_o2: Yup.number()
        .required('El consumo de oxígeno es obligatorio.')
        .max(90,'El consumo de oxígeno debe ser un número entre 40 y 90')
        .min(40,'El consumo de oxígeno debe ser un número entre 40 y 90')
        .typeError('El nivel del consumo de oxígeno es obligatorio.'),
        lactato_sangre: Yup.number()
        .required('El nivel de lactato en sangre es obligatorio.')
        .max(5,'El lactato de sangre debe ser un número entre 2 y 5')
        .min(2,'El lactato de sangre debe ser un número entre 2 y 5')
        .typeError('El nivel de lactato en sangre es obligatorio.'),

        equipoId: Yup.number()
        .required('El equipo ID es obligatorio.')
      })

    },
    edit:{
      initialValues: (values)=>
      ({
        playerId: values?.id ?? null,
        nombre: values?.nombre ?? null,
        apellido: values?.apellido ?? null,
        fecha_nacimiento: values?.fecha_nacimiento ?? null,
        documento: values?.documento ?? null,
        email: values?.email ?? null,
        direccion: values?.direccion ?? null,
        celular: values?.celular ?? null,
        estado: values?.estado?? null,
        numero_camiseta: values?.numero_camiseta ?? null,
        tipo_sangre: values?.tipo_sangre ?? null,
        nivel_hemoglobina: values?.nivel_hemoglobina?? null,
        consumo_o2: values?.consumo_o2?? null,
        lactato_sangre: values?.lactato_sangre?? null,
        equipoId: values?.equipoId ?? null
      }),
      validationSchema: Yup.object().shape({
        nombre: Yup.string()
        .required('El nombre es obligatorio.')
        .max(40, 'El nombre no debe contener mas de 40 caracteres.')
        .min(2, 'El nombre debe contener mínimo 2 caracteres.'),
        apellido: Yup.string()
        .required('El apellido es obligatorio.')
        .max(45, 'El apellido no puede contener más de 45 caracteres.')
        .min(2, 'El apellido debe contener mínimo 2 caracteres.'),
        fecha_nacimiento: Yup.string()
        .required('La fecha de nacimiento es obligatoria.'),
        documento: Yup.string()
        .required('El documento es obligatorio.')
        .matches(/^\d{10}$/, 'El documento debe tener 10 números.'),
        email: Yup.string()
        .email('Formato de email inválido.')
        .required('El email es obligatorio.'),
        direccion: Yup.string()
        .required('La dirección es obligatoria.')
        .max(45, 'La dirección no puede contener más de 45 caracteres.')
        .min(10, 'La dirección debe contener más de 10 caracteres.'),
        celular: Yup.string()
        .required('El celular es obligatorio.')
        .matches(/^[0-9]{10}$/, 'El celular debe tener 10 dígitos numéricos.'),
        estado: Yup.string()
        .required('El estado es obligatorio.'),
        numero_camiseta: Yup.number()
        .required('El número de camiseta es obligatorio.')
        .min(0,'El número de la camiseta debe estar entre 0 y 99')
        .max(99,'El número de la camiseta debe estar entre 0 y 99')
        .typeError('El número de la camiseta es obligatorio.'),
        tipo_sangre: Yup.string()
        .required('El tipo de sangre es obligatorio.'),
        nivel_hemoglobina: Yup.number()
        .required('El nivel de hemoglobina es obligatorio.')
        .max(18,'El nivel de hemoglobina debe ser un número del 15 al 18')
        .min(15,'El nivel de hemoglobina debe ser un número del 15 al 18')
        .typeError('El nivel del consumo de hemoglobina es obligatorio.'),
        consumo_o2: Yup.number()
        .required('El consumo de oxígeno es obligatorio.')
        .max(90,'El consumo de oxígeno debe ser un número entre 40 y 90')
        .min(40,'El consumo de oxígeno debe ser un número entre 40 y 90')
        .typeError('El nivel del consumo de oxígeno es obligatorio.'),
        lactato_sangre: Yup.number()
        .required('El nivel de lactato en sangre es obligatorio.')
        .max(5,'El lactato de sangre debe ser un número entre 2 y 5')
        .min(2,'El lactato de sangre debe ser un número entre 2 y 5')
        .typeError('El nivel de lactato en sangre es obligatorio.'),
        equipoId: Yup.number()
        .required('El equipo ID es obligatorio.')
      })


    }
  };

  const LINK_PLAYER = {
    add:{
      initialValues:(equipoId)=>
      ({
        email:"",
        equipoId:equipoId
      }),
      validationSchema: Yup.object().shape({
        email: Yup.string("Ingresa tu correo")
        .email("Ingresa un email válido")
        .required("El email es requerido"),

      })
    }
  }

  const LESION = {
    add:{
      initialValues:{
        nombre:"",
        tratamiento:"",
        observaciones:""
      },
      validationSchema: Yup.object().shape({
        nombre: Yup.string()
        .required('El nombre es obligatorio.')
        .max(50, 'El nombre no puede contener más de 50 caracteres.')
        .min(10, 'El nombre debe contener mínimo 10 caracteres.'),
        tratamiento: Yup.string()
        .required('El tratamiento es obligatorio.')
        .max(200, 'El tratamiento no puede contener más de 200 caracteres.')
        .min(20, 'El tratamiento debe contener mínimo 20 caracteres.'),
        observaciones: Yup.string()
        .required('Las observaciones son obligatorias.')
        .max(210, 'Las observaiones no puede contener más de 210 caracteres.')
        .min(20, 'Las observaciones debe contener mínimo 20 caracteres.'),
      })
    },
    edit:{
      initialValues: (values)=>({
        nombre: values?.nombre ?? null,
        tratamiento: values?.tratamiento ?? null,
        observaciones: values?.observaciones ?? null,
        id:values?.id ?? null
      }),
      validationSchema: Yup.object().shape({
        nombre: Yup.string()
        .required('El nombre es obligatorio.')
        .max(50, 'El nombre no puede contener más de 50 caracteres.')
        .min(10, 'El nombre debe contener mínimo 10 caracteres.'),
        tratamiento: Yup.string()
        .required('El tratamiento es obligatorio.')
        .max(200, 'El tratamiento no puede contener más de 200 caracteres.')
        .min(20, 'El tratamiento debe contener mínimo 20 caracteres.'),
        observaciones: Yup.string()
        .required('Las observaciones son obligatorias.')
        .max(210, 'Las observaiones no puede contener más de 210 caracteres.')
        .min(20, 'Las observaciones debe contener mínimo 20 caracteres.'),
      })
    }
  }

  const PLAYER_LESION = {
    add:{
      initialValues:{
        lesionId:"",
        fecha_inicio:"",
        fecha_fin:"",
      },
      validationSchema:Yup.object().shape({
        fecha_inicio: Yup.string()
        .required('La fecha es obligatoria'),
        fecha_fin: Yup.string()
        .required('La fecha es obligatoria'),
        lesionId: Yup.string().required("La lesión es requerida")
      })
    },
    edit:{
      initialValues:(values)=>({
        id: values?.id?? null,
        lesionId: values?.lesionId ?? null,
        fecha_inicio: values?.fecha_inicio ?? null,
        fecha_fin: values?.fecha_fin?? null,

      }),
      validationSchema:Yup.object().shape({
        fecha_inicio: Yup.string()
        .required('La fecha es obligatoria'),
        fecha_fin: Yup.string()
        .required('La fecha es obligatoria'),
        lesionId: Yup.string().required("La lesión es requerida")
      })


    }
  }

  const STAFF = {
    add:{
      initialValues:(id)=>({
        nombre: "",
        apellido: "",
        email: "",
        documento: "",
        fecha_nacimiento: "",
        telefono: "",
        equipoId: id,
        tipo: ""
      }),
      validationSchema:Yup.object().shape({
        nombre: Yup.string()
        .required('El nombre es obligatorio.')
        .max(40, 'El nombre no debe contener mas de 40 caracteres.')
        .min(2, 'El nombre debe contener mínimo 2 caracteres.'),
        apellido: Yup.string()
        .required('El apellido es obligatorio.')
        .max(45, 'El apellido no puede contener más de 45 caracteres.')
        .min(2, 'El apellido debe contener mínimo 2 caracteres.'),
        email: Yup.string()
        .email('Formato de email inválido.')
        .required('El email es obligatorio.'),

        documento: Yup.string()
        .required('El documento es obligatorio.')
        .matches(/^\d{10}$/, 'El documento debe tener 10 números.'),
        fecha_nacimiento: Yup.string()
        .required('La fecha de nacimiento es obligatoria.'),
        fecha_nacimiento: Yup.string()
        .required('La fecha de nacimiento es obligatoria.'),
        telefono: Yup.string()
        .required('El telefono es obligatorio.')
        .matches(/^[0-9]{10}$/, 'El telefono debe tener 10 dígitos numéricos.'),
        tipo: Yup.string().required("El rol es requerido")



      })
    },
    edit:{
      initialValues:(values)=>({
        nombre: values?.nombre ?? null,
        apellido: values?.apellido?? null,
        email: values?.email?? null,
        documento: values?.documento?? null,
        fecha_nacimiento: values?.fecha_nacimiento?? null,
        telefono: values?.telefono?? null,
        equipoId: values?.equipoId?? null,
        tipo: values?.tipo?? null,
        id:values?.id?? null,
        equipo_id:values?.equipo_id?? null

      }),
      validationSchema:Yup.object().shape({
        nombre: Yup.string()
        .required('El nombre es obligatorio.')
        .max(40, 'El nombre no debe contener mas de 40 caracteres.')
        .min(2, 'El nombre debe contener mínimo 2 caracteres.'),
        apellido: Yup.string()
        .required('El apellido es obligatorio.')
        .max(45, 'El apellido no puede contener más de 45 caracteres.')
        .min(2, 'El apellido debe contener mínimo 2 caracteres.'),
        email: Yup.string()
        .email('Formato de email inválido.')
        .required('El email es obligatorio.'),

        documento: Yup.string()
        .required('El documento es obligatorio.')
        .matches(/^\d{10}$/, 'El documento debe tener 10 números.'),
        fecha_nacimiento: Yup.string()
        .required('La fecha de nacimiento es obligatoria.'),
        fecha_nacimiento: Yup.string()
        .required('La fecha de nacimiento es obligatoria.'),
        telefono: Yup.string()
        .required('El telefono es obligatorio.')
        .matches(/^[0-9]{10}$/, 'El telefono debe tener 10 dígitos numéricos.'),
        tipo: Yup.string().required("El rol es requerido")



      })


    },
  }


  return{
    LOGIN,
    CLUB,
    TEAM,
    PLAYER,
    LINK_PLAYER,
    LESION,
    PLAYER_LESION,
    STAFF
  }
}

export default FormikValues
