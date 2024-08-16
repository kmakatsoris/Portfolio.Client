import React, { useContext, useEffect, useState } from "react";
import styles from "./SkillsPOne_extraSmall.module.css";
import ButtonV1 from "../../../modules/components/buttons/ButtonV1";
import ButtonV2 from "../../../modules/components/buttons/ButtonV2";
import backgroundImg from "../../../images/content/emptySkillBackground.png";
import cSharpSkill from "../../../images/content/person_with_cSharpSkill.png";
import cPlusPlusSkill from "../../../images/content/person_with_cPlusPlusSkill.png";
import cSkill from "../../../images/content/person_with_cSkill.png";
import cssSkill from "../../../images/content/person_with_cssSkill.png";
import htmlSkill from "../../../images/content/person_with_htmlSkill.png";
import typescriptSkill from "../../../images/content/person_with_typescriptSkill.png";
import pythonSkill from "../../../images/content/person_with_pythonSkill.png";
import { GeneralDataContext } from "../../../services/DataProviders/GeneralDataProvider";
import FloatingModule from "../../../modules/components/animations/FloatingModule";
import ai_icon from "../../../images/icons/ai-icon.png";
import dot_net_icon from "../../../images/icons/dot-net-icon.png";
import react_icon from "../../../images/icons/react-icon.png";
import my_sql_icon from "../../../images/icons/icons8-mysql-480.png";
import mongo_db_icon from "../../../images/icons/icons8-mongodb-120.png";
import redis_icon from "../../../images/icons/icons8-redis-an-in-memory-data-structure-project-implementing-a-distributed-96.png";
import cms_icon from "../../../images/icons/cms-icon.png";
import azure_icon from "../../../images/icons/azure-icon.png";
import nginx_icon from "../../../images/icons/nginx-icon.png";
import docker_icon from "../../../images/icons/docker-icon.png";
import git_icon from "../../../images/icons/git-icon.png";
import figma_icon from "../../../images/icons/figma-icon.png";
import jira_icon from "../../../images/icons/jira-icon.png";
import java_icon from "../../../images/icons/icons8-java-64.png";
import bash_icon from "../../../images/icons/bash-icon.png";
import mathematics_icon from "../../../images/icons/maths-icon.png";
import chess_icon from "../../../images/icons/icons8-chess-64.png";
import quality_tests_and_improvements_icon from "../../../images/icons/quality-test-icon.png";
import performance_tests_and_improvements_icon from "../../../images/icons/performance-test-improvements.png";
import design_patterns_and_system_architecture_icon from "../../../images/icons/design-pattern-and-system-architercture.png";
import threads_icon from "../../../images/icons/threads-icon.png";
import react_native_icon from "../../../images/icons/react-native-icon.png";
import flutter_icon from "../../../images/icons/flutter-icon.png";
import wireshark_icon from "../../../images/icons/wireshark-icon.png";
import nodejs_icon from "../../../images/icons/nodejs-icon.png";

const LOADING_NEXT_SKILLS_DURATION = 10 * 1000; // 10 seconds
const skillsArray: LabelSkill[] = [
  {
    id: 0,
    title: "C#",
    description:
      "I have 2 years of professional experience in C#, but I have also dedicated an additional 4 years of personal study and projects. You can find more information about these endeavors on my Projects or Skills and Achievements page.",
    content: (
      <img
        src={cSharpSkill}
        alt="Background"
        className={styles.backgroundImg}
      />
    ),
  },
  {
    id: 1,
    title: ".NET Core 6,8,7 & .NET Framework",
    description:
      "I have 2 years of professional experience in .NET technologies, but I have also dedicated an additional 2 years of personal study and projects. You can find more information about these endeavors on my Projects or Skills and Achievements page.",
    content: (
      <img
        src={dot_net_icon}
        alt="Background"
        className={styles.backgroundImg1}
      />
    ),
  },
  {
    id: 2,
    title: "React 16-18v",
    description:
      "I have 2 years of professional experience in React, but I have also dedicated an additional 2 years of personal study and projects. You can find more information about these endeavors on my Projects or Skills and Achievements page.",
    content: (
      <img
        src={react_icon}
        alt="Background"
        className={styles.backgroundImg1}
      />
    ),
  },
  {
    id: 3,
    title: "MySQL, PostgreSQL, Oracle",
    description:
      "I have 2 years of professional experience in MySQL, PostgreSQL, Oracle but I have also dedicated an additional 4 years of personal study and projects in SQL related technologies and ORMs. You can find more information about these endeavors on my Projects or Skills and Achievements page.",
    content: (
      <img
        src={my_sql_icon}
        alt="Background"
        className={styles.backgroundImg1}
      />
    ),
  },
  {
    id: 4,
    title: "MongoDB",
    description:
      "I have 1 year of professional experience in MongoDB, but I have also dedicated an additional 1 year of personal study and projects in MongoDB related technologies and ORMs. You can find more information about these endeavors on my Projects or Skills and Achievements page.",
    content: (
      <img
        src={mongo_db_icon}
        alt="Background"
        className={styles.backgroundImg1}
      />
    ),
  },
  {
    id: 5,
    title: "Redis & Cache Mechanisms",
    description:
      "I have 2 years of professional experience in Cache Mechanisms, but I have also dedicated an additional 1 year of personal study and projects in Redis & Cache Mechanisms related technologies. You can find more information about these endeavors on my Projects or Skills and Achievements page.",
    content: (
      <img
        src={redis_icon}
        alt="Background"
        className={styles.backgroundImg1}
      />
    ),
  },
  {
    id: 6,
    title: "Typescript & Javascript",
    description:
      "I have 2 years of professional experience in Typescript and Javascript, but I have also dedicated an additional 1 year of personal study and projects. You can find more information about these endeavors on my Projects or Skills and Achievements page.",
    content: (
      <img
        src={typescriptSkill}
        alt="Background"
        className={styles.backgroundImg}
      />
    ),
  },
  {
    id: 7,
    title: "HTML",
    description:
      "I have 2 years of professional experience in HMTL, but I have also dedicated an additional 1 year of personal study and projects. You can find more information about these endeavors on my Projects or Skills and Achievements page.",
    content: (
      <img src={htmlSkill} alt="Background" className={styles.backgroundImg} />
    ),
  },
  {
    id: 8,
    title: "CSS",
    description:
      "I have 2 years of professional experience in CSS, but I have also dedicated an additional 1 year of personal study and projects. You can find more information about these endeavors on my Projects or Skills and Achievements page.",
    content: (
      <img src={cssSkill} alt="Background" className={styles.backgroundImg} />
    ),
  },
  {
    id: 9,
    title: "CMS: Drupal, Strapi",
    description: "I have 2 years of professional experience in CMS Mechanisms",
    content: (
      <img src={cms_icon} alt="Background" className={styles.backgroundImg1} />
    ),
  },
  {
    id: 10,
    title: "Azure",
    description:
      "I have 1 year of professional experience in Azure Technologies.",
    content: (
      <img
        src={azure_icon}
        alt="Background"
        className={styles.backgroundImg1}
      />
    ),
  },
  {
    id: 11,
    title: "Jira",
    description: "I have 1 year of professional experience in Jira.",
    content: (
      <img src={jira_icon} alt="Background" className={styles.backgroundImg1} />
    ),
  },
  {
    id: 12,
    title: "Figma",
    description: "I have 1 year of professional experience in Jira.",
    content: (
      <img
        src={figma_icon}
        alt="Background"
        className={styles.backgroundImg1}
      />
    ),
  },
  {
    id: 13,
    title: "Docker",
    description:
      "I have unprofessional 4 years of personal study and projects in Docker & Containerization related technologies. You can find more information about these endeavors on my Projects or Skills and Achievements page.",
    content: (
      <img
        src={docker_icon}
        alt="Background"
        className={styles.backgroundImg1}
      />
    ),
  },
  {
    id: 14,
    title: "Nginx & Servers",
    description:
      "I have 2 years of professional experience in Servers management, but I have also dedicated an additional 2 years of personal study and projects in Nginx, Load Balancers, Proxies and Server's related technologies. You can find more information about these endeavors on my Projects or Skills and Achievements page.",
    content: (
      <img
        src={nginx_icon}
        alt="Background"
        className={styles.backgroundImg1}
      />
    ),
  },
  {
    id: 15,
    title: "Linux, Bash, Bashscripts",
    description:
      "I have 5 years of unprofessional experience in Linux, Bash, Bashscripts.",
    content: (
      <img src={bash_icon} alt="Background" className={styles.backgroundImg1} />
    ),
  },
  {
    id: 16,
    title: "Git",
    description:
      "I have 2 years of professional experience in Git, but I have also dedicated an additional 4 years of personal study and projects involving git technology. You can find more information about these endeavors on my Projects or Skills and Achievements page.",
    content: (
      <img src={git_icon} alt="Background" className={styles.backgroundImg1} />
    ),
  },
  {
    id: 17,
    title: "Python",
    description:
      "I have 1 year of professional experience in Python, but I have also dedicated an additional 2 years of personal study and projects. You can find more information about these endeavors on my Projects or Skills and Achievements page.",
    content: (
      <img
        src={pythonSkill}
        alt="Background"
        className={styles.backgroundImg}
      />
    ),
  },
  {
    id: 18,
    title: "C++",
    description:
      "I have dedicated 3 years of personal study and projects. You can find more information about these endeavors on my Projects or Skills and Achievements page.",
    content: (
      <img
        src={cPlusPlusSkill}
        alt="Background"
        className={styles.backgroundImg}
      />
    ),
  },
  {
    id: 19,
    title: "C",
    description:
      "I have dedicated 4 years of personal study and projects. You can find more information about these endeavors on my Projects or Skills and Achievements page.",
    content: (
      <img src={cSkill} alt="Background" className={styles.backgroundImg} />
    ),
  },
  {
    id: 20,
    title: "Java",
    description:
      "I have dedicated 3 years of personal study and projects. You can find more information about these endeavors on my Projects or Skills and Achievements page.",
    content: (
      <img src={java_icon} alt="Background" className={styles.backgroundImg1} />
    ),
  },
  {
    id: 21,
    title: "AI & ML",
    description:
      "I have dedicated 2.5 years of personal study and projects. You can find more information about these endeavors on my Projects or Skills and Achievements page.",
    content: (
      <img src={ai_icon} alt="Background" className={styles.backgroundImg1} />
    ),
  },
  {
    id: 22,
    title: "Mathematics",
    description:
      "I have dedicated over 10 years of personal study and projects. You can find more information about these endeavors on my Projects or Skills and Achievements page.",
    content: (
      <img
        src={mathematics_icon}
        alt="Background"
        className={styles.backgroundImg1}
      />
    ),
  },
  {
    id: 23,
    title: "Chess",
    description:
      "I have dedicated over 10 years of personal study and projects. You can find more information about these endeavors on my Projects or Skills and Achievements page.",
    content: (
      <img
        src={chess_icon}
        alt="Background"
        className={styles.backgroundImg1}
      />
    ),
  },
  {
    id: 24,
    title: "Quality Assurance",
    description:
      "I have dedicated almost 2.5 years of personal study and projects. You can find more information about these endeavors on my Projects or Skills and Achievements page.",
    content: (
      <img
        src={quality_tests_and_improvements_icon}
        alt="Background"
        className={styles.backgroundImg1}
      />
    ),
  },
  {
    id: 25,
    title: "Performance Optimization & Benchmarks Tests",
    description:
      "I have dedicated 2.5 years of personal study and projects. You can find more information about these endeavors on my Projects or Skills and Achievements page.",
    content: (
      <img
        src={performance_tests_and_improvements_icon}
        alt="Background"
        className={styles.backgroundImg1}
      />
    ),
  },
  {
    id: 26,
    title: "Design Patterns and System Architectures",
    description:
      "I have dedicated just over 2 years of personal study and projects. You can find more information about these endeavors on my Projects or Skills and Achievements page.",
    content: (
      <img
        src={design_patterns_and_system_architecture_icon}
        alt="Background"
        className={styles.backgroundImg1}
      />
    ),
  },
  {
    id: 27,
    title: "Threads",
    description:
      "I have dedicated over 5 years of personal study and projects. You can find more information about these endeavors on my Projects or Skills and Achievements page.",
    content: (
      <img
        src={threads_icon}
        alt="Background"
        className={styles.backgroundImg1}
      />
    ),
  },
  {
    id: 28,
    title: "React Native",
    description:
      "I have dedicated less then 1 year of personal study and projects. You can find more information about these endeavors on my Projects or Skills and Achievements page.",
    content: (
      <img
        src={react_native_icon}
        alt="Background"
        className={styles.backgroundImg2}
      />
    ),
  },
  {
    id: 29,
    title: "Flutter",
    description:
      "I have dedicated less than 1 year of personal study and projects. You can find more information about these endeavors on my Projects or Skills and Achievements page.",
    content: (
      <img
        src={flutter_icon}
        alt="Background"
        className={styles.backgroundImg1}
      />
    ),
  },
  {
    id: 30,
    title: "NodeJS",
    description:
      "I have dedicated 1 year of personal study and projects. You can find more information about these endeavors on my Projects or Skills and Achievements page.",
    content: (
      <img
        src={nodejs_icon}
        alt="Background"
        className={styles.backgroundImg1}
      />
    ),
  },
  {
    id: 31,
    title: "Wireshark & system-network monitoring",
    description:
      "I have dedicated 1 year of personal study and projects. You can find more information about these endeavors on my Projects or Skills and Achievements page.",
    content: (
      <img
        src={wireshark_icon}
        alt="Background"
        className={styles.backgroundImg1}
      />
    ),
  },
];

const PREVIEW_ROWS = 3;
const PREVIEW_COLUMNS = 3;

interface SkillsPOne_extraSmallProps {
  insidePageRefs: React.RefObject<HTMLDivElement>[];
}

const SkillsPOne_extraSmall = (props: SkillsPOne_extraSmallProps) => {
  const [isNext, setIsNext] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsNext((prevState) => {
        if (skillsArray.length === 0) return 0;
        // console.log(prevState);
        if (
          prevState * PREVIEW_ROWS * PREVIEW_COLUMNS <
          skillsArray.length - PREVIEW_ROWS * PREVIEW_COLUMNS
        )
          return prevState + 1;
        return 0;
      });
    }, LOADING_NEXT_SKILLS_DURATION);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const scrollToRef = (ref: any) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const _renownedButtonHandler = () => {
    scrollToRef(props.insidePageRefs[1]);
  };

  const _commonLearningSourcesButtonHandler = () => {
    scrollToRef(props.insidePageRefs[12]);
  };

  const _renderSkill = (image: JSX.Element, title: string, text: string) => {
    const updatedImage = React.cloneElement(image, {
      className: styles.backgroundImgPreview,
    });

    return (
      <div className={styles.renderSkill_Container}>
        <div className={styles.renderSkill_LeftContainer}>
          <FloatingModule
            item={updatedImage}
            moduleW={"120px"}
            moduleH={"120px"}
            floatingDistance={"-10px"}
            backgroundShadowColor={"rgba(0, 0, 0, 0.5)"}
            shadowLeft={"55%"}
            shadowW={"139%"}
          />
        </div>
        <div className={styles.renderSkill_RightContainer}>
          <div className={styles.renderSkill_RightUpContainer}>{title}</div>
          <div className={styles.renderSkill_RightDownContainer}>{text}</div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.introductionContainer}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>Skills & Achievements</div>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.text}>
            At this page, you can find a curated showcase of my talents,
            capabilities, and notable milestones. Explore how my skills and
            achievements contribute to my professional journey and impact
            various domains.
          </div>
        </div>
        <div className={styles.btnsContainer}>
          <div className={styles.btn1Container}>
            <ButtonV1
              containerW={175}
              containerH={101}
              drawRule={"M 1 50 L 115 50 L 115 100 L 1 100 Z"}
              textContainerW={87}
              textContainerH={64}
              text={"Explore the most renowned!"}
              textContainerBackroundColor={"#ffffff"}
              textColor={"#000000"}
              btnHandler={_renownedButtonHandler}
            />
          </div>
          <div className={styles.btn2Container}>
            <ButtonV1
              containerW={175}
              containerH={101}
              drawRule={"M 1 50 L 115 50 L 115 100 L 1 100 Z"}
              textContainerW={87}
              textContainerH={64}
              text={"Explore my common sources of learning."}
              textContainerBackroundColor={"#ffffff"}
              textColor={"#000000"}
              btnHandler={_commonLearningSourcesButtonHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPOne_extraSmall;
