import React, { useState } from "react";
import styles from "./PhasesViewerDefault.module.css";

interface PhasesViewerDefaultProps {
  items: JSX.Element[];
  phase: number;
}

const PhasesViewerDefault = (props: PhasesViewerDefaultProps) => {
  return (
    <div key={props.phase} className={styles.container}>
      {props.items[props.phase]}
    </div>
  );
};

export default PhasesViewerDefault;
