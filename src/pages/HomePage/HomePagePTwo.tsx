import React, { useContext, useEffect, useState } from "react";
import styles from "./HomePagePTwo.module.css";
import MetaDataViewerScheduler from "../../modules/components/detailsViewer/MetaDataViewerScheduler";
import RenderListOfImagesOneByOne from "../../modules/components/presentationViewer/RenderListOfImagesOneByOne";
import ContentViewerPatch1 from "../../modules/components/contentViewer/ContentViewerPatch1";
import { GeneralDataContext } from "../../services/DataProviders/GeneralDataProvider";
import { useNavigate } from "react-router-dom";
import {
  ExtractConnectionStringValue,
  LoadAppsettingEndpoints,
  TryGetFromDictionary,
} from "../../services/GeneralPurpose.Service";
import { UserDataContext } from "../../services/DataProviders/UserDataProvider";
import { MakeApiCall } from "../../services/HttpServices/httpService";
import defaultMainContentImg from "../../images/content/Production21_dim.png";

/*
import homeContent1 from "../../images/content/Production21_dim.png";
import homeContent2 from "../../images/content/HomePagePTwoPage.Sec1/home/2.png";
import homeContent3 from "../../images/content/HomePagePTwoPage.Sec1/home/3.png";

import bioContent1 from "../../images/content/HomePagePTwoPage.Sec1/bio/1.png";
import bioContent2 from "../../images/content/HomePagePTwoPage.Sec1/bio/2.png";
import bioContent3 from "../../images/content/HomePagePTwoPage.Sec1/bio/3.png";

import skillsContent1 from "../../images/content/HomePagePTwoPage.Sec1/skills/1.png";
import skillsContent2 from "../../images/content/HomePagePTwoPage.Sec1/skills/2.png";

import projectsContent1 from "../../images/content/HomePagePTwoPage.Sec1/projects/1.png";
import projectsContent2 from "../../images/content/HomePagePTwoPage.Sec1/projects/2.png";

import contactsContent1 from "../../images/content/HomePagePTwoPage.Sec1/contacts/1.png";
import contactsContent2 from "../../images/content/HomePagePTwoPage.Sec1/contacts/2.png";
import contactsContent3 from "../../images/content/HomePagePTwoPage.Sec1/contacts/3.png";

import othersContent1 from "../../images/content/HomePagePTwoPage.Sec1/others/1.png";
import othersContent2 from "../../images/content/HomePagePTwoPage.Sec1/others/2.png";
import othersContent3 from "../../images/content/HomePagePTwoPage.Sec1/others/3.png";
import othersContent4 from "../../images/content/HomePagePTwoPage.Sec1/others/4.png";
import othersContent5 from "../../images/content/HomePagePTwoPage.Sec1/others/5.png";
*/

const PAGE_TWO_IMAGES_ROTATION_TIME = 10000; // 10 secs

