/*
Description: A Triangle Shape Module That Gets As Input The Dimensions of the Triangle and The Content Be Included Inside This Triangle.
*/
import React from "react";
import Line from "./Line";
import styles from "./Triangle.module.css";

interface TriangleProps {
  color?: string;
  width?: number;
  module?: JSX.Element;
}

const Triangle: React.FC<TriangleProps> = ({
  color = "#3498db",
  width = 100,
}: TriangleProps) => {
  const rotationAngles: number[] = [0, 45, 90];
  const positionValues: PositionValues = {
    0: { x: 0, y: 0 },
    1: { x: 0, y: 0 },
    2: { x: 0, y: 0 },
  };

  return (
    <div className={styles.triangle}>
      {rotationAngles.map((angle, index) => (
        <Line
          key={index}
          color={color}
          width={width}
          transformDeg={angle}
          position={positionValues[index]}
        />
      ))}
    </div>
  );
};

export default Triangle;
