import React, { useState } from "react";
import styles from "./RenderListOfItemsInACircle.module.css";

interface RenderListOfItemsInACircleProps {
  items: JSX.Element[];
  radius: number;
  top: string;
  left: string;
}

const RenderListOfItemsInACircle = (props: RenderListOfItemsInACircleProps) => {
  const angleIncrement = (2 * Math.PI) / props.items.length;
  let angle = 0;

  return (
    <div
      className={styles.container}
      style={{ left: props.left, top: props.top }}
    >
      {props.items.map((item, index) => {
        const x = props.radius * Math.cos(angle);
        const y = props.radius * Math.sin(angle);
        angle += angleIncrement;

        return (
          <div
            key={index}
            className={styles.itemContainer}
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <div className={styles.item}>{item}</div>
          </div>
        );
      })}
    </div>
  );
};

export default RenderListOfItemsInACircle;
