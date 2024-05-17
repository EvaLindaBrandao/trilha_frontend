"use client";
//Components
import { ButtonPrimary } from "@/components/Landing/Buttons/button-primary";
import { Input } from "@/components/Landing/Input";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

//Image
import ImagemLogin from "/public/assets/login.svg";
import { userRoutes } from "@/components/axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handle(password: string, email: string) {
    try {
      const response = await userRoutes.post("/login", {
        email,
        password,
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  function login() {
    handle(password, email);
  }
  return (
    <div className="box-border flex">
      <div className="hidden h-screen flex-1 items-center justify-center rounded-lg bg-primary-blue lg:flex ">
        <Image src={ImagemLogin} alt="Imagem de Cadastro" width={500} />
      </div>

      <div className="mx-auto flex h-screen w-[600px] flex-col items-center overflow-y-auto rounded-lg px-8 py-8 sm:px-16">
        <h1 className=" mb-5 mt-4 text-3xl font-bold text-secondary-blue ">
          Entrar na sua conta
        </h1>
        <div className="flex w-full flex-col gap-5">
          <Input
            label="E-mail"
            placeholder="Digite o seu email"
            type="email"
            onChange={(event: any) => setEmail(event.target.value)}
          />
          <Input
            label="Senha"
            placeholder="Digite a sua senha"
            type="password"
            onChange={(event: any) => setPassword(event.target.value)}
          />
        </div>
        <p className="mb-10 mt-2 text-sm">
          <Link href="/">Esqueceu sua senha?</Link>
        </p>
        <Link href="/dashboard" className="w-full">
          <ButtonPrimary text="Entrar" />
        </Link>
        <p className="mt-8 text-sm">
          Ainda não tem uma conta?
          <Link href="/cadastro" className="text-primary-orange">
            {" "}
            Cadastrar
          </Link>
        </p>
      </div>
    </div>
  );
}
