import React, { useEffect, useState } from "react";
import styles from "./HomePagePOneV1.module.css";
import droneImg from "../../images/icons/drone.png";
import packageImg from "../../images/icons/package.png";
import profileImg from "../../images/content/Production21.png";
import DefaultCard from "../../modules/components/cards/DefaultCard";
import PhasesViewerDefault from "../../modules/components/contentViewer/PhasesViewerDefault";
import HomePagePOneV1Phase1 from "./Phases/HomePagePOneV1Phase1";
import HomePagePOneV1Phase2 from "./Phases/HomePagePOneV1Phase2";
import HomePagePOneV1Phase3 from "./Phases/HomePagePOneV1Phase3";

const NUMBER_OF_DRONES: number = 4;
const NUMBER_OF_PHASES: number = 3;

interface PhasesType {
  phase1: number; // Profile Image
  phase2: number; // Drones
  phase4: number; // Circle 1
  phase5: number; // Particles
}

const initialState: PhasesType = {
  phase1: 0,
  phase2: 0,
  phase4: 0,
  phase5: 0,
};

interface HomePagePOneV1Props {}

const HomePagePOneV1 = (props: HomePagePOneV1Props) => {
  const [phase, setPhase] = useState<number | undefined>(undefined);
  const [subPhases, setSubPhases] = useState<PhasesType>(initialState);

  // console.log(`phase: ${phase}`);
  // console.log(subPhases);

  useEffect(() => {
    if (phase === undefined) {
      updatePhase();
    }
    if (phase === 0 && subPhases["phase5"] >= 1) {
      updatePhase();
    }
    if (
      phase === 1 &&
      checkToProcceed([subPhases["phase1"], subPhases["phase2"]]) &&
      (subPhases["phase1"] >= 1 || subPhases["phase2"] >= 1)
    ) {
      updatePhase();
    }
    if (
      phase === 2 &&
      checkToProcceed([subPhases["phase4"]]) &&
      subPhases["phase4"] >= 1
    ) {
      updatePhase();
    }
  }, [subPhases, phase]);

  // [PARALLEX METHODS]
  // -------------------------------------------- -------------------------------------------- --------------------------------------------
  const checkToProcceed = (phasesToCheck: number[]) => {
    const currentValue = phasesToCheck[0];
    const allValuesAreEqual = phasesToCheck.every(
      (value) => value === currentValue
    );

    return allValuesAreEqual;
  };

  const updatePhase = () => {
    setPhase((p: number | undefined): number => {
      if (p === undefined) {
        return -1;
      }
      return p + 1;
    });
  };

  const updateSubPhase = (phaseKey: string, value: number) => {
    setSubPhases((prev) => {
      const nextState = { ...prev };
      nextState[phaseKey as keyof PhasesType] = value;
      return nextState;
    });
  };

  // [PROFILE IMAGE]
  const nextPhaseProfileImage = () => {
    if (checkToProcceed([subPhases["phase1"], subPhases["phase2"]])) {
      if (subPhases["phase1"] < NUMBER_OF_PHASES - 1) {
        updateSubPhase("phase1", subPhases["phase1"] + 1);
      } else {
        updateSubPhase("phase1", NUMBER_OF_PHASES - 1);
      }
    } else {
      updateSubPhase("phase1", subPhases["phase1"]);
    }
  };

  const prevPhaseProfileImage = () => {
    if (checkToProcceed([subPhases["phase1"], subPhases["phase2"]])) {
      if (subPhases["phase1"] > 0) {
        updateSubPhase("phase1", subPhases["phase1"] - 1);
      } else {
        updateSubPhase("phase1", 0);
      }
    } else {
      updateSubPhase("phase1", subPhases["phase1"]);
    }
  };

  // [DRONES]
  const nextPhaseDrones = () => {
    if (checkToProcceed([subPhases["phase1"], subPhases["phase2"]])) {
      if (subPhases["phase2"] < NUMBER_OF_PHASES - 1) {
        updateSubPhase("phase2", subPhases["phase2"] + 1);
      } else {
        updateSubPhase("phase2", NUMBER_OF_PHASES - 1);
      }
    } else {
      updateSubPhase("phase2", subPhases["phase1"]);
    }
  };
  const prevPhaseDrones = () => {
    if (checkToProcceed([subPhases["phase1"], subPhases["phase2"]])) {
      if (subPhases["phase2"] > 0) {
        updateSubPhase("phase2", subPhases["phase2"] - 1);
      } else {
        updateSubPhase("phase2", 0);
      }
    } else {
      updateSubPhase("phase2", subPhases["phase1"]);
    }
  };

  // [PARTICLES]
  const nextPhaseParticles = () => {
    if (subPhases["phase5"] < NUMBER_OF_PHASES - 1) {
      updateSubPhase("phase5", subPhases["phase5"] + 1);
    } else {
      updateSubPhase("phase5", NUMBER_OF_PHASES - 1);
    }
  };
  const prevPhaseParticles = () => {
    if (subPhases["phase5"] > 0) {
      updateSubPhase("phase5", subPhases["phase5"] - 1);
    } else {
      updateSubPhase("phase5", 0);
    }
  };

  // [DRONES]
  const nextPhaseDronesV2 = () => {
    if (subPhases["phase4"] < NUMBER_OF_PHASES - 1) {
      updateSubPhase("phase4", subPhases["phase4"] + 1);
    } else {
      updateSubPhase("phase4", NUMBER_OF_PHASES - 1);
    }
  };
  const prevPhaseDronesV2 = () => {
    if (subPhases["phase4"] > 0) {
      updateSubPhase("phase4", subPhases["phase4"] - 1);
    } else {
      updateSubPhase("phase4", 0);
    }
  };

  // [RENDERING FUCNTIONS]
  // -------------------------------------------- -------------------------------------------- --------------------------------------------
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

  const _renderLeftContainer = (): JSX.Element => {
    return (
      <div className={styles.leftContainer}>
        <div className={styles.leftUpContainer}>
          {_renderTitleAndDescription()}
        </div>
        <div className={styles.leftDownContainer}>
          {Array.from({ length: NUMBER_OF_DRONES }).map((_, i) =>
            _renderDroneWithPackage(i)
          )}
        </div>
      </div>
    );
  };

  const _renderRightContainer = (): JSX.Element => {
    return (
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
    );
  };

  const _defaultContainer = () => {
    return (
      <div className={styles.leftAndRightContainer}>
        {/* [LEFT CONTAINER] */}
        {_renderLeftContainer()}

        {/* [RIGHT CONTAINER] */}
        {_renderRightContainer()}
      </div>
    );
  };

  return (
    <div key={phase} className={styles.container}>
      <PhasesViewerDefault
        items={[
          <HomePagePOneV1Phase1
            nextPhaseParticles={nextPhaseParticles}
            prevPhaseParticles={prevPhaseParticles}
          />,
          <HomePagePOneV1Phase2
            nextPhaseProfileImage={nextPhaseProfileImage}
            prevPhaseProfileImage={prevPhaseProfileImage}
            nextPhaseDrones={nextPhaseDrones}
            prevPhaseDrones={prevPhaseDrones}
          />,
          <HomePagePOneV1Phase3
            nextPhaseDrones={nextPhaseDronesV2}
            prevPhaseDrones={prevPhaseDronesV2}
          />,
          _defaultContainer(),
        ]}
        phase={phase === undefined ? 0 : phase}
      />
    </div>
  );
};

export default HomePagePOneV1;
