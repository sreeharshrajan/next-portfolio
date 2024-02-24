"use client";

import React, { useRef } from 'react';

import styles from "./styles.module.scss";

import Title from "@/hooks/Title";
import Blobs from "@/components/ui/Blobs";
import Companies from "@/database/experience.json";

function SkillSet() {
  const container = useRef<HTMLDivElement>(null);

  return (
    <section className={styles.section} id={"experience"} ref={container}>
      <Blobs type={"v1"} classVariable={`${styles.blob}`} />
      <Blobs type={"v3"} classVariable={`${styles.blob}`} />
      <header className={styles.header}>
        <Title color={"white"}>
          <span>Skills</span> <br />
        </Title>
      </header>
    </section>
  );
}

export default SkillSet;
