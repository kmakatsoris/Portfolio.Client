import React, { useContext, useEffect, useState } from "react";
import styles from "./HomePagePFour.module.css";
import ContentViewerPatch2 from "../../modules/components/contentViewer/ContentViewerPatch2";
import ContentViewerPatch3 from "../../modules/components/contentViewer/ContentViewerPatch3";
// import backgroundImgOriginal from "../../images/content/Bio_1350_897.png";
import TitleAndContentViewer from "../../modules/components/contentViewer/TitleAndContentViewer";
import MetaDataViewerScheduler from "../../modules/components/detailsViewer/MetaDataViewerScheduler";
import { GeneralDataContext } from "../../services/DataProviders/GeneralDataProvider";
import {
  ExtractConnectionStringValue,
  LoadAppsettingEndpoints,
} from "../../services/GeneralPurpose.Service";
import { MakeApiCall } from "../../services/HttpServices/httpService";
import { UserDataContext } from "../../services/DataProviders/UserDataProvider";

interface HomePagePFourProps {}

const HomePagePFour = (props: HomePagePFourProps) => {
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
            renderPath: "BioPage",
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
                setMetaDataContentKey("Bio_1350_897");
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
              title={"Welcome to Bio Page"}
              content={
                <div className={styles.textsContainer}>
                  <div className={styles.text1Container}>
                    In my bio,
                    <span className={styles.textFocus}>
                      you'll find a brief overview of who I am, my background in
                      engineering and programming, and my interests in
                      artificial intelligence and web development.
                    </span>
                    I'll also share some insights into my approach to work and
                    my passion for learning and innovation. It's a snapshot of
                    what drives me and what I bring to the table in the tech
                    world.
                  </div>
                  <div className={styles.text2Container}>
                    Beyond professional details,
                    <span className={styles.textFocus}>
                      my bio is also a space where I share a bit about myself
                      personally. It's an opportunity to connect on a more
                      personal level,
                    </span>
                    where you can learn about my interests, hobbies, and values.
                    By sharing this information, I hope to foster a deeper
                    connection and provide insight into who I am beyond my
                    professional endeavors. I believe that understanding the
                    person behind the work is essential for meaningful
                    collaboration and building strong relationships. So, feel
                    free to explore and get to know me a little better!
                  </div>
                </div>
              }
              linehorizonalW={"100%"}
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

export default HomePagePFour;
