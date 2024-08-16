import React, { useEffect, useState } from "react";
import styles from "./MetaDataViewerScheduler.module.css";
import MetaDataViewer from "./MetaDataViewer";
import infoImg from "../../../images/icons/info.png";
import backgroundImg from "../../../images/content/HomePagePTwoPage.Sec1/home/1.png";

interface MetaDataViewerSchedulerProps {
  defaultComponent: JSX.Element;
  infoImgWidth: number;
  animationMode: number;
  onClickMetaDataViewerSchedulerSelectedIdHandler: () => void;
  onClickInfoHandler: () => void;
  titleFontSize: string;
  textFontSize: string;
  titleContainerMarginBottom: string;
  lineHorizontalMarginBottom: string;
  leftActionWidth: string;
  rightActionWidth: string;
  enumerationTextFontSize: string;
}

const othersContents: string[] = [
  "../../images/content/HomePagePTwoPage.Sec1/others/1.png",
  "../../images/content/HomePagePTwoPage.Sec1/others/2.png",
  "../../images/content/HomePagePTwoPage.Sec1/others/3.png",
  "../../images/content/HomePagePTwoPage.Sec1/others/4.png",
  "../../images/content/HomePagePTwoPage.Sec1/others/5.png",
];

const MetaDataViewerScheduler = (props: MetaDataViewerSchedulerProps) => {
  const [isDefaultVieMode, setIsDefaultVieMode] = useState<boolean>(true);

  const selectAnimationStyle = (): string => {
    return props.animationMode === 0
      ? styles.defaultContainerAnimation0
      : styles.defaultContainerAnimation1;
  };

  const metaDateViewerHandler = () => {
    props.onClickInfoHandler();
    setIsDefaultVieMode(!isDefaultVieMode);
  };

  return (
    <div className={styles.container}>
      <div className={styles.infoImgContainer}>
        <img
          src={infoImg}
          alt="Show Meta-Data & Default Content"
          className={styles.infoImg}
          style={{ width: `${props.infoImgWidth}px` }}
          onClick={metaDateViewerHandler}
        />
      </div>
      {isDefaultVieMode ? (
        /*Default Container*/
        <div
          key={`${isDefaultVieMode}`}
          className={selectAnimationStyle()}
          onClick={props.onClickMetaDataViewerSchedulerSelectedIdHandler}
        >
          {props.defaultComponent}
        </div>
      ) : (
        <div key={`${isDefaultVieMode}`} className={styles.metaDataContainer}>
          <MetaDataViewer
            titleFontSize={props.titleFontSize} textFontSize={props.textFontSize} titleContainerMarginBottom={props.titleContainerMarginBottom} lineHorizontalMarginBottom={props.lineHorizontalMarginBottom}
            leftActionWidth={props.leftActionWidth} rightActionWidth={props.rightActionWidth} enumerationTextFontSize={props.enumerationTextFontSize}
          />
        </div>
      )}
    </div>
  );
};

export default MetaDataViewerScheduler;
