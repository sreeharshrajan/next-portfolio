"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./about.module.scss";

import TextReveal from "@/hooks/TextReveal";
import Blobs from "@/components/ui/Blobs";

function About() {
  const galleryContainer = useRef();
  const bg = useRef();
  const container = useRef();
  const { contextSafe } = useGSAP({ scope: container });

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const gallery = galleryContainer.current;

      // BG Animation
      gsap.to(bg.current, {
        scrollTrigger: {
          trigger: container.current,
          start: "top 90%",
          end: "top 50%",
          scrub: true,
        },
        clipPath: "inset(0px 0px round 3rem 3rem 0rem 0rem)",
      });
    },
    { scope: galleryContainer }
  );

  const scrollToSection = contextSafe((e) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: e,
    });
  });

  return (
    <section className={styles.section} id={"works"} ref={container}>
      <div className={styles.bg} ref={bg}>
        <div className={`${styles.showcase}`}></div>
      </div>
      <div className={styles.xScrollContainer} ref={galleryContainer}>
        <header className={styles.header}>
          <Blobs type={"v1"} />
          <TextReveal className={styles.description}>
            From designing beautiful user interfaces to developing next-level
            experiences on the web.
          </TextReveal>
          <TextReveal className={styles.description}>
            Hi, my name is Sreeharsh, and I am a designer and developer based in
            Bengaluru, India. With years of experience in the industry, I
            specialize in creating bespoke websites, mobile apps, and web
            applications that are tailored to your specific needs.
          </TextReveal>
          <Blobs type={"v2"} />
        </header>
      </div>
    </section>
  );
}

export default About;
