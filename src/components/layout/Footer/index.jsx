"use client";

import React, { useMemo, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import config from "@/database/config/metadata.json";

// Register ScrollTrigger for the reveal effect
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function Footer() {
  const container = useRef(null);
  const year = useMemo(() => new Date().getFullYear(), []);

  useGSAP(() => {
    // Reveal animation for footer elements
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 90%", // Starts when the top of the footer hits 90% of the viewport
        toggleActions: "play none none reverse",
      }
    });

    tl.from(".footer-item", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    });
  }, { scope: container });

  return (
    <footer
      ref={container}
      className="flex flex-col items-center pb-10 pt-0 md:pt-15 bg-stone-950 overflow-hidden  [mask-image:linear-gradient(to_top,white_70%,transparent_100%)]"
      id="footer"
    >
      <Link
        href="/"
        aria-label="Back to home"
        className="footer-item mt-6 group relative flex items-center justify-center w-12 h-12 rounded-full border border-stone-800 text-white transition-all duration-500 ease-out hover:bg-white hover:text-black hover:scale-110 active:scale-95 !opacity-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor" 
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative z-20 pointer-events-none"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      </Link>

      <div className="mt-8 flex flex-col items-center text-center">
        {/* Attribution Text */}
        <div className="footer-item text-stone-400 text-sm md:text-base font-medium space-y-1">
          <p>© {year} Sreeharsh Rajan</p>
          <p className="opacity-70">
            Powered by
            <span className="text-stone-200"> Vercel</span>,
            <span className="text-stone-200 font-semibold"> Next.js</span>, and{" "}
            <a
              href="https://github.com/sreeharshrajan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-200 transition-all duration-300 hover:text-yellow-400 decoration-stone-800 hover:decoration-yellow-400 underline underline-offset-4"
            >
              GitHub
            </a>
          </p>
        </div>

        {/* Dynamic Quote with Magnetic-style reveal */}
        {config.content["verse"] && (
          <blockquote className="footer-item mt-8 px-6 max-w-xl italic text-yellow-400/80 text-sm md:text-base leading-relaxed tracking-wide selection:bg-yellow-400 selection:text-black">
            &ldquo;{config.content["verse"]}&rdquo;
          </blockquote>
        )}
      </div>
    </footer>
  );
}

export default Footer;