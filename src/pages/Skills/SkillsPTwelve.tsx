import React, { useEffect, useState } from "react";
import styles from "./SkillsPTwelve.module.css";
import SkillsPDefault from "./SkillsPDefault";

import quality_tests_and_improvements_icon from "../../images/icons/quality-test-icon.png";
import performance_tests_and_improvements_icon from "../../images/icons/performance-test-improvements.png";
import design_patterns_and_system_architecture_icon from "../../images/icons/design-pattern-and-system-architercture.png";
import golang_icon from "../../images/icons/golang-icon.png";
import k8_icon from "../../images/icons/kubernetes-icon.png";

const TITLE: string = "Currently Working On";
const DESCRIPTION: string =
  "Here are some of the skills I am currently learning and practicing. I am working on various projects to apply and integrate these skills with others, continually striving to enhance my expertise.";
const CATEGORY_DESCRIPTION: string = "";
const LINKS: string = "#AI, #ML";
const SCORES: string[][] = [
  ["85%", "2.5 Years", "85%", "85%", "85%"], // Design
  ["85%", "2.5 Years", "85%", "85%", "85%"], // Performance
  ["85%", "2.5 Years", "85%", "85%", "85%"], // Quality
  ["0%", "0 Years", "0%", "0%", "0%"], // Golang
  ["0%", "0 Years", "0%", "0%", "0%"], // K8
];
const LIST_OF_SKILLS_CONTENTS: JSX.Element[] = [
  <img
    src={design_patterns_and_system_architecture_icon}
    alt="design_patterns_and_system_architecture-Image"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    src={performance_tests_and_improvements_icon}
    alt="performance_tests_and_improvements-Image"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    src={quality_tests_and_improvements_icon}
    alt="quality_tests_and_improvements-Image"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    src={golang_icon}
    alt="Golang-Image"
    className={styles.htmlContentSmallImg1}
  />,
  <img src={k8_icon} alt="K8-Image" className={styles.htmlContentSmallImg1} />,
];

interface SkillsPTwelveProps {}

const SkillsPTwelve = (props: SkillsPTwelveProps) => {
  return (
    <div className={styles.container}>
      <SkillsPDefault
        TITLE={TITLE}
        DESCRIPTION={DESCRIPTION}
        CATEGORY_DESCRIPTION={CATEGORY_DESCRIPTION}
        LINKS={LINKS}
        SCORES={SCORES}
        LIST_OF_SKILLS_CONTENTS={LIST_OF_SKILLS_CONTENTS}
      />
    </div>
  );
};

export default SkillsPTwelve;
