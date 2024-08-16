import React, { useContext } from "react";
import styles from "./CoffeePTwo.module.css";
import ContentViewerPatch2 from "../../modules/components/contentViewer/ContentViewerPatch2";
import TitleAndContentViewer from "../../modules/components/contentViewer/TitleAndContentViewer";
import backgroundImg from "../../images/content/Production24.png";
import InfiniteRender from "../../modules/components/showupViewer/InfiniteRender";
import ShowUpWithJumpscareEfect from "../../modules/components/showupViewer/ShowUpWithJumpscareEfect";
import TypingTextAnimation from "../../modules/components/animations/TypingTextAnimation";
import ButtonV1 from "../../modules/components/buttons/ButtonV1";
import ContentViewerPatch3 from "../../modules/components/contentViewer/ContentViewerPatch3";
import ComingSoonLoader from "../../modules/components/loaders/ComingSoonLoader";
import { GeneralDataContext } from "../../services/DataProviders/GeneralDataProvider";

interface CoffeePTwoProps {}

const CoffeePTwo = (props: CoffeePTwoProps) => {
  const { setGlassModalInstance, setPrevGlassModalInstance } =
    useContext(GeneralDataContext);

  const _btnHandler = () => {
    setGlassModalInstance((prevState: GlassModalDataContract) => {
      setPrevGlassModalInstance(prevState);
      return {
        ...prevState,
        content: (
          <>
            <ComingSoonLoader />
          </>
        ),
        isOpen: true,
      };
    });
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
                    <div className={styles.backgroundImgValueContainer}>
                      <img
                        src={backgroundImg}
                        alt="Backround"
                        className={styles.backgroundImg}
                      />
                    </div>
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
                title={"Grateful for the coffee boost! Thank you!"}
                content={
                  <div className={styles.descriptionValueContainer}>
                    <div className={styles.descriptionValue0}>
                      I'm grateful for your appreciation of my work and for
                      supporting my overall goals.
                    </div>
                    <div className={styles.descriptionValue1}>
                      Thank you for your donation.
                    </div>
                    <div className={styles.descriptionValue2}>
                      Perhaps, if the circumstances align, we may even have the
                      opportunity to enjoy this coffee together.
                    </div>
                    <div className={styles.descriptionValue3}>
                      Thank you once again, and may you find joy in all your
                      endeavors.
                    </div>
                    <div className={styles.btnsContainer}>
                      <div className={styles.btn1Container}>
                        <ButtonV1
                          containerW={175}
                          containerH={101}
                          drawRule={"M 1 50 L 115 50 L 115 100 L 1 100 Z"}
                          textContainerW={87}
                          textContainerH={64}
                          text={"Buy me a coffee"}
                          textContainerBackroundColor={"#ffffff"}
                          textColor={"#7794bb"}
                          btnHandler={_btnHandler}
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
          animationModes={[4, 5]}
          graphicContainerInlineStyle={{}}
        />
      </div>
    </div>
  );
};

export default CoffeePTwo;
