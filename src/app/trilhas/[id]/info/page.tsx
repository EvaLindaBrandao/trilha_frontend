"use client"
//Components
import { Header } from "@/components/Landing/Header";

//Image
import { useContext, useEffect, useState } from "react";
import { TrailService } from "@/services/TrailService";
import { Trail } from "@/types/trail";
import { useParams } from "next/navigation";
import Image from "next/image";
import noImage from "/public/images/no-image.png"
import { ButtonSecundary } from "@/components/Landing/Buttons/button-secundary";
import { AuthContext } from "@/providers/authProvider";
import { toast } from "react-toastify";
import { MenteeTrailService } from "@/services/MenteeTrailService";

export default function Carreiras() {
  const { user } = useContext(AuthContext) 

  const [trail, setTrail] = useState<Trail>()
  const { id } = useParams()
  const trailId = Number(id)

  useEffect(()=> {
    TrailService.getOne(trailId).then((data)=> {
      setTrail(data)
    })
  },[ trailId ])


  async function createMeteeTrail() {
    if(!user) {
      toast.warn('Precisas de uma conta para começar uma trilha')
      return
    }

    const menteeTrail = await MenteeTrailService.create({trailId, userId: user.id})

    if(menteeTrail) {
      toast.success('Inscrição realizada com sucesso, ficaras a espera da resposta do mentor')
    }
  }

  return (
    <>
      <Header />
      <div className="flex flex-col gap-4 p-8 max-w-[1324px] m-auto">
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold text-secondary-blue mb-8">
            Trilha de <span className="text-primary-orange">{trail?.name}</span>
          </h2>
          <ButtonSecundary text="Se inscrever" onClick={createMeteeTrail}/>
        </div>
        <p className="text-base"><b>Mentor:</b> {trail?.mentor?.user?.name}</p>
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
