import React, { useContext, useState } from "react";
import styles from "./AddReviewDefault.module.css";
import ScrollingDefaultStateDivs from "./ScrollingDefaultStateDivs";
import SectionsDefaultInput from "../inputs/SectionsDefaultInput";

import communicationSkill from "../../../images/icons/communicationSkill.png";
import collaborationSkill from "../../../images/icons/collaborationSkill.png";
import problemSolvingSkill from "../../../images/icons/problemSolvingSkill.png";
import adaptabilitySkill from "../../../images/icons/adaptabilitySkill.png";
import timeManagementSkill from "../../../images/icons/timeManagementSkill.png";
import leadershipSkill from "../../../images/icons/leadershipSkill.png";
import emotionalIntelligence from "../../../images/icons/emotionalIntelligence.png";
import technicalSkills from "../../../images/icons/technicalSkills.png";
import criticalThinking from "../../../images/icons/criticalThinking.png";
import continuousLearning from "../../../images/icons/continuousLearning.png";
import HoverComponent from "../showupViewer/HoverComponent";
import { GeneralDataContext } from "../../../services/DataProviders/GeneralDataProvider";
import ReviewDefaultInput from "../inputs/ReviewDefaultInput";
import ContentViewerPatch2 from "../contentViewer/ContentViewerPatch2";
import DefaultForm from "../inputs/forms/DefaultForm";
import MetaDataViewerScheduler from "../detailsViewer/MetaDataViewerScheduler";
import backgroundImg from "../../../images/content/storySet3.jpg";
import { validateText } from "../../../services/GeneralPurpose.Service";

interface AddReviewDefaultProps {
  grades: GradeType[];
}

const REVIEW_FIELD_TITLE: { [key: string]: string } = {
  Characteristics: "",
  Highlight: "",
};

const REVIEW_FIELD_TITLE_NAMES: { [key: string]: string } = {
  Characteristics: "Characteristics:",
  Highlight: "Highlight:",
};

const REVIEW_FIELD_VALIDATIONS: {
  [key: string]: (value: string, errorMsg: string) => string;
} = {
  Characteristics: validateText,
  Highlight: validateText,
};

