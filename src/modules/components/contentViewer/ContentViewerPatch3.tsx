import React from "react";
import styles from "./ContentViewerPatch3.module.css";

interface ContentViewerPatch3Props {
  content: JSX.Element;
  graphic: JSX.Element;
  backgroundImgOpacity: number;
  backgroundImgBlur: number;
}

const ContentViewerPatch3 = (props: ContentViewerPatch3Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.rectangularStrokeContainer}>
        <div className={styles.contentContainer}>{props.content}</div>
      </div>
      <div
        className={styles.backgroundContainer}
        style={{
          opacity: `${props.backgroundImgOpacity}%`,
          filter: `blur(${props.backgroundImgBlur}px)`,
        }}
      >
        {props.graphic}
      </div>
    </div>
  );
};

export default ContentViewerPatch3;
