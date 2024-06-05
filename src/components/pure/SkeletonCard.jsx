import React from "react";
import { Skeleton } from "../ui/skeleton";
import {Card, CardHeader, CardContent} from "@/components/ui/card";
import { Separator } from "../ui/separator";

const SkeletonCard = () =>{

  return(
    <Card>
      <CardHeader className="w-full  flex flex-row justify-between gap-4">
        <div className="flex-row gap-4 flex items-center">
          <Skeleton className={"w-16 h-16 rounded-full"}/>
          <div>
            <Skeleton className={"w-32 h-4 "}/>
            <Skeleton className={"w-14 h-4 mt-2"}/>
          </div>
        </div>
        <Skeleton className={"w-2 h-6 mr-2"}/>
      </CardHeader>
      <Separator/>
      <CardContent className="flex flex-col mt-6 gap-4">
        <div className=" flex gap-4 items-center">
          <Skeleton className={"w-10 rounded-md p-2 h-10"}/>
          <Skeleton className={"w-36 h-4"}/>
        </div>
        <div className="flex gap-4 items-center">
          <Skeleton className={"w-10 rounded-md p-2 h-10"}/>
          <Skeleton className={"w-36 h-4"}/>
        </div> 
        <div className="flex gap-4 items-center">
          <Skeleton className={"w-10 rounded-md p-2 h-10"}/>
          <Skeleton className={"w-36 h-4"}/>

        </div> 
      </CardContent>
    </Card>

  )
}

export default SkeletonCard
