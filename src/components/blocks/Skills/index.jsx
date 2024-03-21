"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import skillset from "@/database/skills.json";
import SkillCard from "@/components/common/SkillCard";

const Skills = () => {
  const container = useRef(null);
  console.log(skillset);
  return (
    <section
      id="skillset"
      className="lg:my-20 w-11/12 md:w-10/12 lg:w-4/6 xl:w-4/6 py-11 space-y-6 min-h-dvh"
      ref={container}
    >
      <h3 className="text-4xl text-center font-base mt-16 lg:mt-24 tracking-wide text-white">
        Skills
      </h3>
      <h1 className="text-2xl font-light tracking-wide text-white">Frontend</h1>
      <div className="flex overflow-auto gap-6 py-4">
        {skillset.Frontend.map((skill, index) => (
          <div key={index}>
            <SkillCard key={index} skill={skill} />
          </div>
        ))}
      </div>
      <h1 className="text-2xl font-light tracking-wide text-white">Backend</h1>
      <div className="flex overflow-auto gap-6 py-4">
        {skillset.Backend.map((skill, index) => (
          <div key={index}>
            <SkillCard key={index} skill={skill} />
          </div>
        ))}
      </div>
      <h1 className="text-2xl font-light tracking-wide text-white">Tools</h1>
      <div className="flex overflow-y-hidden gap-6 py-4 ">
        {skillset.Tools.map((skill, index) => (
          <div key={index}>
            <SkillCard key={index} skill={skill} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
