"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/animate.helper";
import React from "react";

function ExperienceCard({ index, experience }) {
  return (
    <motion.a
      variants={fadeIn("left", "tween", 0.35 * index, 2)}
      whileInView={`show`}
      initial={`hidden`}
      href={experience.url}
      className="space-y-6"
    >
      <div className="flex flex-row justify-between group">
        <div className="text-left">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-medium mb-2">
            {experience.position}
          </h2>
          <p className="text-sm md:text-lg lg:text-xl flex items-center">
            {" "}
            {experience.company}
            <span className="transition-all duration-400 ease-in-out motion-reduce:transition-none opacity-0 group-hover:opacity-100 ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="w-5 h-5  bg-white rounded-full"
              >
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </span>
          </p>
        </div>
        <div className="text-right mt-1">
          <p className="text-sm md:text-base lg:text-lg ">
            {" "}
            {experience.duration}
          </p>
          <p className="text-xs md:text-sm lg:text-base mt-1">
            {" "}
            {experience.location}
          </p>
        </div>
      </div>
      <div className="h-[1px] bg-gray-600 flex-grow" />
    </motion.a>
  );
}

export default ExperienceCard;
