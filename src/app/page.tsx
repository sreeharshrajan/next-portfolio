import Hero from "@/components/blocks/Hero";
import Image from "next/image";

import About from "@/components/blocks/About";
import Experience from "@/components/blocks/Experience";
import SkillSet from "@/components/blocks/SkillSet";
import Projects from "@/components/blocks/Projects";
import Contact from "@/components/blocks/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      {/* <Projects /> */}
      <SkillSet />
      <Contact />

    </main>
  );
}
