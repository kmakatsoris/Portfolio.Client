import React, { useContext } from "react";
import styles from "./ApisPOne_extraSmall_landscape.module.css";
import ContentViewerPatch2 from "../../../modules/components/contentViewer/ContentViewerPatch2";
import ShowUpWithJumpscareEfect from "../../../modules/components/showupViewer/ShowUpWithJumpscareEfect";
import TitleAndContentViewer from "../../../modules/components/contentViewer/TitleAndContentViewer";
import backgroundImgPre from "../../../images/content/General/Production3.png";
import backgroundImgPost from "../../../images/content/General/Production2.png";
import ButtonV1 from "../../../modules/components/buttons/ButtonV1";
import ComingSoonLoader from "../../../modules/components/loaders/ComingSoonLoader";
import { GeneralDataContext } from "../../../services/DataProviders/GeneralDataProvider";

interface ApisPOne_extraSmall_landscapeProps {}

const ApisPOne_extraSmall_landscape = (
  props: ApisPOne_extraSmall_landscapeProps
) => {
  const { setGlassModalInstance, setPrevGlassModalInstance } =
    useContext(GeneralDataContext);

  const _collaborateButtonHandler = () => {
    setGlassModalInstance((prevState: GlassModalDataContract) => {
      setPrevGlassModalInstance(prevState);
      return {
        ...prevState,
        content: (
          <>
            <ComingSoonLoader />
          </>
        ),
        contentW: "50%",
        contentH: "30%",
        isOpen: true,
      };
    });
  };

  const _notifyButtonHandler = () => {
    setGlassModalInstance((prevState: GlassModalDataContract) => {
      setPrevGlassModalInstance(prevState);
      return {
        ...prevState,
        content: (
          <>
            <ComingSoonLoader />
          </>
        ),
        contentW: "50%",
        contentH: "30%",
        isOpen: true,
      };
    });
  };

  return (
    <div className={styles.container}>
      <ContentViewerPatch2
        graphic={
          <ShowUpWithJumpscareEfect
            graphicPre={
              <div className={styles.backgroundImgContainer}>
                <img
                  src={backgroundImgPre}
                  alt="Backround"
                  className={styles.backgroundImg}
                />
              </div>
            }
            graphicTrans={
              <div className={styles.backgroundImgContainer}>
                <img
                  src={backgroundImgPre}
                  alt="Backround"
                  className={styles.backgroundImg}
                />
              </div>
            }
            graphicPost={
              <div className={styles.backgroundImgContainer}>
                <img
                  src={backgroundImgPost}
                  alt="Backround"
                  className={styles.backgroundImg}
                />
              </div>
            }
            intervalTimeTransPre={1500}
            intervalTimeTransPost={800}
            startIndication={true}
          />
        }
        content={
          <TitleAndContentViewer
            title={"Welcome to APIs & Services Page"}
            content={
              <div className={styles.contentContainer}>
                <div className={styles.plainContent}>
                  Welcome to a comprehensive overview of my APIs & Services.
                  You'll discover valuable tools here that may be of use to you.
                  Should any catch your interest for leasing or purchase, it
                  would be my pleasure to assist you.
                </div>
                <div className={styles.collaborationContent}>
                  Additionally, I'm open to discussing any recommendations you
                  may have for additional services. I look forward to the
                  opportunity to collaborate with you.
                </div>
                <div className={styles.notificationContent}>
                  This page is continually updated and will soon be available.
                  You can click the link/button below to select the notification
                  option.
                </div>
                <div className={styles.btnsContainer}>
                  <div className={styles.btn1Container}>
                    <ButtonV1
                      containerW={110}
                      containerH={100}
                      drawRule={"M 1 50 L 115 50 L 115 100 L 1 100 Z"}
                      textContainerW={87}
                      textContainerH={64}
                      text={"Let's Collaborate"}
                      textContainerBackroundColor={"#ffffff"}
                      textColor={"#7794bb"}
                      btnHandler={_collaborateButtonHandler}
                    />
                  </div>
                  <div className={styles.btn2Container}>
                    <ButtonV1
                      containerW={110}
                      containerH={100}
                      drawRule={"M 1 50 L 115 50 L 115 100 L 1 100 Z"}
                      textContainerW={87}
                      textContainerH={64}
                      text={"Notify Me!"}
                      textContainerBackroundColor={"#ffffff"}
                      textColor={"#eb986c"}
                      btnHandler={_notifyButtonHandler}
                    />
                  </div>
                </div>
              </div>
            }
            linehorizonalW={"92%"}
            fontSize="76%"
            marginTitle="5% -10% 3%"
            marginLine="-7px 0% 0px -10%"
            marginContent="-3% 9% 0%"
          />
        }
        orientation={"row"}
        animationModes={[0, 1]}
        graphicContainerInlineStyle={{ margin: "0px 8% 0px 0px" }}
      />
    </div>
  );
};

export default ApisPOne_extraSmall_landscape;
