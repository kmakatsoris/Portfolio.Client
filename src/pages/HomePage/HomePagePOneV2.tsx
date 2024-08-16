import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./HomePagePOneV2.module.css";
import profileImg1 from "../../images/content/ProfileImage1.png";
import DefaultParallax from "../../modules/components/parallex/DefaultParallex";
import ContentUpToFishTextAnimation from "../../modules/components/contentViewer/ContentUpToFishTextAnimation";
import ScrollingActivatorViewer from "../../modules/components/showupViewer/ScrollingActivatorViewer";
import { MakeApiCall } from "../../services/HttpServices/httpService";
import {
  ExtractConnectionStringValue,
  LoadAppsettingEndpoints,
  TryGetFromArray,
} from "../../services/GeneralPurpose.Service";
import { UserDataContext } from "../../services/DataProviders/UserDataProvider";
import { GeneralDataContext } from "../../services/DataProviders/GeneralDataProvider";
import { useNavigate } from "react-router-dom";
import detailsIcon from "../../images/icons/research.png";
import { RenderProfile } from "../../modules/components/presentationViewer/resume/ResumeHelper";

const MAX_PARTICLES_SCROLL: number = 2200;
const easeInOutQuad = (t: number) =>
  t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

interface HomePagePOneV2Props {}

const HomePagePOneV2 = (props: HomePagePOneV2Props) => {
  const siteRef = useRef(null);
  const { setCurrentPathname, currentPathname } =
    useContext(GeneralDataContext);
  const { token } = useContext(UserDataContext);
  const navigate = useNavigate();

  const [particlesScrollY, setParticlesScrollY] = useState(0);
  const [enParticles, setEnParticles] = useState(true);
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
        // let wh: string[] = profileImgAsyncObj?.dimension?.split(";");
        setImageContent(
          <img
            src={baseUrl + profileImgAsyncObj.previewDataDTO.url}
            alt="Profile"
            className={styles.profileImg}
            // style={{}}
          />
        );
      } else {
        setImageContent(null);
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
            />
          </div>
        </div>
      </div>
    );
  };

  const _renderParticle = (text: string) => {
    if (!text || text === "") return <></>;
    let t: string[] = text.split(";");
    return (
      <div className={styles.particleRenderContainer}>
        <div className={styles.particleRenderTitleAndTextContainer}>
          <div className={styles.particleRenderTitle}>
            {TryGetFromArray(t, 0)}
          </div>
          <div className={styles.particleRenderLine}></div>
          <div className={styles.particleRenderText}>
            {TryGetFromArray(t, 1)}
          </div>
        </div>
        <div className={styles.particleRenderIconContainer}>
          <img
            className={styles.particleRenderIcon}
            src={detailsIcon}
            alt="Details"
          />
        </div>
      </div>
    );
  };

  const _renderImageParticles = () => (
    <div className={styles.particlesContainer}>
      <DefaultParallax
        key={"particles"}
        siteRef={siteRef}
        item={
          <div key={"particles"} className={styles.particleContainer}>
            <div className={styles.particle0Container}>
              <div className={styles.particleSubContainer}>
                <div className={styles.particleTextContainer}>
                  {_renderParticle(
                    "1 Semister;I completed my Technical University of Crete (Electrical and Computer Engineer) courses six months sooner of schedule."
                  )}
                </div>
              </div>
            </div>
            <div className={styles.particle1Container}>
              <div className={styles.particleSubContainer}>
                <div className={styles.particleTextContainer}>
                  {_renderParticle(
                    "11 Years Programming;I have dedicated the past 11 years to programming, consistently working on projects and honing my coding and technological skills since 2016."
                  )}
                </div>
              </div>
            </div>
            <div className={styles.particle2Container}>
              <div className={styles.particleSubContainer}>
                <div className={styles.particleTextContainer}>
                  {_renderParticle(
                    ">3 Years Backend;I have worked as a Backend developer the past >3 years and the rest unofficially on my projects(upwork | websites | services..)."
                  )}
                </div>
              </div>
            </div>
            <div className={styles.particle3Container}>
              <div className={styles.particleSubContainer}>
                <div className={styles.particleTextContainer}>
                  {_renderParticle(
                    ">3 Years FrontEnd Dev;I have worked as a FrontEnd developer the past >2 year officially and unofficially >1 years. I am still working on developing frontend related project/websites.."
                  )}
                </div>
              </div>
            </div>
          </div>
        }
        deltaY={60}
        initScroll={0}
        maxScroll={MAX_PARTICLES_SCROLL}
        movementStyle={movementParticlesStyle}
        scrollY={particlesScrollY}
        setScrollY={setParticlesScrollY}
        nextPhase={() => setEnParticles(false)}
        prevPhase={() => {}}
      />
    </div>
  );

  const movementParticlesStyle = (scrollY: number) => {
    const progress = Math.min(scrollY / MAX_PARTICLES_SCROLL, 1);
    const translateY = easeInOutQuad(progress) * 300;
    // console.log(`scrollY: ${scrollY}, MAX_PARTICLES_SCROLL:${MAX_PARTICLES_SCROLL}, translateY: ${translateY}`);
    return {
      transform: `translateY(-${translateY}%)`,
    };
  };

  return (
    <div ref={siteRef} className={styles.container}>
      <div className={styles.leftContainer}>{_renderTitleAndDescription()}</div>
      <div className={styles.rightContainer}>
        <div className={styles.rightContentContainer}>
          <ContentUpToFishTextAnimation
            w={"80%"}
            h={"80%"}
            content={
              <ScrollingActivatorViewer
                currentWheelScroll={particlesScrollY}
                numberOfScrolls={2}
                content={imageContent ?? <></>}
                animationMode={1}
              />
            }
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
      {enParticles && _renderImageParticles()}
    </div>
  );
};

export default HomePagePOneV2;
