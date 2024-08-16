import React, { useContext, useEffect, useState } from "react";
import styles from "./WelcomePageV1_extraSmall.module.css";
import { GeneralDataContext } from "../../../services/DataProviders/GeneralDataProvider";
import ButtonV1 from "../../../modules/components/buttons/ButtonV1";
import LoadingPage_extraSmall from "../Loading/LoadingPage_extraSmall";

// Define Files Variables
// -------------------------------------------------------------------------------------------
const loadingDuration: number = 2 * 1000; // 2 seconds
interface WelcomePageV1_extraSmallProps {
  setEn: React.Dispatch<React.SetStateAction<boolean>>;
}

const WelcomePageV1_extraSmall = (props: WelcomePageV1_extraSmallProps) => {
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

  const _renderModuleBody = () => {
    return (
      <div className={styles.subContainer}>
        {/* PORTFOLIO TEXT */}
        <div className={styles.textContainer}>
          <div className={styles.text}>PORTFOLIO</div>
        </div>

        {/* MODES PARTICLES */}
        <div className={styles.modesContainer}>
          <div className={styles.mode0Container}>
            <ButtonV1
              containerW={175}
              containerH={101}
              drawRule={"M 1 50 L 115 50 L 115 100 L 1 100 Z"}
              textContainerW={78}
              textContainerH={64}
              text={"Simple Portfolio Representation"}
              textContainerBackroundColor={"#ffffff"}
              textColor={"#7794bb"}
              btnHandler={() => {
                props.setEn(false);
                setRenderingPagesMode(0);
              }}
            />
          </div>
          <div className={styles.mode1Container}>
            <ButtonV1
              containerW={175}
              containerH={101}
              drawRule={"M 1 50 L 115 50 L 115 100 L 1 100 Z"}
              textContainerW={78}
              textContainerH={64}
              text={"Comprehensive Portfolio Representation"}
              textContainerBackroundColor={"#ffffff"}
              textColor={"#7794bb"}
              btnHandler={() => {
                props.setEn(false);
                setRenderingPagesMode(1);
              }}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container} style={pageTheme}>
      {isLoaded ? (
        _renderModuleBody()
      ) : (
        <LoadingPage_extraSmall
          isLoaded={setIsLoaded}
          enQuotes={false}
          enShapes={true}
        />
      )}
    </div>
  );
};

export default WelcomePageV1_extraSmall;
