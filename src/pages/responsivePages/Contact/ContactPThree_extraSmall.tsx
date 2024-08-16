import React, { useContext } from "react";
import styles from "./ContactPThree_extraSmall.module.css";
import phoneIcon from "../../../images/icons/phoneIcon.png";
import emailIcon from "../../../images/icons/emailIcon.png";
import linkedInIcon from "../../../images/icons/linkedInIcon.png";
import socialMediaIcon from "../../../images/icons/socialMediaIcon.png";
import UnderlineHoverAnimation from "../../../modules/components/animations/UnderlineHoverAnimation";
import MetaDataViewerScheduler from "../../../modules/components/detailsViewer/MetaDataViewerScheduler";
import leftImg from "../../../images/content/storySet1_Edited_800_600.png";
import rightImg from "../../../images/content/storySet2_Edited_800_600.png";
import { GeneralDataContext } from "../../../services/DataProviders/GeneralDataProvider";
import HoverComponentPatch1 from "../../../modules/components/showupViewer/HoverComponentPatch1";
import ComingSoonLoader from "../../../modules/components/loaders/ComingSoonLoader";

interface ContactPThree_extraSmallProps {}

const CONTACT_OPTIONS = [phoneIcon, emailIcon, linkedInIcon, socialMediaIcon];
const HASHTAG_TEXT: string = "#You_Call_the_Shots"; // @TODO: Fetch
// const QUOTE_EXAMPLE = "Connecting minds, sharing visions. Let's start a conversation. Reach out and let's create something extraordinary together!"; // @TODO: Fetch

const ContactPThree_extraSmall = (props: ContactPThree_extraSmallProps) => {
  const {
    setMetaDataContentKey,
    setGlassModalInstance,
    setPrevGlassModalInstance,
  } = useContext(GeneralDataContext);

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
                key={"Hired"}
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
                hoverTop={"70%"}
                hoverLeft={"30%"}
                hoverRight={""}
                hoverBottom={""}
                hoverW={"314px"}
                hoverH={"80px"}
                borderColor={"#EB986C"}
                isAlwayesOpen={true}
              />
            }
            infoImgWidth={25}
            animationMode={0}
            onClickMetaDataViewerSchedulerSelectedIdHandler={() =>
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
                  contentH: "50%",
                  isOpen: true,
                };
              })
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
                    className={styles.contactIcon}
                  />
                }
                width={"50px"}
                margin={"0% 5% 0px 0%"}
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
                key={"Partners"}
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
                hoverTop={"15%"}
                hoverLeft={"30%"}
                hoverRight={""}
                hoverBottom={""}
                hoverW={"316px"}
                hoverH={"80px"}
                borderColor={"#EB986C"}
                isAlwayesOpen={true}
              />
            }
            infoImgWidth={25}
            animationMode={0}
            onClickMetaDataViewerSchedulerSelectedIdHandler={() =>
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
                  contentH: "50%",
                  isOpen: true,
                };
              })
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

export default ContactPThree_extraSmall;
