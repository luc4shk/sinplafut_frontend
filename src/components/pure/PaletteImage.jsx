import React from "react";
import Palette from 'react-palette';
import { Avatar, AvatarImage, AvatarFallback} from "@radix-ui/react-avatar";
import { CardHeader, CardTitle, CardDescription} from "../ui/card";
const PaletteImage = ({imagen,title, description, color="darkMuted"}) =>{

  return(
        <Palette src={imagen}>
          {({ data , loading}) => (
            !loading &&
            <CardHeader className="h-28 flex flex-row gap-4 " style={{backgroundColor:data[color]}}>
              <Avatar className="flex items-center rounded-full relative top-6 left-4 p-4 w-28 h-28 border border-transparent" 
                style={{
                  backgroundColor:data[color],
                  borderColor:data[color],
                }}>
                <AvatarImage src={imagen} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="relative left-2 top-8">
                <CardTitle className="text-white">{title}</CardTitle>
                <CardDescription className="text-white">{description}</CardDescription>
              </div>
            </CardHeader>
          )}
        </Palette>

  )

}

export default PaletteImage
