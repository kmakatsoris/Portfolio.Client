import React, { useContext, useState } from "react";
import styles from "./BioPTwoV1_extraSmall.module.css";
import FloatingModule from "../../../modules/components/animations/FloatingModule";
import { GeneralDataContext } from "../../../services/DataProviders/GeneralDataProvider";
import puzzlePiece1 from "../../../images/content/Puzzle_Piece_1_893_605.png";
import puzzlePiece2 from "../../../images/content/Puzzle_Piece_2_579_668.png";
import puzzlePiece3 from "../../../images/content/Puzzle_Piece_3_923_492.png";
import puzzlePiece4 from "../../../images/content/Puzzle_Piece_4_568_659.png";
import puzzlePiece5 from "../../../images/content/Puzzle_Piece_5_568_824.png";
import puzzlePiece6 from "../../../images/content/Puzzle_Piece_6_929_512.png";
import puzzlePiece7 from "../../../images/content/Puzzle_Piece_7_582_820.png";
import puzzlePiece8 from "../../../images/content/Puzzle_Piece_8_758_533.png";
import puzzlePiece9 from "../../../images/content/Puzzle_Piece_9_721_486.png";
import puzzlePiece10 from "../../../images/content/Puzzle_Piece_10_555_650.png";
import puzzlePiece11 from "../../../images/content/Puzzle_Piece_11_911_537.png";
import puzzlePiece12 from "../../../images/content/Puzzle_Piece_12_583_657.png";
import RenderListOfItems from "../../../modules/components/presentationViewer/RenderListOfItems";

