import React from "react";
import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const SkeletonInfoHeader = () =>{
  return(
    <Card className={"lg:h-[178px] sm:h-[210px]  h-[322px] w-full "}>
      <Skeleton className="flex items-center rounded-full relative top-12 left-12 p-4 w-28 h-28 border border-transparent"/> 
      <Skeleton className={"absolute top-[140px] left-[190px] sm:left-[220px] w-[150px] sm:w-[200px] h-8"}/>
      <Skeleton className={"absolute top-[180px] left-[190px] sm:left-[220px] w-[100px] h-4"}/>
      <Skeleton className={"top-[300px] sm:top-[210px] absolute left-[50px] sm:left-[220px] lg:left-[220px] lg:w-[150px] sm:w-[150px] w-[200px] h-4"}/>
      <Skeleton className={"top-[360px] sm:top-[210px] absolute left-[50px] sm:left-[400px] lg:left-[560px] lg:w-[150px] sm:w-[150px] w-[230px] h-4"}/>
      <Skeleton className={"top-[270px] lg:top-[210px] sm:top-[240px] absolute left-[50px] sm:left-[220px] lg:left-[390px] lg:w-[150px] sm:w-[150px] w-[140px] h-4"}/>
      <Skeleton className={"top-[330px] lg:top-[210px] sm:top-[240px] absolute left-[50px] lg:left-[730px] sm:left-[400px] lg:w-[150px] sm:w-[150px] w-[180px] h-4"}/>
    </Card>


  )
}

export default SkeletonInfoHeader
