import {metodo} from "./axios";

const getAllMethods = async () => {
    try {
        const response = await metodo.get("/findAll")
        return response;
    }
    catch (e) {
        throw e
    }
}

const getMethodById = async (id) => {
    try {
        const response = await metodo.get(`/find/${id}`)
        return response;
    }
    catch (e) {
        throw e
    }
}

const addMethod = async (nombre, descripcion, carga, intensidad, duracion) => {
    const body = {
        nombre: nombre,
        descripcion: descripcion,
        carga: carga,
        intensidad: intensidad,
        duracion: duracion
    }
    try {
        const response = await metodo.post("/create", JSON.stringify(body), {
            headers: {
                "Content-Type": "application/json"
            }
        })
        return response
    } catch (e) {
        throw e
    }
}

const updateMethod = async (id, nombre, descripcion, carga, intensidad, duracion) => {
    const body = {
        nombre: nombre,
        descripcion: descripcion,
        carga: carga,
        intensidad: intensidad,
        duracion: duracion
    }
    try {
        const response = await metodo.put(`/update/${id}`, body, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        return response
    } catch (e) {
        throw e
    }
}

const deleteMethod = async (id) => {
    try {
        const response = await metodo.delete(`/delete/${id}`)
        return response
    } catch (e) {
        throw e
    }
}

export {
    getAllMethods,
    getMethodById,
    addMethod,
    updateMethod,
    deleteMethod
}
