import React from "react";
import styles from "./ContentViewer.module.css";

interface ContentViewerProps {
  graphic: JSX.Element;
  title: string;
  text: string;
}

const ContentViewer = (props: ContentViewerProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.leftSubContainer}>
          <div className={styles.titleContainer}>
            <div className={styles.title}>{props.title}</div>
          </div>
          <div className={styles.lineHorizontal}></div>
          <div className={styles.textContainer}>
            <div className={styles.text}>{props.text}</div>
          </div>
        </div>
      </div>
      <div className={styles.lineVertical}></div>
      <div className={styles.rightContainer}>{props.graphic}</div>
    </div>
  );
};

export default ContentViewer;
