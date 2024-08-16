import React, { useEffect, useState } from "react";
import styles from "./SpawnListOfItemsTimeSequentially.module.css";
import InfiniteRender from "../showupViewer/InfiniteRender";
import { TryGetFromArray } from "../../../services/GeneralPurpose.Service";

interface SpawnListOfItemsTimeSequentiallyProps {
  items: JSX.Element[];
  setMode: React.Dispatch<React.SetStateAction<number>> | null;
  initIdx?: number;
  interval: number; // 9 * 1000 -> 9seconds
  delay: number; // 1 * 1000 -> 1second
}

const SpawnListOfItemsTimeSequentially: React.FC<
  SpawnListOfItemsTimeSequentiallyProps
> = (props: SpawnListOfItemsTimeSequentiallyProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(
    props.initIdx ?? 0
  );

  useEffect(() => {
    props.setMode && props.setMode(currentImageIndex);
  }, [currentImageIndex]);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % props.items.length);
  };

  return (
    <InfiniteRender
      renderComponent={TryGetFromArray(props.items, currentImageIndex) ?? <></>}
      interval={props.interval}
      delay={props.delay}
      onChangeHandler={nextSlide}
    />
  );
};

export default SpawnListOfItemsTimeSequentially;
