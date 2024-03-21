"use client";

import React, { useEffect, useRef, useState } from "react";
import experienceList from "@/database/experience.json";
import ExperienceCard from "@/components/common/ExperienceCard";

const Experience = () => {
  const container = useRef(null);
  return (
    <section
      id="experience"
      className="lg:my-20 w-11/12 md:w-10/12 lg:w-4/6 xl:w-4/6 py-11 space-y-20 min-h-dvh"
      ref={container}
    >
      <h1 className="text-4xl text-center font-base mt-16 lg:mt-24 tracking-wide text-white">
        Experience
      </h1>
      <div className="space-y-6">
        {experienceList.map((experience, index) => (
          <div key={index}>
            <ExperienceCard experience={experience} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
