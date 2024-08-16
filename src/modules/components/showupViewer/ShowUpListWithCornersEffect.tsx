import React, { useEffect, useState } from "react";
import styles from "./ShowUpListWithCornersEffect.module.css";
import ShowUpWithCornersEffect from "./ShowUpWithCornersEffect";

interface ShowUpListWithCornersEffectProps {
  listOfContents: string[];
  numberOfContents: number;
  intervalTime: number;
  containerScale: number; // 400
  cornerScale: number; // 50
  maxImgWidth: number; // 300
  ImgLeft: number; // -86
  ImgTop: number; // -108
}

const ShowUpListWithCornersEffect = (
  props: ShowUpListWithCornersEffectProps
) => {
  const [currentContentIdx, setCurrentContentIdx] = useState<number>(0);

  const nextContent = (): void => {
    setCurrentContentIdx((prevIdx) => {
      if (prevIdx === props.numberOfContents - 1) {
        return 0;
      } else {
        return prevIdx + 1;
      }
    });
  };

  useEffect(() => {
    const animationFunc = () => {
      nextContent();
      setTimeout(animationFunc, props.intervalTime); // Trigger animation every 2 seconds
    };

    const timeoutId = setTimeout(animationFunc, props.intervalTime);

    return () => clearTimeout(timeoutId); // Cleanup on unmount
  }, [props.intervalTime, nextContent]);

  return (
    <div className={styles.container}>
      <ShowUpWithCornersEffect
        intervalTime={props.intervalTime}
        containerScale={props.containerScale}
        cornerScale={props.cornerScale}
        content={
          <img
            src={props.listOfContents[currentContentIdx]}
            alt="Content"
            className={styles.contentImage}
            style={{
              maxWidth: `${props.maxImgWidth}px`,
              left: `${props.ImgLeft}%`,
              top: `${props.ImgTop}%`,
            }}
          />
        }
      />
    </div>
  );
};

export default ShowUpListWithCornersEffect;
