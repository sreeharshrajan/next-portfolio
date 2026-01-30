"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const GlassButton = ({
    children,
    href,
    variant = "primary",
    className = "",
    target,
}) => {
    const buttonRef = useRef(null);
    const spotlightRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    // Define styles based on variant
    const baseStyles =
        "relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full px-8 font-semibold transition-colors duration-300";

    const variants = {
        primary: "bg-white text-black hover:bg-purple-50",
        glass: "border border-white/20 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10",
    };

    useGSAP(() => {
        const button = buttonRef.current;
        const spotlight = spotlightRef.current;
        if (!button || !spotlight) return;

        // 1. Magnetic Effect Logic
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = button.getBoundingClientRect();

            // Calculate center
            const centerX = left + width / 2;
            const centerY = top + height / 2;

            // Distance from center
            const x = (clientX - centerX);
            const y = (clientY - centerY);

            // Move button slightly towards mouse (Magnetic)
            gsap.to(button, {
                x: x * 0.2, // Strength of magnet
                y: y * 0.2,
                duration: 0.5,
                ease: "power3.out",
            });

            // Move spotlight to follow mouse exactly relative to button
            gsap.to(spotlight, {
                x: x,
                y: y,
                duration: 0.1, // Very quick follow
                ease: "none", // Linear for spotlight
            });
        };

        const handleMouseLeave = () => {
            setIsHovered(false);
            // Snap back to center
            gsap.to(button, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: "elastic.out(1, 0.3)", // Bouncy return
            });
        };

        const handleMouseEnter = () => setIsHovered(true);

        button.addEventListener("mousemove", handleMouseMove);
        button.addEventListener("mouseleave", handleMouseLeave);
        button.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            button.removeEventListener("mousemove", handleMouseMove);
            button.removeEventListener("mouseleave", handleMouseLeave);
            button.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, []);

    return (
        <Link
            href={href}
            target={target}
            ref={buttonRef}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {/* Spotlight Element */}
            <span
                ref={spotlightRef}
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300"
                style={{ opacity: isHovered ? 1 : 0 }}
            >
                <span
                    className={`block h-32 w-32 rounded-full blur-[30px] ${variant === "primary" ? "bg-purple-300/30" : "bg-white/20"
                        }`}
                />
            </span>

            {/* Content z-index ensures it sits above the spotlight */}
            <span className="relative z-10 flex items-center gap-2">{children}</span>
        </Link>
    );
};

export default GlassButton;