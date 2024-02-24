"use client";

import React, { useRef } from "react";

import styles from "./styles.module.scss";
import Title from "@/hooks/Title";
import Blobs from "@/components/ui/Blobs";
import Companies from "@/database/experience.json";

function Blog() {
  const container = useRef<HTMLDivElement>(null);

  return (
    <section className={styles.section} id={"experience"} ref={container}>
      <Blobs type={"v2"} classVariable={`${styles.blob}`} />
      <header className={styles.header}>
        <Title color={"white"}>
          <span>Read</span> <br />
          Blogs
        </Title>
      </header>
    </section>
  );
}

export default Blog;
