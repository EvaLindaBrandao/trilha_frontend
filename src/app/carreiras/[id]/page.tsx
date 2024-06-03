'use client'
// Components
import { ButtonSecundary } from "@/components/Landing/Buttons/button-secundary";
import { Header } from "@/components/Landing/Header";
import Image from "next/image";

// Image
import Programmer from "/public/assets/Programmer.svg";
import { Career } from "@/types/career";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { CareerService } from "@/services/CareerService";
import Link from "next/link";

export default function CarreiaraDetalhes() {
  const [career, setCareer] = useState<Career>()
  const { id } = useParams()
  const careerId = Number(id)

  useEffect(() =>{
    CareerService.getOne(careerId).then(data => setCareer(data))
  },[careerId])

  return (
    <>
      <Header />
      <div className=" w-full p-8">
        <div className="flex h-44 justify-between bg-[#F0F2F5] p-4">
          <div>
            <h1 className="text-secondary-blue text-2xl font-bold">
              Carreira<span className="text-primary-orange"> de {career?.name}</span>
            </h1>
            <p className="text-gray-black mb-2 mt-2">
              Por favor, responda com atenção às <br /> perguntas
              apresentadas.
            </p>
            <Link href={`/trilhas/carreiras/${career?.id}`}>
              <ButtonSecundary
                text="Ver trilhas"
                bgColor="bg-primary-orange"
                textColor="text-white"
              />
            </Link>
          </div>
          <div className="w-40 h-42 -my-4">
            <Image 
              unoptimized
              src={career?.imageSrc || ''} 
              alt="Imagem da carreira" 
              className="w-full h-full object-cover"
              width={100} 
              height={100}
            />
          </div>
        </div>
        <div className="w-ful flex gap-7 mt-8">
          <div dangerouslySetInnerHTML={{__html: career?.description || ''}}></div>
        </div>
      </div>
    </>
  );
}
