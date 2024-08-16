import React, { useContext, useEffect, useState } from "react";
import styles from "./HomePagePThree.module.css";
import ContentViewerPatch2 from "../../modules/components/contentViewer/ContentViewerPatch2";
import ContentViewerPatch3 from "../../modules/components/contentViewer/ContentViewerPatch3";
import TitleAndContentViewer from "../../modules/components/contentViewer/TitleAndContentViewer";
import MetaDataViewerScheduler from "../../modules/components/detailsViewer/MetaDataViewerScheduler";
import { GeneralDataContext } from "../../services/DataProviders/GeneralDataProvider";
import { MakeApiCall } from "../../services/HttpServices/httpService";
import {
  ExtractConnectionStringValue,
  LoadAppsettingEndpoints,
} from "../../services/GeneralPurpose.Service";
import { UserDataContext } from "../../services/DataProviders/UserDataProvider";

interface HomePagePThreeProps {}

const HomePagePThree = (props: HomePagePThreeProps) => {
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
            renderPath: "ContactsPage",
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
              title={"Welcome to my Portfolio"}
              content={
                <div className={styles.textsContainer}>
                  <div className={styles.text1Container}>
                    <span className={styles.textFocus}>
                      Hello and welcome to my portfolio!
                    </span>
                    Here, you'll discover a wealth of information about my
                    skills, projects, and experiences. From innovative web
                    development to cutting-edge artificial intelligence, I'm
                    excited to showcase my expertise and share my journey with
                    you. Whether you're here to explore my work or learn more
                    about my background, I hope you find inspiration and
                    insight. Thank you for visiting!
                  </div>
                  <div className={styles.text2Container}>
                    As you navigate through my portfolio, you'll find detailed
                    insights into the projects I've undertaken, highlighting my
                    problem-solving abilities and creative approach. From
                    concept to execution, each endeavor reflects my dedication
                    to excellence and my passion for pushing the boundaries of
                    what's possible. Whether you're a fellow professional, a
                    potential collaborator, or simply curious about my work,{" "}
                    <span className={styles.textFocus}>
                      invite you to delve deeper and explore the diverse range
                      of projects showcased here. Thank you for your interest,
                      and I look forward to connecting with you!
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
                setMetaDataContentKey("Production52");
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

export default HomePagePThree;
