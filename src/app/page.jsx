import React from "react";

import Hero from "@/components/blocks/Hero";
import About from "@/components/blocks/About";
import Skills from "@/components/blocks/Skills";
import Projects from "@/components/blocks/Projects";
import Experience from "@/components/blocks/Experience";
import GetInTouch from "@/components/blocks/GetInTouch";

const index = () => {
  return (
    <main className="flex min-h-lvh flex-col items-center justify-between ">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <GetInTouch />
    </main>
  );
};

export default index;
