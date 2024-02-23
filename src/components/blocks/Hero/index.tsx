"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { annotate } from "rough-notation";
import { motion } from "framer-motion";
import { fadeIn } from "@utils/animate";

import '@/assets/styles/globals.css'

const Hero = () => {
  const [playAnimation, setPlayAnimation] = useState(true);
  useEffect(() => {
    const top = document.getElementById("top");

    const e = document.querySelector("#hero-text");
    if (e) {
      setTimeout(() => {
        annotate(e, {
          type: "highlight",
          color: "#ffda79",
          multiline: true,
        }).show();
      }, 2000);
    }
  }, []);
  return (
    <div className="relative overflow-hidden min-h-screen min-w-screen">
      <motion.div
        variants={fadeIn("down", "tween", 0.5, 1)}
        whileInView={`show`}
        initial={`hidden`}
        className="flex items-center max-sm:px-2 justify-center"
      >
        <h1 id="top" className="color_box">
          Over 3 million ready-to-work creatives in our community!
        </h1>
      </motion.div>
      <motion.div
        variants={fadeIn("tween", 1, 1)}
        whileInView={`show`}
        initial={`hidden`}
        className=""
      >
        <h1 className="hero-text w-1/2">
          Hire the <span id="hero-text">world’s top</span> creative talent.
        </h1>
      </motion.div>
      <motion.div
        variants={fadeIn("up", "tween", 1.5, 0.7)}
        whileInView={`show`}
        initial={`hidden`}
        className="flex justify-center max-sm:px-12"
      >
        <h2 className="text-[20px] max-sm:text-[15px] text-[#0d0c22] text-center font-poppins rounded-full">
          Connect with a community of millions of top-rated designers & agencies
          around the world.
        </h2>
      </motion.div>
      <div
        aria-hidden="true"
        className="flex absolute -top-96  start-1/2 transform -translate-x-1/2"
      >
        <div className="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900"></div>
        <div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-screen">
        <div className="max-w-xl mx-auto px-4">
          <div className="max-w-2xl text-center mx-auto">
            <p className="inline-block text-xl font-bold bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
              Hi, I am Sreeharsh
            </p>

            <div className="mt-5 max-w-2xl">
              <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
                Full Stack <br /> Developer
              </h1>
            </div>

            <div className="mt-5 max-w-3xl">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Empowering Your Ideas Through <br /> Development Expertise and
                Seamless User Interfaces
              </p>
            </div>

            <div className="mt-8 gap-3 flex justify-center">
              <a
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="/assets/files/Sreeharsh_Resume.pdf"
                download
              >
                Download Resume
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mb-0.5"
                >
                  <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
