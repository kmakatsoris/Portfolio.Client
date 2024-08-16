/*

Ten skills that can be valuable for a person or employee:

Communication Skills: The ability to effectively convey ideas, information, and instructions to others through verbal, written, and non-verbal means.

Collaboration Skills: Working effectively with others towards a common goal, including the ability to compromise, listen actively, and contribute positively to team dynamics.

Problem-Solving Skills: Identifying, analyzing, and solving problems in a creative and efficient manner, often by thinking critically and considering multiple perspectives.

Adaptability: The capacity to adjust to new situations, challenges, and environments, and to learn and grow from experiences.

Time Management: Efficiently allocating and prioritizing tasks, projects, and responsibilities to maximize productivity and meet deadlines.

Leadership Skills: Inspiring and guiding others to achieve their goals, fostering a positive work environment, and making effective decisions.

Emotional Intelligence: Understanding and managing one's own emotions as well as those of others, and using this awareness to navigate interpersonal relationships effectively.

Technical Skills: Proficiency in specific tools, software, or equipment relevant to one's field or industry, such as programming languages, design software, or machinery operation.

Critical Thinking: Evaluating information and arguments objectively, assessing their validity and relevance, and making well-informed decisions based on evidence and logic.

Continuous Learning: A commitment to acquiring new knowledge, skills, and competencies throughout one's career, staying up-to-date with industry trends and developments.
*/

import React, { useContext, useEffect, useState } from "react";
import styles from "./ContactPFive.module.css";
import RenderListOfReviews from "../../modules/components/presentationViewer/RenderListOfReviews";
import ReviewDefault from "../../modules/components/presentationViewer/ReviewDefault";
import addIcon from "../../images/icons/add1.png";
import { GeneralDataContext } from "../../services/DataProviders/GeneralDataProvider";

import communicationSkill from "../../images/icons/communicationSkill.png";
import collaborationSkill from "../../images/icons/collaborationSkill.png";
import problemSolvingSkill from "../../images/icons/problemSolvingSkill.png";
import adaptabilitySkill from "../../images/icons/adaptabilitySkill.png";
import timeManagementSkill from "../../images/icons/timeManagementSkill.png";
import leadershipSkill from "../../images/icons/leadershipSkill.png";
import emotionalIntelligence from "../../images/icons/emotionalIntelligence.png";
import technicalSkills from "../../images/icons/technicalSkills.png";
import criticalThinking from "../../images/icons/criticalThinking.png";
import continuousLearning from "../../images/icons/continuousLearning.png";
import AddReviewDefault from "../../modules/components/presentationViewer/AddReviewDefault";

interface ContactPFiveProps {}

const ContactPFive = (props: ContactPFiveProps) => {
  const {
    setCurrentPathname,
    setGlassModalInstance,
    setPrevGlassModalInstance,
  } = useContext(GeneralDataContext);
  const [grades, setGrades] = useState<GradeType[]>([]); // @TODO: Fetch
  const [listOfReviews, setListOfReviews] = useState<JSX.Element[]>([]);

  useEffect(() => {
    setCurrentPathname("Contact");
    if (grades.length === 0) {
      fetchGrades();
    }
  }, [grades.length, setCurrentPathname]);

  useEffect(() => {
    fetchListOfReviews();
  });

  const fetchListOfReviews = () => {
    if (grades.length > 0 && listOfReviews.length === 0) {
      const reviews = [
        <ReviewDefault reviewerName={"ΜΚ"} grades={grades} />,
        <ReviewDefault reviewerName={"ΧΜ"} grades={grades} />,
        <ReviewDefault reviewerName={"ΔΓ"} grades={grades} />,
        <ReviewDefault reviewerName={"ΓΚ"} grades={grades} />,
        <ReviewDefault reviewerName={"ΜΑ"} grades={grades} />,
        <ReviewDefault reviewerName={"ΚΠ"} grades={grades} />,
        <ReviewDefault reviewerName={"ΓΑ"} grades={grades} />,
        <ReviewDefault reviewerName={"ΑΒ"} grades={grades} />,
      ]; // @TODO: Fetch
      setListOfReviews(reviews);
    }
  };

  const fetchGrades = () => {
    const numberOfGrades = 10;
    const newGrades: GradeType[] = [];
    const titles: string[] = [
      "Communication Skills",
      "Collaboration Skills",
      "Problem-Solving Skills",
      "Adaptability Skills",
      "Time Management",
      "Leadership Skills",
      "Emotional Intelligence",
      "Technical Skills",
      "Critical Thinking",
      "Continuous Learning",
    ];
    const descrs: string[] = [
      "Descr1",
      "Descr2",
      "Descr3",
      "Descr4",
      "Descr5",
      "Descr6",
      "Descr7",
      "Descr8",
      "Descr9",
      "Descr10",
    ];
    const contents = [
      <img
        src={communicationSkill}
        alt="Communication Skills"
        className={styles.gradeContent}
      />,
      <img
        src={collaborationSkill}
        alt="Collaboration Skills"
        className={styles.gradeContent}
      />,
      <img
        src={problemSolvingSkill}
        alt="Problem-Solving Skills"
        className={styles.gradeContent}
      />,
      <img
        src={adaptabilitySkill}
        alt="Adaptability Skills"
        className={styles.gradeContent}
      />,
      <img
        src={timeManagementSkill}
        alt="Time Management"
        className={styles.gradeContent}
      />,
      <img
        src={leadershipSkill}
        alt="Leadership Skills"
        className={styles.gradeContent}
      />,
      <img
        src={emotionalIntelligence}
        alt="Emotional Intelligence"
        className={styles.gradeContent}
      />,
      <img
        src={technicalSkills}
        alt="Technical Skills"
        className={styles.gradeContent}
      />,
      <img
        src={criticalThinking}
        alt="Critical Thinking"
        className={styles.gradeContent}
      />,
      <img
        src={continuousLearning}
        alt="Continuous Learning"
        className={styles.gradeContent}
      />,
    ];
    const scores: string[] = [
      "100%",
      "100%",
      "100%",
      "100%",
      "100%",
      "100%",
      "100%",
      "100%",
      "100%",
      "100%",
    ];

    for (let i: number = 0; i < numberOfGrades; i++) {
      newGrades.push({
        score: scores[i],
        title: titles[i],
        content: contents[i],
        description: descrs[i],
      });
    }

    // Set the new grades array
    setGrades(newGrades);
  };

  const _handleClickOnAddButton = () => {
    setGlassModalInstance((prevState: GlassModalDataContract) => {
      setPrevGlassModalInstance(prevState);
      return {
        ...prevState,
        contentW: "60%",
        contentH: "60%",
        content: (
          <>
            <AddReviewDefault grades={grades} />
          </>
        ),
        isOpen: !prevState.isOpen,
      };
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.listOfReviewsContainer}>
        <RenderListOfReviews
          contents={listOfReviews}
          numberOfcontentsToPreview={3}
          startIdx={0}
          lastElement={
            <img
              src={addIcon}
              alt="Add Button"
              className={styles.addButton}
              onClick={() => {
                _handleClickOnAddButton();
              }}
            />
          }
          handleClickOnAddButton={_handleClickOnAddButton}
        />
      </div>
    </div>
  );
};

export default ContactPFive;
