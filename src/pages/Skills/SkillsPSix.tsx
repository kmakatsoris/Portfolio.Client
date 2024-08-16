import React, { useEffect, useState } from "react";
import styles from "./SkillsPSix.module.css";
import SkillsPDefault from "./SkillsPDefault";

import my_sql_icon from "../../images/icons/icons8-mysql-480.png";
import mongo_db_icon from "../../images/icons/icons8-mongodb-120.png";
import redis_icon from "../../images/icons/icons8-redis-an-in-memory-data-structure-project-implementing-a-distributed-96.png";
import azure_icon from "../../images/icons/azure-icon.png";
import nginx_icon from "../../images/icons/nginx-icon.png";
import docker_icon from "../../images/icons/docker-icon.png";
import git_icon from "../../images/icons/git-icon.png";
import cache_icon from "../../images/icons/cache-icon.png";
import linux_icon from "../../images/icons/linux-icon.png";
import bash_icon from "../../images/icons/bash-icon.png";
import oracleDB_icon from "../../images/icons/oracle-db-icon.png";
import postgreSQL_icon from "../../images/icons/icons8-postgresql-480.png";
import quality_tests_and_improvements_icon from "../../images/icons/quality-test-icon.png";
import performance_tests_and_improvements_icon from "../../images/icons/performance-test-improvements.png";
import design_patterns_and_system_architecture_icon from "../../images/icons/design-pattern-and-system-architercture.png";
import threads_icon from "../../images/icons/threads-icon.png";
import nmap_icon from "../../images/icons/nmap-icon.png";
import wireshark_icon from "../../images/icons/wireshark-icon.png";

const TITLE: string = "Web DevOps Development";
const DESCRIPTION: string =
  "I also have extensive knowledge and practical experience in DevOps. I strongly believe it is essential to understand and manage the entire infrastructure. This includes the ability to modify and upgrade existing systems, enhance performance, implement security measures, add audit mechanisms, validation middlewares/proxies,... Additionally, I am skilled in load balancing, caching strategies, infrastructure monitoring, and applying rules to ensure optimal operation. Overall, I am capable of managing all aspects of infrastructure efficiently.";
const CATEGORY_DESCRIPTION: string = "";
const LINKS: string = "#Web-Development, #DevOps, #Networking, #Monitoring";
const SCORES: string[][] = [
  ["80%", "+5 Years", "80%", "80%", "80%"], // MySQL
  ["70%", "1 Year", "70%", "70%", "70%"], // PostgreSQL
  ["70%", "1 Year", "70%", "70%", "70%"], // Oracle
  ["75%", "2 Years", "75%", "75%", "75%"], // MongoDB
  ["75%", "2 Years", "75%", "75%", "75%"], // Redis
  ["75%", "2 Years", "75%", "75%", "75%"], // Cache
  ["90%", "1.5 Years", "90%", "90%", "90%"], // Azure
  ["80%", "1.5 Years", "80%", "80%", "80%"], // Docker
  ["70%", "1 Year", "70%", "70%", "70%"], // Nginx
  ["90+%", "5+ Years", "90+%", "90+%", "90+%"], // Bash
  ["100%", "5+ Years", "100%", "100%", "100%"], // Linux
  ["100%", "+5 Years", "100%", "100%", "100%"], // Git
  ["70%", "1 Years", "70%", "70%", "70%"], // Wireshark
  ["70%", "1 Years", "70%", "70%", "70%"], // nmap
  ["100%", "+5 Years", "100%", "100%", "100%"], // Threads
  ["85%", "2.5 Years", "85%", "85%", "85%"], // Design
  ["85%", "2.5 Years", "85%", "85%", "85%"], // Performance
  ["85%", "2.5 Years", "85%", "85%", "85%"], // Quality
];
const LIST_OF_SKILLS_CONTENTS: JSX.Element[] = [
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
    src={azure_icon}
    alt="Azure-Image"
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
    src={bash_icon}
    alt="Linux/Bash-Image"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    src={linux_icon}
    alt="Linux/Bash-Image"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    src={git_icon}
    alt="Git-Image"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    src={wireshark_icon}
    alt="wireshark-Image"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    src={nmap_icon}
    alt="nmap-Image"
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

interface SkillsPSixProps {}

const SkillsPSix = (props: SkillsPSixProps) => {
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

export default SkillsPSix;
