import React, { useEffect, useState } from "react";
import styles from "./RenderListOfImagesOneByOne.module.css";

interface RenderListOfImagesOneByOneProps {
  listOfImages: any[];
  intervalTime: number;
}

const RenderListOfImagesOneByOne = (props: RenderListOfImagesOneByOneProps) => {
  const [imageIdxCounter, setImageIdxCounter] = useState<number>(0);

  useEffect(() => {
    const animationFunc = () => {
      setImageIdxCounter(
        (prevIndex) => (prevIndex + 1) % props.listOfImages.length
      );
      setTimeout(animationFunc, props.intervalTime); // Trigger animation every 2 seconds
    };

    const timeoutId = setTimeout(animationFunc, props.intervalTime);

    return () => clearTimeout(timeoutId); // Cleanup on unmount
  }, [props.intervalTime]);

  return (
    <img
      key={imageIdxCounter}
      src={props.listOfImages[imageIdxCounter]}
      alt={`Image ${imageIdxCounter + 1}`}
      className={styles.container}
    />
  );
};

export default RenderListOfImagesOneByOne;
