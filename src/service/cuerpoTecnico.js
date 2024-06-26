import {cuerpoTecnico} from "./axios";


//Método para obtener el cuerpo técnico de un equipo
const getStaffByTeam = async (idTeam) => {
  try {
    const response = await cuerpoTecnico.get(`/findByEquipo/${idTeam}`)
    return response
  }
  catch (e) {
    throw e
  }
}

//Método para obtener el cuerpo técnico de un equipo
const getStaffById = async (idStaff) => {
  try {
    const response = await cuerpoTecnico.get(`/find/${idStaff}`)
    return response
  }
  catch (e) {
    throw e
  }
}


//Método para obtener el cuerpo técnico de un equipo por tipo
const getStaffByType = async (idTeam, tipo) => {
  try {
    const response = await cuerpoTecnico.get(`/findByEquipo/${idTeam}/tipo/${tipo}`)
    return response
  }
  catch (e) {
    throw e
  }
}

//Método para añadir un integrante del cuerpo técnico
const addStaff = async (nombre, apellido, email, documento, fecha_nacimiento, telefono, idEquipo, tipo) => {
  const body = {
    nombre: nombre,
    apellido: apellido,
    email: email,
    documento: documento,
    fecha_nacimiento: fecha_nacimiento,
    telefono: telefono,
    equipoId: idEquipo,
    tipo: tipo
  }
  try {
    const response = await cuerpoTecnico.post(`/create`, body)
    return response
  }
  catch (e) {
    throw e
  }
}

//Método para actualizar un integrante del cuerpo técnico
const updateStaff = async (idStaff, nombre, apellido, email, documento, fecha_nacimiento, telefono, idEquipo, tipo) => {
  const body = {
    nombre: nombre,
    apellido: apellido,
    email: email,
    documento: documento,
    fecha_nacimiento: fecha_nacimiento,
    telefono: telefono,
    equipoId: idEquipo,
    tipo: tipo
  }
  try {
    const response = await cuerpoTecnico.put(`/update/${idStaff}`, body)
    return response
  }
  catch (e) {
    throw e
  }
}

//Método para desvincular un integrante del cuerpo técnico
const unlinkStaff = async (idStaff) => {
  try {
    const response = await cuerpoTecnico.put(`/unlink/${idStaff}`)
    return response
  }
  catch (e) {
    throw e
  }
}

//Método para vincular un integrante del cuerpo técnico
const linkStaff = async (email, equipoId) => {
  const body = {
    email: email,
    equipoId: equipoId
  }
  try {
    const response = await cuerpoTecnico.put(`/link`, body)
    return response
  }
  catch (e) {
    throw e
  }
}

//Método para eliminar un integrante del cuerpo técnico
const deleteStaff = async (idStaff) => {
  try {
    const response = await cuerpoTecnico.delete(`/delete/${idStaff}`)
    return response
  }
  catch (e) {
    throw e
  }
}

export {
  getStaffByTeam,
  getStaffById,
  getStaffByType,
  addStaff,
  updateStaff,
  unlinkStaff,
  linkStaff,
  deleteStaff
}
