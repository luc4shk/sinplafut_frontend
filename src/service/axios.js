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

//Creamos la instancia para los metodos
const metodo = axios.create({
  baseURL: "http://localhost:8080/plan-entrenamiento-service/metodo",
  timeout: 6000,
  headers: {
    "Content-Type": "application/json",
  }
})

//Exportamos las instancias para que sean accesbiles
export {
  club,
  team,
  metodo
}
