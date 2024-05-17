"use client";
import React from "react";
import ChartTwo from "../Charts/ChartTwo";
import TableOne from "../Tables/MentorTable";
import mentee from "../../app/mokes/mentee.json";

const DashMentor: React.FC = () => {
  const mentors = mentee.mentors;
  return (
    <>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartTwo />
        <div className="col-span-12 xl:col-span-8">
          <TableOne title="Meus mentorados" brandData={mentors} />
        </div>
      </div>
    </>
  );
};

export { DashMentor };
