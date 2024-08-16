import React from "react";
import styles from "./ContentViewerPatch2.module.css";
import ContentAnimationViewer from "./ContentAnimationViewer";

interface ContentViewerPatch2Props {
  graphic: JSX.Element;
  content: JSX.Element;
  orientation: ValidFlexDirections;
  animationModes: number[];
  graphicContainerInlineStyle: React.CSSProperties;
}

const ContentViewerPatch2 = (props: ContentViewerPatch2Props) => {
  return (
    <div
      className={styles.container}
      style={{ flexDirection: props.orientation }}
    >
      <div
        className={styles.graphicContainer}
        style={props.graphicContainerInlineStyle}
      >
        <ContentAnimationViewer
          content={props.graphic}
          animationMode={props.animationModes[0]}
        />
      </div>
      <div className={styles.contentContainer}>
        <ContentAnimationViewer
          content={props.content}
          animationMode={props.animationModes[1]}
        />
      </div>
    </div>
  );
};

export default ContentViewerPatch2;
