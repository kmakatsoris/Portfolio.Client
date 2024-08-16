import React, { useState } from "react";
import styles from "./MetaDataViewerSwitcher.module.css";
import swapImg from "../../../images/icons/swap.png";

const RERENDERING_TOLERANCE = 2;

interface MetaDataViewerSwitcherProps {
  content: JSX.Element;
  metaData: JSX.Element;
  skipNumberOfAnimations: number;
}

const MetaDataViewerSwitcher = (props: MetaDataViewerSwitcherProps) => {
  const [isContentView, setIsContentView] = useState<boolean>(true);
  const [isInit, setIsInit] = useState<number>(0);

  const swapHandler: () => void = () => {
    if (isInit < props.skipNumberOfAnimations + RERENDERING_TOLERANCE)
      setIsInit((prev: number) => prev + 1);
    setIsContentView((prevView: boolean): boolean => !prevView);
  };

  return (
    <div className={styles.container}>
      <div className={styles.actionsContainer}>
        <img
          src={swapImg}
          alt="MetaData Information Icon"
          onClick={swapHandler}
          className={styles.actionImg}
        />
      </div>
      <div className={styles.contentContainer}>
        {isContentView ? (
          <div
            key={`${isContentView}`}
            className={
              isInit > props.skipNumberOfAnimations
                ? styles.contentContainer_FromContentToMetaDataAnimation
                : ""
            }
          >
            {props.content}
          </div>
        ) : (
          <div
            key={`${isContentView}`}
            className={styles.contentContainer_FromMetaDataToContentAnimation}
          >
            {props.metaData}
          </div>
        )}
      </div>
    </div>
  );
};

export default MetaDataViewerSwitcher;
