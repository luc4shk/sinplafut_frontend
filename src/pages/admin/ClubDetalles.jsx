import Container from "@/components/ui/container";
import NavBar from "@/components/ui/navbar";
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback} from "@radix-ui/react-avatar";
import { Separator } from "@radix-ui/react-dropdown-menu";


const ClubDetalles = () =>{

  return(
    <>
    <Container>
      <div className="rounded-md shadow-md h-full w-full">
         <Card>
              <CardHeader className="bg-zinc-100 flex flex-row gap-4">
                <Avatar className="bg-white rounded-full relative top-24 left-4 p-4 w-36 h-36 border ">
                  <AvatarImage src="https://seeklogo.com/images/C/Club_Deportivo_los_Millonarios-logo-6A7FBBA6DC-seeklogo.com.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>Cúcuta Deportivo</CardTitle>
                  <CardDescription>Colombia</CardDescription>
                </div>
              </CardHeader>
              <Separator/>
              <CardContent className="flex flex-col mt-6 gap-4">
                              </CardContent>
            </Card>
      </div>

    </Container>
    </>
  )

}

export default ClubDetalles
