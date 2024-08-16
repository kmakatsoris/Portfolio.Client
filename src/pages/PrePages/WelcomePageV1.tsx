import React, { useContext, useEffect, useState } from "react";
import styles from "./WelcomePageV1.module.css";
import { GeneralDataContext } from "../../services/DataProviders/GeneralDataProvider";
import LoadingPage from "../Loading/LoadingPage";
import ScrollingDefaultStateDivs from "../../modules/components/presentationViewer/ScrollingDefaultStateDivs";
import mode0Img from "../../images/content/welcome-code-message-simple2.png";
import mode1Img from "../../images/content/welcome-code-message-comprehensive0.png";

// Define Files Variables
// -------------------------------------------------------------------------------------------
const loadingDuration: number = 2 * 1000; // 2 seconds
interface WelcomePageV1Props {
  setEn: React.Dispatch<React.SetStateAction<boolean>>;
}

const WelcomePageV1 = (props: WelcomePageV1Props) => {
  const { pageTheme, setRenderingPagesMode } = useContext(GeneralDataContext);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [mode, setMode] = useState<number>(0);
  const [
    initializationTimeForInitialContainer,
    setInitializationTimeForInitialContainer,
  ] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoaded(true);
    }, loadingDuration);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (initializationTimeForInitialContainer === false && mode !== 0)
      setInitializationTimeForInitialContainer(true);
  }, [mode]);

  // Define Module's Rendering Methods
  const _renderModesContainer = (stateOfModeDisplay: number) => {
    return (
      <div
        className={
          stateOfModeDisplay === 1
            ? styles.expandedModesContainer
            : initializationTimeForInitialContainer
            ? styles.initialModesContainer_restTime
            : styles.initialModesContainer_initializationTime
        }
      >
        {/* Mode 1 */}
        <div
          className={
            stateOfModeDisplay === 1
              ? styles.expandedMode1Container
              : styles.initialMode1Container
          }
        >
          <img
            className={styles.modeImg}
            src={mode0Img}
            alt="Portfolio Representation Mode 1"
            onClick={() => {
              props.setEn(false);
              setRenderingPagesMode(1);
            }}
          />
        </div>
        {/* Mode 0 */}
        <div
          className={
            stateOfModeDisplay === 1
              ? styles.expandedMode0Container
              : styles.initialMode0Container
          }
        >
          <img
            className={styles.modeImg}
            src={mode1Img}
            alt="Portfolio Representation Mode 0"
            onClick={() => {
              props.setEn(false);
              setRenderingPagesMode(0);
            }}
          />
        </div>
      </div>
    );
  };

  const _renderModuleBody = () => {
    return (
      <div className={styles.subContainer}>
        {/* PORTFOLIO TEXT */}
        <div className={styles.textContainer}>
          <div className={styles.text}>PORTFOLIO</div>
        </div>

        {/* MODES PARTICLES */}
        <ScrollingDefaultStateDivs
          items={[_renderModesContainer(0), _renderModesContainer(1)]}
          numberOfScrolls={1}
          scrollingIconIndicatorTop={"-50vh"}
          scrollingIconIndicatorLeft={"10vw"}
          setMode={setMode}
        />
      </div>
    );
  };

  return (
    <div className={styles.container} style={pageTheme}>
      {isLoaded ? (
        _renderModuleBody()
      ) : (
        <LoadingPage isLoaded={setIsLoaded} enQuotes={false} enShapes={true} />
      )}
    </div>
  );
};

export default WelcomePageV1;
