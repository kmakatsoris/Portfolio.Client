import React from "react";
import styles from "./CoffeePOne.module.css";
import ContentViewerPatch2 from "../../modules/components/contentViewer/ContentViewerPatch2";
import TitleAndContentViewer from "../../modules/components/contentViewer/TitleAndContentViewer";
import backgroundImg from "../../images/content/Production21.png";
import backgroundImgEffect from "../../images/content/Production41.png";
import InfiniteRender from "../../modules/components/showupViewer/InfiniteRender";
import ShowUpWithJumpscareEfect from "../../modules/components/showupViewer/ShowUpWithJumpscareEfect";
import TypingTextAnimation from "../../modules/components/animations/TypingTextAnimation";
import ButtonV1 from "../../modules/components/buttons/ButtonV1";
import ContentViewerPatch3 from "../../modules/components/contentViewer/ContentViewerPatch3";

interface CoffeePOneProps {
  insidePageRefs: React.RefObject<HTMLDivElement>[];
}

const CoffeePOne = (props: CoffeePOneProps) => {
  const scrollToRef = (ref: any) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const _renderAddReviewTextModule = () => {
    return (
      <InfiniteRender
        renderComponent={
          <ShowUpWithJumpscareEfect
            graphicPre={
              <TypingTextAnimation
                key={1}
                text={
                  <div className={styles.welcomeMessageValue}>
                    Greetings, everyone!
                  </div>
                }
              />
            }
            graphicTrans={
              <TypingTextAnimation
                key={2}
                text={
                  <div className={styles.welcomeMessageValue}>
                    I'm MAKATSORIS KONSTANTINOS
                  </div>
                }
              />
            }
            graphicPost={
              <TypingTextAnimation
                key={3}
                text={
                  <div className={styles.welcomeMessageValue}>
                    Wishing you all a fantastic day!
                  </div>
                }
              />
            }
            intervalTimeTransPre={5000}
            intervalTimeTransPost={5000}
            startIndication={true}
          />
        }
        interval={5000 * 3}
        delay={0}
      />
    );
  };

  return (
    <div className={styles.container}>
      {/** Welcome Container */}
      <div className={styles.welcomeContainer}>
        <div className={styles.welcomeMessage}>
          {_renderAddReviewTextModule()}
        </div>
      </div>

      {/** Sub Container */}
      <div className={styles.subContainer}>
        <ContentViewerPatch2
          graphic={
            <div className={styles.backgroundImgContainer}>
              <div className={styles.backgroundImgSubContainer}>
                <ContentViewerPatch3
                  content={<></>}
                  graphic={
                    <ShowUpWithJumpscareEfect
                      graphicPre={
                        <div className={styles.backgroundImgValueContainer}>
                          <img
                            src={backgroundImg}
                            alt="Backround"
                            className={styles.backgroundImg}
                          />
                        </div>
                      }
                      graphicTrans={
                        <div className={styles.backgroundImgValueContainer}>
                          <img
                            src={backgroundImgEffect}
                            alt="Backround"
                            className={styles.backgroundImg}
                          />
                        </div>
                      }
                      graphicPost={
                        <div className={styles.backgroundImgValueContainer}>
                          <img
                            src={backgroundImg}
                            alt="Backround"
                            className={styles.backgroundImg}
                          />
                        </div>
                      }
                      intervalTimeTransPre={2000}
                      intervalTimeTransPost={800}
                      startIndication={true}
                    />
                  }
                  backgroundImgOpacity={100}
                  backgroundImgBlur={0}
                />
              </div>
            </div>
          }
          content={
            <div className={styles.titleContainer}>
              <TitleAndContentViewer
                title={"Grateful for the coffee or review boost! Thank you!"}
                content={
                  <div className={styles.descriptionValueContainer}>
                    <div className={styles.descriptionValue0}>
                      Hi Everyone! Welcome to this page, where you have the
                      perfect opportunity to express your appreciation for my
                      work in general.
                    </div>
                    <div className={styles.descriptionValue1}>
                      Now, you also have the opportunity to:
                      <div className={styles.descriptionValueStyles}>
                        <div
                          className={styles.descriptionValueStyle2}
                          onClick={() => {
                            scrollToRef(props.insidePageRefs[2]);
                          }}
                        >
                          share your feedback
                        </div>
                        or
                        <div
                          className={styles.descriptionValueStyle1}
                          onClick={() => {
                            scrollToRef(props.insidePageRefs[1]);
                          }}
                        >
                          make a symbolic donation
                        </div>
                      </div>
                      Your feedback is not only a great motivator for me but
                      also a valuable way to help me improve. Every input is
                      greatly valued and contributes to our growth. Lastly, it's
                      a wonderful chance to strengthen our connection.
                    </div>
                    <div className={styles.descriptionValue2}>
                      Thank you for taking the time to share your thoughts and
                      support me! I look forward to further collaborations! Stay
                      Progressive!
                    </div>
                    <div className={styles.btnsContainer}>
                      <div
                        className={styles.btn1Container}
                        onClick={() => {
                          scrollToRef(props.insidePageRefs[1]);
                        }}
                      >
                        <ButtonV1
                          containerW={175}
                          containerH={101}
                          drawRule={"M 1 50 L 115 50 L 115 100 L 1 100 Z"}
                          textContainerW={87}
                          textContainerH={64}
                          text={"Buy me a coffee"}
                          textContainerBackroundColor={"#ffffff"}
                          textColor={"#7794bb"}
                          btnHandler={() =>
                            console.log("buy me a coffee clicked!")
                          }
                        />
                      </div>
                      <div
                        className={styles.btn2Container}
                        onClick={() => {
                          scrollToRef(props.insidePageRefs[2]);
                        }}
                      >
                        <ButtonV1
                          containerW={198}
                          containerH={101}
                          drawRule={"M 1 50 L 115 50 L 115 100 L 1 100 Z"}
                          textContainerW={87}
                          textContainerH={64}
                          text={"Share your feedback"}
                          textContainerBackroundColor={"#ffffff"}
                          textColor={"#eb986c"}
                          btnHandler={() =>
                            console.log("share feedback clicked!")
                          }
                        />
                      </div>
                    </div>
                  </div>
                }
                linehorizonalW={"100%"}
              />
            </div>
          }
          orientation={"row"}
          animationModes={[0, 1]}
          graphicContainerInlineStyle={{}}
        />
      </div>
    </div>
  );
};

export default CoffeePOne;
