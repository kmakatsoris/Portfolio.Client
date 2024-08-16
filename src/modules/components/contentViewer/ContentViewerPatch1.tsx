/*
 - Description: This is a content viewer module that initially displays a graphic. Afterward, this graphic serves as the background while text/content modules are displayed on top of it. 
*/
import React, { useEffect, useState } from "react";
import styles from "./ContentViewerPatch1.module.css";
import MultipleInformationSimpleViewer from "./MultipleInformationSimpleViewer";

// Define Constant Variables,
const INTERVAL_TIME = 4000;

interface ContentViewerPatch1Props {
  graphic: JSX.Element;
  title: string;
  text: string;
  content: JSX.Element[];
  titleFontSize: string;
  textFontSize: string;
  titleContainerMarginBottom: string;
  lineHorizontalMarginBottom: string;
  leftActionWidth: string;
  rightActionWidth: string;
  enumerationTextFontSize: string;
}

const ContentViewerPatch1 = (props: ContentViewerPatch1Props) => {
  const [graphicStage, setGraphicStage] = useState<boolean>(true);
  const [contentStage, setContentStage] = useState<number>(
    props.title === "" ? 1 : 0
  ); // If there is no title, then the introduction content should no be displayed

  useEffect(() => {
    const animationFunc = () => {
      graphicStage === true &&
        setGraphicStage((prevStage: boolean): boolean => !prevStage);
    };

    const timeoutId = setTimeout(animationFunc, INTERVAL_TIME);

    return () => clearTimeout(timeoutId); // Cleanup on unmount
  }); // Once At Mounting

  // Functions Sections,
  // Handlers Functions,
  const nextContentStageHandler = () => {
    setContentStage((prevStage: number) => {
      if (prevStage >= 0 && prevStage < props.content.length) {
        return prevStage + 1;
      } else {
        return 0;
      }
    });
  };

  const prevContentStageHandler = () => {
    setContentStage((prevStage: number) => {
      if (prevStage > 0 && prevStage <= props.content.length) {
        return prevStage - 1;
      } else {
        return props.content.length;
      }
    });
  };

  // Styles Functions:
  const getGraphicStyles: () => string = (): string => {
    return graphicStage
      ? styles.graphicContainerOnTop
      : styles.graphicContainerOnBackground;
  };

  // Modules Functions,
  const renderIntroductionContainer = (): JSX.Element => {
    return (
      <div className={styles.introductionContainer}>
        <div className={styles.titleContainer} style={{ marginBottom: props.titleContainerMarginBottom }}>
          <div className={styles.title} style={{ fontSize: props.titleFontSize }}>{props.title}</div>
        </div>
        <div className={styles.lineHorizontal} style={{ marginBottom: props.lineHorizontalMarginBottom }}></div>
        <div className={styles.textContainer}>
          <div className={styles.text} style={{ fontSize: props.textFontSize }}>{props.text}</div>
        </div>
      </div>
    );
  };

  const renderContentContainer = (): JSX.Element => {
    return contentStage > 0 && contentStage <= props.content.length ? (
      <div className={styles.contentStageContainer}>{props.content[contentStage - 1]}</div>
    ) : (
      renderIntroductionContainer()
    );
  };

  return (
    <div className={styles.container}>
      {/** Graphic Container */}
      <div className={getGraphicStyles()}>{props.graphic}</div>

      {/** Introduction Content */}
      <div className={styles.contentContainer}>
        <MultipleInformationSimpleViewer
          content={renderContentContainer()}
          currentIdx={`${contentStage + 1}/${props.content.length + 1}`}
          nextHandler={nextContentStageHandler}
          prevHandler={prevContentStageHandler}
          containerMargin={"0px 0px 5% 0%"}
          leftActionWidth={props.leftActionWidth} rightActionWidth={props.rightActionWidth} textFontSize={props.enumerationTextFontSize} />
      </div>
    </div>
  );
};

export default ContentViewerPatch1;
