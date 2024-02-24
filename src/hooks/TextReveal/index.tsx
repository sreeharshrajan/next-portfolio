import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./text-reveal.module.scss";

interface TextRevealProps {
  className?: string;
  children: React.ReactNode;
}

export default function TextReveal({ className, children }: TextRevealProps) {
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      if (textRef.current) {
        textRef.current.style.opacity = 1;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: textRef.current,
            toggleActions: "restart pause resume reverse",
            start: "top 90%",
          },
        });

        tl.from(textRef.current, {
          duration: 0.4,
          opacity: 0,
          y: 120,
          ease: "power1.out",
          stagger: 0.01,
          onComplete: () => {
            textRef.current.classList.add(`animated`);
          },
        });
      }
    },
    { scope: textRef }
  );

  return (
    <p className={className} ref={textRef}>
      {children}
    </p>
  );
}
