import React, { useContext } from "react";
import styles from "./TitleAndContentViewer.module.css";

interface TitleAndContentViewerProps {
  title: string;
  content: JSX.Element;
  linehorizonalW: string;
  fontSize?: string;
  marginTitle?: string;
  marginLine?: string;
  marginContent?: string;
}

const TitleAndContentViewer = (props: TitleAndContentViewerProps) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.titleContainer}
        style={{
          margin: props.marginTitle ?? "",
        }}
      >
        <div
          className={styles.title}
          style={{ fontSize: props.fontSize ?? "24px" }}
        >
          {props.title}
        </div>
      </div>
      <div
        className={styles.lineHorizontal}
        style={{
          width: props.linehorizonalW,
          margin: props.marginLine ?? "",
        }}
      ></div>
      <div
        className={styles.contentContainer}
        style={{ margin: props.marginContent ?? "" }}
      >
        <div className={styles.content}>{props.content}</div>
      </div>
    </div>
  );
};

export default TitleAndContentViewer;
