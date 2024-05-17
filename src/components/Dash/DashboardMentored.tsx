"use client";
import React from "react";
import ChartOne from "../Charts/ChartOne";
import ChartTwo from "../Charts/ChartTwo";
import TableOne from "../Tables/MentorTable";
import mentor from "../../app/mokes/mentor.json";

const DashMentored: React.FC = () => {
  const mentees = mentor.mentees;
  return (
    <>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <div className="col-span-12 xl:col-span-8">
          <TableOne brandData={mentees} title="Meus Mentorados" />
        </div>
      </div>
    </>
  );
};

export { DashMentored };
