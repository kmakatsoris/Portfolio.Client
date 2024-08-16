import React, { useContext, useEffect, useState } from "react";
import styles from "./BioPageThree_extraSmall_landscape.module.css";
import ContentViewerPatch2 from "../../../modules/components/contentViewer/ContentViewerPatch2";
import TitleAndContentViewer from "../../../modules/components/contentViewer/TitleAndContentViewer";
// import backgroundImg from "../../../images/content/Production55.png";
// import backgroundImgEffect from "../../../images/content/Production56.png";
import ShowUpWithJumpscareEfect from "../../../modules/components/showupViewer/ShowUpWithJumpscareEfect";
import { MakeApiCall } from "../../../services/HttpServices/httpService";
import {
  ExtractConnectionStringValue,
  LoadAppsettingEndpoints,
} from "../../../services/GeneralPurpose.Service";
import { UserDataContext } from "../../../services/DataProviders/UserDataProvider";

interface BioPageThree_extraSmall_landscapeProps {}

const BioPageThree_extraSmall_landscape = (
  props: BioPageThree_extraSmall_landscapeProps
) => {
  const { token } = useContext(UserDataContext);
  const [endpointsAppsettings, setEndpointsAppsettings] =
    useState<Endpoints | null>(null);
  const [backgroundImg, setBackgroundImg] = useState<string>("");
  const [backgroundImgEffect, setBackgroundImgEffect] = useState<string>("");

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
    const fetchProfileImg = async (
      title: string,
      setContent: (value: React.SetStateAction<string>) => void
    ) => {
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
            title: title,
            renderPath: "BioPage",
            enSync: true,
          },
        });
        setContent(baseUrl + profileImgData?.previewDataDTO?.url);
      } catch (error) {
        console.error("Error fetching profile image:", error);
      }
    };

    fetchProfileImg("1", setBackgroundImg);
    fetchProfileImg("3", setBackgroundImgEffect);
  }, [token]);

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <ContentViewerPatch2
          graphic={
            <TitleAndContentViewer
              title={"Exploring Beyond the Bio Page."}
              content={
                <div className={styles.textsContainer}>
                  <div className={styles.text1Container}>
                    Leaving the bio page
                    <span className={styles.textFocus}>
                      opens up a world of possibilities to delve deeper into my
                      background, skills, and experiences...
                    </span>
                    It's a gateway to discovering more about my journey,
                    projects, and passions. Whether you're curious about my
                    professional endeavors or want to explore personal
                    interests, this is the starting point for embarking on a
                    richer exploration. Feel free to navigate through the
                    various sections to uncover insights and perspectives that
                    resonate with you.
                  </div>
                </div>
              }
              linehorizonalW={"100%"}
              fontSize="65%"
              marginTitle="2% 0px 6%"
              marginLine="-26px 0px -13px"
              marginContent="0px 0px 0%"
            />
          }
          content={
            <ShowUpWithJumpscareEfect
              graphicPre={
                <img
                  src={backgroundImg}
                  alt="Backround"
                  className={styles.backgroundImg}
                />
              }
              graphicTrans={
                <img
                  src={backgroundImgEffect}
                  alt="Backround"
                  className={styles.backgroundImg}
                />
              }
              graphicPost={
                <img
                  src={backgroundImg}
                  alt="Backround"
                  className={styles.backgroundImg}
                />
              }
              intervalTimeTransPre={2000}
              intervalTimeTransPost={800}
              startIndication={true}
            />
          }
          orientation={"column"}
          animationModes={[4, 5]}
          graphicContainerInlineStyle={{ margin: "0px 4% 0px 0px" }}
        />
      </div>
    </div>
  );
};

export default BioPageThree_extraSmall_landscape;
