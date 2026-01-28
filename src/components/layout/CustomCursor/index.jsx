"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./styles.module.scss";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useGSAP(() => {
    if (!cursorRef.current) return;

    // quickSetter is much faster for high-frequency updates (mouse moves)
    const xSetter = gsap.quickSetter(cursorRef.current, "x", "px");
    const ySetter = gsap.quickSetter(cursorRef.current, "y", "px");

    const handleMouseMove = (e) => {
      // Offset by half the cursor size (approx 6-10px depending on your CSS)
      xSetter(e.clientX - 10);
      ySetter(e.clientY - 10);
    };

    const handleClick = () => {
      gsap.to(cursorRef.current, {
        scale: 1.8,
        duration: 0.15,
        yoyo: true, // Automatically handles the "return to scale 1"
        repeat: 1,
        ease: "power2.inOut",
      });
    };

    window.addEventListener("pointermove", handleMouseMove);
    window.addEventListener("pointerdown", handleClick); // pointerdown feels more responsive than click

    return () => {
      window.removeEventListener("pointermove", handleMouseMove);
      window.removeEventListener("pointerdown", handleClick);
    };
  });

  return (
    <div 
      ref={cursorRef} 
      className={styles.customCursor} 
      aria-hidden="true" 
    />
  );
}