"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/animate.helper";
import GlassButton from "@/components/ui/GlassButton";

const Hero = () => {
  const container = useRef(null);

  return (
    <section
      id="home"
      ref={container}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-25 pb-10 px-4 w-full [mask-image:linear-gradient(to_bottom,white_80%,transparent_100%)]"
    >
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)] opacity-80" />
        {/* Top Spotlight */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] bg-purple-600/20 blur-[120px] rounded-full mix-blend-screen" />
        {/* Side Glows */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-900/40 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10 w-full max-w-6xl px-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          <div className="lg:col-span-8 space-y-8">
            <motion.div
              variants={fadeIn("up", "tween", 0.2, 0.8)}
              initial="hidden"
              whileInView="show"
            >
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                Sreeharsh — <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-purple-300">
                  Full Stack Developer.
                </span>
              </h1>
            </motion.div>

            <motion.div
              variants={fadeIn("up", "tween", 0.3, 0.8)}
              initial="hidden"
              whileInView="show"
              className="max-w-xl"
            >
              <p className="text-lg text-gray-400 leading-relaxed font-light">
                Empowering ideas with <span className="text-white font-medium">Development Expertise</span> and <span className="text-white font-medium">Seamless User Interfaces</span>.
                Focusing on the intersection of performance and aesthetic precision.
              </p>
            </motion.div>


            <motion.div
              variants={fadeIn("up", "tween", 0.4, 0.8)}
              initial="hidden"
              whileInView="show"
              className="flex flex-wrap gap-6 pt-4"
            >
              <GlassButton href="https://drive.google.com/file/d/10FW0UPHYBug_d6KxiIvswVllCyvvMpoF/view?usp=sharing" variant="glass" target="_blank">
                Download  Resume
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                >
                  <path d="M12 17V3m0 14l-4-4m4 4l4-4M5 21h14" />
                </svg>
              </GlassButton>
            </motion.div>

          </div>

          {/* RIGHT: New Tagline Text */}
          <motion.div
            variants={fadeIn("left", "tween", 0.5, 0.8)}
            initial="hidden"
            whileInView="show"
            className="lg:col-span-4 lg:pt-4 sm:hidden md:block"
          >
            <div className="lg:border-l lg:border-white/10 lg:pl-10">
              <p className="text-2xl md:text-3xl font-light text-white leading-snug">
                Creative Engineer <br />
                <span className="text-purple-400/80">Building Web apps</span>
              </p>
              <div className="mt-6 h-1 w-12 bg-gradient-to-r from-purple-500 to-transparent" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom fade out to blend with next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#030014] to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default Hero;