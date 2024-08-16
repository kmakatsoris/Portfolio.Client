import React, { useContext } from "react";
import styles from "./ContactPThree.module.css";
import phoneIcon from "../../images/icons/phoneIcon.png";
import emailIcon from "../../images/icons/emailIcon.png";
import linkedInIcon from "../../images/icons/linkedInIcon.png";
import reside_icon from "../../images/icons/location.png";
import UnderlineHoverAnimation from "../../modules/components/animations/UnderlineHoverAnimation";
import MetaDataViewerScheduler from "../../modules/components/detailsViewer/MetaDataViewerScheduler";
import leftImg from "../../images/content/storySet1_Edited_800_600.png";
import rightImg from "../../images/content/storySet2_Edited_800_600.png";
import { GeneralDataContext } from "../../services/DataProviders/GeneralDataProvider";
import HoverComponentPatch1 from "../../modules/components/showupViewer/HoverComponentPatch1";
import { TryGetFromArray } from "../../services/GeneralPurpose.Service";

interface ContactPThreeProps {}

const CONTACT_OPTIONS = [phoneIcon, emailIcon, linkedInIcon, reside_icon];
const HASHTAG_TEXT: string = "#You_Call_the_Shots"; // @TODO: Fetch
// const QUOTE_EXAMPLE = "Connecting minds, sharing visions. Let's start a conversation. Reach out and let's create something extraordinary together!"; // @TODO: Fetch
const CONTACT_DETAILS = [
  "+30 6976531119 (@Greece)",
  "kpmakatsoris@gmail.com",
  "https://www.linkedin.com/in/kpmakatsoris",
  "Greece, Athens Or Netherland, Amsterdam",
];

const ContactPThree = (props: ContactPThreeProps) => {
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
      <div className={styles.subContainer}>
        {/** Graphic Container Left */}
        <div className={styles.graphicContainerLeft}>
          <MetaDataViewerScheduler
            defaultComponent={
              <HoverComponentPatch1
                contentWithoutHover={
                  <img
                    src={leftImg}
                    alt="Get Hired Content"
                    className={styles.leftImg}
                  />
                }
                contentWithHover={
                  <div className={styles.hoverLeftImg}>Get Hired!</div>
                }
                hoverTop={"42%"}
                hoverLeft={"28%"}
                hoverRight={""}
                hoverBottom={""}
                hoverW={"400px"}
                hoverH={"80px"}
                borderColor={"#EB986C"}
              />
            }
            infoImgWidth={25}
            animationMode={0}
            onClickMetaDataViewerSchedulerSelectedIdHandler={() =>
              console.log("Clikced!")
            }
            onClickInfoHandler={() => {
              setMetaDataContentKey("contactsPageThree/leftImg");
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

        {/** Contact Container */}
        <div className={styles.contactContainer}>
          <div className={styles.contactIconsContainer}>
            {CONTACT_OPTIONS.map((icon: any, idx: number) => (
              <UnderlineHoverAnimation
                key={idx}
                children={
                  <img
                    key={idx}
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
                margin={"0% 0% 0px 0px"}
                backgroundColor={"#ffffff"}
                hoverWidth={"60px"}
              />
            ))}
          </div>
        </div>

        {/** Graphic Container Right */}
        <div className={styles.graphicContainerRight}>
          <MetaDataViewerScheduler
            defaultComponent={
              <HoverComponentPatch1
                contentWithoutHover={
                  <img
                    src={rightImg}
                    alt="Be Partners Content"
                    className={styles.leftImg}
                  />
                }
                contentWithHover={
                  <div className={styles.hoverLeftImg}>Be Partners!</div>
                }
                hoverTop={"42%"}
                hoverLeft={"28%"}
                hoverRight={""}
                hoverBottom={""}
                hoverW={"400px"}
                hoverH={"80px"}
                borderColor={"#EB986C"}
              />
            }
            infoImgWidth={25}
            animationMode={0}
            onClickMetaDataViewerSchedulerSelectedIdHandler={() =>
              console.log("Clikced!")
            }
            onClickInfoHandler={() => {
              setMetaDataContentKey("contactsPageThree/rightImg");
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
  );
};

export default ContactPThree;
