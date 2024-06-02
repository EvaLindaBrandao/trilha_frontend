"use client";
//Image
import ImagemCadastro from "/public/assets/pana.svg";

//Components
import { ButtonPrimary } from "@/components/Landing/Buttons/button-primary";
import { Input } from "@/components/Landing/Input";
import { UserService } from "@/services/UserServise";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Cadastro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [coach, setCoach] = useState(false);

  const router = useRouter();

  async function handleCreate() {
    const response = await UserService.createUser(name, password, email, coach);

    if (response?.status === 201) {
      router.push("/dashboard");
    }
  }

  return (
    <div className="box-border flex">
      <div className="hidden h-screen flex-1 items-center justify-center rounded-lg bg-primary-blue lg:flex ">
        <Image src={ImagemCadastro} alt="Imagem de Cadastro" width={600} />
      </div>

      <div className="mx-auto flex h-screen w-[600px] flex-col items-center overflow-y-auto rounded-lg px-8 py-8 sm:px-16">
        <h1 className=" mb-5 mt-4 text-3xl font-bold text-secondary-blue ">
          Crie sua Conta
        </h1>
        <div className="flex w-full flex-col gap-5">
          <Input
            label="Nome Completo"
            placeholder="Digite o seu nome"
            type="text"
            onChange={(event: any) => setName(event.target.value)}
          />
          <Input
            label="Email"
            placeholder="Digite o seu email"
            type="email"
            onChange={(event: any) => setEmail(event.target.value)}
          />
          <Input
            onChange={(event: any) => setPassword(event.target.value)}
            label="Senha"
            placeholder="Digite a sua senha"
            type="password"
          />
        </div>
        <p className="mb-10 mt-2 text-sm">
          Ao cadastrar-se você concorda com os
          <Link href="/" className="text-primary-orange">
            {" "}
            Termos e condições
          </Link>
        </p>

        <ButtonPrimary text="Cadastrar" onClick={handleCreate} />
        <p className="mt-8 text-sm">
          Já tens uma conta
          <Link href="/login" className="text-primary-orange">
            {" "}
            Entrar
          </Link>
        </p>
      </div>
    </div>
  );
}
