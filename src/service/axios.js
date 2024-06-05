import axios from "axios";

//Creamos la instancia para el club
const club = axios.create({
  baseURL: "http://localhost:8080/club-service/club",
  timeout: 6000,
  headers: {
    //"Content-Type": "multipart/form-data"
  }
})


//Creamos la instancia para el equipo
const team = axios.create({
  baseURL: "http://localhost:8080/team-service/team",
  timeout: 6000,
  headers: {
    "Content-Type": "multipart/form-data"
  }
})

//Exportamos las instancias para que sean accesbiles
export {
  club,
  team
}
