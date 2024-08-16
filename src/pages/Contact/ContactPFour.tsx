import React, { useContext } from "react";
import styles from "./ContactPFour.module.css";
import phoneIcon from "../../images/icons/phoneIcon.png";
import emailIcon from "../../images/icons/emailIcon.png";
import linkedInIcon from "../../images/icons/linkedInIcon.png";
import reside_icon from "../../images/icons/location.png";
import UnderlineHoverAnimation from "../../modules/components/animations/UnderlineHoverAnimation";
import graphicImg from "../../images/content/storySet4.jpg";
import MetaDataViewerScheduler from "../../modules/components/detailsViewer/MetaDataViewerScheduler";
import { GeneralDataContext } from "../../services/DataProviders/GeneralDataProvider";
import { TryGetFromArray } from "../../services/GeneralPurpose.Service";

interface ContactPFourProps {}

const CONTACT_OPTIONS = [phoneIcon, emailIcon, linkedInIcon, reside_icon];
const HASHTAG_TEXT: string = "#Alternatively_Feel_Free_To_Send."; // @TODO: Fetch
const ΤΕΧΤ = "Alternatively, feel free to send for any other reason."; // @TODO: Fetch HTML Coming Change
const CONTACT_DETAILS = [
  "+30 6976531119 (@Greece)",
  "kpmakatsoris@gmail.com",
  "https://www.linkedin.com/in/kpmakatsoris",
  "Greece, Athens Or Netherland, Amsterdam",
];

const ContactPFour = (props: ContactPFourProps) => {
  const {
    setMetaDataContentKey,
    setGlassModalInstance,
    setPrevGlassModalInstance,
  } = useContext(GeneralDataContext);

  const iconDetailsClickHandler = (t: string) => {
    setGlassModalInstance((prevState: GlassModalDataContract) => {
      setPrevGlassModalInstance(prevState);
      return {
        ...prevState,
        content: <>{t}</>,
        contentW: "50%",
        contentH: "50%",
        isOpen: true,
      };
    });
  };
  return (
    <div className={styles.container}>
      {/** HashTag Container */}
      <div className={styles.hashtagContainer}>{HASHTAG_TEXT}</div>

      {/** Main Container */}
      <div className={styles.containerBackground}>
        <div className={styles.subContainer}>
          <div className={styles.textAndContactIconsContainer}>
            <div className={styles.textContainer}>
              <div className={styles.text}>{ΤΕΧΤ}</div>
            </div>
            <div className={styles.contactIconsContainer}>
              {CONTACT_OPTIONS.map((icon: any, idx: number) => (
                <UnderlineHoverAnimation
                  key={idx}
                  children={
                    <img
                      src={icon}
                      alt="icon"
                      onClick={() =>
                        iconDetailsClickHandler(
                          TryGetFromArray(CONTACT_DETAILS, idx) ?? ""
                        )
                      }
                      className={styles.contactIcon}
                    />
                  }
                  width={"45px"}
                  margin={"0px 8% 0px 0px"}
                  backgroundColor={"#ffffff"}
                  hoverWidth={"60px"}
                />
              ))}
            </div>
          </div>
          <div className={styles.graphicContainer}>
            <MetaDataViewerScheduler
              defaultComponent={
                <img
                  src={graphicImg}
                  alt="Graphic Content"
                  className={styles.graphicImg}
                />
              }
              infoImgWidth={25}
              animationMode={0}
              onClickMetaDataViewerSchedulerSelectedIdHandler={() =>
                console.log("Clikced!")
              }
              onClickInfoHandler={() => {
                setMetaDataContentKey("contactsPageFour/graphicImg");
              }}
              titleFontSize={"30px"}
              textFontSize={"20px"}
              titleContainerMarginBottom={"20px"}
              lineHorizontalMarginBottom={"20px"}
              leftActionWidth={"15px"}
              rightActionWidth={"15px"}
              enumerationTextFontSize={"18px"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPFour;
