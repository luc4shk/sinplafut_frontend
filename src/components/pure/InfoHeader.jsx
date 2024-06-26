import React from "react";
import { Card, CardContent} from "@/components/ui/card";
import PaletteImage from "./PaletteImage";

const InfoHeader = ({imagen,title,description, children}) =>{
  return(
    <div className="overflow-hidden rounded-md shadow-sm h-full w-full">
      <Card className="overflow-hidden">
        <PaletteImage 
          imagen={imagen} 
          title={title} 
          description={description}>
          <CardContent className="sm:ml-[135px] ml-0 sm:mt-4 mt-16 sm:gap-8 gap-2 sm:flex-row flex-col flex w-full">
            {children}
          </CardContent>

        </PaletteImage>
      </Card>
    </div>
  )
}

export default InfoHeader
