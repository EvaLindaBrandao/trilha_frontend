import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Image from "next/image";
import Trilha from "/public/assets/Trilha de um pramador.png";

export const metadata: Metadata = {
  title: "Trilha",
  description: "Plataforma de apoio a decisão da carreira profissional",
};

const TablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Trilha de Progração" />
      <Image src={Trilha} alt="Trilha de programação" />
      <div className="flex flex-col gap-10"></div>
    </DefaultLayout>
  );
};

export default TablesPage;
