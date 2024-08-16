import React, { useEffect, useState } from "react";
import styles from "./SkillsPElevel.module.css";
import SkillsPDefault from "./SkillsPDefault";

import positive_icon from "../../images/icons/positive.png";
import passion_icon from "../../images/icons/passion.png";
import talking_icon from "../../images/icons/talking.png";
import travels_icon from "../../images/icons/travels.png";
import guitar_icon from "../../images/icons/guitar-icon.png";
import gym_icon from "../../images/icons/gym-icon.png";
import mathematics_icon from "../../images/icons/maths-icon.png";
import chess_icon from "../../images/icons/icons8-chess-64.png";

const TITLE: string = "Soft Skills";
const DESCRIPTION: string =
  "Work and business are essential and rewarding, but it’s equally important to balance them with leisure. Taking time to relax, engage in activities, and spend quality moments with friends and family is crucial for overall well-being and fulfillment.";
const CATEGORY_DESCRIPTION: string = "";
const LINKS: string = "#SoftSkills, #LeisureTime, #Reward";
const SCORES: string[][] = [
  ["90+%", ">10 Years", "90+%", "90+%", "90+%"], // Chess
  ["90+%", ">10 Years", "90+%", "90+%", "90+%"], // Maths
  ["90+%", ">10 Years", "90+%", "90+%", "90+%"], // Gym
  ["40%", "3 Years", "40%", "40%", "40%"], // Guitar
  ["90+%", ">5 Years", "90+%", "90+%", "90+%"], // Travels
  ["85%", ">10 Years", "85%", "85%", "85%"], // Talking
  ["100%", ">10 Years", "100%", "100%", "100%"], // Passion
  ["95%", ">10 Years", "95%", "95%", "95%"], // Positive
];
const LIST_OF_SKILLS_CONTENTS: JSX.Element[] = [
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
    src={guitar_icon}
    alt="guitar-Image"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    src={travels_icon}
    alt="travels-Image"
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

interface SkillsPElevelProps {}

const SkillsPElevel = (props: SkillsPElevelProps) => {
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

export default SkillsPElevel;
