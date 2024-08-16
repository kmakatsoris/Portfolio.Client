import React from "react";
import styles from "./RenderListOfMeanings.module.css";
import HoverComponentPatch1 from "../showupViewer/HoverComponentPatch1";
import ListDetailsPatch1 from "../detailsViewer/ListDetailsPatch1";

interface RenderListOfMeaningsProps {
  grades: GradeType[];
}

const RenderListOfMeanings = (props: RenderListOfMeaningsProps) => {
  return (
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
                    listOfDetails={["Details...."]}
                    listOfTitles={["Title"]}
                    title={"Explanation of Icon and Measurements."}
                  />
                }
                hoverTop={"23px"}
                hoverLeft={"13px"}
                hoverRight={""}
                hoverBottom={""}
                hoverW={"468px"}
                hoverH={"138px"}
              />
            </div>
            <div className={styles.gradeScore}>{props.grades[idx].score}</div>
          </div>
        );
      })}
    </div>
  );
};

export default RenderListOfMeanings;
