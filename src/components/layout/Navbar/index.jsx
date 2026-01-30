"use client";

import React, { useRef, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import pages from "@/database/config/navigation.json";
import styles from "./navbar.module.scss";
import { HomeIcon, GithubIcon, LinkedInIcon, XIcon, ArrowUpRight } from "@/components/icons/NavIcons";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
}

function Navbar() {
  const pathname = usePathname();
  const headerRef = useRef(null);
  const bgRef = useRef(null);
  const { contextSafe } = useGSAP({ scope: headerRef });

  useGSAP(() => {
    // Initial entrance
    gsap.from(headerRef.current, { y: -30, opacity: 0, duration: 1, ease: "power4.out" });

    // Hide/Show logic - increased yPercent for total clearance
    const showAnim = gsap.from(headerRef.current, {
      yPercent: -200,
      paused: true,
      duration: 0.4,
      ease: "power2.inOut"
    }).progress(1);

    ScrollTrigger.create({
      start: "top top",
      onUpdate: (self) => {
        self.direction === 1 ? showAnim.reverse() : showAnim.play();
      }
    });
  });

  const doAnim = contextSafe((e) => {
    const { offsetLeft, offsetWidth, offsetHeight } = e.currentTarget;
    gsap.to(bgRef.current, {
      x: offsetLeft,
      width: offsetWidth,
      height: offsetHeight,
      autoAlpha: 1,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  const resetAnim = contextSafe(() => {
    gsap.to(bgRef.current, { autoAlpha: 0, scale: 0.8, duration: 0.2 });
  });

  const scrollToSection = contextSafe((id) => {
    gsap.to(window, { duration: 1, scrollTo: { y: id, offsetY: 80 }, ease: "power4.inOut" });
  });

  const navLinks = useMemo(() =>
    Object.values(pages).filter(item => item.showOnNavigation && item.isActive),
    []);

  return (
    <header
      ref={headerRef}
      className="fixed top-4 inset-x-0 mx-auto z-50 w-[92%] sm:w-full max-w-6xl px-0 md:px-4 pointer-events-none"
    >
      <div className="pointer-events-auto flex items-center justify-between bg-zinc-950/30 backdrop-blur-xl border border-white/5 p-2 rounded-2xl shadow-xl w-full">
        {/* Left Section: Home & Navigation */}
        <div className="flex items-center gap-2 md:gap-10">
          <Link
            href="/"
            onClick={(e) => { if (pathname === "/") { e.preventDefault(); scrollToSection("#home"); } }}
            className="flex items-center justify-center w-12 h-12 rounded-xl bg-white text-[#302C68] hover:scale-105 active:scale-95 transition-all shadow-sm"
          >
            <HomeIcon className="w-6 h-6" />
          </Link>

          {pathname === "/" && (
            <nav className="relative hidden md:flex items-center gap-2">
              <span ref={bgRef} className={`${styles.navHoverPill} bg-white/5`} />
              {navLinks.map((item, index) => (
                <button
                  key={index}
                  className="px-5 py-2 text-base font-semibold tracking-tight text-zinc-300 hover:text-white transition-colors relative z-10"
                  onMouseEnter={doAnim}
                  onMouseLeave={resetAnim}
                  onClick={() => scrollToSection(item.link)}
                >
                  {item.title}
                </button>
              ))}
            </nav>
          )}
        </div>

        {/* Right Section: Socials & CTA */}
        <div className="flex items-center gap-2 md:gap-6">
          <div className="hidden lg:flex items-center gap-1 border-r border-white/10 pr-6">
            <Link href="https://github.com/sreeharshrajan" className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-all"><GithubIcon className="w-5 h-5" /></Link>
            <Link href="https://linkedin.com/in/sreeharshk" className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-all"><LinkedInIcon className="w-5 h-5" /></Link>
            <Link href="https://twitter.com/SreeharshR" className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-all"><XIcon className="w-4 h-4" /></Link>
          </div>

          <Link
            href="/contact"
            className="group flex items-center gap-2 md:gap-3 bg-white text-[#302C68] px-3 py-2 md:px-6 md:py-3 rounded-xl text-sm md:text-base font-bold hover:bg-zinc-100 transition-all active:scale-95 shadow-sm"
          >
            <span className="xs:hidden block">Let&apos;s Talk</span>
            <span className="xs:block hidden">Chat</span>
            <ArrowUpRight className="w-4 h-4 md:w-5 h-5 group-hover:rotate-45 transition-transform" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;