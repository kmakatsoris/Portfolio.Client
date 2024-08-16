import React, { useState } from "react";
import styles from "./RenderListOfReviews.module.css";
import leftImg from "../../../images/icons/left.png";
import addIcon from "../../../images/icons/add1.png";
import TypingTextAnimation from "../animations/TypingTextAnimation";
import InfiniteRender from "../showupViewer/InfiniteRender";
import ShowUpWithJumpscareEfect from "../showupViewer/ShowUpWithJumpscareEfect";

interface RenderListOfReviewsProps {
  contents: JSX.Element[];
  startIdx: number;
  lastElement: JSX.Element | null;
  numberOfcontentsToPreview: number;
  reviewContainerH?: string;
  handleClickOnAddButton: () => void;
}

const RenderListOfReviews = (props: RenderListOfReviewsProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(
    props.startIdx >= 0 && props.startIdx < props.contents.length
      ? props.startIdx
      : 0
  );

  const nextSlide = () => {
    setCurrentIndex((prevIndex: number): number =>
      prevIndex + 1 < props.contents.length ? prevIndex + 1 : prevIndex
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : prevIndex
    );
  };

  const defaultBoundaryValidation = (value: number): boolean => {
    return value >= 0 && value < props.contents.length;
  };

  const loadActiveModules = () => {
    if (
      props.lastElement !== null &&
      currentIndex >=
        props.contents.length - props.numberOfcontentsToPreview + 1
    ) {
      const modules = props.contents.slice(
        currentIndex,
        currentIndex + props.numberOfcontentsToPreview
      );
      return [...modules, props.lastElement];
    } else {
      if (
        defaultBoundaryValidation(currentIndex) === false ||
        defaultBoundaryValidation(props.numberOfcontentsToPreview) === false
      )
        return [];
      return props.contents.slice(
        currentIndex,
        currentIndex + props.numberOfcontentsToPreview
      );
    }
  };

  const _renderAddReviewTextModule = () => {
    return (
      <InfiniteRender
        renderComponent={
          <ShowUpWithJumpscareEfect
            graphicPre={
              <TypingTextAnimation
                key={1}
                text={
                  <div className={styles.reviewTextValue}>
                    "Add your review"
                  </div>
                }
              />
            }
            graphicTrans={
              <TypingTextAnimation
                key={2}
                text={
                  <div className={styles.reviewTextValue}>
                    "Add your review"
                  </div>
                }
              />
            }
            graphicPost={
              <TypingTextAnimation
                key={3}
                text={
                  <div className={styles.reviewTextValue}>
                    "It would be my honor!!"
                  </div>
                }
              />
            }
            intervalTimeTransPre={0}
            intervalTimeTransPost={4000}
            startIndication={true}
          />
        }
        interval={9000}
        delay={1000}
      />
    );
  };

  return (
    <div className={styles.container}>
      {/** Left Button */}
      <div className={styles.navButtonLeft}>
        {currentIndex > 0 && (
          <img
            src={leftImg}
            alt="Left Arrow"
            className={styles.navButtonImg}
            onClick={prevSlide}
          />
        )}
      </div>

      {/** Main Content */}
      <div className={styles.mainContentContainer}>
        <div className={styles.addAnotherReview}>
          <div className={styles.addAnotherReviewContent}>
            <img
              src={addIcon}
              alt="Add-Icon"
              className={styles.addIcon}
              onClick={() => {
                props.handleClickOnAddButton();
              }}
            />
            <div className={styles.addAnotherReviewButton}>
              {_renderAddReviewTextModule()}
            </div>
          </div>
        </div>
        <div className={styles.mainContent}>
          {loadActiveModules().map((module: JSX.Element, i: number) => {
            return (
              <div
                key={i}
                className={styles.contentContainer}
                style={{
                  width: `${100 / props.numberOfcontentsToPreview}%`,
                  height: props.reviewContainerH,
                }}
              >
                {module}
              </div>
            );
          })}
        </div>
      </div>

      {/** Right Button */}
      <div className={styles.navButtonRight}>
        {currentIndex <
          props.contents.length - props.numberOfcontentsToPreview + 1 && (
          <img
            src={leftImg}
            alt="Right Arrow"
            className={styles.navButtonImg}
            onClick={nextSlide}
          />
        )}
      </div>
    </div>
  );
};

export default RenderListOfReviews;
