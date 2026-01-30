"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/animate.helper";
import skillset from "@/database/skills.json";
import SkillCard from "@/components/common/SkillCard";
import InfiniteMarquee from "@/components/common/InfiniteMarquee";

const Skills = () => {
  return (
    <section
      id="skillset"
      className="relative flex flex-col justify-center w-full py-12 overflow-hidden"
    >
      {/* Section Header */}
      <div className="mb-8 px-6 lg:px-20">
        <motion.h3
          variants={fadeIn("up", "tween", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl tracking-wider text-center text-stone-900 dark:text-white"
        >
          Skills
        </motion.h3>
      </div>

      {/* Marquee Container with Separations */}
      <div className="flex flex-col space-y-2">

        {/* Row 1: Frontend */}
        <div className="">
          <h4 className="px-6 lg:px-20 text-[10px] font-mono uppercase tracking-[0.3em] text-stone-500 mb-2">
            01. Frontend_Core
          </h4>
          <InfiniteMarquee speed={0.4}>
            {skillset.Frontend.map((skill, index) => (
              <SkillCard key={`fe-${index}`} skill={skill} />
            ))}
          </InfiniteMarquee>
        </div>

        {/* Row 2: Backend */}
        <div className="">
          <h4 className="px-6 lg:px-20 text-[10px] font-mono uppercase tracking-[0.3em] text-stone-500 mb-2">
            02. Backend_Infrastructure
          </h4>
          <InfiniteMarquee speed={0.4}>
            {skillset.Backend.map((skill, index) => (
              <SkillCard key={`be-${index}`} skill={skill} />
            ))}
          </InfiniteMarquee>
        </div>

        {/* Row 3: Tools */}
        <div className="">
          <h4 className="px-6 lg:px-20 text-[10px] font-mono uppercase tracking-[0.3em] text-stone-500 mb-2">
            03. Development_Tools
          </h4>
          <InfiniteMarquee speed={0.4}>
            {skillset.Tools.map((skill, index) => (
              <SkillCard key={`tool-${index}`} skill={skill} />
            ))}
          </InfiniteMarquee>
        </div>

      </div>

      {/* Edge Fading Mask (Glassmorphism overlap) */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-stone-950 via-stone-950/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-stone-950 via-stone-950/80 to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default Skills;