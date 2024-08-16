import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./App.module.css";
import DefaultPageViewer from "./modules/view/pages/DefaultPageViewer";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { GeneralDataContext } from "./services/DataProviders/GeneralDataProvider";
import NavigatorByHeaderpageView from "./modules/view/pages/NavigatorByHeaderpageView";
// import WelcomePage from "./pages/PrePages/WelcomePage";
import WelcomePageV1 from "./pages/PrePages/WelcomePageV1";
import DefaultResponsivePageHandler from "./pages/responsivePages/DefaultResponsivePageHandler";
import WelcomePageV1_extraSmall from "./pages/responsivePages/PrePages/WelcomePageV1_extraSmall";
import ResumeView_extraSmall from "./modules/components/presentationViewer/resume/responsive/ResumeView_extraSmall";
import ResumeView from "./modules/components/presentationViewer/resume/ResumeView";

const App: React.FC = () => {
  const { renderingPagesMode } = useContext(GeneralDataContext);
  const [pageContentEn, setPageContentEn] = useState<boolean>(true);
  const [headerContentEn, setHeaderContentEn] = useState<boolean>(true);
  const [welcomePageEn, setWelcomePageEn] = useState<boolean>(true); // @TODO: Fetch
  const insidePageRefs: RefDictionary = {
    HomePage: [
      useRef<HTMLDivElement>(null),
      useRef<HTMLDivElement>(null),
      useRef<HTMLDivElement>(null),
      useRef<HTMLDivElement>(null),
      useRef<HTMLDivElement>(null),
      useRef<HTMLDivElement>(null),
      useRef<HTMLDivElement>(null),
      useRef<HTMLDivElement>(null),
      useRef<HTMLDivElement>(null),
    ],
    Bio: [
      useRef<HTMLDivElement>(null),
      useRef<HTMLDivElement>(null),
      useRef<HTMLDivElement>(null),
    ],
    Skills: [
      useRef<HTMLDivElement>(null),
      useRef<HTMLDivElement>(null),
      useRef<HTMLDivElement>(null),
      useRef<HTMLDivElement>(null),
      useRef<HTMLDivElement>(null),
      useRef<HTMLDivElement>(null),
      useRef<HTMLDivElement>(null),
      useRef<HTMLDivElement>(null),
      useRef<HTMLDivElement>(null),
      useRef<HTMLDivElement>(null),
      useRef<HTMLDivElement>(null),
      useRef<HTMLDivElement>(null),
      useRef<HTMLDivElement>(null),
    ],
    SkillsDetails: [useRef<HTMLDivElement>(null)],
    Projects: [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)],
    APIs: [useRef<HTMLDivElement>(null)],
    Contact: [
      useRef<HTMLDivElement>(null),
      useRef<HTMLDivElement>(null),
      useRef<HTMLDivElement>(null),
      useRef<HTMLDivElement>(null),
      useRef<HTMLDivElement>(null),
    ],
    Coffee: [
      useRef<HTMLDivElement>(null),
      useRef<HTMLDivElement>(null),
      useRef<HTMLDivElement>(null),
    ],
    Profile: [],
  };

  const _renderComprehensivePageViewer = () => {
    return (
      <DefaultPageViewer
        headerComponent={
          <NavigatorByHeaderpageView
            contentEn={pageContentEn}
            headerContentEn={headerContentEn}
            insidePageRefs={insidePageRefs}
          />
        }
        setPageContentEn={(value: boolean) => setPageContentEn(value)}
        setHeaderContentEn={(value: boolean) => setHeaderContentEn(value)}
        insidePagePRefs={insidePageRefs}
      />
    );
  };

  const _renderSimplePortfolioViewer = () => {
    return (
      <div className={styles.simplePorfolioContainer}>
        <DefaultResponsivePageHandler
          extraSmall={[<ResumeView_extraSmall />, <ResumeView_extraSmall />]}
          extraLarge={[<ResumeView />, <ResumeView />]}
        />
      </div>
    );
  };

  // console.log(window.location.pathname);
  const _renderMainBody = () => {
    return (
      <div className={styles.mainBodyContainer}>
        {welcomePageEn && window.location.pathname === "/" ? (
          <DefaultResponsivePageHandler
            extraSmall={[
              <WelcomePageV1_extraSmall setEn={setWelcomePageEn} />,
              <WelcomePageV1_extraSmall setEn={setWelcomePageEn} />,
            ]}
            extraLarge={[
              <WelcomePageV1 setEn={setWelcomePageEn} />,
              <WelcomePageV1 setEn={setWelcomePageEn} />,
            ]}
          />
        ) : renderingPagesMode === 0 ? (
          _renderSimplePortfolioViewer()
        ) : (
          _renderComprehensivePageViewer()
        )}
      </div>
    );
  };

  return (
    <div className={styles.App}>
      <DndProvider backend={HTML5Backend}>{_renderMainBody()}</DndProvider>
    </div>
  );
};

export default App;
