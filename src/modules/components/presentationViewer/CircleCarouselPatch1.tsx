import React, { useState } from "react";
import styles from "./CircleCarouselPatch1.module.css";
import pointImg from "../../../images/icons/point1.png";
import FloatingModule from "../animations/FloatingModule";

interface CircleCarouselPatch1Props {
  containerW: number;
  components: JSX.Element[];
  startIdx: number; // [0, components.length - 1]
  leftColor: string;
  leftW: number;
  leftH: string;
  rightColor: string;
  rightW: number;
  rightH: string;
  centricColor: string;
  centricW: number;
  centricLeft: string;
  bottomPointerIcon: number;
  rotatePointImg: number;
  modeCentric: number;
  modeLeftorRight: number;
  centricComponentClickHandler: (currentComponent: number) => void;
  nLeftItemsToBeShown: number;
  nRightItemsToBeShown: number;
  centricContainerMargin: string;
}

const CircleCarouselPatch1 = (props: CircleCarouselPatch1Props) => {
  const [currentComponent, setCurrentComponent] = useState<number>(
    props.startIdx
  );

  const rectangularComponentContainerStyleHandler = (mode: number) => {
    switch (mode) {
      case 0:
        return styles.rectangularComponentContainer;
      case 1:
        return styles.rectangularComponentContainer1;
      default:
        return styles.rectangularComponentContainer;
    }
  };

  const renderComponentInsideRectangular = (
    component: JSX.Element,
    idx: number,
    color: string,
    customWidth: number,
    leftH: string,
    mode: number,
    isCentric: boolean
  ) => {
    return (
      <div
        className={rectangularComponentContainerStyleHandler(mode)}
        onClick={() => {
          setCurrentComponent(idx);
        }}
        style={{
          position: "relative",
          borderColor: color,
          width: `${customWidth}px`,
          left: leftH,
        }}
      >
        <div
          className={
            isCentric === true
              ? styles.rectangularComponentCentricContentContainer
              : styles.rectangularComponentLeftOrRightContentContainer
          }
        >
          {component}
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container} style={{ width: `${props.containerW}%` }}>
      {/** LEFT CONTAINER */}
      <div
        className={styles.listOfLeftContainers}
        style={{ width: `${props.leftW}px` }}
      >
        {Array.from({ length: currentComponent }, (_, i) => i).map(
          (i: number) => {
            if (currentComponent - i >= props.nLeftItemsToBeShown)
              return <div key={i}></div>;
            return (
              <div key={i} className={styles.leftContainer}>
                {renderComponentInsideRectangular(
                  props.components[i],
                  i,
                  props.leftColor,
                  props.leftW,
                  props.leftH,
                  props.modeLeftorRight,
                  false
                )}
              </div>
            );
          }
        )}
      </div>

      {/** CENTRAL CONTAINER */}
      <div
        className={styles.centricContainer}
        style={{
          margin: props.centricContainerMargin,
        }}
        onClick={() => {
          props.centricComponentClickHandler(currentComponent);
        }}
      >
        {renderComponentInsideRectangular(
          <FloatingModule
            item={
              <div
                className={styles.centricContentContainer}
                style={{
                  width: `${props.centricW}px`,
                }}
              >
                <div className={styles.contentContainer}>
                  {props.components[currentComponent]}
                </div>
                <div
                  className={styles.pointContainer}
                  style={{ bottom: `${props.bottomPointerIcon}%` }}
                >
                  <img
                    src={pointImg}
                    alt="Point"
                    className={styles.pointImg}
                    style={{ transform: `rotate(${props.rotatePointImg}deg)` }}
                  />
                  <div className={styles.pointText}>Select</div>
                </div>
              </div>
            }
            moduleW={"80%"}
            moduleH={"40%"}
            floatingDistance={"-10px"}
            backgroundShadowColor={""}
            shadowLeft={""}
            shadowW={""}
          />,
          currentComponent,
          props.centricColor,
          props.centricW,
          props.centricLeft,
          props.modeCentric,
          true
        )}
        <div
          className={styles.rectangularComponentContainerExtraBorder}
          style={{ borderColor: props.centricColor }}
        ></div>
      </div>

      {/** RIGHT CONTAINER */}
      <div
        className={styles.listOfRightContainers}
        style={{ width: `${props.rightW}px` }}
      >
        {Array.from(
          { length: props.components.length - currentComponent - 1 },
          (_, i) => i
        ).map((i: number) => {
          if (i >= props.nRightItemsToBeShown - 1) return <div key={i}></div>;
          return (
            <div key={i} className={styles.rightContainer}>
              {renderComponentInsideRectangular(
                props.components[currentComponent + i + 1],
                currentComponent + i + 1,
                props.rightColor,
                props.rightW,
                props.rightH,
                props.modeLeftorRight,
                false
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CircleCarouselPatch1;
