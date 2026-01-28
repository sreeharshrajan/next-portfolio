"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/animate.helper";
import projectList from "@/database/projects.json";
import ProjectCard from "@/components/common/ProjectCard";

function Projects() {
  return (
    <section
      id="projects"
      className="relative flex flex-col items-center py-24 w-11/12 md:w-5/6 lg:w-4/6 xl:w-3/4 mx-auto space-y-16"
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <motion.h3
          variants={fadeIn("up", "tween", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl tracking-wider text-stone-900 dark:text-white"
        >
          Selected Works
        </motion.h3>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;