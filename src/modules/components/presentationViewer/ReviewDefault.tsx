import React, { useEffect, useState } from "react";
import styles from "./ReviewDefault.module.css";
import fullStarIcon from "../../../images/icons/fullStar.png";
import emptyStarIcon from "../../../images/icons/emptyStar.png";
import quoteIcon from "../../../images/icons/quoteIcon.png";
import RenderListOfMeanings from "./RenderListOfMeanings";
import backgroundNameImg from "../../../images/content/flagGreece_100_80.png";

const MARKS = {
  icons: [],
  titles: [],
  descriptions: [],
  overallGrade: "2.2.2.2.2",
}; // @TODO: Fetch

interface ReviewDefaultProps {
  reviewerName: string;
  grades: GradeType[];
}

const ReviewDefault = (props: ReviewDefaultProps) => {
  const [isDetailed, setIsDetailed] = useState<boolean>(false);

  /* Rendering Functions */

  // Render Overall Grade [Decoded]
  const _renderOverallGrade = () => {
    const stars = MARKS["overallGrade"]
      .split(".")
      .map((grade) => parseInt(grade));

    const fullStars = stars.filter((star) => star === 2).length;
    const semiStars = stars.filter((star) => star === 1).length;
    const emptyStars = stars.filter((star) => star === 0).length;

    const starElements = [];

    for (let i = 0; i < fullStars; i++) {
      starElements.push(
        <img
          key={i}
          src={fullStarIcon}
          alt="Full Star"
          className={styles.startImg}
        />
      );
    }

    /*
    for (let i = 0; i < semiStars; i++) {
      starElements.push(
        <img key={i + fullStars} src={semiStarIcon} alt="Semi Star" />
      );
    }
    */

    for (let i = 0; i < emptyStars; i++) {
      starElements.push(
        <img
          key={i + fullStars + semiStars}
          src={emptyStarIcon}
          alt="Empty Star"
          className={styles.startImg}
        />
      );
    }

    return starElements;
  };

  // Render Profile Informations
  const _renderProfileInformations = () => {
    return (
      <div className={styles.profileContainer}>
        {/** Logo/Photo Container */}
        <div className={styles.photoContainer}>
          <div
            key={props.reviewerName}
            className={styles.photoContentContainer}
          >
            {props.reviewerName}
          </div>
          <img src={backgroundNameImg} alt="Background Name Image" className={styles.backgroundNameImg} />
          <div className={styles.labelContentContainer}>/Manager</div>
        </div>

        {/** Dates And Mark Container */}
        <div className={styles.datesAndOverallGradeContainer}>
          {/** Dates Container */}
          <div className={styles.datesContainer}>
            {/** Created-Date Container */}
            <div className={styles.createdDateContainer}>
              <div className={styles.createdDateTitle}>Created Date:</div>
              <div className={styles.createdDateValue}>06.03.2024</div>
            </div>
            {/** Editable-Date Container */}
            <div className={styles.editableDateContainer}>
              <div className={styles.createdDateTitle}>Edited Date:</div>
              <div className={styles.createdDateValue}>06.03.2024</div>
            </div>
          </div>

          {/** Mark Container */}
          <div className={styles.overallGradeContainer}>
            <div className={styles.overallGradeTitle}>Overall Grade:</div>
            <div className={styles.overallGradeValue}>
              {_renderOverallGrade()}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Render Content Sub Containers
  const _renderContentContainer = (title: string, description: string) => {
    return (
      <div className={styles.subContentContainer}>
        <div className={styles.subContentTitle}>{title}</div>
        <div className={styles.subContentValueContainer}>
          <div className={styles.subContentValue}>{description}</div>
        </div>
      </div>
    );
  };

  // Render Preview Content
  const _renderPreviewReview = () => {
    return (
      <div className={styles.containerPreview}>
        <div className={styles.profileContainerPreview}>
          {_renderProfileInformations()}
        </div>
        <div className={styles.contentContainerPreview}>
          <img
            src={quoteIcon}
            alt="Quote-Icon"
            className={styles.quoteIconPreview}
          />
          <div className={styles.subContentContainerPreview}>
            {_renderContentContainer(
              "Highlight:",
              "Ask the reviewer to highlight what they liked or found beneficial about me...."
            )}
          </div>
        </div>
      </div>
    );
  };

  // Render Detailed Content
  const _renderDetailedReview = () => {
    return (
      <div className={styles.containerDetailed}>
        <div className={styles.profileContainerDetailed}>
          {_renderProfileInformations()}
        </div>
        <div className={styles.contentContainerDetailed}>
          <img
            src={quoteIcon}
            alt="Quote-Icon"
            className={styles.quoteIconDetailed}
          />
          <div className={styles.subContentContainerDetailed_Highlight}>
            {_renderContentContainer(
              "Highlight:",
              "Ask the reviewer to highlight what they liked or found beneficial about me...."
            )}
          </div>
          <div
            className={styles.subContentContainerDetailed_AreasForImprovement}
          >
            {_renderContentContainer(
              "Areas for Improvement:",
              "Prompt the reviewer to provide constructive feedback on aspects that could be enhanced or improved."
            )}
          </div>
        </div>
        <div className={styles.marksContainerDetailed}>
          <RenderListOfMeanings grades={props.grades} />
        </div>
        <div className={styles.nameContainerDetailed}>
          <div className={styles.nameSymbolDetailed}>~</div>
          <div className={styles.nameTextDetailed}>{props.reviewerName}</div>
        </div>
      </div>
    );
  };

  /*  Main Renderer */
  return isDetailed ? _renderDetailedReview() : _renderPreviewReview();
};

export default ReviewDefault;
