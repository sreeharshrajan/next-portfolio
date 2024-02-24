import React from "react";
import styles from "./styles.module.scss";
import FadeIn from "@/hooks/FadeIn";

interface Color {
  h: string;
  s: string;
  l: string;
}

interface ItemProps {
  index: number;
  position: string;
  company: string;
  duration: string;
  location: string;
  color: Color;
}

const Item: React.FC<ItemProps> = ({
  index,
  position,
  company,
  duration,
  location,
  color,
}) => {
  // Convert color to Color type if it's a string
  const colorObj: Color | undefined =
    typeof color === "string" ? undefined : color;

  return (
    <div
      className={styles.item}
      style={
        {
          "--h": colorObj?.h || 0,
          "--s": colorObj?.s || 0,
          "--l": colorObj?.l || 0,
        } as any
      } // Casting style object as 'any'
    >
      <FadeIn y={50} duration={0.8}>
        <div className={styles.left}>
          <div className={styles.title}>
            <h3 data-text={position}>{position}</h3>
          </div>
          <span className={styles.info}>{company}</span>
        </div>
      </FadeIn>
      <FadeIn y={50} duration={0.8}>
        <div className={styles.right}>
          <span className={styles.info}>{duration}</span>
          <span className={styles.info}>{location}</span>
        </div>
      </FadeIn>
    </div>
  );
};

export default Item;
