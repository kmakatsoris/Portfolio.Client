import React, { useEffect, useState } from "react";
import styles from "./ProjectsPagePTwo.module.css";
import ContentViewerPatch4 from "../../modules/components/contentViewer/ContentViewerPatch4";
import nodeJsIcon from "../../images/icons/nodejsIcon.png";
import javascriptIcon from "../../images/icons/javascriptIcon.png";
import cSharpIcon from "../../images/icons/cSharpIcon.png";
import sqlIcon from "../../images/icons/sqlIcon.png";
import htmlContentSmallImg from "../../images/content/htmlContentSmall.png"; // @TODO: Fetch
import DefaultResponsivePageHandler from "../responsivePages/DefaultResponsivePageHandler";

interface ProjectsPagePTwoProps {}

const ProjectsPagePTwo = (props: ProjectsPagePTwoProps) => {
  const [grades, setGrades] = useState<GradeType[]>([]);
  const [currentComponent, setCurrentComponent] = useState<number>(0);

  useEffect(() => {
    if (grades.length === 0) {
      fetchGrades();
    }
  }, []);

  const fetchGrades = () => {
    const numberOfGrades = 4;
    const newGrades: GradeType[] = [];
    const titles: string[] = ["NodeJs", "C# and .NET 8", "Javascript", "SQL:"];
    const descrs: string[] = ["Desc1", "Desc2", "Desc3", "Desc4"];
    const contents = [
      <img src={nodeJsIcon} alt="NodeJS" className={styles.gradeContent} />,
      <img src={cSharpIcon} alt="C#" className={styles.gradeContent} />,
      <img
        src={javascriptIcon}
        alt="Javascript"
        className={styles.gradeContent}
      />,
      <img src={sqlIcon} alt="SQL" className={styles.gradeContent} />,
    ];
    const scores: string[] = ["100%", "100%", "100%", "100%"];

    for (let i: number = 0; i < numberOfGrades; i++) {
      newGrades.push({
        score: scores[i],
        title: titles[i],
        content: contents[i],
        description: descrs[i],
      });
    }

    // Set the new grades array
    setGrades(newGrades);
  };

  /* Handlers */
  const selectSkillFromListHandler = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <DefaultResponsivePageHandler
          extraSmall={[
            <ContentViewerPatch4
              grades={grades}
              description={"Description"}
              categoryTitle={"Category Title"}
              title={"Title"}
              links={"#Web-Development, #FrontEnd, ..."}
              listOfSkillsContent={[
                <img
                  src={htmlContentSmallImg}
                  alt="htmlContentSmallImg"
                  className={styles.htmlContentSmallImg0}
                />,
                <img
                  src={htmlContentSmallImg}
                  alt="htmlContentSmallImg"
                  className={styles.htmlContentSmallImg1}
                />,
                <img
                  src={htmlContentSmallImg}
                  alt="htmlContentSmallImg"
                  className={styles.htmlContentSmallImg2}
                />,
              ]}
              startIdx={0}
              selectSkillFromList={selectSkillFromListHandler}
              onPreviewCurrentPathname={"Home"}
              clipPathId={"projectsPageTwo"}
              path="M3,5 L100,5 L97,25 L99,25 L97,80 C 97,80 97,97 100,97 L3,97 C 30,30 3,30 3,30 Z"
              hoverTitleWindow="Explanation of Projects' Metrics Icons."
              hoverW={"468px"}
              hoverH={"138px"}
              centricLeft={"150px"}
              centricW={200}
              centricContainerMargin={"0px 0px 0px 0px"}
              nLeftItemsToBeShown={4}
              nRightItemsToBeShown={4}
            />,
            <ContentViewerPatch4
              grades={grades}
              description={"Description"}
              categoryTitle={"Category Title"}
              title={"Title"}
              links={"#Web-Development, #FrontEnd, ..."}
              listOfSkillsContent={[
                <img
                  src={htmlContentSmallImg}
                  alt="htmlContentSmallImg"
                  className={styles.htmlContentSmallImg0}
                />,
                <img
                  src={htmlContentSmallImg}
                  alt="htmlContentSmallImg"
                  className={styles.htmlContentSmallImg1}
                />,
                <img
                  src={htmlContentSmallImg}
                  alt="htmlContentSmallImg"
                  className={styles.htmlContentSmallImg2}
                />,
              ]}
              startIdx={0}
              selectSkillFromList={selectSkillFromListHandler}
              onPreviewCurrentPathname={"Home"}
              clipPathId={"projectsPageTwo"}
              path="M3,5 L100,5 L97,25 L99,25 L97,80 C 97,80 97,97 100,97 L3,97 C 30,30 3,30 3,30 Z"
              hoverTitleWindow="Explanation of Projects' Metrics Icons."
              hoverW={"468px"}
              hoverH={"138px"}
              centricLeft={"150px"}
              centricW={200}
              centricContainerMargin={"0px 0px 0px 0px"}
              nLeftItemsToBeShown={4}
              nRightItemsToBeShown={4}
            />,
          ]}
          extraLarge={[
            <ContentViewerPatch4
              grades={grades}
              description={"Description"}
              categoryTitle={"Category Title"}
              title={"Title"}
              links={"#Web-Development, #FrontEnd, ..."}
              listOfSkillsContent={[
                <img
                  src={htmlContentSmallImg}
                  alt="htmlContentSmallImg"
                  className={styles.htmlContentSmallImg0}
                />,
                <img
                  src={htmlContentSmallImg}
                  alt="htmlContentSmallImg"
                  className={styles.htmlContentSmallImg1}
                />,
                <img
                  src={htmlContentSmallImg}
                  alt="htmlContentSmallImg"
                  className={styles.htmlContentSmallImg2}
                />,
              ]}
              startIdx={0}
              selectSkillFromList={selectSkillFromListHandler}
              onPreviewCurrentPathname={"Home"}
              clipPathId={"projectsPageTwo"}
              path="M3,5 L100,5 L97,25 L99,25 L97,80 C 97,80 97,97 100,97 L3,97 C 30,30 3,30 3,30 Z"
              hoverTitleWindow="Explanation of Projects' Metrics Icons."
              hoverW={"468px"}
              hoverH={"138px"}
              centricLeft={"150px"}
              centricW={200}
              centricContainerMargin={"0px 0px 0px 0px"}
              nLeftItemsToBeShown={4}
              nRightItemsToBeShown={4}
            />,
            <ContentViewerPatch4
              grades={grades}
              description={"Description"}
              categoryTitle={"Category Title"}
              title={"Title"}
              links={"#Web-Development, #FrontEnd, ..."}
              listOfSkillsContent={[
                <img
                  src={htmlContentSmallImg}
                  alt="htmlContentSmallImg"
                  className={styles.htmlContentSmallImg0}
                />,
                <img
                  src={htmlContentSmallImg}
                  alt="htmlContentSmallImg"
                  className={styles.htmlContentSmallImg1}
                />,
                <img
                  src={htmlContentSmallImg}
                  alt="htmlContentSmallImg"
                  className={styles.htmlContentSmallImg2}
                />,
              ]}
              startIdx={0}
              selectSkillFromList={selectSkillFromListHandler}
              onPreviewCurrentPathname={"Home"}
              clipPathId={"projectsPageTwo"}
              path="M3,5 L100,5 L97,25 L99,25 L97,80 C 97,80 97,97 100,97 L3,97 C 30,30 3,30 3,30 Z"
              hoverTitleWindow="Explanation of Projects' Metrics Icons."
              hoverW={"468px"}
              hoverH={"138px"}
              centricLeft={"150px"}
              centricW={200}
              centricContainerMargin={"0px 0px 0px 0px"}
              nLeftItemsToBeShown={4}
              nRightItemsToBeShown={4}
            />,
          ]}
        />
      </div>
    </div>
  );
};

export default ProjectsPagePTwo;
