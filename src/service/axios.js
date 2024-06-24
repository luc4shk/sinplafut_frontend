import axios from "axios";

//Creamos la instancia para el club
const club = axios.create({
  baseURL: "http://localhost:8080/club-service/club",
  timeout: 20000,
  headers: {
    //"Content-Type": "multipart/form-data"
  }
})


//Creamos la instancia para el equipo
const team = axios.create({
  baseURL: "http://localhost:8080/team-service/team",
  timeout: 20000,
  headers: {
    "Content-Type": "multipart/form-data"
  }
})

//Creamos la instancia para los metodos
const metodo = axios.create({
  baseURL: "http://localhost:8080/plan-entrenamiento-service/metodo",
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  }
})

//Creamos la instancia para las sesiones
const sesion = axios.create({
  baseURL: "http://localhost:8080/plan-entrenamiento-service/sesion",
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  }
})

//Creamos la instancia para los jugadores
const jugador = axios.create({
  baseURL: "http://localhost:8080/jugador-service/jugador",
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  }
})


//Exportamos las instancias para que sean accesbiles
export {
  club,
  team,
  metodo,
  sesion,
  jugador
}
