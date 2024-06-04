'use client'
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/Tables/MentorTable";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/providers/authProvider";
import { MenteeTrail } from "@/types/menteeTrail";
import { MenteeTrailService } from "@/services/MenteeTrailService";

const MentoresPage = () => {
  const { user } = useContext(AuthContext) 
  const [menteeTrail, setMenteeTrail] = useState<MenteeTrail[]>()

  useEffect(()=> {
      MenteeTrailService.getByMentee(user.id).then((data)=> {
        setMenteeTrail(data)
      })
  },[ user ])

  const mentors = menteeTrail?.map( (_) => {
    return {
      name: _.trail?.mentor?.user?.name || "",
      trail: _.trail?.name || ""
    }
  });
  
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Mentores" />

      <div className="flex flex-col gap-10">
        <TableOne brandData={mentors || []} title="Meus Mentorados" />
      </div>
    </DefaultLayout>
  );
};

export default MentoresPage;
