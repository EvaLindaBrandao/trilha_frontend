"use client"
//Components
import { CardPrimary } from "@/components/Landing/Cards/card-primary";
import { Header } from "@/components/Landing/Header";

//Image
import ImagemCarreira2 from "/public/assets/imagemcarreira2.svg";
import { useEffect, useState } from "react";
import { CareerService } from "@/services/CareerService";
import { Career } from "@/types/career";

export default function Carreiras() {
  const [careers, setCareers] = useState<Career[]>([])

  useEffect(()=> {
    CareerService.getAll().then((data)=> {
      setCareers(data)
    })
  },[])
  return (
    <>
      <Header />
      <div className="mt-12 px-12">
        <h2 className="text-secondary-blue text-2xl font-medium">
          <span className="text-primary-orange">As carreiras</span> que melhor
          conbinam contigo
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-6">
          { careers.map((career)=>{
            return (
              <CardPrimary
                key={career.id}
                href={`/carreiras/${career.id}`}
                src={career?.imageSrc}
                alt="Imagem de Carreira"
                titulo={career.name}
                paragrafo={career?.shortDescription || ''}
             />
            )
          })}
        </div>
      </div>
    </>
  );
}
