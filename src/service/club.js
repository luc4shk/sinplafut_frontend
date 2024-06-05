import {club} from "./axios"

const getAllClubs = async () => {
  try {
    const response = await club.get("/findAll")
    return response
  } catch (e) {
    throw e
  }
}

const getClubById = async (id) => {
  try {
    const response = await club.get(`/find/${id}`)
    return response
  } catch (e) {
    throw e
  }
}

const updateClub = async (id, nombre, direccion, telefono, ciudad, pais, estadio, imagen) => {
  try {

    const formData = new FormData()
    formData.append("nombre", nombre)
    formData.append("direccion", direccion)
    formData.append("telefono", telefono)
    formData.append("ciudad", ciudad)
    formData.append("pais", pais)
    formData.append("estadio", estadio)
    formData.append("file", imagen)
    const response = await club.put(`/update/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    })
    return response
  } catch (e) {
    throw e
  }
}

const deleteClub = async (id) => {
  try {
    const response = await club.delete(`/delete/${id}`)
    return response
  } catch (e) {
    throw e
  }
}

const addClub = async (nombre, direccion, telefono, ciudad, pais, estadio, imagen) => {
  try {
    const formData = new FormData()
    formData.append("nombre", nombre)
    formData.append("direccion", direccion)
    formData.append("telefono", telefono)
    formData.append("ciudad", ciudad)
    formData.append("pais", pais)
    formData.append("estadio", estadio)
    formData.append("file", imagen)
    const response = await club.post("/create", formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",

        }
      }
    )
    return response
  } catch (e) {
    throw e
  }
}

const getTeamsById = async (id) => {
  try {
    const response = await team.get(`/findTeams/${id}`)
    return response

  } catch (e) {
    throw e
  }
}

export {
  getAllClubs,
  getClubById,
  getTeamsById,
  updateClub,
  deleteClub,
  addClub
}
