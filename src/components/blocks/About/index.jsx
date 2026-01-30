"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mr-3 mt-2 inline-block">
      <span className="absolute opacity-15">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

const Paragraph = ({ value }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.8", "start 0.3"], // Adjusts when the reveal starts/ends
  });

  const words = value.split(" ");

  return (
    <p ref={element} className="flex flex-wrap leading-tight">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

const About = () => {
  return (
    <section
      id="about"
      className="w-11/12 md:w-10/12 lg:w-4/6 xl:w-4/6 py-12 space-y-12 text-3xl md:text-5xl font-medium tracking-tight"
    >
      <div className="mt-16 lg:mt-24">
        <Paragraph value="From designing beautiful user interfaces to developing next-level experiences on the web." />
      </div>
      
      <Paragraph value="A designer and developer based in India. With years of experience in the industry, I specialize in creating bespoke websites, mobile apps, and web applications that are tailored to your specific needs." />
    </section>
  );
};

export default About;