import React from "react";
import styles from "./TypingTextAnimation.module.css";

interface TypingTextAnimationProps {
  text: JSX.Element;
}

const TypingTextAnimation = (props: TypingTextAnimationProps) => {
  return <div className={styles.container}>{props.text}</div>;
};

export default TypingTextAnimation;
