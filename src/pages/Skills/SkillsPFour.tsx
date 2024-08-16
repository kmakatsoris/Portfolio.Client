import React, { useEffect, useState } from "react";
import styles from "./SkillsPFour.module.css";

import htmlContentSmallImg from "../../images/icons/html-icon.png";
import c_sharp_icon from "../../images/icons/icons8-c-sharp-480.png";
import dot_net_icon from "../../images/icons/dot-net-icon.png";
import my_sql_icon from "../../images/icons/icons8-mysql-480.png";
import mongo_db_icon from "../../images/icons/icons8-mongodb-120.png";
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
import oracleDB_icon from "../../images/icons/oracle-db-icon.png";
import postgreSQL_icon from "../../images/icons/icons8-postgresql-480.png";
import quality_tests_and_improvements_icon from "../../images/icons/quality-test-icon.png";
import performance_tests_and_improvements_icon from "../../images/icons/performance-test-improvements.png";
import design_patterns_and_system_architecture_icon from "../../images/icons/design-pattern-and-system-architercture.png";
import threads_icon from "../../images/icons/threads-icon.png";
import nodejs_icon from "../../images/icons/nodejs-icon.png";
import SkillsPDefault from "./SkillsPDefault";

const TITLE: string = "Web Development BackEnd";
const DESCRIPTION: string =
  "I am a full-stack developer with a strong preference for backend technologies. Here, you can explore some of the skills that highlight my strengths and focus as a backend developer.";
const CATEGORY_DESCRIPTION: string = "";
const LINKS: string = "#Web-Development, #BackEnd";
const SCORES: string[][] = [
  ["100%", "+5 Years", "100%", "100%", "100%"],
  ["100%", "2.5 Years", "100%", "100%", "100%"],
  ["80%", "1 Year", "80%", "80%", "80%"],
  ["80%", "+5 Years", "80%", "80%", "80%"], // MySQL
  ["70%", "1 Year", "70%", "70%", "70%"], // PostgreSQL
  ["70%", "1 Year", "70%", "70%", "70%"], // Oracle
  ["75%", "2 Years", "75%", "75%", "75%"], // MongoDB
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
  ["100%", "+5 Years", "100%", "100%", "100%"], // Threads
  ["85%", "2.5 Years", "85%", "85%", "85%"], // Design
  ["85%", "2.5 Years", "85%", "85%", "85%"], // Performance
  ["85%", "2.5 Years", "85%", "85%", "85%"], // Quality
];
const LIST_OF_SKILLS_CONTENTS: JSX.Element[] = [
  <img
    src={c_sharp_icon}
    alt="c#-Image"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    src={dot_net_icon}
    alt=".NET-Image"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    src={nodejs_icon}
    alt="NodeJS-Image"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    src={my_sql_icon}
    alt="MySQL-Image"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    src={postgreSQL_icon}
    alt="PostgreSQL-Image"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    src={oracleDB_icon}
    alt="Oracle-Image"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    src={mongo_db_icon}
    alt="MongoDB-Image"
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
    className={styles.htmlContentSmallImg0}
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
    src={threads_icon}
    alt="threads-Image"
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

interface SkillsPFourProps {}

const SkillsPFour = (props: SkillsPFourProps) => {
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

export default SkillsPFour;
