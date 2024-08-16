import React, { useEffect, useState } from "react";
import styles from "./SkillsPTen.module.css";
import SkillsPDefault from "./SkillsPDefault";

import git_icon from "../../images/icons/git-icon.png";
import linux_icon from "../../images/icons/linux-icon.png";
import python_icon from "../../images/icons/python-icon.png";
import bash_icon from "../../images/icons/bash-icon.png";
import mathematics_icon from "../../images/icons/maths-icon.png";
import threads_icon from "../../images/icons/threads-icon.png";
import ai_icon from "../../images/icons/ai-icon.png";
import ml_icon from "../../images/icons/ml-icon.png";

const TITLE: string = "AI & ML";
const DESCRIPTION: string =
  "My passion for programming began with a deep interest in AI and ML algorithms, including complex mathematics, clustering, reinforcement learning, neural networks, deep learning, filters, agents, game theory, and other related concepts. My thesis focused on AI and ML, specifically involving the deployment of N UAVs (agents) to divide an area into N equal parts and search for litter within these regions. Each drone communicated with the others, assessing its own actions and those of the other agents to determine whether it was worthwhile to assist and with what priority. Each drone was equipped with three different neural network models (YOLO, Faster R-CNN, SSD) to identify rubbish. The project also involved concepts such as labeling, training, generative adversarial networks (GANs), and an additional custom method for dataset creation, filtering, and cleaning. I implemented and debugging all of these components myself.";
const CATEGORY_DESCRIPTION: string = "";
const LINKS: string = "#AI, #ML";
const SCORES: string[][] = [
  ["80%", "2.5 Years", "80%", "80%", "80%"], // AI
  ["80%", "2.5 Years", "80%", "80%", "80%"], // ML
  ["100%", "+5 Years", "100%", "100%", "100%"], // Git
  ["100%", "+5 Years", "100%", "100%", "100%"], // Python
  ["100%", "+5 Years", "100%", "100%", "100%"], // Threads
  ["90+%", ">10 Years", "90+%", "90+%", "90+%"], // Maths
];
const LIST_OF_SKILLS_CONTENTS: JSX.Element[] = [
  <img src={ai_icon} alt="AI-Image" className={styles.htmlContentSmallImg1} />,
  <img src={ml_icon} alt="ML-Image" className={styles.htmlContentSmallImg1} />,
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
    src={mathematics_icon}
    alt="mathematics-Image"
    className={styles.htmlContentSmallImg1}
  />,
];

interface SkillsPTenProps {}

const SkillsPTen = (props: SkillsPTenProps) => {
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

export default SkillsPTen;
