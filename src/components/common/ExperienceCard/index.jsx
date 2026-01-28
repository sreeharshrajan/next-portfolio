"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { fadeIn } from "@/utils/animate.helper";

function ExperienceCard({ index, experience }) {
  const cardRef = useRef(null);
  const { contextSafe } = useGSAP({ scope: cardRef });

  // 2026 UX: Magnetic background highlight
  const onMouseEnter = contextSafe(() => {
    gsap.to(cardRef.current, {
      backgroundColor: "rgba(255, 255, 255, 0.03)",
      paddingLeft: "1.5rem",
      duration: 0.4,
      ease: "power2.out",
    });
  });

  const onMouseLeave = contextSafe(() => {
    gsap.to(cardRef.current, {
      backgroundColor: "transparent",
      paddingLeft: "0",
      duration: 0.4,
      ease: "power2.out",
    });
  });

  return (
    <motion.a
      ref={cardRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      variants={fadeIn("up", "tween", 0.1 * index, 0.8)}
      whileInView="show"
      initial="hidden"
      viewport={{ once: true }}
      href={experience.url}
      className="block group py-8 transition-all border-b border-white/10 select-none cursor-none"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        {/* Left Side: Role & Company */}
        <div className="flex-1">
          <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
            {experience.position}
          </h2>
          <p className="text-stone-400 text-sm md:text-base font-medium flex items-center mt-1">
            {experience.company}
            <span className="ml-2 inline-flex items-center justify-center w-6 h-6 rounded-full bg-indigo-500 text-black scale-0 group-hover:scale-100 transition-transform duration-300">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </span>
          </p>
        </div>

        {/* Right Side: Metadata */}
        <div className="text-left md:text-right font-mono">
          <p className="text-indigo-400 text-sm font-bold tracking-tighter">
            {experience.duration}
          </p>
          <p className="text-stone-500 text-xs mt-1 uppercase">
            {experience.location}
          </p>
        </div>
      </div>
    </motion.a>
  );
}

export default ExperienceCard;