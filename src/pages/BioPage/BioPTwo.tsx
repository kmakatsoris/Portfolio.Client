import React, { useEffect, useState } from "react";
import styles from "./BioPTwo.module.css";
import BioRoadMap from "../../modules/components/modals/BioRoadMap";
import backgroundImg from "../../images/content/forest.png";
import ltsPlayImg from "../../images/content/HomePagePOnePage.Sec1/2.png";
import ShowUpWithJumpscareEfect from "../../modules/components/showupViewer/ShowUpWithJumpscareEfect";
import ltsPlayImgEffect from "../../images/content/Production36.png";

interface BioPTwoProps {}

const BioPTwo = (props: BioPTwoProps) => {
  const [isPlay, setIsPlay] = useState<boolean>(false);
  const [isPlayEffect, setIsPlayEffect] = useState<boolean>(false);
  const [currentStage, setCurrentStage] = useState<number>(0);
  const [isDetailsVisible, setIsDetailsVisible] = useState<boolean>(false);
  const letsPlayIntervalTime: number = 1000;

  const handlerStageChange = (newStage: number) => {
    setCurrentStage(newStage);
  };

  const updateDetailsVisibility = (isVisible: boolean) => {
    setIsDetailsVisible(isVisible);
  };

  const handlerDetailsVisibilityChange = () => {
    if (isDetailsVisible) {
      setIsDetailsVisible(false);
    }
  };

  const startTheBioDemo = () => {
    setIsPlayEffect(true);
    const intervalId = setInterval(() => {
      setIsPlay(true);
      clearInterval(intervalId); // Clear the interval after setting isPlay to false
    }, letsPlayIntervalTime);
  };

  const renderPlayContainer = () => {
    return (
      <div className={styles.playContainer}>
        <div
          className={
            isDetailsVisible
              ? styles.contentContainer_isDetailsVisible
              : styles.contentContainer
          }
        >
          <div
            className={
              isDetailsVisible
                ? styles.roadMapContainer_isDetailsVisible
                : styles.roadMapContainer
            }
            onClick={() => handlerDetailsVisibilityChange()}
          >
            <BioRoadMap
              handlerStageChange={handlerStageChange}
              handlerDetailsVisibilityChange={updateDetailsVisibility}
              currentStage={currentStage}
            />
          </div>
          {isDetailsVisible && (
            <div
              className={
                isDetailsVisible
                  ? styles.detailsContainer_isDetailsVisible
                  : styles.detailsContainer
              }
            >
              DETAILS
            </div>
          )}
        </div>
        <div className={styles.backgroundContainer}>
          <img
            src={backgroundImg}
            alt="Background"
            className={styles.backgroundImg}
          />
        </div>
      </div>
    );
  };

  const renderPrePlayContainer = () => {
    return (
      <div className={styles.prePlayContainer} onClick={startTheBioDemo}>
        <div key={`${isPlayEffect}`} className={styles.prePlayImageContainer}>
          <ShowUpWithJumpscareEfect
            graphicPre={
              <img
                src={ltsPlayImg}
                alt="lets Play"
                className={styles.letsPlayImg}
              />
            }
            graphicTrans={
              <img
                src={ltsPlayImgEffect}
                alt="lets Play"
                className={styles.letsPlayImg}
              />
            }
            graphicPost={
              <img
                src={ltsPlayImg}
                alt="lets Play"
                className={styles.letsPlayImg}
              />
            }
            intervalTimeTransPre={0}
            intervalTimeTransPost={1000}
            startIndication={isPlayEffect}
          />
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {isPlay === true ? renderPlayContainer() : renderPrePlayContainer()}
    </div>
  );
};

export default BioPTwo;
