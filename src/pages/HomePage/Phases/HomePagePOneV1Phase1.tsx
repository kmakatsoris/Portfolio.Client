import React, { useRef, useState } from "react";
import styles from "./HomePagePOneV1Phase1.module.css";
import DefaultParallax from "../../../modules/components/parallex/DefaultParallex";

const MAX_PARTICLES_SCROLL: number = 3500;
const easeInOutQuad = (t: number) =>
  t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

interface HomePagePOneV1Phase1Props {
  nextPhaseParticles: () => void;
  prevPhaseParticles: () => void;
}

const HomePagePOneV1Phase1 = (props: HomePagePOneV1Phase1Props) => {
  const siteRef = useRef(null!);
  const [particlesScrollY, setParticlesScrollY] = useState<number>(0);

  // [HANDLERS]
  // -------------------------------------------- -------------------------------------------- --------------------------------------------

  // [OTHER METHODS]
  // -------------------------------------------- -------------------------------------------- --------------------------------------------
  const movementParticlesStyle = (scrollY: number) => {
    const progress = Math.min(scrollY / MAX_PARTICLES_SCROLL, 1);
    const translateY = easeInOutQuad(progress) * 300;
    // console.log(`scrollY: ${scrollY}, MAX_PARTICLES_SCROLL:${MAX_PARTICLES_SCROLL}, translateY: ${translateY}`);
    return {
      transform: `translateY(-${translateY}%)`,
    };
  };

  // [RENDERING MODULES]
  // -------------------------------------------- -------------------------------------------- --------------------------------------------
  const renderCentricComponent = () => {
    return (
      <div className={styles.centricComponentContainer}>
        <div className={styles.titleContainer}>
          <div className={styles.title0}>Hi, Everyone! 👋 </div>
          <div className={styles.title1}>I'm MAKATSORIS KONSTANTINOS</div>
        </div>
      </div>
    );
  };

  const renderImageParticles = () => {
    return (
      <div className={styles.particleContainer}>
        <DefaultParallax
          key={"particles"}
          siteRef={siteRef}
          item={
            <div key={"particles"} className={styles.particleContainer}>
              <div className={styles.particle0Container}></div>
              <div className={styles.particle1Container}></div>
              <div className={styles.particle2Container}></div>
              <div className={styles.particle3Container}></div>
            </div>
          }
          deltaY={60}
          initScroll={0}
          maxScroll={MAX_PARTICLES_SCROLL}
          movementStyle={movementParticlesStyle}
          scrollY={particlesScrollY}
          setScrollY={setParticlesScrollY}
          nextPhase={props.nextPhaseParticles}
          prevPhase={props.prevPhaseParticles}
        />
      </div>
    );
  };

  const renderTexts = () => {
    return (
      <div className={styles.textsContainer}>
        <div
          className={styles.textFocus}
          style={{
            fontFamily: "Arial",
            top: "10%",
            left: "20%",
            transform: "rotate(10deg)",
            fontSize: "37px",
          }}
        >
          Scroll Down
        </div>

        <div
          className={styles.textFocus}
          style={{
            fontFamily: "Arial",
            top: "17%",
            left: "60%",
            transform: "rotate(10deg)",
            fontSize: "37px",
          }}
        >
          Scroll Down
        </div>

        <div
          className={styles.textFocus}
          style={{
            fontFamily: "Arial",
            top: "56%",
            left: "25%",
            transform: "rotate(10deg)",
            fontSize: "37px",
          }}
        >
          Scroll Down
        </div>
        <div
          className={styles.textFocus}
          style={{
            fontFamily: "Arial",
            top: "46%",
            left: "70%",
            transform: "rotate(10deg)",
            fontSize: "37px",
          }}
        >
          Scroll Down
        </div>
        <div
          className={styles.textFocus}
          style={{
            fontFamily: "Arial",
            top: "65%",
            left: "48%",
            transform: "rotate(10deg)",
            fontSize: "37px",
          }}
        >
          Scroll Down
        </div>
        <div
          className={styles.text}
          style={{
            fontFamily: "Times New Roman",
            top: "30%",
            left: "50%",
            transform: "rotate(-5deg)",
            fontSize: "27px",
            color: "rgb(213 213 213)",
          }}
        >
          Hi There
        </div>
        <div
          className={styles.text}
          style={{
            fontFamily: "Verdana",
            top: "28%",
            left: "30%",
            transform: "rotate(-20deg)",
            fontSize: "36px",
            color: "rgb(83 83 83)",
          }}
        >
          Keep Exploring
        </div>
        <div
          className={styles.text}
          style={{
            fontFamily: "Georgia",
            top: "90%",
            left: "70%",
            transform: "rotate(30deg)",
            fontSize: "36px",
            color: "rgb(83 83 83)",
          }}
        >
          Stay Inspired
        </div>
        <div
          className={styles.textFocus}
          style={{
            fontFamily: "Arial",
            top: "10%",
            left: "80%",
            transform: "rotate(-15deg)",
            fontSize: "36px",
          }}
        >
          Keep Dreaming
        </div>
        <div
          className={styles.text}
          style={{
            fontFamily: "Times New Roman",
            top: "51%",
            left: "32%",
            transform: "rotate(5deg)",
            fontSize: "27px",
            color: "rgb(199 199 199)",
          }}
        >
          Embrace Change
        </div>
        <div
          className={styles.text}
          style={{
            fontFamily: "Courier New",
            top: "30%",
            left: "70%",
            transform: "rotate(-10deg)",
          }}
        >
          Dare to Dream
        </div>
        <div
          className={styles.textFocus}
          style={{
            fontFamily: "Verdana",
            top: "70%",
            left: "10%",
            transform: "rotate(20deg)",
            fontSize: "18px",
          }}
        >
          Pursue Your Passion
        </div>
        <div
          className={styles.textFocus}
          style={{
            fontFamily: "Georgia",
            top: "90%",
            left: "50%",
            transform: "rotate(-30deg)",
          }}
        >
          Believe in Yourself
        </div>
        <div
          className={styles.text}
          style={{
            fontFamily: "Courier New",
            top: "50%",
            left: "80%",
            transform: "rotate(15deg)",
            fontSize: "29px",
            color: "rgb(199 199 199)",
          }}
        >
          Create Your Legacy
        </div>
        <div
          className={styles.text}
          style={{
            fontFamily: "Times New Roman",
            top: "60%",
            left: "60%",
            transform: "rotate(-15deg)",
          }}
        >
          Make it Happen
        </div>
        <div
          className={styles.text}
          style={{
            fontFamily: "Courier New",
            top: "40%",
            left: "10%",
            transform: "rotate(20deg)",
          }}
        >
          Chase Your Dreams
        </div>
        <div
          className={styles.text}
          style={{
            fontFamily: "Verdana",
            top: "80%",
            left: "30%",
            transform: "rotate(-25deg)",
          }}
        >
          Ignite Your Spark
        </div>
        <div
          className={styles.textFocus}
          style={{
            fontFamily: "Georgia",
            top: "70%",
            left: "80%",
            transform: "rotate(15deg)",
          }}
        >
          Inspire Others
        </div>
      </div>
    );
  };

  // [RENDERING DEFAULT COMPONENT]
  // -------------------------------------------- -------------------------------------------- --------------------------------------------
  return (
    <div ref={siteRef} className={styles.container}>
      {/** Centric Component */}
      {renderCentricComponent()}

      {/** Image Particles */}
      {renderImageParticles()}

      {/** Texts */}
      {renderTexts()}
    </div>
  );
};

export default HomePagePOneV1Phase1;
