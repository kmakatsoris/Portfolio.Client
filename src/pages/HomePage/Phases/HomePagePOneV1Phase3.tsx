import React, { useEffect, useRef, useState } from "react";
import styles from "./HomePagePOneV1Phase3.module.css";
import droneImg from "../../../images/icons/drone.png";
import packageImg from "../../../images/icons/package.png";
import profileImg from "../../../images/content/Production21.png";
import DefaultCard from "../../../modules/components/cards/DefaultCard";
import DefaultParallax from "../../../modules/components/parallex/DefaultParallex";

const NUMBER_OF_DRONES: number = 16;
const MAX_SCROLL: number = 3000;
const easeInOutQuad = (t: number) =>
  t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

interface HomePagePOneV1Phase3Props {
  nextPhaseDrones: () => void;
  prevPhaseDrones: () => void;
}

const HomePagePOneV1Phase3 = (props: HomePagePOneV1Phase3Props) => {
  const siteRef = useRef(null!);
  const [droneScrollY, setDroneScrollY] = useState<number>(0);

  const _renderTitleAndDescription = () => {
    return (
      <div className={styles.titleAndDescriptionContainer}>
        <div className={styles.titleContainer}>
          <div className={styles.title0}>Hi, Everyone! 👋 </div>
          <div className={styles.title1}>I'm MAKATSORIS KONSTANTINOS</div>
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.description}>
            "Experienced engineer and programmer with a solid educational
            background. I have a passion for artificial intelligence and web
            development, and I'm always eager to explore new opportunities to
            expand my skill set. I thrive in collaborative and innovative work
            environments and am committed to contributing to the development of
            impactful applications. My goal is to advance my career and take on
            higher-level positions in the future."
          </div>
        </div>
      </div>
    );
  };

  const _renderDroneWithPackage = (key: number) => {
    return (
      <div key={key} className={styles.droneWithPackageContainer}>
        <img src={droneImg} alt="Drone" className={styles.droneImg} />
        <img src={packageImg} alt="Package" className={styles.packageImg} />
      </div>
    );
  };

  const movementDronesStyle = (scrollY: number) => {
    const progress = Math.min(scrollY / MAX_SCROLL, 1);
    const translateX = easeInOutQuad(progress) * 100;
    return {
      transform: `translateX(${Math.min(translateX, 100)}%)`,
    };
  };

  return (
    <div ref={siteRef} className={styles.container}>
      {/* [LEFT CONTAINER] */}
      <div className={styles.leftContainer}>
        <div className={styles.leftUpContainer}>
          {_renderTitleAndDescription()}
        </div>
        <DefaultParallax
          key={"drones"}
          siteRef={siteRef}
          item={
            <div className={styles.leftDownContainer}>
              {Array.from({ length: NUMBER_OF_DRONES }).map((_, i) =>
                _renderDroneWithPackage(i)
              )}
            </div>
          }
          deltaY={60}
          initScroll={0}
          maxScroll={MAX_SCROLL}
          movementStyle={movementDronesStyle}
          scrollY={droneScrollY}
          setScrollY={setDroneScrollY}
          nextPhase={props.nextPhaseDrones}
          prevPhase={props.prevPhaseDrones}
        />
      </div>

      {/* [RIGHT CONTAINER] */}
      <div className={styles.rightContainer}>
        <div className={styles.rightContentContainer}>
          <DefaultCard
            content={
              <img
                src={profileImg}
                alt="Profile"
                className={styles.profileImg}
              />
            }
            mode={1}
            shadow={"0 20px 50px rgba(0, 0, 0, 0.5)"}
            backgroundColorImage1={"linear-gradient(0deg, white, white)"}
            backgroundColorImage2={"linear-gradient(90deg, #ff4900, #0174ff)"}
            backgroundColorImage3={"linear-gradient(180deg, #ff4900, #0174ff)"}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePagePOneV1Phase3;
