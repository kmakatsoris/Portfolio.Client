import React, { useEffect, useState } from "react";
import styles from "./ScrollingActivatorViewer.module.css";
import ContentAnimationViewer from "../contentViewer/ContentAnimationViewer";

interface ScrollingActivatorViewerProps {
  currentWheelScroll: number;
  numberOfScrolls: number;  
  content: JSX.Element;
  animationMode: number;  
}

const ScrollingActivatorViewer = (props: ScrollingActivatorViewerProps) => {
  const [enView, setEnView] = useState<boolean>(false);  
  const [initWheelScroll, setInitWheelScroll] = useState<number | undefined>(undefined);  

  useEffect(() => {
    if (initWheelScroll === undefined || initWheelScroll === 0)
    {
        setInitWheelScroll(props.currentWheelScroll);
    }
    if (initWheelScroll !== undefined && initWheelScroll !== 0 && enView === false && props.currentWheelScroll >= props.numberOfScrolls * initWheelScroll)
    {
        setEnView(true);
    }
  }, [props.currentWheelScroll]);  

  return (
    <div className={styles.container}>
        {enView && <ContentAnimationViewer
          content={props.content}
          animationMode={props.animationMode}
        />}
    </div>
  );
};

export default ScrollingActivatorViewer;
