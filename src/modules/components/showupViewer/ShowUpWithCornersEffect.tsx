import React, { useEffect, useState } from "react";
import styles from "./ShowUpWithCornersEffect.module.css";
import corner from "../../../images/icons/corner.png";

interface ShowUpWithCornersEffectProps {
  intervalTime: number;
  containerScale: number;
  cornerScale: number;
  content: JSX.Element;
}

const ShowUpWithCornersEffect: React.FC<ShowUpWithCornersEffectProps> = (
  props
) => {
  const [animationToggle, setAnimationToggle] = useState<boolean>(true);

  useEffect(() => {
    const animateCorners = () => {
      setAnimationToggle((prevState) => !prevState); // Increment animationToggle
      setTimeout(animateCorners, props.intervalTime); // Trigger animation every 2 seconds
    };

    const timeoutId = setTimeout(animateCorners, props.intervalTime);

    return () => clearTimeout(timeoutId); // Cleanup on unmount
  }, [props.intervalTime]);

  return (
    <div
      key={`${animationToggle}`}
      className={styles.container}
      style={{
        width: `${props.containerScale}px`,
        height: `${props.containerScale}px`,
      }}
    >
      <div className={styles.topRight}>
        <img
          src={corner}
          alt="Corner"
          className={styles.cornerImgTopRight}
          style={{ width: `${props.cornerScale}px` }}
        />
      </div>
      <div className={styles.contentContainer}>{props.content}</div>
      <div className={styles.bottomLeft}>
        <img
          src={corner}
          alt="Corner"
          className={styles.cornerImgBottomLeft}
          style={{ width: `${props.cornerScale}px` }}
        />
      </div>
    </div>
  );
};

export default ShowUpWithCornersEffect;
