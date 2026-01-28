"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const InfiniteMarquee = ({ children, speed = 1, reverse = false }) => {
    const marqueeRef = useRef(null);
    const trackRef = useRef(null);

    useGSAP(() => {
        const track = trackRef.current;
        const items = Array.from(track.children);

        // Clone items to fill the space for infinite loop
        items.forEach((item) => {
            const clone = item.cloneNode(true);
            track.appendChild(clone);
        });

        const totalWidth = track.scrollWidth / 2;

        const animation = gsap.to(track, {
            x: reverse ? totalWidth : -totalWidth,
            duration: 20 / speed,
            ease: "none",
            repeat: -1,
        });

        // Interaction: Pause on hover so user can use the 3D SkillCard effect
        marqueeRef.current.addEventListener("mouseenter", () => animation.pause());
        marqueeRef.current.addEventListener("mouseleave", () => animation.play());

        return () => animation.kill();
    }, { scope: marqueeRef });

    return (
        <div ref={marqueeRef} className="relative w-full overflow-hidden py-4 cursor-none">
            <div ref={trackRef} className="flex w-max gap-6 will-change-transform">
                {children}
            </div>
        </div>
    );
};

export default InfiniteMarquee;