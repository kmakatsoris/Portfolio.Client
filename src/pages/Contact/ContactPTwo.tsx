import React, { useContext } from "react";
import styles from "./ContactPTwo.module.css";
import phoneIcon from "../../images/icons/phoneIcon.png";
import emailIcon from "../../images/icons/emailIcon.png";
import linkedInIcon from "../../images/icons/linkedInIcon.png";
import reside_icon from "../../images/icons/location.png";
import UnderlineHoverAnimation from "../../modules/components/animations/UnderlineHoverAnimation";
import backgroundImg from "../../images/content/HomePagePTwoPage.Sec1/contacts/4.png";
import { TryGetFromArray } from "../../services/GeneralPurpose.Service";
import { GeneralDataContext } from "../../services/DataProviders/GeneralDataProvider";

interface ContactPTwoProps {}

const CONTACT_OPTIONS = [phoneIcon, emailIcon, linkedInIcon, reside_icon];
const HASHTAG_TEXT: string = "#Personal_Synopsis"; // @TODO: Fetch
const ΤΕΧΤ_1 =
  "Greetings, everyone! I'm KONSTANTINOS MAKATSORIS, a passionate developer driven by a hunger for innovation and collaboration. With a keen eye for detail and a relentless pursuit of excellence, I embark on each project with unwavering enthusiasm and dedication."; // @TODO: Fetch HTML Coming Change
const ΤΕΧΤ_2 =
  "As you explore this corner of my digital domain, I extend an open invitation to connect and engage. Whether you're seeking to collaborate on exciting ventures, share common interests, or simply exchange ideas, I welcome the opportunity to embark on this journey together."; // @TODO: Fetch HTML Coming Change
const ΤΕΧΤ_3 =
  "It would be my utmost pleasure to hear from you. Let's bridge our passions and expertise to create something truly remarkable. Don't hesitate to reach out. I eagerly await the prospect of connecting with like-minded individuals and embarking on transformative journeys together."; // @TODO: Fetch HTML Coming Change
const CONTACT_DETAILS = [
  "+30 6976531119 (@Greece)",
  "kpmakatsoris@gmail.com",
  "https://www.linkedin.com/in/kpmakatsoris",
  "Greece, Athens Or Netherland, Amsterdam",
];

const ContactPTwo = (props: ContactPTwoProps) => {
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
            <img src={backgroundImg} alt="icon" className={styles.graphicImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPTwo;
