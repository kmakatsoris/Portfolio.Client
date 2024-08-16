import React, { useContext, useEffect, useState } from "react";
import styles from "./ContentViewerPatch4.module.css";
import CustomShape from "../shapes/CustomShape";
import CircleCarouselPatch1 from "../presentationViewer/CircleCarouselPatch1";
import HoverComponent from "../showupViewer/HoverComponent";
import CheckDetailsComponentTransformation from "../showupViewer/CheckDetailsComponentTransformation";
import ListDetailsPatch1 from "../detailsViewer/ListDetailsPatch1";
import { GeneralDataContext } from "../../../services/DataProviders/GeneralDataProvider";
import { replaceFirstCharWithLowerCase } from "../../../services/GeneralPurpose.Service";
import { useNavigate } from "react-router-dom";
import HoverComponentPatch1 from "../showupViewer/HoverComponentPatch1";

interface ContentViewerPatch4Props {
  startIdx: number;
  grades: GradeType[];
  description: string;
  categoryTitle: string;
  title: string;
  links: string;
  listOfSkillsContent: JSX.Element[];
  selectSkillFromList: (curIdx: number) => void;
  onPreviewCurrentPathname: string;
  clipPathId: string;
  path?: string;

  hoverTitleWindow: string;
  hoverW: string;
  hoverH: string;
  centricLeft: string;
  centricW: number;
  centricContainerMargin: string;
  nLeftItemsToBeShown: number;
  nRightItemsToBeShown: number;
}

const defaultPath = "M3,5 L75,5 L75,25 L97,25 L97,97 C 97,25 97,97 3,97 Z";

const ContentViewerPatch4 = (props: ContentViewerPatch4Props) => {
  const { setCurrentPathname } = useContext(GeneralDataContext);
  const navigate = useNavigate();
  const [currentComponent] = useState<number>(props.startIdx);

  const selectPreviewedSkillHandler = () => {
    setCurrentPathname(props.onPreviewCurrentPathname);
    navigate(
      `/${replaceFirstCharWithLowerCase(props.onPreviewCurrentPathname)}`
    );
  };

  return (
    <div className={styles.container}>
      {/** Main Content */}
      <div className={styles.categoryTitleContainer}>
        <div className={styles.categoryTitle}>{props.categoryTitle}</div>
      </div>
      <div className={styles.titleContainer}>
        <div className={styles.title}>{props.title}</div>
      </div>
      <div className={styles.gradesContainer}>
        {Array.from(
          { length: props.grades.length },
          (_, i: number): number => i
        ).map((idx: number) => {
          return (
            <div key={idx} className={styles.gradeContainer}>
              <div className={styles.gradeContent}>
                <HoverComponentPatch1
                  contentWithoutHover={props.grades[idx].content}
                  contentWithHover={
                    <ListDetailsPatch1
                      listOfContents={[props.grades[idx].content]}
                      listOfDetails={[props.grades[idx].description]}
                      listOfTitles={[props.grades[idx].title]}
                      title={props.hoverTitleWindow}
                    />
                  }
                  hoverTop={"23px"}
                  hoverLeft={"13px"}
                  hoverRight={""}
                  hoverBottom={""}
                  hoverW={props.hoverW}
                  hoverH={props.hoverH}
                />
              </div>
              <div className={styles.gradeScore}>{props.grades[idx].score}</div>
            </div>
          );
        })}
      </div>
      <div className={styles.descriptionContainer}>
        <div className={styles.description}>{props.description}</div>
      </div>
      <div className={styles.linksContainer}>
        <div className={styles.links}>{props.links}</div>
      </div>
      <div
        className={styles.previewContainer}
        onClick={() => selectPreviewedSkillHandler()}
      >
        <CustomShape
          widthPercent={70}
          heightPercent={70}
          path={props.path ?? defaultPath}
          imageElement={
            <HoverComponent
              contentWithoutHover={
                <div className={styles.previewContent}>
                  {props.listOfSkillsContent[currentComponent]}
                </div>
              }
              contentWithHover={
                <CheckDetailsComponentTransformation
                  content={
                    <div className={styles.previewContent}>
                      {props.listOfSkillsContent[currentComponent]}
                    </div>
                  }
                  mode={1}
                />
              }
            />
          }
          strokeWidth={0.2}
          clipPathId={props.clipPathId}
        />
      </div>
      <div className={styles.listOfSkillsContainer}>
        <CircleCarouselPatch1
          components={props.listOfSkillsContent}
          startIdx={props.startIdx}
          centricW={props.centricW} // 200
          bottomPointerIcon={-51}
          leftW={200}
          rightW={200}
          containerW={60}
          leftH={"80px"}
          rightH={"-30px"}
          centricLeft={props.centricLeft} // 150
          rotatePointImg={2}
          centricComponentClickHandler={(idx: number) =>
            props.selectSkillFromList(idx)
          }
          leftColor={"#000000"}
          rightColor={"#000000"}
          centricColor={"#ffffff"}
          modeCentric={0}
          modeLeftorRight={0}
          nLeftItemsToBeShown={props.nLeftItemsToBeShown}
          nRightItemsToBeShown={props.nRightItemsToBeShown}
          centricContainerMargin={props.centricContainerMargin}
        />
      </div>
    </div>
  );
};

export default ContentViewerPatch4;
