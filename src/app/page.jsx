"use client";
import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/animate.helper";

import Hero from "@/components/blocks/Hero";
import About from "@/components/blocks/About";
import Skills from "@/components/blocks/Skills";
import Projects from "@/components/blocks/Projects";
import Experience from "@/components/blocks/Experience";
import GetInTouch from "@/components/blocks/GetInTouch";
import Galaxy from "@/components/blocks/Hero/Galaxy";

const index = () => {
  return (
    <motion.main
      variants={fadeIn("down", "tween", 0.15, 1)}
      whileInView={`show`}
      initial={`hidden`}
      className="flex min-h-lvh flex-col items-center justify-between "
    >
      <Galaxy />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <GetInTouch />
    </motion.main>
  );
};

export default index;
