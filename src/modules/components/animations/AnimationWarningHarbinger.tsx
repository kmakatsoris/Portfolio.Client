import React, { useState } from "react";
import styles from "./AnimationWarningHarbinger.module.css";
import warningImg from "../../../images/icons/info.png";

interface AnimationWarningHarbingerProps {
  animatedComponent: JSX.Element;
  warningImgWidth: number;
  warningImgMargin: string;
  notificationText: string;
  detailsW?: string;
  detailsH?: string
}

const AnimationWarningHarbinger = (props: AnimationWarningHarbingerProps) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const handleInfoIconClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className={`${styles.container}`}>
      <div className={styles.animatedComponent}>{props.animatedComponent}</div>
      <img
        src={warningImg}
        alt="Animation Warning"
        className={styles.warningImg}
        style={{
          width: `${props.warningImgWidth}px`,
          margin: props.warningImgMargin,
        }}
        onClick={handleInfoIconClick}
      />
      {showDetails && (
        <div className={styles.details} style={{ width: props.detailsW, height: props.detailsH }}>
          <div className={styles.detailsContent}>{props.notificationText}</div>
        </div>
      )}
    </div>
  );
};

export default AnimationWarningHarbinger;
