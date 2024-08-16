import React, { useState } from "react";
import styles from "./MultipleInformationSimpleViewer.module.css";
import leftImg from "../../../images/icons/left.png";

interface MultipleInformationSimpleViewerProps {
  content: JSX.Element;
  currentIdx: string;
  nextHandler: () => void;
  prevHandler: () => void;
  containerMargin: string;
  leftActionWidth: string;
  rightActionWidth: string;
  textFontSize: string;
}

const MultipleInformationSimpleViewer = (
  props: MultipleInformationSimpleViewerProps
) => {
  return (
    <div className={styles.container}>
      <div className={styles.actionsContainer} style={{ margin: props.containerMargin }}>
        <img
          src={leftImg}
          alt="Previous"
          onClick={props.prevHandler}
          className={styles.actionLeftImg}
          style={{ width: props.leftActionWidth }}
        />
        <div className={styles.currentIndexLabel} style={{ fontSize: props.textFontSize }}>{props.currentIdx}</div>
        <img
          src={leftImg}
          alt="Next"
          onClick={props.nextHandler}
          className={styles.actionRightImg}
          style={{ width: props.rightActionWidth }}
        />
      </div>
      {props.content}
    </div>
  );
};

export default MultipleInformationSimpleViewer;
