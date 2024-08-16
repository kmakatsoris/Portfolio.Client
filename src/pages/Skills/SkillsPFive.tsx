import React, { useEffect, useState } from "react";
import styles from "./SkillsPFive.module.css";
import SkillsPDefault from "./SkillsPDefault";

import htmlContentSmallImg from "../../images/icons/html-icon.png";
import react_icon from "../../images/icons/react-icon.png";
import redis_icon from "../../images/icons/icons8-redis-an-in-memory-data-structure-project-implementing-a-distributed-96.png";
import typescript_icon from "../../images/icons/icons8-typescript-96.png";
import css_icon from "../../images/icons/css-flaticon.png";
import cms_icon from "../../images/icons/cms-icon.png";
import azure_icon from "../../images/icons/azure-icon.png";
import git_icon from "../../images/icons/git-icon.png";
import figma_icon from "../../images/icons/figma-icon.png";
import jira_icon from "../../images/icons/jira-icon.png";
import cache_icon from "../../images/icons/cache-icon.png";
import javascript_icon from "../../images/icons/javascriptIcon.png";
import quality_tests_and_improvements_icon from "../../images/icons/quality-test-icon.png";
import performance_tests_and_improvements_icon from "../../images/icons/performance-test-improvements.png";
import design_patterns_and_system_architecture_icon from "../../images/icons/design-pattern-and-system-architercture.png";

const TITLE: string = "Web FrontEnd Development";
const DESCRIPTION: string =
  "I am a full-stack developer with a strong preference for backend technologies. However, I also have extensive knowledge and practical experience in frontend development. I find it essential to engage in creative tasks and understand the entire infrastructure. Here, you can explore some of the skills that highlight my strengths and focus as a frontend developer.";
const CATEGORY_DESCRIPTION: string = "";
const LINKS: string = "#Web-Development, #FrontEnd";
const SCORES: string[][] = [
  ["100%", "2.5 Years", "100%", "100%", "100%"], // React
  ["75%", "2 Years", "75%", "75%", "75%"], // Redis
  ["75%", "2 Years", "75%", "75%", "75%"], // Cache
  ["100%", "2.5 Years", "100%", "100%", "100%"], // Typescript
  ["100%", "2.5 Years", "100%", "100%", "100%"], // javascript
  ["100%", "2.5 Years", "100%", "100%", "100%"], // Html
  ["100%", "2.5 Years", "100%", "100%", "100%"], // CSS
  ["90%", "2.5 Years", "90%", "90%", "90%"], // CMS
  ["90%", "1.5 Years", "90%", "90%", "90%"], // Azure
  ["90%", "1.5 Years", "90%", "90%", "90%"], // Jira
  ["80%", "2 Years", "80%", "80%", "80%"], // Figma
  ["100%", "+5 Years", "100%", "100%", "100%"], // Git
  ["85%", "2.5 Years", "85%", "85%", "85%"], // Design
  ["85%", "2.5 Years", "85%", "85%", "85%"], // Performance
  ["85%", "2.5 Years", "85%", "85%", "85%"], // Quality
];
const LIST_OF_SKILLS_CONTENTS: JSX.Element[] = [
  <img
    src={react_icon}
    alt="React-Image"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    src={redis_icon}
    alt="Redis-Image"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    src={cache_icon}
    alt="Cache-Image"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    src={typescript_icon}
    alt="Typescript & Javascript-Image"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    src={javascript_icon}
    alt="Javascript-Image"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    key={"HTML"}
    src={htmlContentSmallImg}
    alt="HTML-Image"
    className={styles.htmlContentSmallImg2}
  />,
  <img
    src={css_icon}
    alt="CSS-Image"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    src={cms_icon}
    alt="CMS-Image"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    src={azure_icon}
    alt="Azure-Image"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    src={jira_icon}
    alt="Jira-Image"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    src={figma_icon}
    alt="Figma-Image"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    src={git_icon}
    alt="Git-Image"
    className={styles.htmlContentSmallImg1}
  />,
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
];

interface SkillsPFiveProps {}

const SkillsPFive = (props: SkillsPFiveProps) => {
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

export default SkillsPFive;