const pieces: JSX.Element[] = [
  <FloatingModule
    item={
      <img
        src={puzzlePiece1}
        alt="Puzzle Piece"
        className={styles.puzzlePiece1LeftContainer}
      />
    }
    moduleW={"30%"}
    moduleH={"50%"}
    floatingDistance={"-10px"}
    backgroundShadowColor={"rgba(0, 0, 0, 0)"}
    shadowLeft={"56%"}
    shadowW={"139%"}
  />,
  <FloatingModule
    item={
      <img
        src={puzzlePiece2}
        alt="Puzzle Piece"
        className={styles.puzzlePiece2LeftContainer}
      />
    }
    moduleW={"30%"}
    moduleH={"20%"}
    floatingDistance={"-10px"}
    backgroundShadowColor={"rgba(0, 0, 0, 0)"}
    shadowLeft={"77%"}
    shadowW={"139%"}
  />,
  <FloatingModule
    item={
      <img
        src={puzzlePiece3}
        alt="Puzzle Piece"
        className={styles.puzzlePiece3LeftContainer}
      />
    }
    moduleW={"30%"}
    moduleH={"20%"}
    floatingDistance={"-10px"}
    backgroundShadowColor={"rgba(0, 0, 0, 0)"}
    shadowLeft={"77%"}
    shadowW={"139%"}
  />,
  <FloatingModule
    item={
      <img
        src={puzzlePiece4}
        alt="Puzzle Piece"
        className={styles.puzzlePiece4LeftContainer}
      />
    }
    moduleW={"30%"}
    moduleH={"20%"}
    floatingDistance={"-10px"}
    backgroundShadowColor={"rgba(0, 0, 0, 0)"}
    shadowLeft={"77%"}
    shadowW={"139%"}
  />,
  <FloatingModule
    item={
      <img
        src={puzzlePiece5}
        alt="Puzzle Piece"
        className={styles.puzzlePiece5LeftContainer}
      />
    }
    moduleW={"30%"}
    moduleH={"20%"}
    floatingDistance={"-10px"}
    backgroundShadowColor={"rgba(0, 0, 0, 0)"}
    shadowLeft={"77%"}
    shadowW={"139%"}
  />,
  <FloatingModule
    item={
      <img
        src={puzzlePiece6}
        alt="Puzzle Piece"
        className={styles.puzzlePiece6LeftContainer}
      />
    }
    moduleW={"30%"}
    moduleH={"20%"}
    floatingDistance={"-10px"}
    backgroundShadowColor={"rgba(0, 0, 0, 0)"}
    shadowLeft={"56%"}
    shadowW={"139%"}
  />,
  <FloatingModule
    item={
      <img
        src={puzzlePiece7}
        alt="Puzzle Piece"
        className={styles.puzzlePiece7RightContainer}
      />
    }
    moduleW={"30%"}
    moduleH={"50%"}
    floatingDistance={"-10px"}
    backgroundShadowColor={"rgba(0, 0, 0, 0)"}
    shadowLeft={"77%"}
    shadowW={"139%"}
  />,
  <FloatingModule
    item={
      <img
        src={puzzlePiece8}
        alt="Puzzle Piece"
        className={styles.puzzlePiece8RightContainer}
      />
    }
    moduleW={"30%"}
    moduleH={"20%"}
    floatingDistance={"-10px"}
    backgroundShadowColor={"rgba(0, 0, 0, 0)"}
    shadowLeft={"77%"}
    shadowW={"139%"}
  />,
  <FloatingModule
    item={
      <img
        src={puzzlePiece9}
        alt="Puzzle Piece"
        className={styles.puzzlePiece9RightContainer}
      />
    }
    moduleW={"30%"}
    moduleH={"20%"}
    floatingDistance={"-10px"}
    backgroundShadowColor={"rgba(0, 0, 0, 0)"}
    shadowLeft={"77%"}
    shadowW={"139%"}
  />,
  <FloatingModule
    item={
      <img
        src={puzzlePiece10}
        alt="Puzzle Piece"
        className={styles.puzzlePiece10RightContainer}
      />
    }
    moduleW={"30%"}
    moduleH={"20%"}
    floatingDistance={"-10px"}
    backgroundShadowColor={"rgba(0, 0, 0, 0)"}
    shadowLeft={"77%"}
    shadowW={"139%"}
  />,
  <FloatingModule
    item={
      <img
        src={puzzlePiece11}
        alt="Puzzle Piece"
        className={styles.puzzlePiece11RightContainer}
      />
    }
    moduleW={"30%"}
    moduleH={"20%"}
    floatingDistance={"-10px"}
    backgroundShadowColor={"rgba(0, 0, 0, 0)"}
    shadowLeft={"77%"}
    shadowW={"139%"}
  />,
  <FloatingModule
    item={
      <img
        src={puzzlePiece12}
        alt="Puzzle Piece"
        className={styles.puzzlePiece12RightContainer}
      />
    }
    moduleW={"30%"}
    moduleH={"20%"}
    floatingDistance={"-10px"}
    backgroundShadowColor={"rgba(0, 0, 0, 0)"}
    shadowLeft={"77%"}
    shadowW={"139%"}
  />,
];
interface BioPTwoV1_extraSmallProps {}

