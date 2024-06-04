'use client';
//Components
import { CardPrimary } from "@/components/Landing/Cards/card-primary";
import { Header } from "@/components/Landing/Header";

//Image
import noImage from "/public/images/no-image.png";
import { useParams } from "next/navigation";
import { Career } from "@/types/career";
import { useEffect, useState } from "react";
import { CareerService } from "@/services/CareerService";

export default function CarreirasRecomendas() {
  const { average: avg } = useParams()
  const average = Number(avg)

  const [careers, setCareers] = useState<Career[]>([]);

  useEffect(() => {
    CareerService.getRecommended(average).then(data => {
        setCareers(data)
    });
}, [average]);

  return (
    <>
      <Header />
      <div className="mt-12 px-12">
        <h2 className="text-2xl font-medium text-secondary-blue">
          <span className="text-primary-orange">As carreiras</span> recomendadas
          que melhor conbinam contigo
        </h2>
        <p className="text-gray-black">
        Levando em conta suas respostas e habilidades, as carreiras mais indicadas para você são as seguintes:
        </p>
        <div className="mt-10 grid grid-cols-2 gap-6">
          {careers.map(career => (
            <CardPrimary
              key={career.id}
              href={`/carreiras/${career.id}`}
              src={career?.imageSrc || noImage.src}
              alt="Imagem de Carreira"
              titulo={career.name}
              paragrafo={career?.shortDescription || ''}
            />
          ))}
        </div>
      </div>
    </>
  );
}
