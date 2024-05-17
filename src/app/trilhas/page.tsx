import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { TrailTable } from "@/components/Tables/TrailTable";

export const metadata: Metadata = {
  title: "Trilha",
  description: "Plataforma de apoio a decisão da carreira profissional",
};

const TablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Trilhas" />

      <div className="flex flex-col gap-10">
        <TrailTable />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