const BioPTwoV1_extraSmall = (props: BioPTwoV1_extraSmallProps) => {
  const { setGlassModalInstance, setPrevGlassModalInstance } =
    useContext(GeneralDataContext);
  const [selectedPieceId, setSelectedPieceId] = useState<number[]>([]);
  const [previewPiece, setPreviewPiece] = useState<number>(0);

  const _renderPuzzle = () => {
    return selectedPieceId.map((id) => {
      let imageUrl;
      switch (id) {
        case 1:
          imageUrl = (
            <img
              key={id}
              src={puzzlePiece1}
              alt="Puzzle Piece"
              className={styles.puzzlePiece1}
            />
          );
          break;
        case 2:
          imageUrl = (
            <img
              key={id}
              src={puzzlePiece2}
              alt="Puzzle Piece"
              className={styles.puzzlePiece2}
            />
          );
          break;
        case 3:
          imageUrl = (
            <img
              key={id}
              src={puzzlePiece3}
              alt="Puzzle Piece"
              className={styles.puzzlePiece3}
            />
          );
          break;
        case 4:
          imageUrl = (
            <img
              key={id}
              src={puzzlePiece4}
              alt="Puzzle Piece"
              className={styles.puzzlePiece4}
            />
          );
          break;
        case 5:
          imageUrl = (
            <img
              key={id}
              src={puzzlePiece5}
              alt="Puzzle Piece"
              className={styles.puzzlePiece5}
            />
          );
          break;
        case 6:
          imageUrl = (
            <img
              key={id}
              src={puzzlePiece6}
              alt="Puzzle Piece"
              className={styles.puzzlePiece6}
            />
          );
          break;
        case 7:
          imageUrl = (
            <img
              key={id}
              src={puzzlePiece7}
              alt="Puzzle Piece"
              className={styles.puzzlePiece7}
            />
          );
          break;
        case 8:
          imageUrl = (
            <img
              key={id}
              src={puzzlePiece8}
              alt="Puzzle Piece"
              className={styles.puzzlePiece8}
            />
          );
          break;
        case 9:
          imageUrl = (
            <img
              key={id}
              src={puzzlePiece9}
              alt="Puzzle Piece"
              className={styles.puzzlePiece9}
            />
          );
          break;
        case 10:
          imageUrl = (
            <img
              key={id}
              src={puzzlePiece10}
              alt="Puzzle Piece"
              className={styles.puzzlePiece10}
            />
          );
          break;
        case 11:
          imageUrl = (
            <img
              key={id}
              src={puzzlePiece11}
              alt="Puzzle Piece"
              className={styles.puzzlePiece11}
            />
          );
          break;
        case 12:
          imageUrl = (
            <img
              key={id}
              src={puzzlePiece12}
              alt="Puzzle Piece"
              className={styles.puzzlePiece12}
            />
          );
          break;
        default:
          imageUrl = <></>;
      }
      // console.log(selectedPieceId)
      return imageUrl;
    });
  };

  const _renderPiece = (image: JSX.Element, title: string, text: string) => {
    return (
      <div className={styles.renderPiece_Container}>
        <div className={styles.renderPiece_LeftContainer}>
          <FloatingModule
            item={image}
            moduleW={"120px"}
            moduleH={"120px"}
            floatingDistance={"-10px"}
            backgroundShadowColor={"rgba(0, 0, 0, 0.5)"}
            shadowLeft={"46%"}
            shadowW={"80%"}
          />
        </div>
        <div className={styles.renderPiece_RightContainer}>
          <div className={styles.renderPiece_RightUpContainer}>{title}</div>
          <div className={styles.renderPiece_RightDownContainer}>{text}</div>
        </div>
      </div>
    );
  };
  const _renderPieceSwitch = (pieceNo: number) => {
    switch (pieceNo) {
      case 1:
        return _renderPiece(
          <img
            src={puzzlePiece1}
            alt="Puzzle Piece"
            className={styles.puzzlePieceGlassPreview}
          />,
          "[No.1]: Early Years and Introduction to Technology. ~1998-2016",
          "I was born in Athens, Greece in 1998. Even from my earliest years, I displayed a range of skills that have remained among my strongest assets to this day. These included advanced communication abilities, a knack for adaptability, a relentless passion for continual learning, and a passion for solving problems with advanced problem-solving abilities."
        );
      case 2:
        return _renderPiece(
          <img
            src={puzzlePiece2}
            alt="Puzzle Piece"
            className={styles.puzzlePieceGlassPreview}
          />,
          "[No.2]: A Valuable Addition to Your Collection.",
          "Despite the fact that this puzzle piece is empty, it still remains a valuable addition to your collection."
        );
      case 3:
        return _renderPiece(
          <img
            src={puzzlePiece3}
            alt="Puzzle Piece"
            className={styles.puzzlePieceGlassPreview}
          />,
          "[No.3]: A Valuable Addition to Your Collection.",
          "Despite the fact that this puzzle piece is empty, it still remains a valuable addition to your collection."
        );
      case 4:
        return _renderPiece(
          <img
            src={puzzlePiece4}
            alt="Puzzle Piece"
            className={styles.puzzlePieceGlassPreview}
          />,
          "[No.4]: Pre-University Education Journey. __March 1998-June 2016",
          'Before entering at the Technical University of Crete, I possessed a comprehensive educational background. Beginning from elementary school, I achieved the distinction of becoming a "flag bearer", an honor reserved for some of the top students in the school. In high school, I discovered my passion and focused on subjects that truly interested me. Excelling in Mathematics, Physics, Chemistry, Microelectronics Engineering, and Computer Science, I also undertook special assignments in exams and received commendation for my swift problem-solving abilities. Often, my unconventional approaches to solutions surprised those around me. There were many instances where some teachers assigned exercises specifically for me to solve, which were not included in the graded examinations. Graduating high school with a remarkable score of 19.6 out of 20, I secured admission to my desired institution. Notably, in the national entrance exams for the Universities of Greece, I achieved outstanding scores of 19.6 out of 20 in Physics and 19.2 out of 20 in Mathematics.'
        );
      case 5:
        return _renderPiece(
          <img
            src={puzzlePiece5}
            alt="Puzzle Piece"
            className={styles.puzzlePieceGlassPreview}
          />,
          "[No.5]: A Valuable Addition to Your Collection.",
          "Despite the fact that this puzzle piece is empty, it still remains a valuable addition to your collection."
        );
      case 6:
        return _renderPiece(
          <img
            src={puzzlePiece6}
            alt="Puzzle Piece"
            className={styles.puzzlePieceGlassPreview}
          />,
          "[No.6 - #Educational_Journey_Part_One]: My Educational Journey at the University of Crete as Electrical and Computer Engineer. __September 2016-March 2022",
          "I studied Electrical and Computer Engineering at the University of Crete, where I discovered a fascinating new world. I was excited about meeting people with similar interests, engaging in intriguing tasks, and taking advantage of the knowledge and opportunities provided. Given the extensive graduation average, my goal was to acquire as much knowledge as possible, seize opportunities, expand my network and all within the standard duration of the university's program. As a result, I aimed to complete as many courses as I could within the university’s scheduled duration. I succeeded in taking five postgraduate courses—including Advanced Databases, Web Application Development, and Advanced Optimization Techniques—and completed my coursework one semester ahead of schedule."
        );
      case 7:
        return _renderPiece(
          <img
            src={puzzlePiece7}
            alt="Puzzle Piece"
            className={styles.puzzlePieceGlassPreview}
          />,
          "[No.7]: A Valuable Addition to Your Collection.",
          "Despite the fact that this puzzle piece is empty, it still remains a valuable addition to your collection."
        );
      case 8:
        return _renderPiece(
          <img
            src={puzzlePiece8}
            alt="Puzzle Piece"
            className={styles.puzzlePieceGlassPreview}
          />,
          "[No.8 - #Educational_Journey_Part_Two]: My Educational Journey at the University of Crete as Electrical and Computer Engineer. __September 2020-March 2022",
          "As I completed my courses at the university and had dedicated time to focus on my thesis, the COVID-19 pandemic suddenly began. My thesis involved deploying N UAVs (drones) to search a designated region. These UAVs would autonomously divide the area into distinct sub-areas and investigate for rubbish. The thesis incorporated various scientific aspects, including machine learning and neural networks for identifying rubbish, as well as AI techniques where the UAVs acted as agents that communicated and utilized reinforcement learning. For more details, please visit the Projects page."
        );
      case 9:
        return _renderPiece(
          <img
            src={puzzlePiece9}
            alt="Puzzle Piece"
            className={styles.puzzlePieceGlassPreview}
          />,
          "[No.9]: Professional Experience and Educational Engagement. __September 2016-March 2022",
          "While pursuing my studies, I also gained practical experience through intermittent work at companies such as Bauer Energy Hellas, Depa Commercial S.A., and Beev. Additionally, I was actively involved in various groups, working on projects and teaching lessons for educational purposes as well as i have joined to volunteering activities as software engineer and it technician."
        );
      case 10:
        return _renderPiece(
          <img
            src={puzzlePiece10}
            alt="Puzzle Piece"
            className={styles.puzzlePieceGlassPreview}
          />,
          "[No.10]: Fulfillment of Military Obligations and Professional Growth. __March 2022-March 2023",
          "I concluded my national military service to make myself available for new challenges and opportunities. Fortunately, among the candidates, I was selected along with five others to serve in the Computer and Application Center of the Central Department of Technology. There, I had the chance to apply my knowledge in a real-world setting. I developed several applications, including a phone book and a management tool website, handling everything from front-end to back-end development and DevOps. Additionally, I actively contributed to two major military applications, supporting essential services and tasks."
        );
      case 11:
        return _renderPiece(
          <img
            src={puzzlePiece11}
            alt="Puzzle Piece"
            className={styles.puzzlePieceGlassPreview}
          />,
          "[No.11]: Professional Development at Accenture, Athens. __April 2023-June 2024",
          "After completing my military obligations, I was recruited by Accenture in Athens, a leading company in its industry. At Accenture, I engaged in a diverse range of projects, focusing on creation, maintenance, and problem-solving. This role allowed me to enhance my expertise, broaden my professional network, build lasting relationships, and acquire valuable skills and insights."
        );
      case 12:
        return _renderPiece(
          <img
            src={puzzlePiece12}
            alt="Puzzle Piece"
            className={styles.puzzlePieceGlassPreview}
          />,
          `[No.12]: Seeking the Next Chapter... __${
            new Date().toISOString().split("T")[0]
          }- YYYY-MM-DD`,
          "At this pivotal moment in my career, I am actively seeking new opportunities to advance and grow. After gaining extensive experience in front-end, back-end, and DevOps roles, and having contributed to a diverse range of projects throughout my career, I am eager to embark on the next chapter of my professional journey. I am enthusiastic about exploring new challenges that will allow me to leverage my skills, expand my expertise, and make a meaningful impact in a dynamic and innovative environment."
        );
      default:
        return <></>;
    }
  };

  const _renderPieces = () => {
    return (
      <div className={styles.piecesContainer}>
        <RenderListOfItems
          iterationMode={0}
          items={pieces.map((p: JSX.Element, idx: number) => (
            <div
              key={`${idx}`}
              className={styles.pieceContainer}
              style={
                selectedPieceId.includes(idx + 1)
                  ? { opacity: 0.5, filter: "blur(2px)" }
                  : {}
              }
              onClick={() => {
                setSelectedPieceId((prevState) => {
                  if (!selectedPieceId.includes(idx + 1)) {
                    return [...prevState, idx + 1];
                  }
                  return prevState;
                });
                setGlassModalInstance((prevState: GlassModalDataContract) => {
                  setPrevGlassModalInstance(prevState);
                  return {
                    ...prevState,
                    contentW: "80%",
                    contentH: "80%",
                    content: <>{_renderPieceSwitch(idx + 1)}</>,
                    isOpen: true,
                  };
                });
              }}
            >
              {p}
            </div>
          ))}
          setMode={setPreviewPiece}
          selectedHandler={(idx: number) =>
            console.log(`Selected the item with id:${idx}`)
          }
        />
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        {/** Main Container */}
        <div className={styles.mainContainer}>
          <div className={styles.textContainerUpToPuzzle}>Choose Wisely</div>
          {_renderPuzzle()}
          <div className={styles.textContainerDownToPuzzle}>
            The{" "}
            <span className={styles.textContainerDownToPuzzleNumber}>
              ``Correct``
            </span>{" "}
            Puzzle Pieces
          </div>
        </div>

        {/** Puzzles Pieces Container */}
        {_renderPieces()}
      </div>
    </div>
  );
};

export default BioPTwoV1_extraSmall;
