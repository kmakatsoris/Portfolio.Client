import React, { useContext, useEffect, useState } from "react";
import styles from "./HomePagePSeven_extraSmall.module.css";
import ContentViewerPatch2 from "../../../modules/components/contentViewer/ContentViewerPatch2";
import ContentViewerPatch3 from "../../../modules/components/contentViewer/ContentViewerPatch3";
// import backgroundImg from "../../../images/content/HomePagePTwoPage.Sec1/others/1.png";
import TitleAndContentViewer from "../../../modules/components/contentViewer/TitleAndContentViewer";
import { GeneralDataContext } from "../../../services/DataProviders/GeneralDataProvider";
import MetaDataViewerScheduler from "../../../modules/components/detailsViewer/MetaDataViewerScheduler";
import {
  ExtractConnectionStringValue,
  LoadAppsettingEndpoints,
} from "../../../services/GeneralPurpose.Service";
import { MakeApiCall } from "../../../services/HttpServices/httpService";
import { UserDataContext } from "../../../services/DataProviders/UserDataProvider";

interface HomePagePSeven_extraSmallProps {}

const HomePagePSeven_extraSmall = (props: HomePagePSeven_extraSmallProps) => {
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
              title={"Welcome to my APIs & Services. "}
              content={
                <div className={styles.textsContainer}>
                  <div className={styles.text1Container}>
                    <span className={styles.textFocus}>
                      Now is your time to shine! Welcome to the domain of
                      collaboration and innovation.
                    </span>
                    Here, you have the opportunity to share your ideas, seek
                    active collaboration, and bring your visions to life.
                    Whether you have a groundbreaking idea waiting to be
                    implemented or a complex problem in need of a solution, this
                    is the perfect platform to connect with like-minded
                    individuals and turn ideas into reality. With a focus on
                    fostering creativity and facilitating collaboration, this
                    space empowers you to unleash your potential and make a
                    meaningful impact in the world of technology.
                  </div>
                  <div className={styles.text2Container}>
                    Additionally, explore a plethora of other sites, APIs, and
                    services that have been curated to simplify lives and
                    address common challenges. From streamlined workflows to
                    enhanced functionalities, these resources are designed to
                    support individuals and businesses in their technological
                    endeavors. Depending on your subscription tier, you'll gain
                    access to various APIs and services, each offering unique
                    features and capabilities to enrich your experience. Join
                    our community today and embark on a journey of exploration
                    and innovation!
                  </div>
                </div>
              }
              linehorizonalW={"100%"}
              fontSize="65%"
              marginTitle="0px 0px 2%"
              marginLine="0% 0px 0%"
              marginContent="0px 0px 0%"
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
                setMetaDataContentKey("others/1");
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
          orientation={"column"}
          animationModes={[0, 1]}
          graphicContainerInlineStyle={{ margin: "0px 8% 0px 0px" }}
        />
      </div>
    </div>
  );
};

export default HomePagePSeven_extraSmall;
