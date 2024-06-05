import NavBar from "@/components/ui/navbar";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Container from "@/components/ui/container";
import {Skeleton} from "@/components/ui/skeleton";


const HomeAdmin = () =>{
  const notify = () => toast("Wow so easy !");
  return(
    <>
      <Container>
        <button onClick={notify}>Omgggg</button>
        <div className="grid grid-cols-3 gap-8">
          {
            Array.from({length:5}, (v,i)=>(
              <Card key={i} className={"w-[full]"}>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Card Content</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
            ))
          }
        </div>
      </Container>

    </>
  )
}

export default HomeAdmin
