import {createContext, useState, useEffect} from "react"

//Creamos la variable para manejar el contexto
export const UserContext = createContext()

//Definimos el provider
export const UserContextProvider = ({children}) =>{

  let datos = {
    email: "luiscarlosasqu@ufps.edu.co",
    password: "123456789"
  }
  //Estado para manejar los datos del usuario
  const [user,setUser] = useState({
    email:"",
    password:""
  })

  //Estado para manejar el login 
  const [isLogin, setLogin] = useState(true)



  const logIn = (email, password) =>{
    if(1==1){
      setLogin(true)
      setUser({
        email:datos.email,
        password:datos.password
      })
    }
    else{
      alert("Correo o contraseña incorrectos")
    }
  }

  const logOut = () =>{
    setLogin(false)
  }

  return (
    <UserContext.Provider value={{
      user,
      isLogin,
      logIn,
      logOut
    }}>
      {children}
    </UserContext.Provider>
  )
}
