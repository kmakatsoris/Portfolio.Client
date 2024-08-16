import React from "react";
import styles from "./UnderlineHoverAnimation.module.css";

interface UnderlineHoverAnimationProps {
  children: JSX.Element;
  width: string;
  margin: string;
  backgroundColor: string;
  hoverWidth: string;
}

const UnderlineHoverAnimation = (props: UnderlineHoverAnimationProps) => {
  const { width, margin, backgroundColor, hoverWidth, children } = props;

  const containerStyle = {
    width,
    margin,
    "--hover-width": hoverWidth,
  };

  return (
    <div className={styles.container} style={containerStyle}>
      <div className={styles.content}>{children}</div>
      <div className={styles.underline} style={{ backgroundColor }} />
    </div>
  );
};

export default UnderlineHoverAnimation;
