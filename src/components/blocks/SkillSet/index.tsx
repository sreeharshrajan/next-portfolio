"use client";

import React, { useRef } from "react";
import gsap, {
  Draggable,
  InertiaPlugin,
  MotionPathPlugin,
  ScrollTrigger,
} from "gsap/all";

import styles from "./styles.module.scss";

import Title from "@/hooks/Title";
import Blobs from "@/components/ui/Blobs";
import Ticker from "@/components/ui/Ticker";

import Companies from "@/database/experience.json";

function SkillSet() {
  const container = useRef<HTMLDivElement>(null);

  return (
    <>
      <section className={`${styles.section}`} id={"skills"} ref={container}>
        <div className={styles.blobs}>
          <Blobs
            type={"v2"}
            classVariable={`${styles.blob} ${styles.blobV2}`}
          />
          <Blobs
            type={"v1"}
            classVariable={`${styles.blob} ${styles.blobV1}`}
          />
        </div>
        <div className={styles.grid}>
          <Title color={"white"}>
            <span>My</span> <br /> Skillset
          </Title>
        </div>
      </section>
      <Ticker
        words={[
          "accessibility",
          "responsiveness",
          "interactive",
          "performance",
        ]}
      ></Ticker>
    </>
  );
}

export default SkillSet;
