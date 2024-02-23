import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface MagnetProps {
  children: React.ReactElement;
}

export default function Magnet({ children }: MagnetProps): JSX.Element {
  const magnetic = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const xTo = gsap.quickTo(magnetic.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(magnetic.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    magnetic.current?.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const rect = magnetic.current?.getBoundingClientRect();
      const { height, width, left, top } = rect ?? { height: 0, width: 0, left: 0, top: 0 };
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x);
      yTo(y);
    });

    magnetic.current?.addEventListener("mouseleave", () => {
      xTo(0);
      yTo(0);
    });
  }, [magnetic]);

  // Check if children is provided before attempting to clone
  return children && React.cloneElement(children, { ref: magnetic });
}
