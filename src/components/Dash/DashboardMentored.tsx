"use client";
import React, { useContext, useEffect, useState } from "react";
import ChartOne from "../Charts/ChartOne";
import ChartTwo from "../Charts/ChartTwo";
import TableOne from "../Tables/MentorTable";
import { MenteeTrailService } from "@/services/MenteeTrailService";
import { AuthContext } from "@/providers/authProvider";
import { MenteeTrail } from "@/types/menteeTrail";

const DashMentored: React.FC = () => {
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
    <>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <div className="col-span-12 xl:col-span-8">
          <TableOne brandData={mentors || []} title="Meus Mentores" />
        </div>
      </div>
    </>
  );
};

export { DashMentored };
