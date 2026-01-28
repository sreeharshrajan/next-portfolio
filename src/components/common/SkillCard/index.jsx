"use client";

import React, { memo, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const SkillCard = memo(({ skill }) => {
  const cardRef = useRef(null);
  const { contextSafe } = useGSAP({ scope: cardRef });

  const onMouseMove = contextSafe((e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;

    gsap.to(cardRef.current, {
      x: x * 12, // Reduced movement for smaller card
      y: y * 12,
      rotateX: -y * 10,
      rotateY: x * 10,
      duration: 0.5,
      ease: "power2.out",
      overwrite: "auto",
    });
  });

  const onMouseLeave = contextSafe(() => {
    gsap.to(cardRef.current, {
      x: 0,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      backgroundColor: "rgba(255, 255, 255, 0.03)",
      duration: 0.7,
      ease: "elastic.out(1, 0.6)", 
    });
  });

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="group relative flex items-center space-x-4 p-4 
                 w-[220px] h-[85px] rounded-xl 
                 bg-white/[0.03] border border-white/5 backdrop-blur-2xl
                 snap-center select-none cursor-none overflow-hidden
                 perspective-1000 will-change-transform"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Subtle Interaction Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Smaller Image Container */}
      <div className="relative z-10 flex-shrink-0 w-10 h-10 translate-z-10">
        <Image
          src={skill.image}
          fill
          className="object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]"
          alt={`${skill.title} icon`}
          sizes="40px"
        />
      </div>
      
      <div className="relative z-10 flex flex-col justify-center translate-z-10">
        <h3 className="text-white font-bold text-base leading-tight tracking-tight">
          {skill.title}
        </h3>
        <p className="text-stone-500 group-hover:text-stone-300 transition-colors text-[10px] font-medium mt-0.5">
          {skill.subtitle}
        </p>
      </div>
    </div>
  );
});

SkillCard.displayName = "SkillCard";

export default SkillCard;