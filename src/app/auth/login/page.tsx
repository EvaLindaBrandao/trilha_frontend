"use client";
//Components
import { ButtonPrimary } from "@/components/Landing/Buttons/button-primary";
import { Input } from "@/components/Landing/Input";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

//Image
import ImagemLogin from "/public/assets/login.svg";
import { api } from "@/services/api";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { AuthService } from "@/services/authService";
import { TokenService } from "@/services/tokenService";
import { toast } from "react-toastify";


export default function Login() {

  const formik = useFormik({
    initialValues: {
        email: '',
        password: ''
    },
    validationSchema: Yup.object({
        email: Yup.string().required('Campo obrigatório.'),
        password: Yup.string().required('Senha obrigatória.').min(6, 'Sua senha deve ter pelo menos 6 digitos.')
    }),
    onSubmit: async (values) => {
        try{
            const response = await AuthService.login(values.email, values.password);
            if(response){
                TokenService.saveToken(response.data)
                toast.success("Login efetuado com sucesso!")
                window.location.href = "/dashboard"
            }
        }catch(err: any){
            toast.error(err.response.data.message)
        }
    }
})

  return (
    <div className="box-border flex">
      <div className="hidden h-screen flex-1 items-center justify-center rounded-lg bg-primary-blue lg:flex ">
        <Image src={ImagemLogin} alt="Imagem de Cadastro" width={500} />
      </div>

      <form onSubmit={formik.handleSubmit} className="mx-auto flex h-screen w-[600px] flex-col items-center overflow-y-auto rounded-lg px-8 py-8 sm:px-16">
        <h1 className=" mb-5 mt-4 text-3xl font-bold text-secondary-blue ">
          Entrar na sua conta
        </h1>
        <div className="flex w-full flex-col gap-2 mb-6">
        <Input
            label="Usuário"
            id="email"
            placeholder="Digite o seu email ou número de telefone"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} 
            value={formik.values.email}             
          />
          {formik.touched.email && formik.errors.email? (
            <p className="text-rose-600">{formik.errors.email}</p>
          ) : null}
          <Input
            label="Senha"
            placeholder="Digite a sua senha"
            type="password"
            id="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} 
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className="text-rose-600">{formik.errors.password}</p>
          ) : null}
        </div>
        {/* <p className="mb-10 mt-2 text-sm">
          <Link href="/">Esqueceu sua senha?</Link>
        </p> */}
        <ButtonPrimary text="Entrar"  type="submit"/>
        <p className="mt-8 text-sm">
          Ainda não tem uma conta?
          <Link href="/auth/cadastro" className="text-primary-orange">
            {" "}
            Cadastrar
          </Link>
        </p>
      </form>
    </div>
  );
}
