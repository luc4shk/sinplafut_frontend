import HomeAdmin from "@/pages/admin/HomeAdmin"
import Index from "@/pages/Index"
import React from "react"
import {Route, Routes,HashRouter as Router} from "react-router-dom"
import ProtectedRoute from "./ProtectedRoute"
import Clubes from "@/pages/admin/Clubes"
import ClubDetalles from "@/pages/admin/ClubDetalles"
import NavBar from "@/components/ui/navbar"
import Entrenamientos from "@/pages/admin/Entrenamientos"
import Metodos from "@/pages/admin/Metodos"
import Session from "@/pages/admin/Session"
import EquipoDetalles from "@/pages/admin/EquipoDetalles"
import LesionesJugador from "@/pages/admin/LesionesJugador"
import Lesiones from "@/pages/admin/Lesiones"

const AppRouter = () =>{

  //Ruta Protegida con el NavBar
  const ProtectedRouteWithNavBar = ()=>{
    return (
      <>
        <NavBar/>
        <ProtectedRoute/>
      </>
    )
  } 

  //Rutas de la aplicación
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route element={<ProtectedRouteWithNavBar/>}>
          <Route path="/adminPanel" element={<HomeAdmin/>}/>
          <Route path="/adminPanel/clubes" element={<Clubes/>}/>
          <Route path="/adminPanel/lesiones" element={<Lesiones/>}/>
          <Route path="/adminPanel/clubes/:id" element={<ClubDetalles/>}/>
          <Route path="/adminPanel/equipo/:id" element={<EquipoDetalles/>}/>
          <Route path="/adminPanel/lesionesJugador/:id" element={<LesionesJugador/>}/>
          <Route path="/adminPanel/entrenamientos" element={<Entrenamientos/>}/>
          <Route path="/adminPanel/cuerpoTecnico" element={<HomeAdmin/>}/>
          <Route path="/adminPanel/personal" element={<HomeAdmin/>}/>
          <Route path="/adminPanel/metodos" element={<Metodos/>}/>
          <Route path="/adminPanel/sesiones" element={<Session/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRouter
