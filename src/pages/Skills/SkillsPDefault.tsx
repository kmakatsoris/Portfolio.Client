import React, { useEffect, useState } from "react";
import styles from "./SkillsPDefault.module.css";
import ContentViewerPatch4 from "../../modules/components/contentViewer/ContentViewerPatch4";
import knowledgeIcon from "../../images/icons/performance.png";
import yearsIcon from "../../images/icons/time1.png";
import problemSolvingIcon from "../../images/icons/problemSolving0.png";
import adaptabilityIcon from "../../images/icons/adaptation0.png";
import collaborationIcon from "../../images/icons/collaboration0.png";
import ContentViewerPatch4_extraSmall from "../../modules/components/contentViewer/responsive/ContentViewerPatch4_extraSmall";
import DefaultResponsivePageHandler from "../responsivePages/DefaultResponsivePageHandler";

/*
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
    src={wireshark_icon}
    alt="wireshark-Image"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    src={flutter_icon}
    alt="flutter-Image"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    src={react_native_icon}
    alt="react_native-Image"
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
  <img
    src={nodejs_icon}
    alt="NodeJS-Image"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    src={ai_icon}
    alt="AI-Image"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    src={ml_icon}
    alt="ML-Image"
    className={styles.htmlContentSmallImg1}
  />,
  <img
    src={golang_icon}
    alt="Golang-Image"
    className={styles.htmlContentSmallImg1}
  />,
  <img src={k8_icon} alt="K8-Image" className={styles.htmlContentSmallImg1} />,
  <img
    src={hackernoon_icon}
    alt="hackernoon_icon"
    className={styles.htmlContentSmallImg1}
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
    className={styles.htmlContentSmallImg1}
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
*/

/*
import ai_icon from "../../images/icons/ai-icon.png"
import ml_icon from "../../images/icons/ml-icon.png"
import htmlContentSmallImg from "../../images/icons/html-icon.png";
import c_sharp_icon from "../../images/icons/icons8-c-sharp-480.png";
import dot_net_icon from "../../images/icons/dot-net-icon.png";
import react_icon from "../../images/icons/react-icon.png";
import my_sql_icon from "../../images/icons/icons8-mysql-480.png";
import mongo_db_icon from "../../images/icons/icons8-mongodb-120.png";
import redis_icon from "../../images/icons/icons8-redis-an-in-memory-data-structure-project-implementing-a-distributed-96.png";
import typescript_icon from "../../images/icons/icons8-typescript-96.png";
import css_icon from "../../images/icons/css-flaticon.png";
import cms_icon from "../../images/icons/cms-icon.png";
import azure_icon from "../../images/icons/azure-icon.png";
import nginx_icon from "../../images/icons/nginx-icon.png";
import docker_icon from "../../images/icons/docker-icon.png";
import git_icon from "../../images/icons/git-icon.png";
import figma_icon from "../../images/icons/figma-icon.png";
import jira_icon from "../../images/icons/jira-icon.png";
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
import travels_icon from "../../images/icons/travels.png";
import guitar_icon from "../../images/icons/guitar-icon.png";
import gym_icon from "../../images/icons/gym-icon.png";
import mathematics_icon from "../../images/icons/maths-icon.png";
import chess_icon from "../../images/icons/icons8-chess-64.png";
import quality_tests_and_improvements_icon from "../../images/icons/quality-test-icon.png";
import performance_tests_and_improvements_icon from "../../images/icons/performance-test-improvements.png";
import design_patterns_and_system_architecture_icon from "../../images/icons/design-pattern-and-system-architercture.png";
import threads_icon from "../../images/icons/threads-icon.png";
import nmap_icon from "../../images/icons/nmap-icon.png";
import react_native_icon from "../../images/icons/react-native-icon.png";
import flutter_icon from "../../images/icons/flutter-icon.png";
import wireshark_icon from "../../images/icons/wireshark-icon.png";
import nodejs_icon from "../../images/icons/nodejs-icon.png";
import golang_icon from "../../images/icons/golang-icon.png";
import k8_icon from "../../images/icons/kubernetes-icon.png";
import hackernoon_icon from "../../images/icons/hackernoon-icon.png";
import medium_icon from "../../images/icons/medium-icon.png";
import devto_icon from "../../images/icons/devto-icon.png";
import csharp_icon from "../../images/icons/csharp-corner-icon.png";
import udemy_icon from "../../images/icons/udemy-icon.png";
import chatgpt_icon from "../../images/icons/chatgpt-icon.png";
import youtube_icon from "../../images/icons/youtube-icon.png";
import google_icon from "../../images/icons/google-icon.png";
import spotify_icon from "../../images/icons/spotify-icon.png";
*/

