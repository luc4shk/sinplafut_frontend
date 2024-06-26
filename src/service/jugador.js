import {jugador} from "./axios";


const addPlayer = async (nombre, apellido, fecha_nacimiento, documento, email, direccion, celular, numero_camiseta, tipo_sangre, nivel_hemoglobina, consumo_o2, lactato_sangre, equipoId) => {
  try {
    const body = {
      nombre: nombre,
      apellido: apellido,
      fecha_nacimiento: fecha_nacimiento,
      documento: documento,
      email: email,
      direccion: direccion,
      celular: celular,
      estado: "activo",
      numero_camiseta: numero_camiseta,
      tipo_sangre: tipo_sangre,
      nivel_hemoglobina: nivel_hemoglobina,
      consumo_o2: consumo_o2,
      lactato_sangre: lactato_sangre,
      equipoId: equipoId
    }
    const response = jugador.post("create", body)
    return response
  } catch (e) {
    throw e
  }
}

const editPlayer = async (playerId, nombre, apellido, fecha_nacimiento, documento, email, direccion, celular, estado, numero_camiseta, tipo_sangre, nivel_hemoglobina, consumo_o2, lactato_sangre, equipoId) => {

  try {
    const body = {
      id: playerId,
      nombre: nombre,
      apellido: apellido,
      fecha_nacimiento: fecha_nacimiento,
      documento: documento,
      email: email,
      direccion: direccion,
      celular: celular,
      estado: estado,
      numero_camiseta: numero_camiseta,
      tipo_sangre: tipo_sangre,
      nivel_hemoglobina: nivel_hemoglobina,
      consumo_o2: consumo_o2,
      lactato_sangre: lactato_sangre,
      equipoId: equipoId
    }
    const response = jugador.put(`/update/${playerId}`, body)
    return response
  }
  catch (e) {
    throw e
  }
}

const getPlayerById = async (id) => {
  try {
    const response = jugador.get(`/find/${id}`)
    return response
  }
  catch (e) {
    throw e
  }
}

const unlinkPlayer = async (id) => {
  try {
    const response = jugador.put(`/unlink/${id}`)
    return response

  }
  catch (e) {
    throw e
  }
}

const linkPlayer = async (email, equipoId) => {
  const body = {
    email: email,
    equipoId: equipoId
  }
  try {
    const response = jugador.put(`/link`, body)
    return response

  }
  catch (e) {
    throw e
  }
}

const deletePlayer = async (id) => {
  try {
    const response = jugador.delete(`/delete/${id}`)
    return response
  }
  catch (e) {
    throw e
  }
}

const getPlayerLesions = async (id) => {
  try {
    const response = jugador.get(`/getLesiones/${id}`)
    return response
  }
  catch (e) {
    throw e
  }
}

const getPlayerLesionById = async (id) => {
  try {
    const response = jugador.get(`/getLesion/${id}`)
    return response
  }
  catch (e) {
    throw e
  }

}

const linkPlayerLesion = async (idPlayer, idLesion, fecha_inicio, fecha_fin) => {
  try {
    const body = {
      lesionId: idLesion,
      fecha_inicio: fecha_inicio,
      fecha_fin: fecha_fin
    }
    const response = jugador.post(`/assignLesion/${idPlayer}`, body)
    return response
  }
  catch (e) {
    throw e
  }
}

const updatePlayerLesion = async (idLesionUrl, idLesion, fecha_inicio, fecha_fin) => {
  try {
    const body = {
      lesionId: idLesion,
      fecha_inicio: fecha_inicio,
      fecha_fin: fecha_fin
    }
    const response = jugador.put(`/updateLesion/${idLesionUrl}`, body)
    return response
  }
  catch (e) {
    throw e
  }
}

const deletePlayerLesion = async (id) => {
  try {
    const response = jugador.delete(`/deleteLesion/${id}`)
    return response
  }
  catch (e) {
    throw e
  }
}


export {
  addPlayer,
  editPlayer,
  getPlayerById,
  unlinkPlayer,
  linkPlayer,
  deletePlayer,
  getPlayerLesions,
  getPlayerLesionById,
  linkPlayerLesion,
  updatePlayerLesion,
  deletePlayerLesion
}
