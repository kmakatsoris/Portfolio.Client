import React from "react";
import styles from "./FloatingModule.module.css";

interface FloatingModuleProps {
  item: JSX.Element;
  moduleW: string;
  moduleH: string;
  floatingDistance: string;
  backgroundShadowColor: string;
  shadowLeft: string;
  shadowW: string;
}

const FloatingModule = (props: FloatingModuleProps) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.subContainer}
        style={{ width: props.moduleW, height: props.moduleH }}
      >
        <div
          className={styles.floatingModule}
          style={
            {
              "--floating-distance": props.floatingDistance,
            } as React.CSSProperties
          }
        >
          <div className={styles.content}>{props.item}</div>
        </div>
        <div
          className={styles.shadowContainer}
          style={{
            backgroundColor: props.backgroundShadowColor,
            left: props.shadowLeft,
            width: props.shadowW,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FloatingModule;
