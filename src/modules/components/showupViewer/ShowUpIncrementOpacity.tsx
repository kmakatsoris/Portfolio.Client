import React from "react";
import styles from "./ShowUpIncrementOpacity.module.css";

interface ShowUpIncrementOpacityProps {
  children: JSX.Element;
}

const ShowUpIncrementOpacity = (props: ShowUpIncrementOpacityProps) => {
  return <div className={styles.container}>{props.children}</div>;
};

export default ShowUpIncrementOpacity;
