import {team} from "./axios";



const getAllTeams = async () => {
  try {
    const response = await team.get("/findAll")
    return response
  } catch (e) {
    throw e
  }
}

const getTeamById = async (id) => {
  try {
    const response = await team.get(`/find/${id}`)
    return response

  } catch (e) {
    throw e
  }
}

const addTeam = async (nombre, telefono, categoria, clubId, escudoTeam) => {
  const formData = new FormData()
  formData.append("nombre", nombre)
  formData.append("telefono", telefono)
  formData.append("categoria", categoria)
  formData.append("clubId", clubId)
  formData.append("escudo", escudoTeam)
  try {
    const response = await team.post("/create", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      }

    })
    return response
  } catch (e) {
    throw e
  }
}

const deleteTeam = async (id) => {
  try {
    const response = await team.delete(`/delete/${id}`)
    return response
  } catch (e) {
    throw e
  }
}

const updateTeam = async (id, nombre, telefono, categoria, clubId, escudoTeam) => {
  try {
    const formData = new FormData()
    formData.append("nombre", nombre)
    formData.append("telefono", telefono)
    formData.append("categoria", categoria)
    formData.append("clubId", clubId)
    formData.append("escudo", escudoTeam)

    const response = await team.put(`/update/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    })
    return response
  } catch (e) {
    throw e
  }
}





export {
  getAllTeams,
  getTeamById,
  addTeam,
  deleteTeam,
  updateTeam
}


