import React, { useEffect, useState } from "react";
import styles from "./SkillsPThirteen.module.css";
import SkillsPDefault from "./SkillsPDefault";

import hackernoon_icon from "../../images/icons/hackernoon-icon.png";
import medium_icon from "../../images/icons/medium-icon.png";
import devto_icon from "../../images/icons/devto-icon.png";
import csharp_icon from "../../images/icons/csharp-corner-icon.png";
import udemy_icon from "../../images/icons/udemy-icon.png";
import chatgpt_icon from "../../images/icons/chatgpt-icon.png";
import youtube_icon from "../../images/icons/youtube-icon.png";
import google_icon from "../../images/icons/google-icon.png";
import spotify_icon from "../../images/icons/spotify-icon.png";

const TITLE: string = "Courses & Common Learning Resources";
const DESCRIPTION: string =
  "Here are some of my go-to sources for learning. These include a variety of educational platforms, online courses, tutorials, and reference materials that I regularly use to stay updated and deepen my understanding in different areas of programming and technology.";
const CATEGORY_DESCRIPTION: string = "";
const LINKS: string = "#Tutorials, #Learing, #Education";
const SCORES: string[][] = [
  ["90%", "+5 Years", "90%", "90%", "90%"], // Hackernoon
  ["100+%", ">10 Years", "100+%", "100+%", "100+%"], // Medium
  ["90%", "5 Years", "90%", "90%", "90%"], // Devto
  ["80%", "4 Years", "80%", "80%", "80%"], // csharpcorner
  ["100+%", "5 Years", "100+%", "100+%", "100+%"], // Udemy
  ["90%", "2 Years", "90%", "90%", "90%"], // Chatgpt
  ["90%", ">10 Years", "90%", "90%", "90%"], // Youtube
  ["90%", ">10 Years", "90%", "90%", "90%"], // Google
  ["85%", "1 Year", "85%", "85%", "85%"], // Spotify
];
const LIST_OF_SKILLS_CONTENTS: JSX.Element[] = [
  <img
    src={hackernoon_icon}
    alt="hackernoon_icon"
    className={styles.htmlContentSmallImg2}
  />,
  <img
    src={medium_icon}
    alt="medium_icon"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    src={devto_icon}
    alt="devto_icon"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    src={csharp_icon}
    alt="csharp_icon"
    className={styles.htmlContentSmallImg2}
  />,
  <img
    src={udemy_icon}
    alt="udemy_icon"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    src={chatgpt_icon}
    alt="chatgpt_icon"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    src={youtube_icon}
    alt="youtube_icon"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    src={google_icon}
    alt="google_icon"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    src={spotify_icon}
    alt="spotify_icon"
    className={styles.htmlContentSmallImg1}
  />,
];

interface SkillsPThirteenProps {}

const SkillsPThirteen = (props: SkillsPThirteenProps) => {
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

export default SkillsPThirteen;
