import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { DashMentored } from "@/components/Dash/DashboardMentored";
import { DashMentor } from "@/components/Dash/DashboardMentor";

export const metadata: Metadata = {
  title: "Trilha",
  description: "Plataforma de apoio a decisão da carreira profissional",
};

export default function Dashboard() {
  let user = "mentee";

  return (
    <>
      <DefaultLayout>
        {user === "mentee" ? <DashMentored /> : <DashMentor />}
      </DefaultLayout>
    </>
  );
}
