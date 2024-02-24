import React, { useRef, ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./title.module.scss";

interface TitleProps {
  heading?: string | React.ElementType;
  color?: "white" | "black";
  children: ReactNode;
  className?: string;
}

const Title: React.FC<TitleProps> = ({
  heading: HeadingElement = "h2",
  color = "black",
  children,
  className = "",
}) => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      if (textRef.current) {
        textRef.current.style.opacity = "1";

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
            if (textRef.current) {
              textRef.current.classList.add("animated");
            }
          },
        });
      }
    },
    { scope: textRef }
  );

  const colorClass =
    color === "white" ? styles.white : color === "black" ? styles.black : "";

  return (
    <HeadingElement
      className={`${styles.title} ${colorClass} ${className}`}
      ref={textRef}
    >
      {children}
    </HeadingElement>
  );
};

export default Title;