const AddReviewDefault = (props: AddReviewDefaultProps) => {
  const {
    setGlassModalInstance,
    setPrevGlassModalInstance,
    setMetaDataContentKey,
  } = useContext(GeneralDataContext);
  const [mode, setMode] = useState<number>(0);

  const _handlerGridCellOnClick = (title: string) => {
    setGlassModalInstance((prevState: GlassModalDataContract) => {
      setPrevGlassModalInstance(prevState);
      return {
        ...prevState,
        content: (
          <>
            <div className={styles.glass_container}>
              <div className={styles.glass_subContainer}>
                <ContentViewerPatch2
                  graphic={
                    <DefaultForm
                      key={`AddReviewDefault_DefaultForm`}
                      formTitle="Add Review!"
                      titleMargin={"3% 0px 0px 3.3%"}
                      submitMargin={"0px 0px 20px 3.3%"}
                      formMargin={"2% 0px 20px 3.3%"}
                      columnExpression={"100%"}
                      inputW={"60%"}
                      inputH={"38px"}
                      fieldTitles={REVIEW_FIELD_TITLE}
                      validationFunctions={REVIEW_FIELD_VALIDATIONS}
                      titleNames={REVIEW_FIELD_TITLE_NAMES}
                    />
                  }
                  content={
                    <MetaDataViewerScheduler
                      defaultComponent={
                        <div className={styles.backgroundImgContainer}>
                          <img
                            src={backgroundImg}
                            alt="Background Content"
                            className={styles.backgroundImg}
                          />
                        </div>
                      }
                      infoImgWidth={25}
                      animationMode={0}
                      onClickMetaDataViewerSchedulerSelectedIdHandler={() =>
                        console.log("Clikced!")
                      }
                      onClickInfoHandler={() => {
                        setMetaDataContentKey(
                          "addReviewDefault/backgroundImage"
                        );
                      }}
                      titleFontSize={"30px"}
                      textFontSize={"20px"}
                      titleContainerMarginBottom={"20px"}
                      lineHorizontalMarginBottom={"20px"}
                      leftActionWidth={"15px"}
                      rightActionWidth={"15px"}
                      enumerationTextFontSize={"18px"}
                    />
                  }
                  orientation={"row"}
                  animationModes={[0, 1]}
                  graphicContainerInlineStyle={{ margin: "0px 4% 0px 0px" }}
                />
              </div>
            </div>
          </>
        ),
        isOpen: true,
      };
    });
  };

  const _renderHoverSkillContainer = (
    skill: JSX.Element,
    description: string,
    boldSecription: string
  ) => {
    return (
      <div className={styles.skillContainer}>
        {skill}
        <div className={styles.skillDescriptionContainer}>
          <div className={styles.skillDescription}>{description}</div>
          <div className={styles.skillBoldDescription}>{boldSecription}</div>
        </div>
      </div>
    );
  };

  const _renderLeftContainer = () => {
    return (
      <div className={styles.leftContainer}>
        {/* containerLeft 1 */}
        <div className={styles.containerLeft1}>
          <div
            className={styles.gridContainerContentLeft1}
            onClick={() =>
              _handlerGridCellOnClick("COMMUNICATION SKILLS REVIEW")
            }
          >
            <HoverComponent
              contentWithoutHover={
                <div className={styles.gridContainerContent_onHover}>
                  {_renderHoverSkillContainer(
                    <img
                      src={communicationSkill}
                      alt="Communication-Skills-Icon"
                      className={styles.imageIcons_Left1_onHover}
                    />,
                    "What's your opinion about my ",
                    "COMMUNICATION SKILLS."
                  )}
                </div>
              }
              contentWithHover={
                <div className={styles.gridContainerContent_withoutHover}>
                  <img
                    src={communicationSkill}
                    alt="Communication-Skills-Icon"
                    className={styles.imageIcons_Left1_withoutHover}
                  />
                </div>
              }
            />
          </div>
        </div>

        {/* Container Left 2 [COLLABORATION]*/}
        <div className={styles.containerLeft2}>
          <div
            className={styles.gridContainerContentLeft2}
            onClick={() =>
              _handlerGridCellOnClick("COLLABORATION SKILLS REVIEW")
            }
          >
            <HoverComponent
              contentWithoutHover={
                <div className={styles.gridContainerContent_onHover}>
                  {_renderHoverSkillContainer(
                    <img
                      src={collaborationSkill}
                      alt="Collaboration-Skills-Icon"
                      className={styles.imageIcons_onHover}
                    />,
                    "What's your opinion about my ",
                    "COLLABORATION SKILLS."
                  )}
                </div>
              }
              contentWithHover={
                <div className={styles.gridContainerContent_withoutHover}>
                  <img
                    src={collaborationSkill}
                    alt="Collaboration-Skills-Icon"
                    className={styles.imageIcons_withoutHover}
                  />
                </div>
              }
            />
          </div>
        </div>

        {/** Container Left 3 [PROBLEM SOLVING]*/}
        <div className={styles.containerLeft3}>
          <div
            className={styles.gridContainerContentLeft3}
            onClick={() =>
              _handlerGridCellOnClick("PROBLEM SOLVING SKILLS REVIEW")
            }
          >
            <HoverComponent
              contentWithoutHover={
                <div className={styles.gridContainerContent_onHover}>
                  {_renderHoverSkillContainer(
                    <img
                      src={problemSolvingSkill}
                      alt="Problem-Solving-Skills-Icon"
                      className={styles.imageIcons_Left3_onHover}
                    />,
                    "What's your opinion about my ",
                    "PROBLEM SOLVING SKILLS."
                  )}
                </div>
              }
              contentWithHover={
                <div className={styles.gridContainerContent_withoutHover}>
                  <img
                    src={problemSolvingSkill}
                    alt="Problem-Solving-Skills-Icon"
                    className={styles.imageIcons_Left3_withoutHover}
                  />
                </div>
              }
            />
          </div>
        </div>

        {/** Container Left 4 [ADAPTABILITY]*/}
        <div className={styles.containerLeft4}>
          <div
            className={styles.gridContainerContentLeft4}
            onClick={() =>
              _handlerGridCellOnClick("ADAPTABILITY SKILLS REVIEW")
            }
          >
            <HoverComponent
              contentWithoutHover={
                <div className={styles.gridContainerContent_onHover}>
                  {_renderHoverSkillContainer(
                    <img
                      src={adaptabilitySkill}
                      alt="Adaptability-Skills-Icon"
                      className={styles.imageIcons_onHover}
                    />,
                    "What's your opinion about my ",
                    "ADAPTABILITY SKILLS."
                  )}
                </div>
              }
              contentWithHover={
                <div className={styles.gridContainerContent_withoutHover}>
                  <img
                    src={adaptabilitySkill}
                    alt="Adaptability-Skills-Icon"
                    className={styles.imageIcons_withoutHover}
                  />
                </div>
              }
            />
          </div>
        </div>

        {/** Container Left 5 TIME MANAGEMENT]*/}
        <div className={styles.containerLeft5}>
          <div
            className={styles.gridContainerContentLeft5}
            onClick={() =>
              _handlerGridCellOnClick("TIME MANAGEMENT SKILLS REVIEW")
            }
          >
            <HoverComponent
              contentWithoutHover={
                <div className={styles.gridContainerContent_onHover}>
                  {_renderHoverSkillContainer(
                    <img
                      src={timeManagementSkill}
                      alt="Time-Management-Skills-Icon"
                      className={styles.imageIcons_onHover}
                    />,
                    "What's your opinion about my ",
                    "TIME MANAGEMENT SKILLS."
                  )}
                </div>
              }
              contentWithHover={
                <div className={styles.gridContainerContent_withoutHover}>
                  <img
                    src={timeManagementSkill}
                    alt="Time-Management-Skills-Icon"
                    className={styles.imageIcons_withoutHover}
                  />
                </div>
              }
            />
          </div>
        </div>
      </div>
    );
  };

  const _renderRightContainer = () => {
    return (
      <div className={styles.rightContainer}>
        {/** Container Right 1 [LEADERSHIP]*/}
        <div className={styles.containerRight1}>
          <div
            className={styles.gridContainerContentRight1}
            onClick={() => _handlerGridCellOnClick("LEADERSHIP SKILLS REVIEW")}
          >
            <HoverComponent
              contentWithoutHover={
                <div className={styles.gridContainerContent_onHover}>
                  {_renderHoverSkillContainer(
                    <img
                      src={leadershipSkill}
                      alt="Leadership-Skills-Icon"
                      className={styles.imageIcons_onHover}
                    />,
                    "What's your opinion about my ",
                    "LEADERSHIP SKILLS."
                  )}
                </div>
              }
              contentWithHover={
                <div className={styles.gridContainerContent_withoutHover}>
                  <img
                    src={leadershipSkill}
                    alt="Leadership-Skills-Icon"
                    className={styles.imageIcons_withoutHover}
                  />
                </div>
              }
            />
          </div>
        </div>

        {/** Container Right 2 [EMOTIONAL INTELLIGENCE]*/}
        <div className={styles.containerRight2}>
          <div
            className={styles.gridContainerContentRight2}
            onClick={() =>
              _handlerGridCellOnClick("EMOTIONAL INTELLIGENCE SKILLS REVIEW")
            }
          >
            <HoverComponent
              contentWithoutHover={
                <div className={styles.gridContainerContent_onHover}>
                  {_renderHoverSkillContainer(
                    <img
                      src={emotionalIntelligence}
                      alt="Emotional-Intelligence-Skills-Icon"
                      className={styles.imageIcons_onHover}
                    />,
                    "What's your opinion about my ",
                    "EMOTIONAL INTELLIGENCE SKILLS."
                  )}
                </div>
              }
              contentWithHover={
                <div className={styles.gridContainerContent_withoutHover}>
                  <img
                    src={emotionalIntelligence}
                    alt="Emotional-Intelligence-Skills-Icon"
                    className={styles.imageIcons_withoutHover}
                  />
                </div>
              }
            />
          </div>
        </div>

        {/** Container Right 3 [TECHNICAL]*/}
        <div className={styles.containerRight3}>
          <div
            className={styles.gridContainerContentRight3}
            onClick={() => _handlerGridCellOnClick("TECHNICAL SKILLS REVIEW")}
          >
            <HoverComponent
              contentWithoutHover={
                <div className={styles.gridContainerContent_onHover}>
                  {_renderHoverSkillContainer(
                    <img
                      src={technicalSkills}
                      alt="Technical-Skills-Icon"
                      className={styles.imageIcons_onHover}
                    />,
                    "What's your opinion about my ",
                    "TECHNICAL SKILLS."
                  )}
                </div>
              }
              contentWithHover={
                <div className={styles.gridContainerContent_withoutHover}>
                  <img
                    src={technicalSkills}
                    alt="Technical-Skills-Icon"
                    className={styles.imageIcons_withoutHover}
                  />
                </div>
              }
            />
          </div>
        </div>

        {/** Container Right 4 */}
        <div className={styles.containerRight4}>
          <div
            className={styles.gridContainerContentRight4}
            onClick={() =>
              _handlerGridCellOnClick("CRITICAL THINKING SKILLS REVIEW")
            }
          >
            <HoverComponent
              contentWithoutHover={
                <div className={styles.gridContainerContent_onHover}>
                  {_renderHoverSkillContainer(
                    <img
                      src={criticalThinking}
                      alt="Critical-Thinking-Skills-Icon"
                      className={styles.imageIcons_onHover}
                    />,
                    "What's your opinion about my ",
                    "CRITICAL THINKING SKILLS."
                  )}
                </div>
              }
              contentWithHover={
                <div className={styles.gridContainerContent_withoutHover}>
                  <img
                    src={criticalThinking}
                    alt="Critical-Thinking-Skills-Icon"
                    className={styles.imageIcons_withoutHover}
                  />
                </div>
              }
            />
          </div>
        </div>

        {/** Container Right 5 [CONTINUOUS LEARING]*/}
        <div className={styles.containerRight5}>
          <div
            className={styles.gridContainerContentRight5}
            onClick={() =>
              _handlerGridCellOnClick("CONTINUOUS LEARING SKILLS REVIEW")
            }
          >
            <HoverComponent
              contentWithoutHover={
                <div className={styles.gridContainerContent_onHover}>
                  {_renderHoverSkillContainer(
                    <img
                      src={continuousLearning}
                      alt="Continuous-Learning-Skills-Icon"
                      className={styles.imageIcons_onHover}
                    />,
                    "What's your opinion about my ",
                    "CONTINUOUS LEARNING SKILLS."
                  )}
                </div>
              }
              contentWithHover={
                <div className={styles.gridContainerContent_withoutHover}>
                  <img
                    src={continuousLearning}
                    alt="Continuous-Learning-Skills-Icon"
                    className={styles.imageIcons_withoutHover}
                  />
                </div>
              }
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <ScrollingDefaultStateDivs
          items={[_renderLeftContainer(), _renderRightContainer()]}
          numberOfScrolls={1}
          scrollingIconIndicatorTop={""}
          scrollingIconIndicatorLeft={""}
          setMode={setMode}
        />
      </div>
    </div>
  );
};

export default AddReviewDefault;
