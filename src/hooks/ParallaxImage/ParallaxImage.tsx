import React, { useRef } from "react";
import Image from "next/image";
import styles from "./ParallaxImage.module.scss";

interface ParallaxImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function ParallaxImage({
  src,
  alt,
  width,
  height,
  className,
}: ParallaxImageProps): JSX.Element {
  const container = useRef<HTMLDivElement>(null);
  const image = useRef<HTMLImageElement>(null);

  // Your component logic here

  return (
    <figure ref={container} className={`${styles.figure} ${className}`}>
      <Image
        ref={image}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        className={`${styles.image}`}
      />
    </figure>
  );
}
