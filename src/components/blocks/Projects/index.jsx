"use client";

import React, { useEffect, useRef, useState } from "react";
import projectList from "@/database/projects.json";
import ProjectCard from "@/components/common/ProjectCard";

function Projects() {
  const container = useRef(null);
  return (
    <section
      id="projects"
      className="my-10 lg:my-20 w-11/12 md:w-5/6 lg:w-4/6 xl:w-3/4 py-10 space-y-10"
      ref={container}
    >
      <h1 className="text-4xl text-center font-base tracking-wide text-white">
        Selected Works
      </h1>
      <div className="space-y-4">
        <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {projectList.map((project, index) => (
            <div key={index}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
