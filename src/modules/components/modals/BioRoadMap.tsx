import React, { useEffect, useState } from "react";
import styles from "./BioRoadMap.module.css";
import roadMapImg from "../../../images/content/roadmap.png";
import locationMarkImg from "../../../images/icons/location1.png";

const LOCATION_POINTS_NUMBER = 5;

interface BioRoadMapProps {
  currentStage: number;
  handlerStageChange: (pointId: number) => void;
  handlerDetailsVisibilityChange: (newValue: boolean) => void;
}

const BioRoadMap = (props: BioRoadMapProps) => {
  const _handlerPointClick = (nextStageId: number) => {
    // @TODO: Logic for transition from one point to other compare currentStage with nextStageId
    _isDetailsVisibleHandler(true);
    props.handlerStageChange(_nextStage(nextStageId));
  };

  const _nextStage = (nextStageId: number) => {
    if (nextStageId < LOCATION_POINTS_NUMBER && nextStageId >= 0) {
      return nextStageId;
    }
    return props.currentStage;
  };

  const _isDetailsVisibleHandler = (isVisible: boolean) => {
    props.handlerDetailsVisibilityChange(isVisible);
  };

  return (
    <div className={styles.container}>
      <div className={styles.pointsContainer}>
        {Array.from(
          { length: LOCATION_POINTS_NUMBER },
          (_, i: number) => i
        ).map((index) => (
          <div
            key={index}
            className={styles[`locationPoint${index}`]}
            onClick={() => _handlerPointClick(index)}
          >
            <img
              src={locationMarkImg}
              alt="Point"
              className={styles.locationPointImg}
            />
          </div>
        ))}
      </div>
      <div className={styles.backgroundContainer}>
        <img
          src={roadMapImg}
          alt="Background"
          className={styles.backgroundImg}
        />
      </div>
    </div>
  );
};

export default BioRoadMap;
