"use client";
//Imagens
import WomanImage from "/public/assets/header-pic.png";
import Logo from "/public/images/logo/logo.svg";

//Components
import Image from "next/image";
import { ButtonSecundary } from "../Buttons/button-secundary";
import Link from "next/link";
import { Header } from "../Header";

export function Banner() {
  return (
    <div className="h-[100 vh - 80px] bg-primary-blue">
      <Header />
      <div className="flex justify-between gap-4 px-32 ">
        <div className="mt-12 flex flex-col items-start gap-4">
          <h1 className="text-4xl font-bold text-secondary-blue">
            Escolher sua <span className="text-primary-orange">Carreira</span>{" "}
            <br /> agora torna-se muito <br /> mais fácil.
          </h1>
          <p className="text-gray-black">
            A Trilha é uma plataforma que proporciona uma <br /> abordagem
            interativa para auxiliar na tomada de <br /> decisões.
          </p>
          <Link href="/questionario">
            <ButtonSecundary
              text="Teste agora"
              bgColor="bg-primary-orange"
              textColor="text-white"
            />
          </Link>
        </div>
        <div className="mt-[-75px] ">
          <Image src={WomanImage} alt="Imagem de mulher" width={500} />
        </div>
      </div>
    </div>
  );
}
