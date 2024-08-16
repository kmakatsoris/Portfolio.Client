import React, { useEffect, useState } from "react";
import styles from "./SkillsPTwo.module.css";
import SkillsPDefault from "./SkillsPDefault";

import htmlContentSmallImg from "../../images/icons/html-icon.png";
import c_sharp_icon from "../../images/icons/icons8-c-sharp-480.png";
import dot_net_icon from "../../images/icons/dot-net-icon.png";
import react_icon from "../../images/icons/react-icon.png";
import my_sql_icon from "../../images/icons/icons8-mysql-480.png";
import mongo_db_icon from "../../images/icons/icons8-mongodb-120.png";
import redis_icon from "../../images/icons/icons8-redis-an-in-memory-data-structure-project-implementing-a-distributed-96.png";
import typescript_icon from "../../images/icons/icons8-typescript-96.png";
import css_icon from "../../images/icons/css-flaticon.png";
import nginx_icon from "../../images/icons/nginx-icon.png";
import docker_icon from "../../images/icons/docker-icon.png";
import git_icon from "../../images/icons/git-icon.png";
import cache_icon from "../../images/icons/cache-icon.png";
import linux_icon from "../../images/icons/linux-icon.png";
import java_icon from "../../images/icons/icons8-java-64.png";
import c_icon from "../../images/icons/c.png";
import c_plus_plus_icon from "../../images/icons/c-plus-plus-icon.png";
import python_icon from "../../images/icons/python-icon.png";
import bash_icon from "../../images/icons/bash-icon.png";
import javascript_icon from "../../images/icons/javascriptIcon.png";
import oracleDB_icon from "../../images/icons/oracle-db-icon.png";
import postgreSQL_icon from "../../images/icons/icons8-postgresql-480.png";
import positive_icon from "../../images/icons/positive.png";
import passion_icon from "../../images/icons/passion.png";
import talking_icon from "../../images/icons/talking.png";
import gym_icon from "../../images/icons/gym-icon.png";
import mathematics_icon from "../../images/icons/maths-icon.png";
import chess_icon from "../../images/icons/icons8-chess-64.png";
import threads_icon from "../../images/icons/threads-icon.png";

const TITLE: string = "Renowned Skills";
const DESCRIPTION: string =
  "Here, you will find a selection of skills that I have categorized as noteworthy. These skills represent areas where I have developed significant expertise and demonstrate my proficiency in various aspects of development.";
const CATEGORY_DESCRIPTION: string = "";
const LINKS: string = "#Renowned";
const SCORES: string[][] = [
  ["100%", "+5 Years", "100%", "100%", "100%"], // C#
  ["100%", "2.5 Years", "100%", "100%", "100%"], // .NET
  ["100%", "2.5 Years", "100%", "100%", "100%"], // React
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
  ["80%", "1.5 Years", "80%", "80%", "80%"], // Docker
  ["70%", "1 Year", "70%", "70%", "70%"], // Nginx
  ["90+%", "5+ Years", "90+%", "90+%", "90+%"], // Bash
  ["100%", "5+ Years", "100%", "100%", "100%"], // Linux
  ["100%", "+5 Years", "100%", "100%", "100%"], // Git
  ["100%", "+5 Years", "100%", "100%", "100%"], // Python
  ["85+%", "+3 Years", "85+%", "85+%", "85+%"], // C++
  ["80%", "+3 Years", "80%", "80%", "80%"], // Java
  ["100%", "+5 Years", "100%", "100%", "100%"], // Threads
  ["90+%", ">10 Years", "90+%", "90+%", "90+%"], // Chess
  ["90+%", ">10 Years", "90+%", "90+%", "90+%"], // Maths
  ["90+%", ">10 Years", "90+%", "90+%", "90+%"], // Gym
  ["85%", ">10 Years", "85%", "85%", "85%"], // Talking
  ["100%", ">10 Years", "100%", "100%", "100%"], // Passion
  ["95%", ">10 Years", "95%", "95%", "95%"], // Positive
  ["95%", ">10 Years", "95%", "95%", "95%"], // Positive
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
    src={react_icon}
    alt="React-Image"
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
    className={styles.htmlContentSmallImg2}
  />,
  <img
    src={css_icon}
    alt="CSS-Image"
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
    src={python_icon}
    alt="Python-Image"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    src={c_plus_plus_icon}
    alt="C++-Image"
    className={styles.htmlContentSmallImg1}
  />,
  <img src={c_icon} alt="C-Image" className={styles.htmlContentSmallImg1} />,
  <img
    src={java_icon}
    alt="Java-Image"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    src={threads_icon}
    alt="threads-Image"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    src={chess_icon}
    alt="chess-Image"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    src={mathematics_icon}
    alt="mathematics-Image"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    src={gym_icon}
    alt="gym-Image"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    src={talking_icon}
    alt="talking-Image"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    src={passion_icon}
    alt="passion-Image"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    src={positive_icon}
    alt="positive-Image"
    className={styles.htmlContentSmallImg1}
  />,
];

interface SkillsPTwoProps {}

const SkillsPTwo = (props: SkillsPTwoProps) => {
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

export default SkillsPTwo;
