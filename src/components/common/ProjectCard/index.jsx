"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { fadeIn } from "@/utils/animate.helper";

function ProjectCard({ index, project }) {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const { contextSafe } = useGSAP({ scope: cardRef });

  const onMouseMove = contextSafe((e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;

    gsap.to(cardRef.current, {
      rotateX: -y * 10,
      rotateY: x * 10,
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(imageRef.current, {
      x: x * 20,
      y: y * 20,
      scale: 1.1,
      duration: 0.5,
      ease: "power2.out",
    });
  });

  const onMouseLeave = contextSafe(() => {
    gsap.to([cardRef.current, imageRef.current], {
      rotateX: 0,
      rotateY: 0,
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.7,
      ease: "elastic.out(1, 0.6)",
    });
  });

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      variants={fadeIn("up", "tween", 0.2 * index, 0.1)}
      whileInView="show"
      initial="hidden"
      viewport={{ once: true }}
      className="group relative flex flex-col p-3 rounded-2xl 
                 bg-black/5 dark:bg-white/[0.03] 
                 border border-black/5 dark:border-white/10 
                 backdrop-blur-2xl perspective-1000 will-change-transform 
                 select-none cursor-none overflow-hidden"
      style={{ transformStyle: "preserve-3d" }}
    >
      <Link href={project.url} className="relative aspect-[4/3] overflow-hidden rounded-xl translate-z-10">
        <div ref={imageRef} className="w-full h-full">
          <Image
            className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
            src={project.image}
            fill
            alt={project.title}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-12 h-12 bg-white dark:bg-stone-900 rounded-full flex items-center justify-center shadow-2xl translate-z-20">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-black dark:text-white">
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </div>
        </div>
      </Link>

      <div className="mt-5 px-1 text-center translate-z-20">
        <h3 className="text-stone-900 dark:text-white font-bold text-lg lg:text-xl tracking-tight">
          {project.title}
        </h3>
        <p className="text-stone-500 dark:text-stone-400 text-[10px] font-semibold mt-1 uppercase tracking-[0.2em]">
          {project.type}
        </p>
        
        {project.tags && (
          <div className="mt-4 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
            <span className={`px-3 py-1 rounded-md text-[10px] font-black uppercase shadow-sm text-gray-950 ${project.color || 'bg-indigo-200'}`}>
              {project.tags}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default ProjectCard;