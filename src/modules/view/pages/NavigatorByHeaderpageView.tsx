import React, { useState, useEffect } from "react";
import styles from "./NavigatorByHeaderpageView.module.css";
import { LoadAppsettingPages } from "../../../services/GeneralPurpose.Service";
import HeaderStandard from "../../header/HeaderStandard";
import ErrorPage from "../../../pages/ErrorPage";
import DefaultPageScheduler from "../../../pages/DefaultPageScheduler";
import HomePagePTwo from "../../../pages/HomePage/HomePagePTwo";
import HomePagePThree from "../../../pages/HomePage/HomePagePThree";
import HomePagePFour from "../../../pages/HomePage/HomePagePFour";
import HomePagePFive from "../../../pages/HomePage/HomePagePFive";
import HomePagePSix from "../../../pages/HomePage/HomePagePSix";
import HomePagePSeven from "../../../pages/HomePage/HomePagePSeven";
import HomePagePEight from "../../../pages/HomePage/HomePagePEight";
import FooterDefaultPage from "../../../pages/FooterDefaultPage";
import BioPOne from "../../../pages/BioPage/BioPOne";
import BioPTwo from "../../../pages/BioPage/BioPTwo";
import BioPageThree from "../../../pages/BioPage/BioPageThree";
import SkillsPOne from "../../../pages/Skills/SkillsPOne";
import SkillsPTwo from "../../../pages/Skills/SkillsPTwo";
import ProjectsPagePOne from "../../../pages/Projects/ProjectsPagePOne";
import ProjectsPagePTwo from "../../../pages/Projects/ProjectsPagePTwo";
import ApisPOne from "../../../pages/Apis/ApisPOne";
import ContactPOne from "../../../pages/Contact/ContactPOne";
import ContactPTwo from "../../../pages/Contact/ContactPTwo";
import ContactPThree from "../../../pages/Contact/ContactPThree";
import ContactPFour from "../../../pages/Contact/ContactPFour";
import ContactPFive from "../../../pages/Contact/ContactPFive";
import CoffeePOne from "../../../pages/Coffee/CoffeePOne";
import CoffeePTwo from "../../../pages/Coffee/CoffeePTwo";
import CoffeePThree from "../../../pages/Coffee/CoffeePThree";
import ProfilePOne from "../../../pages/Profile/ProfilePOne";
import HomePagePOneV2 from "../../../pages/HomePage/HomePagePOneV2";
import BioPTwoV1 from "../../../pages/BioPage/BioPTwoV1";
import { Route, Routes } from "react-router-dom";
import SkillsDetailsPOne from "../../../pages/SkillsDetails/SkillsDetailsPOne";
import SkillsPThree from "../../../pages/Skills/SkillsPThree";
import SkillsPFour from "../../../pages/Skills/SkillsPFour";
import SkillsPFive from "../../../pages/Skills/SkillsPFive";
import SkillsPSix from "../../../pages/Skills/SkillsPSix";
import SkillsPSeven from "../../../pages/Skills/SkillsPSeven";
import SkillsPEight from "../../../pages/Skills/SkillsPEight";
import SkillsPNine from "../../../pages/Skills/SkillsPNine";
import SkillsPTen from "../../../pages/Skills/SkillsPTen";
import SkillsPElevel from "../../../pages/Skills/SkillsPElevel";
import SkillsPTwelve from "../../../pages/Skills/SkillsPTwelve";
import SkillsPThirteen from "../../../pages/Skills/SkillsPThirteen";
import ComingSoonLoader from "../../components/loaders/ComingSoonLoader";
import DefaultResponsivePageTestHandler from "../../../pages/responsivePages/DefaultResponsivePageTestHandler";
import HomePagePOneV2_extraSmall from "../../../pages/responsivePages/HomePage/HomePagePOneV2_extraSmall";
import HomePagePThree_extraSmall from "../../../pages/responsivePages/HomePage/HomePagePThree_extraSmall";
import HomePagePFour_extraSmall from "../../../pages/responsivePages/HomePage/HomePagePFour_extraSmall";
import HomePagePFive_extraSmall from "../../../pages/responsivePages/HomePage/HomePagePFive_extraSmall";
import HomePagePSix_extraSmall from "../../../pages/responsivePages/HomePage/HomePagePSix_extraSmall";
import HomePagePSeven_extraSmall from "../../../pages/responsivePages/HomePage/HomePagePSeven_extraSmall";
import HomePagePEight_extraSmall from "../../../pages/responsivePages/HomePage/HomePagePEight_extraSmall";
import HeaderStandard_extraSmall_small from "../../header/responsive/HeaderStandard_extraSmall_small";
import BioPOne_extraSmall from "../../../pages/responsivePages/BioPage/BioPOne_extraSmall";
import HomePagePThree_extraSmall_landscape from "../../../pages/responsivePages/HomePage/HomePagePThree_extraSmall_landscape";
import HomePagePFour_extraSmall_landscape from "../../../pages/responsivePages/HomePage/HomePagePFour_extraSmall_landscape";
import HomePagePFive_extraSmall_landscape from "../../../pages/responsivePages/HomePage/HomePagePFive_extraSmall_landscape";
import HomePagePSix_extraSmall_landscape from "../../../pages/responsivePages/HomePage/HomePagePSix_extraSmall_landscape";
import HomePagePSeven_extraSmall_landscape from "../../../pages/responsivePages/HomePage/HomePagePSeven_extraSmall_landscape";
import HomePagePEight_extraSmall_landscape from "../../../pages/responsivePages/HomePage/HomePagePEight_extraSmall_landscape";
import HomePagePOneV2_extraSmall_landscape from "../../../pages/responsivePages/HomePage/HomePagePOneV2_extraSmall_landscape";
import ProfilePOne_extraSmall from "../../../pages/responsivePages/Profile/ProfilePOne_extraSmall";
import ProfilePOne_extraSmall_landscape from "../../../pages/responsivePages/Profile/ProfilePOne_extraSmall_landscape";
import CoffeePOne_extraSmall from "../../../pages/responsivePages/Coffee/CoffeePOne_extraSmall";
import CoffeePTwo_extraSmall from "../../../pages/responsivePages/Coffee/CoffeePTwo_extraSmall";
import CoffeePThree_extraSmall from "../../../pages/responsivePages/Coffee/CoffeePThree_extraSmall";
import CoffeePOne_extraSmall_landscape from "../../../pages/responsivePages/Coffee/CoffeePOne_extraSmall_landscape";
import CoffeePTwo_extraSmall_landscape from "../../../pages/responsivePages/Coffee/CoffeePTwo_extraSmall_landscape";
import CoffeePThree_extraSmall_landscape from "../../../pages/responsivePages/Coffee/CoffeePThree_extraSmall_landscape";
import DefaultResponsivePageHandler from "../../../pages/responsivePages/DefaultResponsivePageHandler";
import HomePagePTwo_extraSmall from "../../../pages/responsivePages/HomePage/HomePagePTwo_extraSmall";
import HomePagePTwo_extraSmall_landscape from "../../../pages/responsivePages/HomePage/HomePagePTwo_extraSmall_landscape";
import BioPOne_extraSmall_landscape from "../../../pages/responsivePages/BioPage/BioPOne_extraSmall_landscape";
import BioPTwoV1_extraSmall from "../../../pages/responsivePages/BioPage/BioPTwoV1_extraSmall";
import BioPageThree_extraSmall from "../../../pages/responsivePages/BioPage/BioPageThree_extraSmall";
import BioPageThree_extraSmall_landscape from "../../../pages/responsivePages/BioPage/BioPageThree_extraSmall_landscape";
import SkillsPOne_extraSmall from "../../../pages/responsivePages/Skills/SkillsPOne_extraSmall";
import SkillsDetailsPOne_extraSmall from "../../../pages/responsivePages/SkillsDetails/SkillsDetailsPOne_extraSmall";
import ProjectsPagePOne_extraSmall from "../../../pages/responsivePages/Projects/ProjectsPagePOne_extraSmall";
import ApisPOne_extraSmall from "../../../pages/responsivePages/Apis/ApisPOne_extraSmall";
import SkillsPOne_extraSmall_landscape from "../../../pages/responsivePages/Skills/SkillsPOne_extraSmall_landscape";
import SkillsDetailsPOne_extraSmall_landscape from "../../../pages/responsivePages/SkillsDetails/SkillsDetailsPOne_extraSmall_landscape";
import ApisPOne_extraSmall_landscape from "../../../pages/responsivePages/Apis/ApisPOne_extraSmall_landscape";
import ContactPOne_extraSmall from "../../../pages/responsivePages/Contact/ContactPOne_extraSmall";
import ContactPTwo_extraSmall from "../../../pages/responsivePages/Contact/ContactPTwo_extraSmall";
import ContactPFour_extraSmall from "../../../pages/responsivePages/Contact/ContactPFour_extraSmall";
import ContactPThree_extraSmall from "../../../pages/responsivePages/Contact/ContactPThree_extraSmall";
import HomePage_Pre_PTwo from "../../../pages/HomePage/HomePage_Pre_PTwo";
import HomePage_Pre_PTwo_extraSmall from "../../../pages/responsivePages/HomePage/HomePage_Pre_PTwo_extraSmall";
import ResumeView_extraSmall from "../../components/presentationViewer/resume/responsive/ResumeView_extraSmall";
import ResumeView from "../../components/presentationViewer/resume/ResumeView";

interface NavigatorByHeaderpageViewProps {
  contentEn: boolean;
  headerContentEn: boolean;
  insidePageRefs: RefDictionary;
}

const NavigatorByHeaderpageView = (props: NavigatorByHeaderpageViewProps) => {
  const [pages, setPages] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    LoadAppsettingPages(setPages);
  }, []);

  return (
    <div className={styles.container}>
      {/* Header Viewer Section*/}
      {props.headerContentEn && (
        <DefaultResponsivePageHandler
          extraSmall={[
            <HeaderStandard_extraSmall_small links={pages} />,
            <HeaderStandard_extraSmall_small links={pages} />,
          ]}
          extraLarge={[
            <HeaderStandard links={pages} />,
            <HeaderStandard links={pages} />,
          ]}
        />
      )}

      {/* Page Content Viewer Section*/}
      {props.contentEn && (
        <div className={styles.routesContainer}>
          <Routes>
            <Route
              path="/"
              element={
                <DefaultPageScheduler
                  key={"HomePage"}
                  pagePRefs={props.insidePageRefs["HomePage"]}
                  pagesElements={[
                    // Page One
                    <DefaultResponsivePageHandler
                      extraSmall={[
                        <HomePagePOneV2_extraSmall />,
                        <HomePagePOneV2_extraSmall_landscape />,
                      ]}
                      extraLarge={[<HomePagePOneV2 />, <HomePagePOneV2 />]}
                    />,
                    // PRE Page Two
                    <DefaultResponsivePageHandler
                      extraSmall={[
                        <HomePage_Pre_PTwo_extraSmall />,
                        <HomePage_Pre_PTwo />,
                      ]}
                      extraLarge={[
                        <HomePage_Pre_PTwo />,
                        <HomePage_Pre_PTwo />,
                      ]}
                    />,
                    // Page Two
                    <DefaultResponsivePageHandler
                      extraSmall={[
                        <HomePagePTwo_extraSmall />,
                        <HomePagePTwo_extraSmall_landscape />,
                      ]}
                      extraLarge={[<HomePagePTwo />, <HomePagePTwo />]}
                    />,
                    // Page Three
                    <DefaultResponsivePageHandler
                      extraSmall={[
                        <HomePagePThree_extraSmall />,
                        <HomePagePThree_extraSmall_landscape />,
                      ]}
                      extraLarge={[<HomePagePThree />, <HomePagePThree />]}
                    />,
                    // Page Four
                    <DefaultResponsivePageHandler
                      extraSmall={[
                        <HomePagePFour_extraSmall />,
                        <HomePagePFour_extraSmall_landscape />,
                      ]}
                      extraLarge={[<HomePagePFour />, <HomePagePFour />]}
                    />,
                    // Page Five
                    <DefaultResponsivePageHandler
                      extraSmall={[
                        <HomePagePFive_extraSmall />,
                        <HomePagePFive_extraSmall_landscape />,
                      ]}
                      extraLarge={[<HomePagePFive />, <HomePagePFive />]}
                    />,
                    // Page Six
                    <DefaultResponsivePageHandler
                      extraSmall={[
                        <HomePagePSix_extraSmall />,
                        <HomePagePSix_extraSmall_landscape />,
                      ]}
                      extraLarge={[<HomePagePSix />, <HomePagePSix />]}
                    />,
                    // Page Seven
                    <DefaultResponsivePageHandler
                      extraSmall={[
                        <HomePagePSeven_extraSmall />,
                        <HomePagePSeven_extraSmall_landscape />,
                      ]}
                      extraLarge={[<HomePagePSeven />, <HomePagePSeven />]}
                    />,
                    // Page Eight
                    <DefaultResponsivePageHandler
                      extraSmall={[
                        <HomePagePEight_extraSmall />,
                        <HomePagePEight_extraSmall_landscape />,
                      ]}
                      extraLarge={[<HomePagePEight />, <HomePagePEight />]}
                    />,
                  ]}
                  footerElement={<></>}
                  prePageElement={null}
                  currentPageName={"/"}
                />
              }
            />
            <Route
              path="/simplePortfolioPreview"
              element={
                <DefaultPageScheduler
                  key={"SimplePortfolioPreview"}
                  pagePRefs={[]}
                  pagesElements={[
                    <div className={styles.simplePorfolioContainer}>
                      <DefaultResponsivePageHandler
                        extraSmall={[
                          <ResumeView_extraSmall />,
                          <ResumeView_extraSmall />,
                        ]}
                        extraLarge={[<ResumeView />, <ResumeView />]}
                      />
                    </div>,
                  ]}
                  footerElement={<></>}
                  prePageElement={null}
                  currentPageName={"SimplePortfolioPreview"}
                />
              }
            />

            <Route
              path="/home"
              element={
                <DefaultPageScheduler
                  key={"HomePage"}
                  pagePRefs={props.insidePageRefs["HomePage"]}
                  pagesElements={[
                    // Page One
                    <DefaultResponsivePageHandler
                      extraSmall={[
                        <HomePagePOneV2_extraSmall />,
                        <HomePagePOneV2_extraSmall_landscape />,
                      ]}
                      extraLarge={[<HomePagePOneV2 />, <HomePagePOneV2 />]}
                    />,
                    // PRE Page Two
                    <DefaultResponsivePageHandler
                      extraSmall={[
                        <HomePage_Pre_PTwo_extraSmall />,
                        <HomePage_Pre_PTwo />,
                      ]}
                      extraLarge={[
                        <HomePage_Pre_PTwo />,
                        <HomePage_Pre_PTwo />,
                      ]}
                    />,
                    // Page Two
                    <DefaultResponsivePageHandler
                      extraSmall={[
                        <HomePagePTwo_extraSmall />,
                        <HomePagePTwo_extraSmall_landscape />,
                      ]}
                      extraLarge={[<HomePagePTwo />, <HomePagePTwo />]}
                    />,
                    // Page Three
                    <DefaultResponsivePageHandler
                      extraSmall={[
                        <HomePagePThree_extraSmall />,
                        <HomePagePThree_extraSmall_landscape />,
                      ]}
                      extraLarge={[<HomePagePThree />, <HomePagePThree />]}
                    />,
                    // Page Four
                    <DefaultResponsivePageHandler
                      extraSmall={[
                        <HomePagePFour_extraSmall />,
                        <HomePagePFour_extraSmall_landscape />,
                      ]}
                      extraLarge={[<HomePagePFour />, <HomePagePFour />]}
                    />,
                    // Page Five
                    <DefaultResponsivePageHandler
                      extraSmall={[
                        <HomePagePFive_extraSmall />,
                        <HomePagePFive_extraSmall_landscape />,
                      ]}
                      extraLarge={[<HomePagePFive />, <HomePagePFive />]}
                    />,
                    // Page Six
                    <DefaultResponsivePageHandler
                      extraSmall={[
                        <HomePagePSix_extraSmall />,
                        <HomePagePSix_extraSmall_landscape />,
                      ]}
                      extraLarge={[<HomePagePSix />, <HomePagePSix />]}
                    />,
                    // Page Seven
                    <DefaultResponsivePageHandler
                      extraSmall={[
                        <HomePagePSeven_extraSmall />,
                        <HomePagePSeven_extraSmall_landscape />,
                      ]}
                      extraLarge={[<HomePagePSeven />, <HomePagePSeven />]}
                    />,
                    // Page Eight
                    <DefaultResponsivePageHandler
                      extraSmall={[
                        <HomePagePEight_extraSmall />,
                        <HomePagePEight_extraSmall_landscape />,
                      ]}
                      extraLarge={[<HomePagePEight />, <HomePagePEight />]}
                    />,
                  ]}
                  footerElement={<></>}
                  prePageElement={null}
                  currentPageName={"HomePage"}
                />
              }
            />
            <Route
              path="/bio"
              element={
                <DefaultPageScheduler
                  key={"Bio"}
                  pagePRefs={props.insidePageRefs["Bio"]}
                  pagesElements={[
                    <DefaultResponsivePageHandler
                      extraSmall={[
                        <BioPOne_extraSmall />,
                        <BioPOne_extraSmall_landscape />,
                      ]}
                      extraLarge={[<BioPOne />, <BioPOne />]}
                    />,
                    <DefaultResponsivePageHandler
                      extraSmall={[
                        <BioPTwoV1_extraSmall />,
                        <BioPTwoV1_extraSmall />,
                      ]}
                      extraLarge={[<BioPTwoV1 />, <BioPTwoV1 />]}
                    />,
                    <DefaultResponsivePageHandler
                      extraSmall={[
                        <BioPageThree_extraSmall />,
                        <BioPageThree_extraSmall_landscape />,
                      ]}
                      extraLarge={[<BioPageThree />, <BioPageThree />]}
                    />,
                  ]}
                  footerElement={<></>}
                  prePageElement={null}
                  currentPageName={"Bio"}
                />
              }
            />
            <Route
              path="/skills"
              element={
                <DefaultPageScheduler
                  key={"Skills"}
                  pagePRefs={props.insidePageRefs["Skills"]}
                  pagesElements={[
                    <DefaultResponsivePageHandler
                      extraSmall={[
                        <SkillsPOne_extraSmall
                          insidePageRefs={props.insidePageRefs["Skills"]}
                        />,
                        <SkillsPOne_extraSmall_landscape
                          insidePageRefs={props.insidePageRefs["Skills"]}
                        />,
                      ]}
                      extraLarge={[
                        <SkillsPOne
                          insidePageRefs={props.insidePageRefs["Skills"]}
                        />,
                        <SkillsPOne
                          insidePageRefs={props.insidePageRefs["Skills"]}
                        />,
                      ]}
                    />,
                    <SkillsPTwo />,
                    <SkillsPThree />,
                    <SkillsPFour />,
                    <SkillsPFive />,
                    <SkillsPSix />,
                    <SkillsPSeven />,
                    <SkillsPEight />,
                    <SkillsPNine />,
                    <SkillsPTen />,
                    <SkillsPElevel />,
                    <SkillsPTwelve />,
                    <SkillsPThirteen />,
                  ]}
                  footerElement={<></>}
                  prePageElement={null}
                  currentPageName={"Skills"}
                />
              }
            />
            <Route
              path="/skills/details/:skillId"
              element={
                <DefaultPageScheduler
                  key={"SkillsDetails"}
                  pagePRefs={props.insidePageRefs["SkillsDetails"]}
                  pagesElements={[
                    <DefaultResponsivePageHandler
                      extraSmall={[
                        <SkillsDetailsPOne_extraSmall />,
                        <SkillsDetailsPOne_extraSmall_landscape />,
                      ]}
                      extraLarge={[
                        <SkillsDetailsPOne />,
                        <SkillsDetailsPOne />,
                      ]}
                    />,
                  ]}
                  footerElement={<></>}
                  prePageElement={null}
                  currentPageName={"SkillsDetails"}
                />
              }
            />
            <Route
              path="/projects"
              element={
                <DefaultPageScheduler
                  key={"Projects"}
                  pagePRefs={props.insidePageRefs["Projects"]}
                  pagesElements={[
                    <DefaultResponsivePageHandler
                      extraSmall={[
                        <ProjectsPagePOne_extraSmall />,
                        <ProjectsPagePOne_extraSmall />,
                      ]}
                      extraLarge={[<ProjectsPagePOne />, <ProjectsPagePOne />]}
                    />,
                    <ComingSoonLoader />,
                  ]}
                  footerElement={<></>}
                  prePageElement={null}
                  currentPageName={"Projects"}
                />
              }
            />
            <Route
              path="/apis"
              element={
                <DefaultPageScheduler
                  key={"APIs"}
                  pagePRefs={props.insidePageRefs["APIs"]}
                  pagesElements={[
                    <DefaultResponsivePageHandler
                      extraSmall={[
                        <ApisPOne_extraSmall />,
                        <ApisPOne_extraSmall_landscape />,
                      ]}
                      extraLarge={[<ApisPOne />, <ApisPOne />]}
                    />,
                  ]}
                  footerElement={<></>}
                  prePageElement={null}
                  currentPageName={"APIs"}
                />
              }
            />
            <Route
              path="/contact"
              element={
                <DefaultPageScheduler
                  key={"Contact"}
                  pagePRefs={props.insidePageRefs["Contact"]}
                  pagesElements={[
                    <DefaultResponsivePageHandler
                      extraSmall={[
                        <ContactPOne_extraSmall />,
                        <ContactPOne_extraSmall />,
                      ]}
                      extraLarge={[<ContactPOne />, <ContactPOne />]}
                    />,
                    /*
                    <DefaultResponsivePageHandler
                      extraSmall={[
                        <ContactPOne_SubPage1_extraSmall />,
                        <ContactPOne_SubPage1_extraSmall />,
                      ]}
                      extraLarge={[]}
                    />,
                    */
                    <DefaultResponsivePageHandler
                      extraSmall={[
                        <ContactPTwo_extraSmall />,
                        <ContactPTwo_extraSmall />,
                      ]}
                      extraLarge={[<ContactPTwo />, <ContactPTwo />]}
                    />,
                    <DefaultResponsivePageHandler
                      extraSmall={[
                        <ContactPThree_extraSmall />,
                        <ContactPThree_extraSmall />,
                      ]}
                      extraLarge={[<ContactPThree />, <ContactPThree />]}
                    />,
                    <DefaultResponsivePageHandler
                      extraSmall={[
                        <ContactPFour_extraSmall />,
                        <ContactPFour_extraSmall />,
                      ]}
                      extraLarge={[<ContactPFour />, <ContactPFour />]}
                    />,
                    <DefaultResponsivePageHandler
                      extraSmall={[
                        <CoffeePThree_extraSmall currentPath={"Contact"} />,
                        <CoffeePThree_extraSmall_landscape
                          currentPath={"Contact"}
                        />,
                      ]}
                      extraLarge={[<ContactPFive />, <ContactPFive />]}
                    />,
                  ]}
                  footerElement={<></>}
                  prePageElement={null}
                  currentPageName={"Contact"}
                />
              }
            />
            <Route
              path="/coffee"
              element={
                <DefaultPageScheduler
                  key={"Coffee"}
                  pagePRefs={props.insidePageRefs["Coffee"]}
                  pagesElements={[
                    <DefaultResponsivePageHandler
                      extraSmall={[
                        <CoffeePOne_extraSmall
                          insidePageRefs={props.insidePageRefs["Coffee"]}
                        />,
                        <CoffeePOne_extraSmall_landscape
                          insidePageRefs={props.insidePageRefs["Coffee"]}
                        />,
                      ]}
                      extraLarge={[
                        <CoffeePOne
                          insidePageRefs={props.insidePageRefs["Coffee"]}
                        />,
                        <CoffeePOne
                          insidePageRefs={props.insidePageRefs["Coffee"]}
                        />,
                      ]}
                    />,
                    <DefaultResponsivePageHandler
                      extraSmall={[
                        <CoffeePTwo_extraSmall />,
                        <CoffeePOne_extraSmall_landscape
                          insidePageRefs={props.insidePageRefs["Coffee"]}
                        />,
                      ]}
                      extraLarge={[<CoffeePTwo />, <CoffeePTwo />]}
                    />,
                    <DefaultResponsivePageHandler
                      extraSmall={[
                        <CoffeePThree_extraSmall currentPath={"Coffee"} />,
                        <CoffeePThree_extraSmall_landscape
                          currentPath={"Coffee"}
                        />,
                      ]}
                      extraLarge={[
                        <CoffeePThree currentPath={"Coffee"} />,
                        <CoffeePThree currentPath={"Coffee"} />,
                      ]}
                    />,
                  ]}
                  footerElement={<></>}
                  prePageElement={null}
                  currentPageName={"Coffee"}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <DefaultPageScheduler
                  key={"Profile"}
                  pagePRefs={props.insidePageRefs["Profile"]}
                  pagesElements={[
                    <DefaultResponsivePageHandler
                      extraSmall={[
                        <ProfilePOne_extraSmall />,
                        <ProfilePOne_extraSmall_landscape />,
                      ]}
                      extraLarge={[<ProfilePOne />, <ProfilePOne />]}
                    />,
                  ]}
                  footerElement={<></>}
                  prePageElement={null}
                  currentPageName={"Profile"}
                />
              }
            />

            <Route path="/*" element={<ErrorPage />} />
            {/* Add more routes for other pages */}
          </Routes>
        </div>
      )}
    </div>
  );
};

export default NavigatorByHeaderpageView;
