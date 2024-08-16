import React from "react";
import styles from "./ButtonV2.module.css";

interface ButtonV2Props {
  title: string;
  backgroundContent: JSX.Element;
  onClick: () => void;
}

const ButtonV2 = (props: ButtonV2Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>{props.title}</div>
      </div>
      <div className={styles.backgroundContainer} onClick={props.onClick}>
        {props.backgroundContent}
      </div>
    </div>
  );
};

export default ButtonV2;
