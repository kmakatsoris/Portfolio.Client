import React, { useContext, useEffect, useState } from "react";
import styles from "./HomePage_Pre_PTwo_extraSmall.module.css";
import ContentViewerPatch5 from "../../../modules/components/contentViewer/ContentViewerPatch5";
import solutionArchitecture_image from "../../../images/content/Solution Architecture.png";
import databaseArchitecture_image from "../../../images/content/Portfolio Database.png";
import phoneIcon from "../../../images/icons/phoneIcon.png";
import emailIcon from "../../../images/icons/emailIcon.png";
import linkedInIcon from "../../../images/icons/linkedInIcon.png";
import github from "../../../images/icons/git-icon.png";
import reside_icon from "../../../images/icons/location.png";
import upwork from "../../../images/icons/upwork-icon.png";
import twitter_icon from "../../../images/icons/twitter_icon.png";
import UnderlineHoverAnimation from "../../../modules/components/animations/UnderlineHoverAnimation";
import { TryGetFromArray } from "../../../services/GeneralPurpose.Service";
import { GeneralDataContext } from "../../../services/DataProviders/GeneralDataProvider";

interface ContactPTwoProps {
  interval?: number;
}

const CONTACT_OPTIONS = [
  emailIcon,
  phoneIcon,
  linkedInIcon,
  github,
  reside_icon,
  upwork,
  twitter_icon,
];
const CONTACT_DETAILS = [
  "kpmakatsoris@gmail.com",
  "+30 6976531119 (@Greece)",
  "https://www.linkedin.com/in/kpmakatsoris",
  "https://github.com/kmakatsoris",
  `- Greece, Athens; - Netherland, Amsterdam`,
  "https://www.upwork.com/freelancers/~0158e57696bf144e7e",
  "https://x.com/kpmakatsoris",
];
const VIEW_OPTIONS = [solutionArchitecture_image, databaseArchitecture_image];

const HomePage_Pre_PTwo_extraSmall = (props: ContactPTwoProps) => {
  const { setGlassModalInstance, setPrevGlassModalInstance } =
    useContext(GeneralDataContext);
  const INTERVAL = props.interval ?? 10 * 1000; // 10 seconds
  const [viewIdx, setViewIdx] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewIdx((prevStep: number) => (prevStep + 1) % VIEW_OPTIONS.length);
    }, INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const onClickIconHandler = (idx: number) => {
    setGlassModalInstance((prevState: GlassModalDataContract) => {
      setPrevGlassModalInstance(prevState);
      return {
        ...prevState,
        content: (
          <>
            <div className={styles.iconDetail}>
              {idx === 4 ? (
                <div>
                  {TryGetFromArray(
                    TryGetFromArray(CONTACT_DETAILS, idx)?.split(";"),
                    0
                  ) ?? ""}
                  <br />
                  {TryGetFromArray(
                    TryGetFromArray(CONTACT_DETAILS, idx)?.split(";"),
                    1
                  ) ?? ""}
                </div>
              ) : (
                TryGetFromArray(CONTACT_DETAILS, idx) ?? ""
              )}
            </div>
          </>
        ),
        contentW: "400px",
        contentH: "200px",
        isOpen: true,
      };
    });
  };

  return (
    <div className={styles.container}>
      <ContentViewerPatch5
        titleItem={<></>}
        viewItem={
          <img
            key={viewIdx}
            src={
              TryGetFromArray(VIEW_OPTIONS, viewIdx) ??
              solutionArchitecture_image
            }
            className={styles.viewItem}
            alt="View"
          />
        }
        labelItem={
          <div className={styles.contactIconsContainer}>
            {CONTACT_OPTIONS.map((icon: any, idx: number) => (
              <UnderlineHoverAnimation
                key={idx}
                children={
                  <img
                    src={icon}
                    alt="icon"
                    className={styles.contactIcon}
                    onClick={() => onClickIconHandler(idx)}
                  />
                }
                width={"45px"}
                margin={"0px 8% 0px 0px"}
                backgroundColor={"#ffffff"}
                hoverWidth={"60px"}
              />
            ))}
          </div>
        }
      />
    </div>
  );
};

export default HomePage_Pre_PTwo_extraSmall;
