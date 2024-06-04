'use client'
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { DashMentored } from "@/components/Dash/DashboardMentored";
import { DashMentor } from "@/components/Dash/DashboardMentor";
import { useContext } from "react";
import { AuthContext } from "@/providers/authProvider";

export default function Dashboard() {
  const { user } = useContext(AuthContext) 

  if(!user) return
  return (
    <>
      <DefaultLayout>
        {user.userType === "mentee" ? <DashMentored /> : <DashMentor />}
      </DefaultLayout>
    </>
  );
}
