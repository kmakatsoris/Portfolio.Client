import React from "react";
import styles from "./SkillsDetailsPOne_extraSmall.module.css";
import ContentViewerPatch2 from "../../../modules/components/contentViewer/ContentViewerPatch2";
import ShowUpWithJumpscareEfect from "../../../modules/components/showupViewer/ShowUpWithJumpscareEfect";
import TitleAndContentViewer from "../../../modules/components/contentViewer/TitleAndContentViewer";
import backgroundImgPre from "../../../images/content/General/Production3.png";
import backgroundImgPost from "../../../images/content/General/Production2.png";
import ButtonV1 from "../../../modules/components/buttons/ButtonV1";

interface SkillsDetailsPOne_extraSmallProps {}

const SkillsDetailsPOne_extraSmall = (
  props: SkillsDetailsPOne_extraSmallProps
) => {
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
            title={"Welcome to the <FETCH-NAME> Skill Details Page."}
            content={
              <div className={styles.contentContainer}>
                <div className={styles.plainContent}>
                  Here, you'll find a comprehensive overview of my expertise in
                  the
                  {"<FETCH-NAME>"} skill. Additionally, you may find interesting
                  some demos and examples showcasing the use of this skill. If
                  any of these catch your interest, I'd be happy to discuss them
                  further.
                </div>
                <div className={styles.collaborationContent}>
                  I’m also open to any suggestions you may have for further
                  enhancing my skills. I look forward to the opportunity to
                  collaborate with you.
                </div>
                <div className={styles.notificationContent}>
                  This page is currently being updated and will be available
                  soon. Thank you for your patience!
                </div>
              </div>
            }
            linehorizonalW={"80%"}
            fontSize="100%"
            marginTitle="-140% 9% 3%"
            marginLine="0px 0% 0px 8%"
            marginContent="-3% 9% 0%"
          />
        }
        orientation={"column"}
        animationModes={[0, 1]}
        graphicContainerInlineStyle={{ margin: "0px 8% 0px 0px" }}
      />
    </div>
  );
};

export default SkillsDetailsPOne_extraSmall;
