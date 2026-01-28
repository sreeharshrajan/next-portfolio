"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/animate.helper";
import experienceList from "@/database/experience.json";
import ExperienceCard from "@/components/common/ExperienceCard";

const Experience = () => {
  const container = useRef(null);

  return (
    <section
      id="experience"
      ref={container}
      className="relative flex flex-col items-center py-24 w-11/12 md:w-5/6 lg:w-4/6 xl:w-3/4 mx-auto space-y-16"
    >
      {/* Centered Header with Pill Accent */}
      <div className="flex flex-col items-center text-center space-y-4">
        <motion.h3
          variants={fadeIn("up", "tween", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl lg:text-5xl font-black tracking-tighter text-white"
        >
          Career Path
        </motion.h3>
        <div className="h-1.5 w-12 bg-indigo-500 rounded-full" />
      </div>

      {/* Experience List - Simplified Hierarchy */}
      <div className="w-full flex flex-col">
        {experienceList.map((experience, index) => (
          <ExperienceCard key={index} index={index} experience={experience} />
        ))}
      </div>
    </section>
  );
};

export default Experience;