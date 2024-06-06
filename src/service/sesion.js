import {sesion} from "./axios";

const getAllSessions = async () => {
  try {
    const response = sesion.get("/findAll")
    return response
  } catch (e) {
    throw e
  }
}

const getSessionById = async (id) => {
  try {
    const response = sesion.get(`/find/${id}`)
    return response
  } catch (e) {
    throw e
  }
}

const getSessionMethods = async (id) => {
  try {
    const response = sesion.get(`/findMethods/${id}`)
    return response
  } catch (e) {
    throw e
  }
}

const addSession = async (nombre, descripcion, fecha_inicio, hora, duracion, tipo, equipoId, metodos) => {
  const body = {
    nombre: nombre,
    descripcion: descripcion,
    fecha_inicio: fecha_inicio,
    hora: hora,
    duracion: duracion,
    tipo: tipo,
    equipoId: equipoId,
    metodos, metodos
  }
  try {
    const response = sesion.post(`/create`, body)
    return response
  } catch (e) {
    throw e
  }
}

const deleteSession = async (id) => {
  try {
    const response = sesion.delete(`/delete/${id}`)
    return response
  } catch (e) {
    throw e
  }
}

export {
  getAllSessions,
  getSessionById,
  getSessionMethods,
  addSession,
  deleteSession
}
