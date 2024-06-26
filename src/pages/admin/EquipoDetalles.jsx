import React,{useEffect} from "react"
import InfoHeader from "@/components/pure/InfoHeader"
import Container from "@/components/ui/container"
import useTeams from "@/hooks/useTeams"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useParams } from "react-router-dom"
import Jugador from "./Jugador"
import SkeletonInfoHeader from "@/components/pure/SkeletonInfoHeader"

const EquipoDetalles = () =>{
  const {id} = useParams()
  const team = useTeams()

  useEffect(()=>{
    team.fetchTeamById(id)
    //team.fetchPlayersByTeam(id)
  },[])

  return(
    <>
      <Container>
        {         
          team.isLoadingDetails ? 
            <SkeletonInfoHeader/>

            :

            <InfoHeader imagen={team.values.escudo} title={team.values.nombre} description={team.values.categoria}>
              <div className="flex lg:gap-8 gap-2 lg:flex-row flex-col  ">
                <p><b>Teléfono:</b> {team.values.telefono}</p>
              </div>
            </InfoHeader>
        }
      </Container>
      <Container>
        <Tabs defaultValue="jugadores" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger value="jugadores" className="w-full">Jugadores</TabsTrigger>
            <TabsTrigger value="cuerpo_tecnico" className="w-full">Cuerpo Técnico</TabsTrigger>
            <TabsTrigger value="macrociclos" className="w-full">Macrociclos</TabsTrigger>
          </TabsList>
          <TabsContent value="jugadores">
            <Jugador teamId={id}/>
          </TabsContent>
          <TabsContent value="cuerpo_tecnico">Cuerpo Técnico</TabsContent>
          <TabsContent value="macrociclos">Macrociclos</TabsContent>
        </Tabs>
      </Container>
    </>
  )
}

export default EquipoDetalles
