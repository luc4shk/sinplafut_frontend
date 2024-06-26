import React from "react";
import Container from "@/components/ui/container";
import { TEAM_INFO } from "@/constants/InfoCards";
import CardList from "@/components/pure/CardList";
import InfoHeader from "@/components/pure/InfoHeader";
import useClubDetails from "@/hooks/useClubDetails";
import SkeletonCard from "@/components/pure/SkeletonCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Card , CardHeader} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import SkeletonInfoHeader from "@/components/pure/SkeletonInfoHeader";


const ClubDetalles = () =>{

  const { clubHook, team, onSubmit, formTexts, images, TEAM, TEAM_INPUTS } = useClubDetails()


  return(
    <>
      <Container >

        {  
          clubHook.isLoadingDetails  ? 
            <SkeletonInfoHeader/>
            :
            <InfoHeader  imagen={clubHook.values.logoUrl} title={clubHook.values.nombre} description={clubHook.values.pais}>
              <div className="flex lg:gap-8 gap-2 lg:flex-row flex-col  ">
                <p><b>Dirección:</b> {clubHook.values.direccion}</p>
                <p><b>Teléfono:</b> {clubHook.values.telefono}</p>
              </div>
              <div className="flex lg:gap-8 gap-2 lg:flex-row flex-col ">
                <p><b>Estadio:</b> {clubHook.values.estadio}</p>
                <p><b>Ciudad:</b> {clubHook.values.ciudad}</p>
              </div>
            </InfoHeader>
        }
      </Container>
      {clubHook.isLoadingDetails ?
        <Container>
          <Button variant={"outline"} className={"sm:w-[240px] w-full"}>
              <Skeleton className={"w-16 h-4"}/>
          </Button>
          <div className="grid  mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
              Array.from({length:8}).map((_,i)=>(
                <SkeletonCard key={i}/>
              ))
            }

          </div>
        </Container>
        :
        <CardList 
          dataFromHook={team}
          data={clubHook.clubTeams}
          formValidation={TEAM}
          onSubmit={onSubmit}
          buscarPorId={team.fetchTeamById}
          formTexts={formTexts}
          images={images}
          item_info={TEAM_INFO}
          inputs={TEAM_INPUTS}
          withLink
          link={"/adminPanel/equipo/"}
          hasLoading
          loading={clubHook.isLoading}
        />
      }

    </>
  )

}

export default ClubDetalles
