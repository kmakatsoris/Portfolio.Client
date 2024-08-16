/*
  Guids:
  - Uncoment the Point-0.0 and comment the Point-0.1 to store the current device deltaYUnit (runtime)
*/

import React, { useEffect, useState } from "react";
import styles from "./ScrollingDefaultStateDivs.module.css";
import scrollIcon from "../../../images/icons/scrollIcon.png";
import AnimationWarningHarbinger from "../animations/AnimationWarningHarbinger";
import FloatingModule from "../animations/FloatingModule";

interface ScrollingDefaultStateDivsProps {
  items: JSX.Element[];
  numberOfScrolls: number;
  scrollingIconIndicatorTop: string;
  scrollingIconIndicatorLeft: string;
  setMode: React.Dispatch<React.SetStateAction<number>>;
  initIdx?: number;
}

const ScrollingDefaultStateDivs: React.FC<ScrollingDefaultStateDivsProps> = (
  props
) => {
  const [currentItem, setCurrentItem] = useState<number>(props.initIdx ?? 0);
  const [currentWheelScroll, setCurrentWheelScroll] = useState<number>(0);
  const [deltaUnit, setDeltaUnit] = useState<number>(60);

  // console.log(`currentItem=${currentItem}`);
  // console.log(`currentWheelScroll=${currentWheelScroll}`);
  // console.log(`deltaUnit=${deltaUnit}`);
  // console.log(`----------------------------------------------`);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (deltaUnit === 1) {
        // setDeltaUnit(Math.abs(event.deltaY)); // Point-0.0
        setDeltaUnit(60); // // Point-0.1
      }

      const totalItems = props.items.length;
      const totalScrolls = props.numberOfScrolls;
      const maxScroll = totalItems * totalScrolls * deltaUnit - deltaUnit;

      setCurrentWheelScroll((prevState: number): number => {
        const nextScroll = prevState + event.deltaY;
        return Math.max(0, Math.min(nextScroll, maxScroll));
      });
    };

    document.addEventListener("wheel", handleScroll);

    return () => {
      document.removeEventListener("wheel", handleScroll);
    };
  }, [deltaUnit, props.items.length, props.numberOfScrolls]);

  useEffect(() => {
    const totalItems = props.items.length;
    const totalScrolls = props.numberOfScrolls;

    let newItemIndex = Math.floor(
      currentWheelScroll /
        (totalScrolls * (deltaUnit === 0 ? 1 / totalScrolls : deltaUnit))
    );

    newItemIndex = Math.max(0, Math.min(newItemIndex, totalItems - 1));

    setCurrentItem(newItemIndex);
    props.setMode(newItemIndex);
  }, [
    currentWheelScroll,
    props.numberOfScrolls,
    deltaUnit,
    props.items.length,
  ]);

  return (
    <div className={styles.rotatingDivsContainer}>
      <div key={currentItem} className={styles.rotatingDiv}>
        {props.items[currentItem]}
      </div>

      <div
        className={styles.scrollIconContainer}
        style={{
          top: props.scrollingIconIndicatorTop,
          left: props.scrollingIconIndicatorLeft,
        }}
      >
        <FloatingModule
          item={
            <AnimationWarningHarbinger
              animatedComponent={
                <div className={styles.scrollSubIcon}>
                  <img
                    src={scrollIcon}
                    alt="Scroll-Icon"
                    className={styles.scrollIcon}
                  />
                </div>
              }
              warningImgWidth={20}
              warningImgMargin="-8px 0px 0px 0px"
              notificationText={"Scroll Down/Up to see more..."}
              detailsW={"188px"}
              detailsH={"20px"}
            />
          }
          moduleW={"30%"}
          moduleH={"50%"}
          floatingDistance={"-200px"}
          backgroundShadowColor={"rgba(0, 0, 0, 0)"}
          shadowLeft={""}
          shadowW={""}
        />
      </div>
    </div>
  );
};

export default ScrollingDefaultStateDivs;
