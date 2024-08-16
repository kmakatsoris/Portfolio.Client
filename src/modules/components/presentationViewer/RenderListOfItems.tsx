import React from "react";
import styles from "./RenderListOfItems.module.css";
import CircleCarousel from "./CircleCarousel";
import ScrollingDefaultStateDivs from "./ScrollingDefaultStateDivs";

interface RenderListOfItemsProps {
  iterationMode: number;
  items: JSX.Element[];
  setMode: React.Dispatch<React.SetStateAction<number>>;
  selectedHandler: (idx: number) => void;
  initIdx?: number; // -> Use it if you want to initialize to other idx the quere or to prevent from rerenders

  // CircleCarousel
  leftL?: string;
  rightR?: string;
  isRightItemViewEn?: boolean;
  isLeftItemViewEn?: boolean;

  // ScrollingDefaultStateDivs
  numberOfScrolls?: number;
  scrollingIconIndicatorTop?: string;
  scrollingIconIndicatorLeft?: string;
}

const RenderListOfItems = (props: RenderListOfItemsProps) => {
  const _iterationFunc = () => {
    if (props.iterationMode === 0) {
      return (
        <CircleCarousel
          items={props.items}
          setMode={props.setMode}
          selectedHandler={props.selectedHandler}
          initIdx={props.initIdx}
          leftL={props.leftL}
          rightR={props.rightR}
        />
      );
    } else if (props.iterationMode === 1) {
      return (
        <ScrollingDefaultStateDivs
          items={props.items}
          numberOfScrolls={props.numberOfScrolls ?? 1}
          scrollingIconIndicatorTop={props?.scrollingIconIndicatorTop ?? ""}
          scrollingIconIndicatorLeft={props?.scrollingIconIndicatorLeft ?? ""}
          setMode={props.setMode}
          initIdx={props.initIdx}
        />
      );
    } else {
      return (
        <CircleCarousel
          items={props.items}
          setMode={props.setMode}
          selectedHandler={props.selectedHandler}
          initIdx={props.initIdx}
          leftL={props.leftL}
          rightR={props.rightR}
        />
      );
    }
  };
  return <div className={styles.container}>{_iterationFunc()}</div>;
};

export default RenderListOfItems;
