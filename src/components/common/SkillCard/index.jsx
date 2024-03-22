"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/animate.helper";
import React from "react";
import Image from "next/image";

function SkillCard({ index, skill }) {
  return (
    <motion.div
      variants={fadeIn("left", "tween", 0.5 * index, 1.5)}
      whileInView={`show`}
      initial={`hidden`}
      className="flex bg-white/5 hover:bg-white/10 cursor-none backdrop-blur-lg p-5 rounded-2xl min-w-max h-full items-center space-x-4"
    >
      <Image
        src={skill.image}
        width={60}
        height={60}
        alt={`${skill.title} Icon`}
      />
      <div>
        <h3 className="text-lg md:text-xl">{skill.title || ""}</h3>
        <p className="text-xs md:text-sm">{skill.subtitle || ""}</p>
      </div>
    </motion.div>
  );
}

export default SkillCard;
