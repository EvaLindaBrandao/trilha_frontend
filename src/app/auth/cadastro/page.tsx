"use client";
//Image
import ImagemCadastro from "/public/assets/pana.svg";

//Components
import { ButtonPrimary } from "@/components/Landing/Buttons/button-primary";
import { Input } from "@/components/Landing/Input";
import { UserService } from "@/services/UserServise";
import { AuthService } from "@/services/authService";
import { TokenService } from "@/services/tokenService";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from 'yup'

export default function Cadastro() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
        email: '',
        name: '',
        coach: 'mentee',
        password: '',
        phoneNumber: ''
    },
    validationSchema: Yup.object({
        email: Yup.string().email().required('E-mail obrigatório.'),
        password: Yup.string().required('Senha obrigatória.').min(6, 'Sua senha deve ter pelo menos 6 digitos.')
    }),
    onSubmit: async (values) => {
      try{
          const response = await UserService.createUser(values.name, values.password, values.email, values.coach, values.phoneNumber);
          if(response.data){
            toast.success("Cadastro realizado com sucesso!")
            router.push("/auth/login")
          }
      }catch(err: any){
        toast.error(err.response.data.message)
      }
    }})


  return (
    <div className="box-border flex">
      <div className="hidden h-screen flex-1 items-center justify-center rounded-lg bg-primary-blue lg:flex ">
        <Image src={ImagemCadastro} alt="Imagem de Cadastro" width={600} />
      </div>

      <div className="mx-auto flex h-screen w-[600px] flex-col items-center overflow-y-auto rounded-lg px-8 py-8 sm:px-16">
        <h1 className=" mb-5 mt-4 text-3xl font-bold text-secondary-blue ">
          Crie sua Conta
        </h1>
        <form onSubmit={formik.handleSubmit} className="flex w-full flex-col gap-5 mb-4">
          <Input
            label="Nome Completo"
            placeholder="Digite o seu nome"
            type="text"
            id="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          <Input
            label="Telefone"
            placeholder="Digite o seu número de telefone"
            type="text"
            id="phoneNumber"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
            onBlur={formik.handleBlur}
          />
          <Input
            label="Email"
            placeholder="Digite o seu email"
            type="email"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          <div className="flex flex-col gap-1">
            <label htmlFor="">Tipo de Conta</label>
            <select 
              defaultValue={"mentee"} 
              className="w-full outline-none rounded-lg border-2 border-primary-blue px-1 py-3"
              id="coach"
              onChange={formik.handleChange}
              value={formik.values.coach}
              onBlur={formik.handleBlur}
            >
              <option value={"mentee"}>Mentorado</option>
              <option value={"mentor"}>Mentor</option>
            </select>
          </div>
          <Input
            label="Senha"
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            placeholder="Digite a sua senha"
            type="password"
          />
          <ButtonPrimary text="Cadastrar" type="submit" />
        </form>
        {/* <p className="mb-10 mt-2 text-sm">
          Ao cadastrar-se você concorda com os
          <Link href="/" className="text-primary-orange">
            {" "}
            Termos e condições
          </Link>
        </p> */}

        <p className="mt-3 text-sm">
          Já tens uma conta
          <Link href="/auth/login" className="text-primary-orange">
            {" "}
            Entrar
          </Link>
        </p>
      </div>
    </div>
  );
}
