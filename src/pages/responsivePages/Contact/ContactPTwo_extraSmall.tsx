import React from "react";
import styles from "./ContactPTwo_extraSmall.module.css";
import phoneIcon from "../../../images/icons/phoneIcon.png";
import emailIcon from "../../../images/icons/emailIcon.png";
import linkedInIcon from "../../../images/icons/linkedInIcon.png";
import socialMediaIcon from "../../../images/icons/socialMediaIcon.png";
import UnderlineHoverAnimation from "../../../modules/components/animations/UnderlineHoverAnimation";
import backgroundImg from "../../../images/content/HomePagePTwoPage.Sec1/contacts/4.png";

interface ContactPTwo_extraSmallProps {}

const CONTACT_OPTIONS = [phoneIcon, emailIcon, linkedInIcon, socialMediaIcon];
const HASHTAG_TEXT: string = "#Personal_Synopsis"; // @TODO: Fetch
const ΤΕΧΤ_1 =
  "Greetings, everyone! I'm KONSTANTINOS MAKATSORIS, a passionate developer driven by a hunger for innovation and collaboration. With a keen eye for detail and a relentless pursuit of excellence, I embark on each project with unwavering enthusiasm and dedication."; // @TODO: Fetch HTML Coming Change
const ΤΕΧΤ_2 =
  "As you explore this corner of my digital domain, I extend an open invitation to connect and engage. Whether you're seeking to collaborate on exciting ventures, share common interests, or simply exchange ideas, I welcome the opportunity to embark on this journey together."; // @TODO: Fetch HTML Coming Change
const ΤΕΧΤ_3 =
  "It would be my utmost pleasure to hear from you. Let's bridge our passions and expertise to create something truly remarkable. Don't hesitate to reach out. I eagerly await the prospect of connecting with like-minded individuals and embarking on transformative journeys together."; // @TODO: Fetch HTML Coming Change

const ContactPTwo_extraSmall = (props: ContactPTwo_extraSmallProps) => {
  return (
    <div className={styles.container}>
      {/** HashTag Container */}
      <div className={styles.hashtagContainer}>{HASHTAG_TEXT}</div>

      {/** Main Container */}
      <div className={styles.containerBackground}>
        <div className={styles.subContainer}>
          {/** Graphic Container 
          <div className={styles.graphicContainer}>
            <img src={backgroundImg} alt="icon" className={styles.graphicImg} />
          </div>*/}

          {/** Texts Container */}
          <div className={styles.textAndContactIconsContainer}>
            <div className={styles.textContainer}>
              <div className={styles.text1}>{ΤΕΧΤ_1}</div>
              <div className={styles.text2}>{ΤΕΧΤ_2}</div>
              <div className={styles.text3}>{ΤΕΧΤ_3}</div>
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
        </div>
      </div>
    </div>
  );
};

export default ContactPTwo_extraSmall;
