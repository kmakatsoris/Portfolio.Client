import React from "react";
import styles from "./CustomShape.module.css";

interface CustomShapeProps {
  widthPercent: number;
  heightPercent: number;
  path: string;
  imageElement: JSX.Element;
  strokeWidth: number;
  clipPathId: string;
}

const CustomShape: React.FC<CustomShapeProps> = (props: CustomShapeProps) => {
  const shapeStyle = {
    width: `${props.widthPercent}%`,
    height: `${props.heightPercent}%`,
  };

  return (
    <div className={styles.container} style={shapeStyle}>
      <svg
        className={styles.svg}
        viewBox={`0 0 100 100`}
        preserveAspectRatio="none"
      >
        <defs>
          <clipPath id={props.clipPathId}>
            <path d={props.path} />
          </clipPath>
        </defs>
        <g clipPath={`url(#${props.clipPathId})`}>
          <path
            d={props.path}
            className={styles.shape}
            style={{ strokeWidth: props.strokeWidth }}
          />
          <foreignObject
            width="100%"
            height="100%"
            className={styles.foreignObject}
          >
            {React.cloneElement(props.imageElement, {
              style: { width: "100%", height: "100%" },
            })}
          </foreignObject>
        </g>
      </svg>
    </div>
  );
};

export default CustomShape;
