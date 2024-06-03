'use client'
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import useSWR from 'swr'
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { BRAND } from "@/types/brand";
import { mentorsService } from "@/services/mentorsService";
import DataTable from "@/components/table";

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

const Mentorados = () => {
  const { data, isLoading, error} = useSWR("/mentors", mentorsService.getAll)
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Mentorados" />
      <div className="flex flex-col gap-10">
        <DataTable columns={["Nome", "Area"]} rows={[]}/>
      </div>
    </DefaultLayout>
  );
};

export default Mentorados;
