"use client";

import { motion } from "framer-motion";
import { textVariant, staggerContainerChildren } from "@/utils/animate.helper";
import React, { useEffect, useRef, useState } from "react";

const About = () => {
  const container = useRef(null);
  return (
    <motion.section
      variants={staggerContainerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      id="about"
      className="w-11/12 md:w-10/12 lg:w-4/6 xl:w-4/6 py-11 space-y-6 text-2xl md:text-3xl font-light tracking-wide"
      ref={container}
    >
      <motion.p
        variants={textVariant(0.4)}
        className="leading-10 mt-16 lg:mt-24"
      >
        From designing beautiful user interfaces to developing next-level
        experiences on the web.
      </motion.p>
      <motion.p variants={textVariant(0.6)} className="leading-10">
        A designer and developer based in Bengaluru, India. <br /> With years of
        experience in the industry, I specialize in creating bespoke websites,
        mobile apps, and web applications that are tailored to your specific
        needs.
      </motion.p>
    </motion.section>
  );
};

export default About;
