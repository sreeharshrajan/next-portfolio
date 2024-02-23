import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisScroller(): JSX.Element {
  useEffect(() => {
    const lenisScroll = new Lenis({
      lerp: 0,
      //wheelMultiplier: 0.8
      wheelMultiplier: 1.3,
    });

    function raf(time: number) {
      lenisScroll.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisScroll.destroy();
    };
  }, []);

  return <></>;
}
