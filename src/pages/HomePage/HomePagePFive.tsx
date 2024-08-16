import React, { useContext, useEffect, useState } from "react";
import styles from "./HomePagePFive.module.css";
import ContentViewerPatch2 from "../../modules/components/contentViewer/ContentViewerPatch2";
import ContentViewerPatch3 from "../../modules/components/contentViewer/ContentViewerPatch3";
// import backgroundImgOriginal from "../../images/content/Skills_1350_897.png";
import TitleAndContentViewer from "../../modules/components/contentViewer/TitleAndContentViewer";
import MetaDataViewerScheduler from "../../modules/components/detailsViewer/MetaDataViewerScheduler";
import { GeneralDataContext } from "../../services/DataProviders/GeneralDataProvider";
import {
  ExtractConnectionStringValue,
  LoadAppsettingEndpoints,
} from "../../services/GeneralPurpose.Service";
import { MakeApiCall } from "../../services/HttpServices/httpService";
import { UserDataContext } from "../../services/DataProviders/UserDataProvider";

interface HomePagePFiveProps {}

const HomePagePFive = (props: HomePagePFiveProps) => {
  const { setMetaDataContentKey } = useContext(GeneralDataContext);
  const { token } = useContext(UserDataContext);
  const [endpointsAppsettings, setEndpointsAppsettings] =
    useState<Endpoints | null>(null);
  const [backgroundImg, setBackgroundImg] = useState<string>("");

  // Http Call Use Effect,
  useEffect(() => {
    const _getEndpoints: () => Promise<Endpoints> =
      async (): Promise<Endpoints> => {
        if (!endpointsAppsettings) {
          let endpoints = await LoadAppsettingEndpoints();
          setEndpointsAppsettings(endpoints);
          return endpoints;
        }
        return endpointsAppsettings;
      };
    const fetchProfileImg = async () => {
      try {
        const baseUrl = (
          await ExtractConnectionStringValue("CMS_Strapi_Connection")
        )?.BaseUrl;
        const endpoints: Endpoints = await _getEndpoints();
        const profileImgData: CMS_Strapi_Basic_Res = await MakeApiCall({
          endpoint: endpoints.CMS_Strapi.Find,
          method: "POST",
          token: token,
          body: {
            title: "0",
            renderPath: "SkillsPage",
            enSync: true,
          },
        });
        setBackgroundImg(baseUrl + profileImgData?.previewDataDTO?.url);
      } catch (error) {
        console.error("Error fetching profile image:", error);
      }
    };

    fetchProfileImg();
  }, [token]);

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <ContentViewerPatch2
          graphic={
            <TitleAndContentViewer
              title={"Welcome to my Skills & Achievements."}
              content={
                <div className={styles.textsContainer}>
                  <div className={styles.text1Container}>
                    Here, I'm thrilled to
                    <span className={styles.textFocus}>
                      showcase the culmination of my dedication, hard work, and
                      passion.
                    </span>
                    Within these pages, you'll find a comprehensive overview of
                    my technical proficiencies, ranging from programming
                    languages to specialized tools and frameworks. Each skill
                    represents a milestone in my journey, honed through hands-on
                    experience and a commitment to continuous learning.
                  </div>
                  <div className={styles.text2Container}>
                    In addition to my skills, this section highlights some of my
                    notable achievements and accomplishments. From successful
                    projects and innovative solutions to recognition and awards,
                    each achievement reflects my dedication to excellence and my
                    ability to deliver impactful results. I invite you to
                    explore this section and discover how my skills and
                    achievements can contribute to your projects and
                    initiatives.
                  </div>
                  <div className={styles.text2Container}>
                    <span className={styles.textFocus}>
                      Moreover, I'm enthusiastic about fostering a collaborative
                      environment where we can explore the ever-evolving
                      technological landscape together and collectively grow our
                      skills. I firmly believe in the power of collaboration and
                      knowledge-sharing to propel innovation and drive
                      meaningful progress.
                    </span>
                    By working together, exchanging ideas, and supporting each
                    other's growth, we can navigate the complexities of the tech
                    industry with enthusiasm and curiosity. It would bring me
                    great joy to embark on this journey alongside fellow
                    enthusiasts, united in our pursuit of excellence and driven
                    by our shared passion for technology.
                    <span className={styles.textFocus}>
                      Feel free to reach out if you have any questions or would
                      like to engage with me on future
                    </span>
                  </div>
                </div>
              }
              linehorizonalW={"100%"}
            />
          }
          content={
            <MetaDataViewerScheduler
              defaultComponent={
                <ContentViewerPatch3
                  content={<></>}
                  graphic={
                    <img
                      src={backgroundImg}
                      alt="Backround"
                      className={styles.backgroundImg}
                    />
                  }
                  backgroundImgOpacity={100}
                  backgroundImgBlur={0}
                />
              }
              infoImgWidth={25}
              animationMode={0}
              onClickMetaDataViewerSchedulerSelectedIdHandler={() =>
                console.log("Clikced!")
              }
              onClickInfoHandler={() => {
                setMetaDataContentKey("Skills_1350_897");
              }}
              titleFontSize={"30px"}
              textFontSize={"20px"}
              titleContainerMarginBottom={"20px"}
              lineHorizontalMarginBottom={"20px"}
              leftActionWidth={"15px"}
              rightActionWidth={"15px"}
              enumerationTextFontSize={"18px"}
            />
          }
          orientation={"row"}
          animationModes={[0, 1]}
          graphicContainerInlineStyle={{ margin: "0px 8% 0px 0px" }}
        />
      </div>
    </div>
  );
};

export default HomePagePFive;
