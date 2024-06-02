'use client';
//Components
import { CardCarreira } from "@/components/Landing/Cards/card-career";
import { Header } from "@/components/Landing/Header";

//Image
import ImagemCarreira1 from "/public/assets/imagemcarreira1.svg";
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
          Consoante as tuas respostas baseadas em tuas habilidades,
          dsasdadajhdsajhvdsahgdsahcdsa hjdfsahgxgfdsad vsadjfasytdyashd
          ...vimos as areas que melhor podem conbinar tigo são as seguintes
          listadas
        </p>
        <div className="mt-10 grid grid-cols-2 gap-6">
          {careers.map(career => (
            <CardCarreira
              key={career.id}
              href={`/carreiras/${career.id}`}
              src={ImagemCarreira1}
              alt="Imagem de Carreira"
              titulo={career.name}
              paragrafo={career.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}
