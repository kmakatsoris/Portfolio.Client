import React, { useContext } from "react";
import styles from "./WelcomePage.module.css";
import FloatingModule from "../../modules/components/animations/FloatingModule";
import { GeneralDataContext } from "../../services/DataProviders/GeneralDataProvider";
import Background1 from "../Backgrounds/Background1";
import Background2 from "../Backgrounds/Background2";
import Background3 from "../Backgrounds/Background3";
import Background4 from "../Backgrounds/Background4";
import Background5 from "../Backgrounds/Background5";
import Background6 from "../Backgrounds/Background6";
import Background7 from "../Backgrounds/Background7";

const FLOATING_TEXTS: string[] = [
  "Let's Explore Together",
  "Let me give you a quick overview.",
  "Do it in your own way.",
];

interface WelcomePageProps {
  setEn: React.Dispatch<React.SetStateAction<boolean>>;
}

const WelcomePage = (props: WelcomePageProps) => {
  const { pageTheme, setRenderingPagesMode } = useContext(GeneralDataContext);

  const _renderTitleAndDescription = () => {
    return (
      <div className={styles.titleAndDescriptionContainer}>
        <div className={styles.titleContainer}>
          <div className={styles.title0}>Hi, Everyone!</div>
          <div className={styles.title1}>I'm MAKATSORIS KONSTANTINOS</div>
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.description}>
            Welcome to my Portfolio. I'm really happy that you're here!
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {/*  Title */}
      {_renderTitleAndDescription()}

      {/*  Main Content */}
      <div className={styles.subContainer}>
        {FLOATING_TEXTS.map((text: string, idx: number) => {
          if (idx === 0) {
            return (
              <div key={idx} className={styles.underConstructionContainer}>
                <div className={styles.underConstructionItem}>{text}</div>
                <div
                  className={styles.underConstructionItemNotificationContainer}
                >
                  <div className={styles.underConstructionItemNotification}>
                    Coming Soon...
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div key={idx} className={styles.floatingModulesContainer}>
                <FloatingModule
                  item={
                    <div
                      className={styles.floatingItemContainer}
                      onClick={() => {
                        props.setEn(false);
                        setRenderingPagesMode(idx);
                      }}
                    >
                      <div className={styles.floatingItem}>{text}</div>
                    </div>
                  }
                  moduleW={"80%"}
                  moduleH={"40%"}
                  floatingDistance={"-10px"}
                  backgroundShadowColor={"rgba(0, 0, 0, 0.5)"}
                  shadowLeft={""}
                  shadowW={""}
                />
              </div>
            );
          }
        })}
      </div>

      {/** Background */}
      <Background7 opacity={"80%"} />
    </div>
  );
};

export default WelcomePage;
