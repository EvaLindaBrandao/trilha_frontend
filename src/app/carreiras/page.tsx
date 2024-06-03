"use client"
//Components
import { CardCarreira } from "@/components/Landing/Cards/card-career";
import { Header } from "@/components/Landing/Header";

//Image
import ImagemCarreira1 from "/public/assets/imagemcarreira1.svg";
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
              <CardCarreira
                key={career.id}
                href={`/carreiras/${career.id}`}
                src={career?.imageSrc}
                alt="Imagem de Carreira"
                titulo={career.name}
                paragrafo={career.description}
             />
            )
          })}
        </div>
      </div>
    </>
  );
}
