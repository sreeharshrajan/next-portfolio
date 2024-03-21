"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

function ProjectCard({ project }) {
  return (
    <div
      href={project.url}
      className="group block transition-all transform motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-white/5 backdrop-blur-lg p-4 rounded-lg  overflow-hidden max-w-lg w-full duration-500 "
    >
      <Link
        className="relative inline-block aspect-w-4 w-full aspect-h-3 bg-cover overflow-hidden rounded-lg"
        href={project.url}
      >
        <Image
          className="w-full h-full object-center object-cover transition-transform transform-gpu duration-1000 group-hover:scale-110 ease-in-out"
          src={project.image}
          width={100}
          height={100}
          alt={`${project.title} Icon`}
          style={{
            aspectRatio: "320/240",
            objectFit: "cover",
          }}
        />
        <div className="absolute transition-all duration-400 ease-in-out motion-reduce:transition-none inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000"
            strokeWidth="1.4"
            strokeLinecap="round"
            className="w-10 h-10  bg-white rounded-full"
          >
            <path d="M7 17l9.2-9.2M17 17V7H7" />
          </svg>
        </div>
      </Link>
      <h3 className="mt-4 text-lg lg:text-xl font-medium">{project.title}</h3>
      <p className="mt-1 text-base lg:text-md">{project.type || ""}</p>
      <div className="flex flex-row mt-2">
        <div
          className={` ${project.color ? project.color : `bg-pink-400`} px-3 py-1 rounded-full text-xs font-bold text-gray-950 hidden md:block`}
        >
          {project.tags || ""}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
