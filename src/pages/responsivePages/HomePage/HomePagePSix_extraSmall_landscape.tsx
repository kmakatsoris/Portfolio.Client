import React, { useContext, useEffect, useState } from "react";
import styles from "./HomePagePSix_extraSmall_landscape.module.css";
import ContentViewerPatch2 from "../../../modules/components/contentViewer/ContentViewerPatch2";
import ContentViewerPatch3 from "../../../modules/components/contentViewer/ContentViewerPatch3";
// import backgroundImg from "../../../images/content/Projects_1350_897.png";
import TitleAndContentViewer from "../../../modules/components/contentViewer/TitleAndContentViewer";
import { GeneralDataContext } from "../../../services/DataProviders/GeneralDataProvider";
import MetaDataViewerScheduler from "../../../modules/components/detailsViewer/MetaDataViewerScheduler";
import { MakeApiCall } from "../../../services/HttpServices/httpService";
import {
  ExtractConnectionStringValue,
  LoadAppsettingEndpoints,
} from "../../../services/GeneralPurpose.Service";
import { UserDataContext } from "../../../services/DataProviders/UserDataProvider";

interface HomePagePSix_extraSmall_landscapeProps {}

const HomePagePSix_extraSmall_landscape = (
  props: HomePagePSix_extraSmall_landscapeProps
) => {
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
            title: "1",
            renderPath: "ProjectsPage",
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
                setMetaDataContentKey("Projects_1350_897");
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
          content={
            <TitleAndContentViewer
              title={"Welcome to Projects Page"}
              content={
                <div className={styles.textsContainer}>
                  <div className={styles.text1Container}>
                    I'm excited to present a
                    <span className={styles.textFocus}>
                      showcase of my innovative endeavors and creative
                      solutions.
                    </span>
                    Each project represents a unique opportunity to apply my
                    skills, push boundaries, and deliver tangible results. From
                    concept to execution, I pour my passion and expertise into
                    every project, striving to create value and make a
                    meaningful impact. Explore this curated collection to
                    discover the diverse range of projects I've undertaken, each
                    demonstrating my commitment to excellence and my ability to
                    tackle complex challenges head-on.
                  </div>
                  <div className={styles.text2Container}>
                    Whether it's
                    <span className={styles.textFocus}>
                      developing cutting-edge software applications, designing
                      intuitive user interfaces, designing and implementing web
                      sites or implementing efficient algorithms,
                    </span>
                    each project reflects my dedication to pushing the
                    boundaries of what's possible in the realm of technology. As
                    you navigate through these projects, I invite you to delve
                    into the details, explore the technologies utilized, and
                    witness the outcomes achieved. Join me on this journey of
                    innovation and discovery as we explore the exciting world of
                    technology together.
                  </div>
                </div>
              }
              linehorizonalW={"100%"}
              fontSize="65%"
              marginTitle="5% 0px 1%"
              marginLine="0% 0px -1%"
              marginContent="4% 0px -2%"
            />
          }
          orientation={"column"}
          animationModes={[0, 1]}
          graphicContainerInlineStyle={{ margin: "0px 8% 0px 0px" }}
        />
      </div>
    </div>
  );
};

export default HomePagePSix_extraSmall_landscape;
