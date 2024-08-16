import React, { useContext } from "react";
import styles from "./ContactPOne.module.css";
import phoneIcon from "../../images/icons/phoneIcon.png";
import emailIcon from "../../images/icons/emailIcon.png";
import linkedInIcon from "../../images/icons/linkedInIcon.png";
import reside_icon from "../../images/icons/location.png";
import UnderlineHoverAnimation from "../../modules/components/animations/UnderlineHoverAnimation";
import ContactBG from "../../images/content/Production26.png";
import leftCloudImage from "../../images/content/LeftCloud.png";
import rightCloudImage from "../../images/content/RightCloud.png";
import instagramObjectIcon from "../../images/content/instagram.png";
import messengerObjectIcon from "../../images/content/MessengerObjectIcon_161_168.png";
import linkedInObjectIcon from "../../images/content/LinkedInObjectIcon_161_168.png";
import twitterObjectIcon from "../../images/content/TwitterObjectIcon_161_168.png";
import RenderWithDelay from "../../modules/components/showupViewer/RenderWithDelay";
import { GeneralDataContext } from "../../services/DataProviders/GeneralDataProvider";
import { TryGetFromArray } from "../../services/GeneralPurpose.Service";

interface ContactPOneProps {}

const CONTACT_OPTIONS = [phoneIcon, emailIcon, linkedInIcon, reside_icon];
const CONTACT_DETAILS = [
  "+30 6976531119 (@Greece)",
  "kpmakatsoris@gmail.com",
  "https://www.linkedin.com/in/kpmakatsoris",
  "Greece, Athens Or Netherland, Amsterdam",
];
const HASHTAG_TEXT: string = "#Welcome_To_Contact_&_Collaboration_Page"; // @TODO: Fetch
const QUOTE =
  "Connecting minds, sharing visions. Let's start a conversation. Reach out and let's create something extraordinary together!"; // @TODO: Fetch

const ContactPOne = (props: ContactPOneProps) => {
  const { setGlassModalInstance, setPrevGlassModalInstance } =
    useContext(GeneralDataContext);

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
          <div className={styles.quoteAndContactIconsContainer}>
            <div className={styles.quoteContainer}>
              <div className={styles.quote}>{QUOTE}</div>
            </div>
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
                  margin={"0px 8% 0px 0px"}
                  backgroundColor={"#ffffff"}
                  hoverWidth={"60px"}
                />
              ))}
            </div>
          </div>

          <div className={styles.graphicContainer}>
            {/* Model Image */}
            <RenderWithDelay
              key={"Model"}
              content={
                <img
                  src={ContactBG}
                  alt="Model"
                  className={styles.backgroundImg}
                />
              }
              interval={1000}
              mode={2}
              transitionDistance={"100%"}
            />

            {/* Clouds */}
            <RenderWithDelay
              key={"Left Cloud"}
              content={
                <img
                  src={leftCloudImage}
                  alt="Left Cloud"
                  className={styles.leftCloudImage}
                />
              }
              interval={500}
              mode={0}
              transitionDistance={"-100%"}
            />
            <RenderWithDelay
              key={"Right Cloud"}
              content={
                <img
                  src={rightCloudImage}
                  alt="Right Cloud"
                  className={styles.rightCloudImage}
                />
              }
              interval={500}
              mode={1}
              transitionDistance={"100%"}
            />

            {/* Contact Icons */}
            <RenderWithDelay
              key={"Instagram"}
              content={
                <img
                  src={instagramObjectIcon}
                  alt="Instagram"
                  className={styles.instagramObjectIcon}
                  onClick={() =>
                    iconDetailsClickHandler("Oops..not available! 😜")
                  }
                />
              }
              interval={1500}
              mode={1}
              transitionDistance={"400%"}
            />
            <RenderWithDelay
              key={"Messenger"}
              content={
                <img
                  src={messengerObjectIcon}
                  alt="Messenger"
                  className={styles.messengerObjectIcon}
                  onClick={() =>
                    iconDetailsClickHandler("Oops..not available! 😜")
                  }
                />
              }
              interval={1500}
              mode={0}
              transitionDistance={"-400%"}
            />
            <RenderWithDelay
              key={"LinkedIn"}
              content={
                <img
                  src={linkedInObjectIcon}
                  alt="LinkedIn"
                  className={styles.linkedInObjectIcon}
                  onClick={() =>
                    iconDetailsClickHandler(
                      "https://www.linkedin.com/in/kpmakatsoris"
                    )
                  }
                />
              }
              interval={1500}
              mode={0}
              transitionDistance={"-400%"}
            />
            <RenderWithDelay
              key={"Twitter"}
              content={
                <img
                  src={twitterObjectIcon}
                  alt="Twitter"
                  className={styles.twitterObjectIcon}
                  onClick={() =>
                    iconDetailsClickHandler("https://x.com/kpmakatsoris")
                  }
                />
              }
              interval={1500}
              mode={1}
              transitionDistance={"400%"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPOne;
