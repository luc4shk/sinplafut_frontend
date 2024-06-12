import React, {useEffect, useState} from "react";
import Container from "@/components/ui/container";
import { Card, CardHeader, CardTitle, CardDescription, CardContent} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback} from "@radix-ui/react-avatar";
import { Separator } from "@radix-ui/react-dropdown-menu";
import {useParams} from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {useClubs} from "@/hooks/useClubs";
import Palette from 'react-palette';


const ClubDetalles = () =>{

  const {id} = useParams()
  const club = useClubs()

  useEffect(()=>{
    club.fetchClubById(id) 
    club.fetchTeamsById(id)
  },[])


  console.log(club.clubTeams)


  return(
    <>
      <Container width={"w-1/3"}>
        <div className="rounded-md shadow-sm h-full w-full">
          <Card>
         <Palette src={club.values.logoUrl}>
          {({ data }) => (
            <CardHeader className="h-28 flex flex-row gap-4" style={{backgroundColor:data.darkMuted}}>
              <Avatar className="flex items-center rounded-full relative top-6 left-4 p-4 w-28 h-28 border border-transparent" 
                style={{
                   backgroundColor:data.darkMuted,
                   borderColor:data.darkMuted,
                }}>
                <AvatarImage src={club.values.logoUrl} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="relative left-2 top-8">
                <CardTitle className="text-white">{club.values.nombre}</CardTitle>
                <CardDescription className="text-white">{club.values.pais}</CardDescription>
              </div>
            </CardHeader>
             )}
</Palette>
            <Separator/>
            <CardContent className="flex flex-col mt-16 gap-4">
              <Tabs defaultValue="account" className="w-full">
                <TabsList className="w-full">
                  <TabsTrigger className="w-full" value="account">Información</TabsTrigger>
                  <TabsTrigger className="w-full" value="password">Equipos</TabsTrigger>
                </TabsList>
                <TabsContent value="account" className="flex flex-col gap-4">
                  <p><b>Dirección:</b> {club.values.direccion}</p>
                  <p><b>Teléfono:</b> {club.values.telefono}</p>
                  <p><b>Estadio:</b> {club.values.estadio}</p>
                  <p><b>Ciudad:</b> {club.values.ciudad}</p>
                </TabsContent>
                <TabsContent value="password">
                  {
                    club.clubTeams.length !==0 ? 
                      <table className="w-full">
                        <thead className="bg-zinc-100  text-left">
                          <th className="p-2">Nombre</th>
                          <th className="p-2">Categoría</th>
                        </thead>
                        <tbody>
                          {
                            club.clubTeams.map((team, i)=>(
                              <>
                                <tr className={`${i%2!=0?"bg-slate-100":""}`}>
                                <td className="p-2">{team.nombre}</td>
                                <td className="p-2">{team.categoria}</td>
                                </tr>
                              </>
                            ))
                          }
                        </tbody>
                      </table>
                      : <p className="text-center">No hay Equipos Asociados</p>
                  } 
                </TabsContent>
              </Tabs>

            </CardContent>
          </Card>
        </div>

      </Container>
    </>
  )

}

export default ClubDetalles
