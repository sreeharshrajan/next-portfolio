"use client"

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./styles.module.scss";

const CustomCursor: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = `.${styles.customCursor}`;

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      gsap.to(cursor, {
        x: clientX - 6,
        y: clientY - 6,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleClick = () => {
      gsap.to(cursor, {
        scale: 1.8,
        duration: 0.2,
        onComplete: () => {
          gsap.to(cursor, {
            scale: 1,
            duration: 0.2,
          });
        },
      });
    };

    window.addEventListener("pointermove", handleMouseMove);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("pointermove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div ref={container}>
      <div className={`${styles.customCursor}`}></div>
    </div>
  );
};

export default CustomCursor;
