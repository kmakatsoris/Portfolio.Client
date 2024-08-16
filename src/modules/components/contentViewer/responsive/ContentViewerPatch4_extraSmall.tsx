import React, { useContext, useEffect, useState } from "react";
import styles from "./ContentViewerPatch4_extraSmall.module.css";
import CustomShape from "../../shapes/CustomShape";
import CircleCarouselPatch1 from "../../presentationViewer/CircleCarouselPatch1";
import HoverComponent from "../../showupViewer/HoverComponent";
import CheckDetailsComponentTransformation from "../.././showupViewer/CheckDetailsComponentTransformation";
import ListDetailsPatch1 from "../../detailsViewer/ListDetailsPatch1";
import { GeneralDataContext } from "../../../../services/DataProviders/GeneralDataProvider";
import { replaceFirstCharWithLowerCase } from "../../../../services/GeneralPurpose.Service";
import { useNavigate } from "react-router-dom";
import HoverComponentPatch1 from "../../showupViewer/HoverComponentPatch1";
import RenderListOfItems from "../../presentationViewer/RenderListOfItems";
import FloatingModule from "../../animations/FloatingModule";
import htmlContentSmallImg from "../../../../images/icons/html-icon.png";

interface ContentViewerPatch4_extraSmallProps {
  startIdx: number;
  grades: GradeType[];
  description: string;
  categoryTitle: string;
  title: string;
  links: string;
  listOfSkillsContent: JSX.Element[];
  selectSkillFromList: (selIdx: number) => void;
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

const ContentViewerPatch4_extraSmall = (
  props: ContentViewerPatch4_extraSmallProps
) => {
  const { setCurrentPathname } = useContext(GeneralDataContext);
  const navigate = useNavigate();
  const [currentComponent, setCurrentComponent] = useState<number>(
    props.startIdx
  );
  const [selectedComponent, setSelectedComponent] = useState<number>(
    props.startIdx
  );
  const [listOfSkillsContent, setListOfSkillsContent] = useState<JSX.Element[]>(
    []
  );

  useEffect(() => {
    const updatedSkillsContent = props.listOfSkillsContent.map(
      (s: JSX.Element) => {
        if (s.key === "HTML") {
          return (
            <img
              key={"HTML"}
              src={htmlContentSmallImg}
              alt="HTML-Image"
              className={styles.htmlContentSmallImg}
            />
          );
        }
        return s;
      }
    );

    setListOfSkillsContent(updatedSkillsContent);
  }, [props.listOfSkillsContent]);

  const selectPreviewedSkillHandler = () => {
    setCurrentPathname(props.onPreviewCurrentPathname);
    navigate(
      `/${replaceFirstCharWithLowerCase(props.onPreviewCurrentPathname)}`
    );
  };

  const selectSkillFromList = (selIdx: number) => {
    setSelectedComponent(selIdx);
    props.selectSkillFromList(selIdx);
  };

  return (
    <div className={styles.container}>
      {/** Introduction */}
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
                {props.grades[idx].content}
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

      {/** Custom Shape with Preview */}
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
                  {listOfSkillsContent[selectedComponent]}
                </div>
              }
              contentWithHover={
                <CheckDetailsComponentTransformation
                  content={
                    <div className={styles.previewContent}>
                      {listOfSkillsContent[selectedComponent]}
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

      {/** iteration of skills*/}
      <div className={styles.listOfSkillsContainer}>
        <FloatingModule
          item={
            <RenderListOfItems
              iterationMode={0}
              items={listOfSkillsContent}
              setMode={setCurrentComponent}
              selectedHandler={selectSkillFromList}
              initIdx={currentComponent}
              leftL="-10%"
              rightR="25%"
            />
          }
          moduleW={"30%"}
          moduleH={"50%"}
          floatingDistance={"-10px"}
          backgroundShadowColor={"rgba(0, 0, 0, 0)"}
          shadowLeft={"56%"}
          shadowW={"139%"}
        />
      </div>
    </div>
  );
};

export default ContentViewerPatch4_extraSmall;
