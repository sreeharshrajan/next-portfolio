"use client";

import React, { useEffect } from "react";
import Lenis from "lenis"; // Updated from @studio-freight/lenis

function LenisScroller() {
  useEffect(() => {
    // In the new version, 'lerp' usually works best between 0.05 and 0.1
    // If you want it instant, 0 is fine, but 0.1 is that "sweet spot"
    const lenisScroll = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1,
      smoothWheel: true,
    });

    function raf(time) {
      lenisScroll.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisScroll.destroy();
    };
  }, []);

  return null; // Using null is slightly cleaner than an empty fragment for provider-only components
}

export default LenisScroller;