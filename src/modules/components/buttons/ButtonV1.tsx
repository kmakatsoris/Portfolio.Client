import React from "react";
import styles from "./ButtonV1.module.css";

interface ButtonV1Props {
  text: string;
  containerW: number;
  containerH: number;
  textContainerW: number;
  textContainerH: number;
  textContainerBackroundColor: string;
  textColor: string;
  drawRule: string; // "M 0 0 L 100 0 L 100 100 L 0 100 Z"
  btnHandler: () => void;
}

const ButtonV1 = (props: ButtonV1Props) => {
  // Rendering Components
  const animationEffectModes = (mode: number): JSX.Element => {
    if (mode === 0) {
      return (
        <svg
          className={styles.animatedBorderDefault}
          width="100%"
          height="100%"
        >
          <path className={styles.borderPathDefault} d={props.drawRule}></path>
        </svg>
      );
    }
    return <></>;
  };

  const renderTextModes = (mode: number) => {
    return (
      <div className={styles[`text${mode}`]} style={{ color: props.textColor }}>
        {props.text}
      </div>
    );
  };

  return (
    <div
      className={styles.container}
      style={{
        width: `${props.containerW}px`,
        height: `${props.containerH}px`,
      }}
    >
      <div
        className={styles.textContainer}
        style={{
          width: `${props.textContainerW}%`,
          height: `${props.textContainerH}%`,
          background: props.textContainerBackroundColor,
        }}
        onClick={props.btnHandler}
      >
        {renderTextModes(0)}
      </div>
      <div className={styles.effectContainer}>{animationEffectModes(0)}</div>
    </div>
  );
};

export default ButtonV1;
