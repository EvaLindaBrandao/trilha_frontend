'use client'
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { TrailTable } from "@/components/Tables/TrailTable";
import { AuthContext } from "@/providers/authProvider";
import { MenteeTrailService } from "@/services/MenteeTrailService";
import { MenteeTrail } from "@/types/menteeTrail";
import { useContext, useEffect, useState } from "react";


const TrilhasMentoradoPage = () => {
  const { user } = useContext(AuthContext) 
  const [menteeTrail, setMenteeTrail] = useState<MenteeTrail[]>([])

    useEffect(()=> {
        MenteeTrailService.getByMentee(user?.id).then((data)=> {
          setMenteeTrail(data)
        })
    },[ user ])


  return (
    <DefaultLayout>
      <Breadcrumb pageName="Trilhas" />

      <div className="flex flex-col gap-10">
        <TrailTable menteeTrail={menteeTrail || []} />
      </div>
    </DefaultLayout>
  );
};

export default TrilhasMentoradoPage;
