"use client"
//Components
import { Header } from "@/components/Landing/Header";

//Image
import { useEffect, useState } from "react";
import { TrailService } from "@/services/TrailService";
import { Trail } from "@/types/trail";
import { useParams } from "next/navigation";
import Image from "next/image";
import noImage from "../../../../../public/images/no-image.png"

export default function Carreiras() {
  const [trail, setTrail] = useState<Trail>()
  const { id } = useParams()
  const trailId = Number(id)

  useEffect(()=> {
    TrailService.getOne(trailId).then((data)=> {
      setTrail(data)
    })
  },[trailId])

  return (
    <>
      <Header />
      <div className="flex flex-col gap-4 p-8 max-w-[1324px] m-auto">
        <h2 className="text-2xl font-semibold text-secondary-blue mb-8">
          Trilha de <span className="text-primary-orange">{trail?.name}</span>
        </h2>
        <p>{trail?.description}</p>
        <Image 
          src={trail?.imageSrc || noImage} 
          alt="" 
          width={100} 
          height={100}
          unoptimized
          className="w-full border border-gray"
        />
      </div>
    </>
  );
}
