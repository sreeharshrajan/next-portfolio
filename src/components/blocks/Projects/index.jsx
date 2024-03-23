"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/animate.helper";

import projectList from "@/database/projects.json";
import ProjectCard from "@/components/common/ProjectCard";

function Projects() {
  const container = useRef(null);
  return (
    <section
      id="projects"
      className="my-10 lg:my-20 w-11/12 md:w-5/6 lg:w-4/6 xl:w-3/4 py-10 space-y-10 scroll-my-12 snap-start"
      ref={container}
    >
      <motion.h3
        variants={fadeIn("up", "tween", 0.25, 1)}
        whileInView={`show`}
        initial={`hidden`}
        className="text-2xl lg:text-4xl text-center font-base tracking-wide text-white"
      >
        Selected Works
      </motion.h3>
      <div className="space-y-4">
        <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {projectList.map((project, index) => (
            <div key={index}>
              <ProjectCard index={index} project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
