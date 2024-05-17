import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Calendario from "@/components/Calender";

export const metadata: Metadata = {
  title: "Trilha",
  description: "Plataforma de apoio a decisão da carreira profissional",
};

const CalendarPage = () => {
  return (
    <DefaultLayout>
      <Calendario />
    </DefaultLayout>
  );
};

export default CalendarPage;
