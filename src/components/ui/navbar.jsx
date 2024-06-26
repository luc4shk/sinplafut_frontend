import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { UserContext } from "@/context/UserContext";
import { useContext } from "react";

import { LogOut, SquareX} from "lucide-react";


/**
 * Componente que devuelve el NavBar
 **/
const NavBar = () =>{

  const {logOut} = useContext(UserContext)
  //Links individuales
  const menuItems = [
    {
      to:"/adminPanel/clubes",
      text:"Clubes"
    },
    {
      to:"/adminPanel/lesiones",
      text:"Lesiones"
    },
  ]

  const menuItemsSidebar= [
    {
      to:"/adminPanel/clubes",
      text:"Clubes"
    },
    {
      to:"/adminPanel/lesiones",
      text:"Lesiones"
    },
    {
      to:"/adminPanel/entrenamientos",
      text:"Entrenamientos"
    },

    {
      to:"/adminPanel/macrociclos",
      text:"Macrociclos"
    },
    {
      to:"/adminPanel/microciclos",
      text:"Microciclos"
    },
    {
      to:"/adminPanel/metodos",
      text:"Metodos"
    },
    {
      to:"/adminPanel/sesiones",
      text:"Sesiones"
    },
    {
      to:"/adminPanel/jugadores",
      text:"Jugadores"

    },
    {
      to:"/adminPanel/cuerpoTecnico",
      text:"Cuerpo Técnico"

    }

  ]

  //Links en el dropMenu
  const dropDownItems = [
    {
      to:"/adminPanel",
      text:"Jugadores"
    },
    {
      to:"/adminPanel",
      text:"Cuerpo Técnico"
    }

  ]

  const dropDownItemsPlan= [
    {
      to:"/adminPanel/entrenamientos",
      text:"Entrenamientos"
    },

    {
      to:"/adminPanel/macrociclos",
      text:"Macrociclos"
    },
    {
      to:"/adminPanel/microciclos",
      text:"Microciclos"
    },
    {
      to:"/adminPanel/metodos",
      text:"Metodos"
    },
    {
      to:"/adminPanel/sesiones",
      text:"Sesiones"
    }

  ]

  return(
    <div className=" font-karla w-full text-center h-12 bg-white text-black flex justify-between items-center border-b px-4 border-zinc-200 text-lg">

      {/*Menu responsive*/}
      <Drawer  className="border-black" direction="left" >
        <DrawerTrigger className="sm:hidden block">
          <Menu className="cursor-pointer" color="black"/>
        </DrawerTrigger>
        <DrawerContent className="border-none rounded-none h-full w-[300px]">
          <DrawerHeader className={"flex items-center justify-between text-left"}>
            <h1 className="text-2xl font-bold">SINPLAFUT</h1>
            <DrawerClose>
              <SquareX color="black"/>
            </DrawerClose>
          </DrawerHeader>
          <div className="flex flex-col gap-6">
            {
              menuItemsSidebar.map((item,i)=>(
                <div key={i} className="px-4 text-xl">
                  <NavLink
                    to={item.to}
                  >
                    <DrawerClose>
                      {item.text}
                    </DrawerClose>
                  </NavLink>
                </div> 
              ))
            }
          </div>

        </DrawerContent>
      </Drawer>

      {/*Título de la aplicación / logo */}
      <NavLink to={"/adminPanel"}>
        <p className="scroll-m-20 text-2xl font-bold tracking-tight">SINPLAFUT</p>
      </NavLink>



      {/*Links del Menú*/}
      <div className="sm:flex hidden flex gap-1 items-center text-gray-400 ">
        {
          menuItems.map((item,i) =>(
            <div 
              key={i}
              className="px-2">
              <NavLink
                to={item.to}
                className={({isActive}) =>
                    `transition duration-300 hover:text-black ${isActive ? "text-black" : ""}`
                }
              >{item.text}</NavLink>
            </div> 
          ))
        }

        {/*DropMenu del Plan*/}
        <NavigationMenu >
          <NavigationMenuList >
            <NavigationMenuItem >
              <NavigationMenuTrigger className={"text-lg font-normal p-2 "}>Plan</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="flex flex-col items-left p-2 ">
                  {dropDownItemsPlan.map((item, i)=>(
                    <NavLink 
                      key={i}
                      to={item.to} 
                      className={({isActive})=>
                          `hover:bg-zinc-100 hover:text-black hover:text-black  text-gray-400 rounded-md p-2 radius-md ${isActive ? "text-black" : ""}`
                      }>
                      <NavigationMenuLink className={""}>
                        {item.text}
                      </NavigationMenuLink>
                    </NavLink>
                  ))} 
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>


        {/*DropMenu del Personal*/}
        <NavigationMenu >
          <NavigationMenuList >
            <NavigationMenuItem >
              <NavigationMenuTrigger className={"text-lg font-normal p-2 "}>Personal</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="flex flex-col items-left p-2 ">
                  {dropDownItems.map((item, i)=>(
                    <NavLink 
                      key={i}
                      to={item.to} 
                      className={({isActive})=>
                          `hover:bg-zinc-100 hover:text-black hover:text-black  text-gray-400 rounded-md p-2 radius-md ${isActive ? "text-black" : ""}`
                      }>
                      <NavigationMenuLink className={""}>
                        {item.text}
                      </NavigationMenuLink>
                    </NavLink>
                  ))} 
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>





      </div>

      {/*Boton de cerrar sesión*/}
      <LogOut 
        className="rounded-md p-2 hover:bg-zinc-100 cursor-pointer"
        size={34}
        onClick={()=>{
          logOut()
        }}
      />

    </div>
  )
}

export default NavBar
