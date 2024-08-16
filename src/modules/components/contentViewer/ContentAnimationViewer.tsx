import React from "react";
import styles from "./ContentAnimationViewer.module.css";

interface ContentAnimationViewerProps {
  content: JSX.Element;
  animationMode: number;
}

const ContentAnimationViewer = (props: ContentAnimationViewerProps) => {
  const getAnimation = (): string => {
    switch (props.animationMode) {
      case 0:
        return styles.contentContainerAnimation_slideRightAnimation;
      case 1:
        return styles.contentContainerAnimation_slideLeftAnimation;
      case 2:
        return styles.contentContainerAnimation_slideTopAnimation;
      case 3:
        return styles.contentContainerAnimation_slideBottomAnimation;
      case 4:
        return styles.contentContainerAnimation_slideRightAndBottomAnimation;
      case 5:
        return styles.contentContainerAnimation_slideLeftAndTopAnimation;
      default:
        return "";
    }
  };

  return <div className={getAnimation()}>{props.content}</div>;
};

export default ContentAnimationViewer;
