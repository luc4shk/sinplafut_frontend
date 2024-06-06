import { metodo } from "./axios";

const getAllMethods = async () => {
    try{
        const response = await metodo.get("/findAll")
        return response;
    }
    catch(e){
        throw e
    }
}

const getClubById = async (id) => {
    try{
        const response = await metodo.get(`/find/${id}`)
        return response;
    }
    catch(e){
        throw e
    }
}



