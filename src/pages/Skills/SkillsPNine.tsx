import React, { useEffect, useState } from "react";
import styles from "./SkillsPNine.module.css";
import SkillsPDefault from "./SkillsPDefault";

import typescript_icon from "../../images/icons/icons8-typescript-96.png";
import nginx_icon from "../../images/icons/nginx-icon.png";
import docker_icon from "../../images/icons/docker-icon.png";
import cache_icon from "../../images/icons/cache-icon.png";
import bash_icon from "../../images/icons/bash-icon.png";
import quality_tests_and_improvements_icon from "../../images/icons/quality-test-icon.png";
import performance_tests_and_improvements_icon from "../../images/icons/performance-test-improvements.png";
import design_patterns_and_system_architecture_icon from "../../images/icons/design-pattern-and-system-architercture.png";
import threads_icon from "../../images/icons/threads-icon.png";

const TITLE: string = "Quality Assurance";
const DESCRIPTION: string =
  "Apart from essential programming and development skills, I firmly believe that Quality Assurance skills are crucial. When creating an application, it will inevitably require maintenance, upgrades, and fixes. To prevent undesirable conditions, it is essential to properly secure and test our systems to ensure reliability and stability.";
const CATEGORY_DESCRIPTION: string = "";
const LINKS: string =
  "#Essential, #Performance, #Reliability, #Stability, #Maintenance, #SIG";
const SCORES: string[][] = [
  ["85%", "2.5 Years", "85%", "85%", "85%"], // Design
  ["85%", "2.5 Years", "85%", "85%", "85%"], // Performance
  ["85%", "2.5 Years", "85%", "85%", "85%"], // Quality
  ["75%", "2 Years", "75%", "75%", "75%"], // Cache
  ["80%", "1.5 Years", "80%", "80%", "80%"], // Docker
  ["70%", "1 Year", "70%", "70%", "70%"], // Nginx
  ["100%", "+5 Years", "100%", "100%", "100%"], // Threads
  ["90+%", "5+ Years", "90+%", "90+%", "90+%"], // Bash
  ["100%", "2.5 Years", "100%", "100%", "100%"], // Typescript
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
    src={cache_icon}
    alt="Cache-Image"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    src={docker_icon}
    alt="Docker-Image"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    src={nginx_icon}
    alt="Nginx-Image"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    src={threads_icon}
    alt="threads-Image"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    src={bash_icon}
    alt="Linux/Bash-Image"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    src={typescript_icon}
    alt="Typescript & Javascript-Image"
    className={styles.htmlContentSmallImg1}
  />,
];

interface SkillsPNineProps {}

const SkillsPNine = (props: SkillsPNineProps) => {
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

export default SkillsPNine;
