import HomeAdmin from "@/pages/admin/HomeAdmin"
import Index from "@/pages/Index"
import React from "react"
import {Route, Routes,HashRouter as Router} from "react-router-dom"
import Teams from "@/pages/admin/Teams"
import ProtectedRoute from "./ProtectedRoute"
import Clubes from "@/pages/admin/Clubes"
import ClubDetalles from "@/pages/admin/ClubDetalles"
import NavBar from "@/components/ui/navbar"
import Entrenamientos from "@/pages/admin/Entrenamientos"
import Metodos from "@/pages/admin/Metodos"
import Session from "@/pages/admin/Session"

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

  return(
    <Router>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route element={<ProtectedRouteWithNavBar/>}>
          <Route path="/adminPanel" element={<HomeAdmin/>}/>
          <Route path="/adminPanel/clubes" element={<Clubes/>}/>
          <Route path="/adminPanel/clubes/:id" element={<ClubDetalles/>}/>
          <Route path="/adminPanel/equipos" element={<Teams/>}/>
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
