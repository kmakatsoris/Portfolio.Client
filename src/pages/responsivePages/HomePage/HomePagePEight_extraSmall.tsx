import React, { useContext, useEffect, useState } from "react";
import styles from "./HomePagePEight_extraSmall.module.css";
import ContentViewerPatch2 from "../../../modules/components/contentViewer/ContentViewerPatch2";
import ContentViewerPatch3 from "../../../modules/components/contentViewer/ContentViewerPatch3";
import backgroundImg from "../../../images/content/HomePagePTwoPage.Sec1/contacts/4.png";
// import backgroundImg from "../../../images/content/Contacts_1350_897.png";
import TitleAndContentViewer from "../../../modules/components/contentViewer/TitleAndContentViewer";
import { GeneralDataContext } from "../../../services/DataProviders/GeneralDataProvider";
import MetaDataViewerScheduler from "../../../modules/components/detailsViewer/MetaDataViewerScheduler";
import { MakeApiCall } from "../../../services/HttpServices/httpService";
import {
  ExtractConnectionStringValue,
  LoadAppsettingEndpoints,
} from "../../../services/GeneralPurpose.Service";
import { UserDataContext } from "../../../services/DataProviders/UserDataProvider";

interface HomePagePEight_extraSmallProps {}

const HomePagePEight_extraSmall = (props: HomePagePEight_extraSmallProps) => {
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
            title: "3",
            renderPath: "HomePage",
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
                setMetaDataContentKey("contacts/4");
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
              title={"Welcome to Contact & Collaboration."}
              content={
                <div className={styles.textsContainer}>
                  <div className={styles.text1Container}>
                    Welcome to the Contact page, your
                    <span className={styles.textFocus}>
                      gateway to connecting with me directly.
                    </span>
                    Here, you'll discover all the necessary information on how
                    to reach out and get in touch. Whether you have inquiries,
                    proposals, or just want to say hello, this is the place to
                    do it. Explore the various ways to contact me and choose the
                    method that best suits your preferences.
                  </div>
                  <div className={styles.text2Container}>
                    Furthermore, this page offers you the opportunity to explore
                    potential interests to collaborate on.
                    <span className={styles.textFocus}>
                      If you're considering hiring me for a project or have any
                      suggestions for collaboration, I'm all ears!
                    </span>
                    Your ideas and proposals are highly valued, and I would be
                    honored to consider them. Let's work together to bring
                    innovative ideas to life and make a positive impact in the
                    world of technology and beyond.
                  </div>
                </div>
              }
              linehorizonalW={"100%"}
              fontSize="65%"
              marginTitle="10% 0px 2%"
              marginLine="0% 0px 0%"
              marginContent="0px 0px 30%"
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

export default HomePagePEight_extraSmall;
