import { Navigate, Outlet} from "react-router-dom";
import { UserContext } from "@/context/UserContext";
import { useContext } from "react";
const ProtectedRoute = () =>{

  const {isLogin} = useContext(UserContext)



  if(!isLogin){
    return <Navigate to={"/"}/>
  }

  return <Outlet/>

}

export default ProtectedRoute
