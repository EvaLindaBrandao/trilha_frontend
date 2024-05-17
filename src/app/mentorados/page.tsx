import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/Tables/MentorTable";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { BRAND } from "@/types/brand";

export const metadata: Metadata = {
  title: "Trilha",
  description: "Plataforma de apoio a decisão da carreira profissional",
};

const brandData: BRAND[] = [
  {
    logo: "/assets/woman.jpg",
    name: "Aluno 1",
    area: "Programação",
  },
  {
    logo: "/assets/woman.jpg",
    name: "Aluno 2",
    area: "Programação",
  },
];

const TablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Mentorados" />

      <div className="flex flex-col gap-10">
        <TableOne brandData={brandData} title="Meus Mentores" />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
