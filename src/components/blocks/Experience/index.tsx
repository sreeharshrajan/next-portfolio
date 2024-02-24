"use client";

import React, { useRef } from "react";
import styles from "./styles.module.scss";
import Item from "./Item";
import Title from "@/hooks/Title";
import Blobs from "@/components/ui/Blobs";
import Companies from "@/database/experience.json";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ExperienceBlock() {
  const container = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  // GSAP Animations
  useGSAP(() => {}, { scope: container });

  return (
    <section className={styles.section} id="experience" ref={container}>
      <Blobs type="v2" classVariable={`${styles.blob}`} />
      <header className={styles.header}>
        <Title color="white">
          <span>Experience</span> <br />
          History
        </Title>
      </header>
      {Companies.map((item, index) => (
        <Item
          index={index}
          company={item.company || ""}
          position={item.position || ""}
          duration={item.duration || ""}
          location={item.location || ""}
          color={item.color || ""}
          key={index}
        />
      ))}
    </section>
  );
}
