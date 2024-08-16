import React from "react";
import styles from "./Line.module.css";

interface LineProps {
  color?: string;
  width?: number;
  transformDeg?: number;
  position?: { x?: number; y?: number };
}

const Line: React.FC<LineProps> = ({
  color = "#3498db",
  width = 100,
  transformDeg = 45,
  position = {},
}: LineProps) => {
  const lineStyle = {
    backgroundColor: color,
    width: `${width}px`,
    transform: `rotate(${transformDeg}deg)`,
    left: position.x ? `${position.x}px` : `0px`,
    top: position.y ? `${position.y}px` : `0px`,
  };

  // eslint-disable-next-line
  {
    /** <- (The previous line) Line to stop warning the next line.
     * <div className={`${styles.line} ${styles.custom}`} style={lineStyle}></div> */
  }
  return <div className={`${styles.line}`} style={lineStyle}></div>;
};

export default Line;
