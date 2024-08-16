import React, { useState } from "react";
import styles from "./HoverComponent.module.css";

interface HoverComponentProps {
  contentWithoutHover: JSX.Element;
  contentWithHover: JSX.Element;
}

const HoverComponent = (props: HoverComponentProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      key={isHovered ? "hover" : "no-hover"}
      className={styles.container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered === true ? props.contentWithHover : props.contentWithoutHover}
    </div>
  );
};

export default HoverComponent;
