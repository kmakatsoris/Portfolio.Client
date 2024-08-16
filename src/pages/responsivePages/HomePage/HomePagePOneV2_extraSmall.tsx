import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./HomePagePOneV2_extraSmall.module.css";
import profileImg1 from "../../../images/content/ProfileImage1.png";
import ContentUpToFishTextAnimation from "../../../modules/components/contentViewer/ContentUpToFishTextAnimation";
import { MakeApiCall } from "../../../services/HttpServices/httpService";
import {
  ExtractConnectionStringValue,
  LoadAppsettingEndpoints,
} from "../../../services/GeneralPurpose.Service";
import { UserDataContext } from "../../../services/DataProviders/UserDataProvider";
import { GeneralDataContext } from "../../../services/DataProviders/GeneralDataProvider";
import { useNavigate } from "react-router-dom";
import { RenderProfile } from "../../../modules/components/presentationViewer/resume/ResumeHelper";

interface HomePagePOneV2_extraSmallProps {}

const HomePagePOneV2_extraSmall = (props: HomePagePOneV2_extraSmallProps) => {
  const siteRef = useRef(null);
  const { setCurrentPathname, currentPathname } =
    useContext(GeneralDataContext);
  const { token } = useContext(UserDataContext);
  const navigate = useNavigate();

  const [endpointsAppsettings, setEndpointsAppsettings] =
    useState<Endpoints | null>(null);
  const [profileImgAsyncObj, setProfileImgAsyncObj] =
    useState<CMS_Strapi_Basic_Res | null>(null);
  const [imageContent, setImageContent] = useState<JSX.Element | null>(null);
  const [resumeData, setResumeData] = useState<MetaData_CMS_Strapi_Res | null>(
    null
  );

  useEffect(() => {
    if (currentPathname !== "HomePage") {
      setCurrentPathname("HomePage");
      navigate("/home");
    }
  }, []);

  // Http Call Use Effect,
  useEffect(() => {
    const fetchProfileImg = async () => {
      try {
        const endpoints: Endpoints = await _getEndpoints();
        const profileImgData: CMS_Strapi_Basic_Res = await MakeApiCall({
          endpoint: endpoints.CMS_Strapi.Find,
          method: "POST",
          token: token,
          body: {
            title: "0",
            renderPath: "HomePage",
            enSync: true,
          },
        });
        setProfileImgAsyncObj(profileImgData);
      } catch (error) {
        console.error("Error fetching profile image:", error);
      }
    };

    const fetchTexts = async () => {
      try {
        const endpoints: Endpoints = await _getEndpoints();
        const txts: CMS_Strapi_Basic_Res = await MakeApiCall({
          endpoint: endpoints.CMS_Strapi.Find,
          method: "POST",
          token: token,
          body: {
            title: "4",
            renderPath: "HomePage",
            enSync: true,
          },
        });
        let metadata: MetaData_CMS_Strapi_Res | null =
          JSON.parse(txts?.metaData) ?? null;
        setResumeData(metadata);
      } catch (error) {
        console.error("Error fetching introduction texts:", error);
      }
    };

    fetchProfileImg();
    fetchTexts();
  }, [token]);

  // Profile Image Loader,
  useEffect(() => {
    const renderProfileImageHandler = async () => {
      if (!profileImgAsyncObj) return;
      const baseUrl = (
        await ExtractConnectionStringValue("CMS_Strapi_Connection")
      )?.BaseUrl;
      if (baseUrl) {
        setImageContent(
          <img
            src={baseUrl + profileImgAsyncObj.previewDataDTO.url}
            alt="Profile"
            className={styles.profileImg}
          />
        );
      }
    };

    renderProfileImageHandler();
  }, [profileImgAsyncObj]);

  const _getEndpoints: () => Promise<Endpoints> =
    async (): Promise<Endpoints> => {
      if (!endpointsAppsettings) {
        let endpoints = await LoadAppsettingEndpoints();
        setEndpointsAppsettings(endpoints);
        return endpoints;
      }
      return endpointsAppsettings;
    };

  const _renderTitleAndDescription = () => {
    return (
      <div className={styles.titleAndDescriptionContainer}>
        <div className={styles.titleContainer}>
          <div className={styles.title0}>Hello everyone!</div>
          <div className={styles.title1}>I'm MAKATSORIS KONSTANTINOS</div>
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.description}>
            <RenderProfile
              profile={resumeData?.Profile ?? { Title: "", Text: "" }}
              enSecTitle={false}
              fontSizes={["80%", "48%", "48%", "48%", "48%"]}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div ref={siteRef} className={styles.container}>
      <div className={styles.leftContainer}>{_renderTitleAndDescription()}</div>
      <div className={styles.rightContainer}>
        <div className={styles.rightContentContainer}>
          <ContentUpToFishTextAnimation
            w={"80%"}
            h={"80%"}
            content={imageContent ?? <></>}
            backgroundContent={<></>}
            textsFocus={[
              "Scroll Down",
              "Scroll Down",
              "Scroll Down",
              "Scroll Down",
              "Scroll Down",
            ]}
            texts={[
              "Inspire Others",
              "Ignite Your Spark",
              "Chase Your Dreams",
              "Make it Happen",
              "Create Your Legacy",
              "Believe in Yourself",
              "Pursue Your Passion",
              "Dare to Dream",
              "Hi There ",
              "Keep Exploring",
              "Stay Inspired ",
              "Keep Dreaming",
              "Embrace Change",
            ]}
            textContainerTop={"0%"}
            textContainerRight={"16%"}
            textContainerW={"100%"}
            textContainerH={"100%"}
            averageFontSize={25}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePagePOneV2_extraSmall;
