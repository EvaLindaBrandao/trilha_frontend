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
      <div className=" w-full ">
        <div className="flex h-40 justify-between bg-[#F0F2F5] px-5">
          <div>
            <h1 className="text-secondary-blue mt-2 text-2xl font-bold">
              Carreira<span className="text-primary-orange"> de {career?.name}</span>
            </h1>
            <p className="text-gray-black mb-2 mt-2">
              Por favor, responda com atenção às <br /> perguntas
              apresentadas.
            </p>
            <Link href={`trilhas/carreiras/${career?.id}`}>
              <ButtonSecundary
                text="Ver trilhas"
                bgColor="bg-primary-orange"
                textColor="text-white"
              />
            </Link>
          </div>
          <div>
            <Image src={Programmer} alt="Imagem de programador" width={260} />
          </div>
        </div>
        <div className="w-ful flex gap-7">
          <div className="mt-4 h-[400px] w-[300px] bg-[#F0F2F5]"></div>
          <div>{career?.description}</div>
        </div>
      </div>
    </>
  );
}
