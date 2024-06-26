import {lesion} from "./axios";



//Método para obtener las lesiones
const getAllLesions = () => {
  try {
    const response = lesion.get(`/findAll`)
    return response
  }
  catch (e) {
    throw e
  }
}

//Método para obtener una lesión por su id
const getLesionById = (id) => {
  try {
    const response = lesion.get(`/find/${id}`)
    return response
  }
  catch (e) {
    throw e
  }
}

//Método para agregar una lesión
const addLesion = (nombre, tratamiento, observaciones) => {
  const body = {
    nombre: nombre,
    tratamiento: tratamiento,
    observaciones: observaciones
  }
  try {
    const response = lesion.post("/create", body)
    return response
  }
  catch (e) {
    throw e
  }
}

//Método para editar una lesión
const updateLesion = (id, nombre, tratamiento, observaciones) => {
  const body = {
    nombre: nombre,
    tratamiento: tratamiento,
    observaciones: observaciones
  }
  try {
    const response = lesion.put(`/update/${id}`, body)
    return response
  }
  catch (e) {
    throw e
  }
}

//Método para eliminar un lesión
const deleteLesion = (id) => {
  try {
    const response = lesion.delete(`/delete/${id}`)
    return response
  }
  catch (e) {
    throw e
  }
}

export {
  getAllLesions,
  getLesionById,
  addLesion,
  updateLesion,
  deleteLesion
}
