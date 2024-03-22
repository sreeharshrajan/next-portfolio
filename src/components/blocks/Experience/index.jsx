"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/animate.helper";

import experienceList from "@/database/experience.json";
import ExperienceCard from "@/components/common/ExperienceCard";

const Experience = () => {
  const container = useRef(null);
  return (
    <section
      id="experience"
      className="lg:my-20 w-11/12 md:w-10/12 lg:w-4/6 xl:w-4/6 py-11 space-y-10 md:space-y-20 md:min-h-lvh"
      ref={container}
    >
      <motion.h3
        variants={fadeIn("up", "tween", 0.25, 1)}
        whileInView={`show`}
        initial={`hidden`}
        className="text-2xl lg:text-4xl text-center font-base tracking-wide text-white"
      >
        Experience
      </motion.h3>
      <div className="space-y-6">
        {experienceList.map((experience, index) => (
          <div key={index}>
            <ExperienceCard index={index} experience={experience} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
