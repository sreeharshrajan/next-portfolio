"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/animate.helper";

import FullStackDeveloper from "@/assets/images/FullStackDeveloper.svg";
import ResumeButton from "./ResumeButton";

const Hero = () => {
  const container = useRef(null);
  return (
    <section
      id="home"
      className="min-h-lvh relative flex flex-col items-center justify-center text-center w-full user-select-none  overflow-hidden"
      ref={container}
    >
      <div className="space-y-4">
        <motion.h5
          variants={fadeIn("down", "tween", 0.3, 1)}
          whileInView={`show`}
          initial={`hidden`}
          className="text-lg text-gray-50"
        >
          Hi, I am Sreeharsh
        </motion.h5>
        <motion.div
          variants={fadeIn("down", "tween", 0.15, 1)}
          whileInView={`show`}
          initial={`hidden`}
        >
          <Image
            className=""
            alt="hero"
            src={FullStackDeveloper}
            loading={"lazy"}
          />
        </motion.div>
        <motion.p
          variants={fadeIn("down", "tween", 0.8, 1)}
          whileInView={`show`}
          initial={`hidden`}
          className="text-lg text-gray-50 text-center"
        >
          Who Empower Your Ideas With <br /> Development Expertise <br />
          and Seamless User Interfaces
        </motion.p>
        <div className="mt-10 gap-3 flex justify-center">
          <ResumeButton
            href="https://drive.google.com/file/d/10FW0UPHYBug_d6KxiIvswVllCyvvMpoF/view?usp=sharing"
            variants={fadeIn("up", "tween", 1.5, 1)}
          />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="flex absolute -top-96  start-1/2 transform -translate-x-1/2"
      >
        <div className="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-950"></div>
        <div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/30 dark:via-indigo-900/30 dark:to-blue-900/70"></div>
      </div>
    </section>
  );
};

export default Hero;
