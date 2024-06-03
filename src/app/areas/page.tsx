'use client'
//Components
import { CardPrimary } from "@/components/Landing/Cards/card-primary";
import { Header } from "@/components/Landing/Header";

//Image
import ImagemCarreira1 from "/public/assets/imagemcarreira1.svg";
import { AreaService } from "@/services/AreaService";
import { Area } from "@/types/area";
import { useEffect, useState } from "react";

export default function Areas() {

  const [area, setArea] = useState<Area[]>([])

  useEffect(()=> {
    AreaService.getAll().then((data)=> {
      setArea(data)
    })
  },[])
  return (
    <>
      <Header />
      <div className="mt-4 px-12">
        <h2 className="text-2xl font-medium text-secondary-blue"> Áreas </h2>
        <div className="mt-6 grid grid-cols-2 gap-6">
        {area.map((area)=>{
          return (
          <CardPrimary
            src={ImagemCarreira1}
            alt="Imagem de uma adulta"
            titulo={area.name}
            paragrafo={area.description}
          />
        )
      })}
        </div>
      </div>
    </>
  );
}