const HomePagePTwo = () => {
  const navigate = useNavigate();
  const { token } = useContext(UserDataContext);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const { setMetaDataContentKey } = useContext(GeneralDataContext);
  const [pageContentDictionary, setPageContentDictionary] = useState<{
    [key: string]: any[];
  }>({ home: [], bio: [], skills: [], projects: [], contacts: [] });
  const [endpointsAppsettings, setEndpointsAppsettings] =
    useState<Endpoints | null>(null);

  // Images...[CMS]
  // ---------------------------------------------------------------
  const [homeContent1, setHomeContent1] = useState<string>("");
  const [homeContent2, setHomeContent2] = useState<string>("");

  const [bioContent1, setBioContent1] = useState<string>("");
  const [bioContent2, setBioContent2] = useState<string>("");

  const [skillsContent1, setSkillsContent1] = useState<string>("");
  const [skillsContent2, setSkillsContent2] = useState<string>("");

  const [projectsContent1, setProjectsContent1] = useState<string>("");
  const [projectsContent2, setProjectsContent2] = useState<string>("");

  const [apisContent1, setAPIsContent1] = useState<string>("");
  const [apisContent2, setAPIsContent2] = useState<string>("");

  const [contactsContent1, setContactsContent1] = useState<string>("");
  const [contactsContent2, setContactsContent2] = useState<string>("");

  const [currentMainContent, setCurrentMainContent] = useState<{
    img: string;
    title: string;
    text: string;
  }>({
    img: defaultMainContentImg,
    title: "Welcome Everyone!",
    text: "Welcome to the Home Page! Here, you’ll find an engaging introduction to what you can explore on my portfolio site. In addition to the pages listed in the header bar, which allow you to navigate through my portfolio, in this section, you’ll also find brief information about each page. At the top, there are two buttons to help you interact with the content presented here.",
  });

  const othersContents: string[] = [
    homeContent1,
    contactsContent1,
    projectsContent1,
    bioContent1,
    skillsContent1,
  ];
  const homeContents = [homeContent1, homeContent2];
  const contactsContents = [contactsContent1, contactsContent2];
  const projectsContents = [projectsContent1, projectsContent2];
  const bioContents = [bioContent1, bioContent2];
  const skillsContents = [skillsContent1, skillsContent2];

  const renderMainContainerContent = (
    img: string,
    title: string,
    text: string
  ) => {
    return (
      <ContentViewerPatch1
        graphic={
          <img
            src={img}
            alt="Graphic COntent"
            className={styles.mainContainerContentGraphicPre}
          />
        }
        title={title}
        text={text}
        content={[
          <div className={styles.mainContentContainer}>
            {
              "Explore the sections of our portfolio on the right. These images offer a glimpse of what awaits you and are meant to inspire further exploration."
            }
          </div>,
          <div className={styles.mainContentContainer}>
            {
              "If you're interested in exploring the sections displayed, simply click on the content you like. Alternatively, if you want to learn more about the content within each section, click the information button located to the right of the respective content."
            }
          </div>,
        ]}
        titleFontSize={"26px"}
        textFontSize={"20px"}
        titleContainerMarginBottom={"20px"}
        lineHorizontalMarginBottom={"20px"}
        leftActionWidth={"25px"}
        rightActionWidth={"25px"}
        enumerationTextFontSize={"28px"}
      />
    );
  };
  const [sectionElement, setSectionElement] = useState<JSX.Element>(
    renderMainContainerContent(
      defaultMainContentImg,
      "Welcome Everyone!",
      "Welcome to the Home Page! Here, you’ll find an engaging introduction to what you can explore on my portfolio site. In addition to the pages listed in the header bar, which allow you to navigate through my portfolio, in this section, you’ll also find brief information about each page. At the top, there are two buttons to help you interact with the content presented here."
    )
  );

  // Http Call Use Effect,
  // ---------------------------------------------------------------
  useEffect(() => {
    fetchCMSContent();
  }, [token]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Subscribe to the window resize event
    window.addEventListener("resize", handleResize);
    // fetchPageContentDictionary();

    // Unsubscribe from the window resize event when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const fetchCMSContent = async () => {
    try {
      const baseUrl = (
        await ExtractConnectionStringValue("CMS_Strapi_Connection")
      )?.BaseUrl;

      const homePageImageUrls = await fetchCMSListContent(
        ["3", "0"],
        "HomePage"
      );
      if (homePageImageUrls?.length === 2) {
        setHomeContent1(baseUrl + homePageImageUrls[0]);
        setHomeContent2(baseUrl + homePageImageUrls[1]);
      }

      const bioPageImageUrls = await fetchCMSListContent(["0", "1"], "BioPage");
      if (bioPageImageUrls?.length === 2) {
        setBioContent1(baseUrl + bioPageImageUrls[0]);
        setBioContent2(baseUrl + bioPageImageUrls[1]);
      }

      const skillsPageImageUrls = await fetchCMSListContent(
        ["0", "1"],
        "SkillsPage"
      );
      if (skillsPageImageUrls?.length === 2) {
        setSkillsContent1(baseUrl + skillsPageImageUrls[0]);
        setSkillsContent2(baseUrl + skillsPageImageUrls[1]);
      }

      const projectsPageImageUrls = await fetchCMSListContent(
        ["0", "1"],
        "ProjectsPage"
      );
      if (projectsPageImageUrls?.length === 2) {
        setProjectsContent1(baseUrl + projectsPageImageUrls[0]);
        setProjectsContent2(baseUrl + projectsPageImageUrls[1]);
      }

      const apisPageImageUrls = await fetchCMSListContent(
        ["0", "1"],
        "APIsPage"
      );
      if (apisPageImageUrls?.length === 2) {
        setAPIsContent1(baseUrl + apisPageImageUrls[0]);
        setAPIsContent2(baseUrl + apisPageImageUrls[1]);
      }

      const contactsPageImageUrls = await fetchCMSListContent(
        ["0", "1"],
        "ContactsPage"
      );
      if (contactsPageImageUrls?.length === 2) {
        setContactsContent1(baseUrl + contactsPageImageUrls[0]);
        setContactsContent2(baseUrl + contactsPageImageUrls[1]);
      }
    } catch (error) {
      console.error("Error fetching CMS content:", error);
    }
  };

  const fetchCMSListContent = async (titles: string[], renderPath: string) => {
    try {
      const endpoints: Endpoints = await _getEndpoints();
      const profileImgData: CMS_Strapi_Basic_Res[] = await MakeApiCall({
        endpoint: endpoints.CMS_Strapi.List,
        method: "POST",
        token: token,
        body: {
          title: "1",
          renderPath: renderPath,
          enSync: true,
        },
      });

      const matchedData = profileImgData.filter((p) =>
        titles.includes(p.title)
      );
      const urls: string[] = matchedData.map((p) => p.previewDataDTO?.url);

      return urls;
    } catch (error) {
      console.error(`Error fetching list of ${renderPath} images:`, error);
    }
  };

  const _getEndpoints: () => Promise<Endpoints> =
    async (): Promise<Endpoints> => {
      if (!endpointsAppsettings) {
        let endpoints = await LoadAppsettingEndpoints();
        setEndpointsAppsettings(endpoints);
        return endpoints;
      }
      return endpointsAppsettings;
    };

  const updateStateDictionary = (key: string, newValue: any) => {
    setPageContentDictionary((prevState) => {
      return {
        ...prevState,
        [key]: [...prevState[key], newValue],
      };
    });
  };

  const fetchPageContentDictionary = () => {
    updateStateDictionary("home", homeContent1);
    updateStateDictionary("home", homeContent2);
    updateStateDictionary("bio", bioContent1);
    updateStateDictionary("bio", bioContent2);
    updateStateDictionary("skills", skillsContent1);
    updateStateDictionary("skills", skillsContent2);
    updateStateDictionary("projects", projectsContent1);
    updateStateDictionary("projects", projectsContent2);
    updateStateDictionary("contacts", contactsContent1);
    updateStateDictionary("contacts", contactsContent2);
  };

  const onClickMetaDataViewerSchedulerSelectedIdHandler = (key: number) => {
    switch (key) {
      case 1:
        navigate("/bio");
        break;
      case 2:
        navigate("/skills");
        break;
      case 3:
        navigate("/projects");
        break;
      case 4:
        navigate("/apis");
        break;
      case 5:
        navigate("/contact");
        break;
      case 6:
        navigate("/profile");
        break;
    }
  };

  return (
    <div className={styles.container}>
      {/** Main Content View Section */}
      <div className={styles.mainContainer}>
        <MetaDataViewerScheduler
          defaultComponent={renderMainContainerContent(
            TryGetFromDictionary(currentMainContent, "img") ??
              defaultMainContentImg,
            TryGetFromDictionary(currentMainContent, "title") ?? "",
            TryGetFromDictionary(currentMainContent, "text") ?? ""
          )}
          infoImgWidth={25}
          animationMode={0}
          onClickMetaDataViewerSchedulerSelectedIdHandler={() =>
            onClickMetaDataViewerSchedulerSelectedIdHandler(0)
          }
          onClickInfoHandler={() => {
            console.log("Clikced!");
            setMetaDataContentKey("Production21_dim");
          }}
          titleFontSize={"30px"}
          textFontSize={"20px"}
          titleContainerMarginBottom={"20px"}
          lineHorizontalMarginBottom={"20px"}
          leftActionWidth={"15px"}
          rightActionWidth={"15px"}
          enumerationTextFontSize={"18px"}
        />
      </div>

      {/** All Content View Section */}
      <div className={styles.subContainersContainer}>
        <div className={styles.subContainersLayer1}>
          <div className={styles.subContainerSection1}>
            <MetaDataViewerScheduler
              defaultComponent={
                <div
                  key={1}
                  className={styles.metaDataViewerSchedulerContainer}
                >
                  <RenderListOfImagesOneByOne
                    listOfImages={homeContents}
                    intervalTime={PAGE_TWO_IMAGES_ROTATION_TIME}
                  />
                </div>
              }
              infoImgWidth={20}
              animationMode={1}
              onClickMetaDataViewerSchedulerSelectedIdHandler={() => {
                setCurrentMainContent({
                  img: homeContent1,
                  title: "What about Home page",
                  text: "Here, you'll find a brief overview of what you can expect to experience in my portfolio.",
                });
                // onClickMetaDataViewerSchedulerSelectedIdHandler(1);
              }}
              onClickInfoHandler={() => {
                setMetaDataContentKey("Production21_dim");
              }}
              titleFontSize={"20px"}
              textFontSize={"20px"}
              titleContainerMarginBottom={"20px"}
              lineHorizontalMarginBottom={"20px"}
              leftActionWidth={"15px"}
              rightActionWidth={"15px"}
              enumerationTextFontSize={"18px"}
            />
          </div>
          <div className={styles.subContainerSection2}>
            <MetaDataViewerScheduler
              defaultComponent={
                <div
                  key={2}
                  className={styles.metaDataViewerSchedulerContainer}
                >
                  <RenderListOfImagesOneByOne
                    listOfImages={bioContents}
                    intervalTime={PAGE_TWO_IMAGES_ROTATION_TIME}
                  />
                </div>
              }
              infoImgWidth={20}
              animationMode={1}
              onClickMetaDataViewerSchedulerSelectedIdHandler={() =>
                // onClickMetaDataViewerSchedulerSelectedIdHandler(2)
                setCurrentMainContent({
                  img: bioContent1,
                  title: "What about Bio page",
                  text: "Here, you'll find a brief overview of who I am, my background in engineering and programming, and my interests in artificial intelligence and web development.",
                })
              }
              onClickInfoHandler={() => {
                console.log("Clikced!");
                setMetaDataContentKey("Production21_dim");
              }}
              titleFontSize={"20px"}
              textFontSize={"20px"}
              titleContainerMarginBottom={"20px"}
              lineHorizontalMarginBottom={"20px"}
              leftActionWidth={"15px"}
              rightActionWidth={"15px"}
              enumerationTextFontSize={"18px"}
            />
          </div>
          <div className={styles.subContainerSection3}>
            <MetaDataViewerScheduler
              defaultComponent={
                <div
                  key={3}
                  className={styles.metaDataViewerSchedulerContainer}
                >
                  <RenderListOfImagesOneByOne
                    listOfImages={skillsContents}
                    intervalTime={PAGE_TWO_IMAGES_ROTATION_TIME}
                  />
                </div>
              }
              infoImgWidth={20}
              animationMode={1}
              onClickMetaDataViewerSchedulerSelectedIdHandler={() =>
                // onClickMetaDataViewerSchedulerSelectedIdHandler(3)
                setCurrentMainContent({
                  img: skillsContent1,
                  title: "What about Skills & Achievements page",
                  text: "Here, you'll find information about my skills and achievements. Additionally, there are sections that provide detailed diagnostics and statistics, showing the extent of my expertise and how I've applied each skill. You'll also discover insights into new and emerging skills, recent achievements, and other related categories.",
                })
              }
              onClickInfoHandler={() => {
                console.log("Clikced!");
                setMetaDataContentKey("Production21_dim");
              }}
              titleFontSize={"20px"}
              textFontSize={"20px"}
              titleContainerMarginBottom={"20px"}
              lineHorizontalMarginBottom={"20px"}
              leftActionWidth={"15px"}
              rightActionWidth={"15px"}
              enumerationTextFontSize={"18px"}
            />
          </div>
        </div>
        <div className={styles.subContainersLayer2}>
          <div className={styles.subContainerSection4}>
            <MetaDataViewerScheduler
              defaultComponent={
                <div
                  key={4}
                  className={styles.metaDataViewerSchedulerContainer}
                >
                  <RenderListOfImagesOneByOne
                    listOfImages={projectsContents}
                    intervalTime={PAGE_TWO_IMAGES_ROTATION_TIME}
                  />
                </div>
              }
              infoImgWidth={20}
              animationMode={1}
              onClickMetaDataViewerSchedulerSelectedIdHandler={() =>
                // onClickMetaDataViewerSchedulerSelectedIdHandler(4)
                setCurrentMainContent({
                  img: projectsContent1,
                  title: "What about Projects page",
                  text: "Here, you'll find information about my projects. Additionally, there are sections that offer detailed diagnostics and statistics, providing comprehensive insights into my work, the technologies I've applied, and, in some cases, available demos and other relevant information.",
                })
              }
              onClickInfoHandler={() => {
                console.log("Clikced!");
                setMetaDataContentKey("Production21_dim");
              }}
              titleFontSize={"20px"}
              textFontSize={"20px"}
              titleContainerMarginBottom={"20px"}
              lineHorizontalMarginBottom={"20px"}
              leftActionWidth={"15px"}
              rightActionWidth={"15px"}
              enumerationTextFontSize={"18px"}
            />
          </div>
          <div className={styles.subContainerSection5}>
            <MetaDataViewerScheduler
              defaultComponent={
                <div
                  key={5}
                  className={styles.metaDataViewerSchedulerContainer}
                >
                  <RenderListOfImagesOneByOne
                    listOfImages={contactsContents}
                    intervalTime={PAGE_TWO_IMAGES_ROTATION_TIME}
                  />
                </div>
              }
              infoImgWidth={20}
              animationMode={1}
              onClickMetaDataViewerSchedulerSelectedIdHandler={() =>
                // onClickMetaDataViewerSchedulerSelectedIdHandler(5)
                setCurrentMainContent({
                  img: apisContent1,
                  title: "What about APIs page",
                  text: "Here, you'll find information about my apis, services and websites or projects for or with others. Additionally, there are sections providing comprehensive insights into my work, the technologies I've applied, available demos and other relevant information.",
                })
              }
              onClickInfoHandler={() => {
                console.log("Clikced!");
                setMetaDataContentKey("Production21_dim");
              }}
              titleFontSize={"20px"}
              textFontSize={"20px"}
              titleContainerMarginBottom={"20px"}
              lineHorizontalMarginBottom={"20px"}
              leftActionWidth={"15px"}
              rightActionWidth={"15px"}
              enumerationTextFontSize={"18px"}
            />
          </div>
          <div className={styles.subContainerSection6}>
            <MetaDataViewerScheduler
              defaultComponent={
                <div
                  key={6}
                  className={styles.metaDataViewerSchedulerContainer}
                >
                  <RenderListOfImagesOneByOne
                    listOfImages={othersContents}
                    intervalTime={PAGE_TWO_IMAGES_ROTATION_TIME}
                  />
                </div>
              }
              infoImgWidth={20}
              animationMode={1}
              onClickMetaDataViewerSchedulerSelectedIdHandler={() =>
                // onClickMetaDataViewerSchedulerSelectedIdHandler(6)
                setCurrentMainContent({
                  img: contactsContent1,
                  title: "What about Contacts page",
                  text: "Here, you'll find some of my personal contact information. Additionally, there are sections outlining reasons to get in touch, opportunities for collaboration, and various ways we can create great things together. You can also view or submit reviews about me and my work.",
                })
              }
              onClickInfoHandler={() => {
                console.log("Clikced!");
                setMetaDataContentKey("Production21_dim");
              }}
              titleFontSize={"20px"}
              textFontSize={"20px"}
              titleContainerMarginBottom={"20px"}
              lineHorizontalMarginBottom={"20px"}
              leftActionWidth={"15px"}
              rightActionWidth={"15px"}
              enumerationTextFontSize={"18px"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePagePTwo;
