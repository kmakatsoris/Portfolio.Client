import React, { useEffect, useState } from "react";
import styles from "./SkillsPSeven.module.css";
import SkillsPDefault from "./SkillsPDefault";

import react_native_icon from "../../images/icons/react-native-icon.png";
import flutter_icon from "../../images/icons/flutter-icon.png";

const TITLE: string = "Mobile Development";
const DESCRIPTION: string =
  "I have engaged in mobile development projects as a hobby, creating apps that I would like to use or experiment with. I've learned the fundamental development concepts such as widgets and life cycles,.. but I have not yet worked on anything professionally or on a large project. However, I find it really interesting to learn how to build something from scratch, explore the challenges of developing widgets and modules, and understand how mobile infrastructure connects with the rest of the implementation.";
const CATEGORY_DESCRIPTION: string = "";
const LINKS: string = "#MobileDevelopment";
const SCORES: string[][] = [
  ["40%", "<1 Year", "40%", "40%", "40%"], // Flutter
  ["40%", "<1 Year", "40%", "40%", "40%"], // React Native
];
const LIST_OF_SKILLS_CONTENTS: JSX.Element[] = [
  <img
    src={flutter_icon}
    alt="flutter-Image"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    src={react_native_icon}
    alt="react_native-Image"
    className={styles.htmlContentSmallImg2}
  />,
];

interface SkillsPSevenProps {}

const SkillsPSeven = (props: SkillsPSevenProps) => {
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

export default SkillsPSeven;
