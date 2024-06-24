import React from "react";
import Container from "@/components/ui/container";
import { TEAM_INFO } from "@/constants/InfoCards";
import CardList from "@/components/pure/CardList";
import InfoHeader from "@/components/pure/InfoHeader";
import useClubDetails from "@/hooks/useClubDetails";


const ClubDetalles = () =>{

  const { club, team, onSubmit, formTexts, images, TEAM, TEAM_INPUTS } = useClubDetails()


  return(
    <>
      <Container >
        <InfoHeader imagen={club.values.logoUrl} title={club.values.nombre} description={club.values.pais}>
            <div className="flex lg:gap-8 gap-2 lg:flex-row flex-col  ">
              <p><b>Dirección:</b> {club.values.direccion}</p>
              <p><b>Teléfono:</b> {club.values.telefono}</p>
            </div>
            <div className="flex lg:gap-8 gap-2 lg:flex-row flex-col ">
              <p><b>Estadio:</b> {club.values.estadio}</p>
              <p><b>Ciudad:</b> {club.values.ciudad}</p>
            </div>
        </InfoHeader>
      </Container>
      <CardList 
        dataFromHook={team}
        data={club.clubTeams}
        formValidation={TEAM}
        onSubmit={onSubmit}
        buscarPorId={team.fetchTeamById}
        formTexts={formTexts}
        images={images}
        item_info={TEAM_INFO}
        inputs={TEAM_INPUTS}
        withLink
        link={"/adminPanel/equipo/"}
      />
    </>
  )

}

export default ClubDetalles