/*
const SCORES: string[][] = [
  ["100%", "+5 Years", "100%", "100%", "100%"], // c#
  ["100%", "2.5 Years", "100%", "100%", "100%"], // .NET
  ["80%", "1 Year", "80%", "80%", "80%"], // NodeJS
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
  ["0%", "0 Years", "0%", "0%", "0%"], // Golang
  ["0%", "0 Years", "0%", "0%", "0%"], // K8
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
*/

interface SkillsPDefaultProps {
  TITLE: string;
  DESCRIPTION: string;
  CATEGORY_DESCRIPTION: string;
  LINKS: string;
  SCORES: string[][];
  LIST_OF_SKILLS_CONTENTS: JSX.Element[];
}

const SkillsPDefault = (props: SkillsPDefaultProps) => {
  const [grades, setGrades] = useState<GradeType[]>([]);
  const [currentComponent, setCurrentComponent] = useState<number>(0);

  useEffect(() => {
    fetchGrades();
  }, [grades.length, currentComponent]);

  const fetchGrades = () => {
    const numberOfGrades = 5;
    const newGrades: GradeType[] = [];
    const titles: string[] = [
      "Knowledge Level",
      "Years of Experience",
      "Problem-Solving Ability",
      "Adaptability",
      "Collaboration Skills",
    ];
    const descrs: string[] = [
      "<40%: Novice - Limited or no experience with the skill.;40%-60%: Beginner - Basic understanding of concepts, with some practical experience.;60%-80%: Intermediate - Comfortable with the skill, able to work independently on most tasks.;80%-100%: Advanced - Strong proficiency in the skill, capable of solving complex problems and mentoring others.",
      "< 1 Year: New to the skill, with minimal practical experience.;1-3 years : Has gained some experience and familiarity with the skill over time.;3-5 years : Moderately experienced, with several years of practical usage.;5+ years: Highly experienced, with a long history of using the skill in various projects and contexts.",
      "<40%: Limited - Struggles to identify and solve problems effectively.;40%-60%: Competent - Can solve straightforward problems with some assistance.;Grade 3: Skilled - Proficient in problem-solving, able to tackle complex issues independently.;Grade 4: Expert - Excels in problem-solving, able to devise innovative solutions to challenging problems.",
      "<40%: Resistant to Change - Prefers sticking to familiar methods and technologies.;40%-60%: Accepts Change - Willing to try new approaches but may require some guidance.;Grade 3: Adaptable - Quickly adjusts to new technologies and methodologies.;Grade 4: Agile - Thrives in dynamic environments, adept at learning and applying new skills rapidly.",
      "<40%: Limited - Struggles to work effectively in team settings.;40%-60%: Cooperative - Able to collaborate with others but may require supervision.;Grade 3: Team Player - Works well in teams, communicates effectively, and contributes positively to group efforts.;Grade 4: Leader - Takes on leadership roles, fosters teamwork, and drives successful outcomes.",
    ];
    const contents = [
      <img
        src={knowledgeIcon}
        alt="Knowledge"
        className={styles.gradeContent}
      />,
      <img src={yearsIcon} alt="Years" className={styles.gradeContent} />,
      <img
        src={problemSolvingIcon}
        alt="ProblemSolving"
        className={styles.gradeContent}
      />,
      <img
        src={adaptabilityIcon}
        alt="Adaptability"
        className={styles.gradeContent}
      />,
      <img
        src={collaborationIcon}
        alt="Collaboration"
        className={styles.gradeContent}
      />,
    ];
    const scores: string[][] = props.SCORES;

    for (let j: number = 0; j < numberOfGrades; j++) {
      newGrades.push({
        score: scores[currentComponent][j],
        title: titles[j],
        content: contents[j],
        description: descrs[j],
      });
    }

    // Set the new grades array
    setGrades(newGrades);
  };

  /* Handlers */
  const selectSkillFromListHandler = (curIdx: number) => {
    setCurrentComponent(curIdx);
  };

  return (
    <div key={currentComponent} className={styles.container}>
      <DefaultResponsivePageHandler
        extraSmall={[
          <ContentViewerPatch4_extraSmall
            grades={grades}
            description={props.DESCRIPTION}
            categoryTitle={props.CATEGORY_DESCRIPTION}
            title={props.TITLE}
            links={props.LINKS}
            listOfSkillsContent={props.LIST_OF_SKILLS_CONTENTS}
            startIdx={currentComponent}
            selectSkillFromList={selectSkillFromListHandler}
            onPreviewCurrentPathname={"skills/details/:<skill-id>"} // @TODO
            clipPathId={"skillsPageTwo"}
            hoverTitleWindow="Explanation of Skills' Metrics Icons."
            hoverW={"900px"}
            hoverH={"400px"}
            centricLeft={"35px"}
            centricW={300}
            centricContainerMargin={"0px 360px 0px 360px"}
            nLeftItemsToBeShown={4}
            nRightItemsToBeShown={4}
          />,
          <ContentViewerPatch4_extraSmall
            grades={grades}
            description={props.DESCRIPTION}
            categoryTitle={props.CATEGORY_DESCRIPTION}
            title={props.TITLE}
            links={props.LINKS}
            listOfSkillsContent={props.LIST_OF_SKILLS_CONTENTS}
            startIdx={currentComponent}
            selectSkillFromList={selectSkillFromListHandler}
            onPreviewCurrentPathname={"skills/details/:<skill-id>"} // @TODO
            clipPathId={"skillsPageTwo"}
            hoverTitleWindow="Explanation of Skills' Metrics Icons."
            hoverW={"900px"}
            hoverH={"400px"}
            centricLeft={"35px"}
            centricW={300}
            centricContainerMargin={"0px 360px 0px 360px"}
            nLeftItemsToBeShown={4}
            nRightItemsToBeShown={4}
          />,
        ]}
        extraLarge={[
          <ContentViewerPatch4
            grades={grades}
            description={props.DESCRIPTION}
            categoryTitle={props.CATEGORY_DESCRIPTION}
            title={props.TITLE}
            links={props.LINKS}
            listOfSkillsContent={props.LIST_OF_SKILLS_CONTENTS}
            startIdx={currentComponent}
            selectSkillFromList={selectSkillFromListHandler}
            onPreviewCurrentPathname={"skills/details/:<skill-id>"} // @TODO
            clipPathId={"skillsPageTwo"}
            hoverTitleWindow="Explanation of Skills' Metrics Icons."
            hoverW={"900px"}
            hoverH={"400px"}
            centricLeft={"35px"}
            centricW={300}
            centricContainerMargin={"0px 360px 0px 360px"}
            nLeftItemsToBeShown={4}
            nRightItemsToBeShown={4}
          />,
          <ContentViewerPatch4
            grades={grades}
            description={props.DESCRIPTION}
            categoryTitle={props.CATEGORY_DESCRIPTION}
            title={props.TITLE}
            links={props.LINKS}
            listOfSkillsContent={props.LIST_OF_SKILLS_CONTENTS}
            startIdx={currentComponent}
            selectSkillFromList={selectSkillFromListHandler}
            onPreviewCurrentPathname={"skills/details/:<skill-id>"} // @TODO
            clipPathId={"skillsPageTwo"}
            hoverTitleWindow="Explanation of Skills' Metrics Icons."
            hoverW={"900px"}
            hoverH={"400px"}
            centricLeft={"35px"}
            centricW={300}
            centricContainerMargin={"0px 360px 0px 360px"}
            nLeftItemsToBeShown={4}
            nRightItemsToBeShown={4}
          />,
        ]}
      />
    </div>
  );
};

export default SkillsPDefault;
