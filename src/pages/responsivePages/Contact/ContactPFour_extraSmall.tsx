import React, { useContext } from "react";
import styles from "./ContactPFour_extraSmall.module.css";
import phoneIcon from "../../../images/icons/phoneIcon.png";
import emailIcon from "../../../images/icons/emailIcon.png";
import linkedInIcon from "../../../images/icons/linkedInIcon.png";
import socialMediaIcon from "../../../images/icons/socialMediaIcon.png";
import UnderlineHoverAnimation from "../../../modules/components/animations/UnderlineHoverAnimation";
import graphicImg from "../../../images/content/storySet4.jpg";
import MetaDataViewerScheduler from "../../../modules/components/detailsViewer/MetaDataViewerScheduler";
import { GeneralDataContext } from "../../../services/DataProviders/GeneralDataProvider";

interface ContactPFour_extraSmallProps {}

const CONTACT_OPTIONS = [phoneIcon, emailIcon, linkedInIcon, socialMediaIcon];
const HASHTAG_TEXT: string = "#Alternatively_Feel_Free_To_Send."; // @TODO: Fetch
const ΤΕΧΤ = "Alternatively, feel free to send for any other reason."; // @TODO: Fetch HTML Coming Change
const ContactPFour_extraSmall = (props: ContactPFour_extraSmallProps) => {
  const { setMetaDataContentKey } = useContext(GeneralDataContext);
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
                    <img src={icon} alt="icon" className={styles.contactIcon} />
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

export default ContactPFour_extraSmall;
