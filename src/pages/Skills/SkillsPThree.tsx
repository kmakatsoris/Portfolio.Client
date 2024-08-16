import React, { useEffect, useState } from "react";
import styles from "./SkillsPThree.module.css";
import SkillsPDefault from "./SkillsPDefault";

import htmlContentSmallImg from "../../images/icons/html-icon.png";
import c_sharp_icon from "../../images/icons/icons8-c-sharp-480.png";
import dot_net_icon from "../../images/icons/dot-net-icon.png";
import react_icon from "../../images/icons/react-icon.png";
import typescript_icon from "../../images/icons/icons8-typescript-96.png";
import css_icon from "../../images/icons/css-flaticon.png";
import docker_icon from "../../images/icons/docker-icon.png";
import git_icon from "../../images/icons/git-icon.png";
import linux_icon from "../../images/icons/linux-icon.png";
import python_icon from "../../images/icons/python-icon.png";
import bash_icon from "../../images/icons/bash-icon.png";
import javascript_icon from "../../images/icons/javascriptIcon.png";
import positive_icon from "../../images/icons/positive.png";
import passion_icon from "../../images/icons/passion.png";
import talking_icon from "../../images/icons/talking.png";
import gym_icon from "../../images/icons/gym-icon.png";
import mathematics_icon from "../../images/icons/maths-icon.png";
import chess_icon from "../../images/icons/icons8-chess-64.png";
import threads_icon from "../../images/icons/threads-icon.png";

const TITLE: string = "Strongest Skills";
const DESCRIPTION: string =
  "Here, you will find a collection of my strongest skills, showcasing the areas where I have developed substantial expertise. These skills highlight my proficiency and commitment to delivering high-quality work across various aspects of development.";
const CATEGORY_DESCRIPTION: string = "";
const LINKS: string = "#Strongest";
const SCORES: string[][] = [
  ["100%", "+5 Years", "100%", "100%", "100%"], // C#
  ["100%", "2.5 Years", "100%", "100%", "100%"], // .NET
  ["100%", "2.5 Years", "100%", "100%", "100%"], // React
  ["100%", "2.5 Years", "100%", "100%", "100%"], // Typescript
  ["100%", "2.5 Years", "100%", "100%", "100%"], // javascript
  ["100%", "2.5 Years", "100%", "100%", "100%"], // Html
  ["100%", "2.5 Years", "100%", "100%", "100%"], // CSS
  ["80%", "1.5 Years", "80%", "80%", "80%"], // Docker
  ["90+%", "5+ Years", "90+%", "90+%", "90+%"], // Bash
  ["100%", "5+ Years", "100%", "100%", "100%"], // Linux
  ["100%", "+5 Years", "100%", "100%", "100%"], // Git
  ["100%", "+5 Years", "100%", "100%", "100%"], // Python
  ["100%", "+5 Years", "100%", "100%", "100%"], // Threads
  ["90+%", ">10 Years", "90+%", "90+%", "90+%"], // Chess
  ["90+%", ">10 Years", "90+%", "90+%", "90+%"], // Maths
  ["90+%", ">10 Years", "90+%", "90+%", "90+%"], // Gym
  ["85%", ">10 Years", "85%", "85%", "85%"], // Talking
  ["100%", ">10 Years", "100%", "100%", "100%"], // Passion
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
    className={styles.htmlContentSmallImg1}
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

interface SkillsPThreeProps {}

const SkillsPThree = (props: SkillsPThreeProps) => {
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

export default SkillsPThree;
