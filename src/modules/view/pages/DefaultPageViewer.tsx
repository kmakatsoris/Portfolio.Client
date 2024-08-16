import React, { RefObject, useContext, useEffect, useState } from "react";
import styles from "./DefaultPageViewer.module.css";
import { useDrop } from "react-dnd";
import DraggableRope from "../../components/switchActivators/DraggableRope";
import AnimationWarningHarbinger from "../../components/animations/AnimationWarningHarbinger";
import questionmarksImg from "../../../images/icons/questionmark2.png";
import cv_icon from "../../../images/icons/cv-icon.png";
import chat_icon from "../../../images/icons/chat-icon.png";
import skipImg from "../../../images/icons/skip1.png";
import lamp from "../../../images/icons/Header/lamp.png";
import hide from "../../../images/icons/Header/hide-icon.png";
import { GeneralDataContext } from "../../../services/DataProviders/GeneralDataProvider";
import {
  Base64ToBlob,
  GetNextPageTheme,
  tryGetFromRefDictionary,
} from "../../../services/GeneralPurpose.Service";
import ComingSoonLoader from "../../components/loaders/ComingSoonLoader";
import pageThemes from "../../../PageThemes.json";
import Background1 from "../../../pages/Backgrounds/Background1";
import Background2 from "../../../pages/Backgrounds/Background2";
import Background3 from "../../../pages/Backgrounds/Background3";
import Background4 from "../../../pages/Backgrounds/Background4";
import Background5 from "../../../pages/Backgrounds/Background5";
import Background6 from "../../../pages/Backgrounds/Background6";
import Background7 from "../../../pages/Backgrounds/Background7";

interface PageThemes {
  Fill1: PageThemesType;
  Linear1: PageThemesType;
  Radial1: PageThemesType;
  Linear2: PageThemesType;
  Linear3: PageThemesType;
  Linear4: PageThemesType;
  Linear5: PageThemesType;
  Radial2: PageThemesType;
  Linear6: PageThemesType;
  Radial3: PageThemesType;
  Linear7: PageThemesType;
  Linear8: PageThemesType;
  Radial4: PageThemesType;
  Linear9: PageThemesType;
  Linear10: PageThemesType;
  Radial5: PageThemesType;
  Radial6: PageThemesType;
  Linear11: PageThemesType;
  Linear12: PageThemesType;
  Radial7: PageThemesType;
  Linear13: PageThemesType;
  Radial8: PageThemesType;
  Linear14: PageThemesType;
  Radial9: PageThemesType;
  Pattern1: PageThemesType;
  Pattern2: PageThemesType;
  Pattern3: PageThemesType;
  Pattern4: PageThemesType;
  Pattern5: PageThemesType;
}
const BACKGROUNDS_ELEMENTS: JSX.Element[] = [
  <></>,
  <Background1 opacity={"80%"} />,
  <Background2 opacity={"80%"} />,
  <Background3 opacity={"80%"} />,
  <Background4 opacity={"80%"} />,
  <Background5 opacity={"80%"} />,
  <Background6 opacity={"80%"} />,
  <Background7 opacity={"80%"} />,
];

interface DefaultPageViewerProps {
  headerComponent: JSX.Element;
  setPageContentEn: (value: boolean) => void;
  setHeaderContentEn: (value: boolean) => void;
  isRopeEn?: boolean;
  insidePagePRefs: RefDictionary;
}

const DefaultPageViewer = (props: DefaultPageViewerProps) => {
  const {
    currentPathname,
    setGlassModalInstance,
    setPrevGlassModalInstance,
    pageTheme,
    setPageTheme,
  } = useContext(GeneralDataContext);
  const cycles = Array.from(
    {
      length:
        currentPathname === ""
          ? 0
          : tryGetFromRefDictionary(props.insidePagePRefs, currentPathname)
              .length,
    },
    (_, index) => index
  );
  const [cycleActive, setCycleActive] = useState<number>(0);
  const [isHeaderActive, setIsHeaderActive] = useState<boolean>(true);
  const [, drop] = useDrop({
    accept: "ROPE",
    drop: () => closeHeaderHandler(),
  });
  const [pageThmeIdx, setPageThmeIdx] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [pdfbase64, setPdfbase64] = useState("");
  const FileNameForTXT = "/CV.txt";

  useEffect(() => {
    FetchPDF();
  }, [FileNameForTXT]);

  useEffect(() => {
    const scrollImmediatelyToRef = (ref: any) => {
      if (ref && ref.current) {
        ref.current.scrollIntoView();
      }
    };
    setCycleActive(0);
    scrollImmediatelyToRef(getRef(0));
  }, [currentPathname]);

  const closeHeaderHandler = () => {
    props.setHeaderContentEn(!isHeaderActive);
    setIsHeaderActive(!isHeaderActive);
  };

  const scrollToRef = (ref: any) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getRef = (i: number) => {
    let tmp = tryGetFromRefDictionary(props.insidePagePRefs, currentPathname);
    return tmp.length > 0 ? tmp[i] : null;
  };

  const _nextPageTheme = () => {
    if (!pageThemes || Object.keys(pageThemes).length === 0) return;

    // console.log(`pageThmeIdx:${pageThmeIdx}, GetNextPageTheme(pageThmeIdx)=${GetNextPageTheme(pageThmeIdx)}, Theme: ${JSON.stringify(pageThemes["Radial1"])}`);

    setPageTheme((prevPT: PageThemesType) => {
      const themeKeys = Object.keys(pageThemes) as (keyof PageThemes)[];
      const nextIdx =
        (pageThmeIdx + 1) % (themeKeys.length + BACKGROUNDS_ELEMENTS.length);

      if (nextIdx < BACKGROUNDS_ELEMENTS.length) return prevPT;
      return (
        pageThemes[themeKeys[nextIdx - BACKGROUNDS_ELEMENTS.length]] ?? prevPT
      );
    });

    setPageThmeIdx(
      (prevIdx: number) =>
        (prevIdx + 1) %
        (Object.keys(pageThemes).length + BACKGROUNDS_ELEMENTS.length)
    );
  };

  const FetchPDF = () => {
    setLoading(true);
    fetch(FileNameForTXT)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((data) => {
        setPdfbase64(data);
      })
      .catch((error) => {
        console.error("Error fetching text file:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const downloadPDF_Handler1 = () => {
    try {
      setLoading(true);
      // Strip off any extra data, such as prefix "data:application/pdf;base64,"
      const base64Data = pdfbase64.replace(
        /^data:application\/pdf;base64,/,
        ""
      );
      const blob = Base64ToBlob(base64Data, "application/pdf");
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Resume of MAKATSORIS KONSTANTINOS.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error fetching or processing file:", error);
    } finally {
      setLoading(false);
    }
  };

  const launchChatHandler = () => {
    setGlassModalInstance((prevState: GlassModalDataContract) => {
      setPrevGlassModalInstance(prevState);
      return {
        ...prevState,
        content: (
          <>
            <ComingSoonLoader />
          </>
        ),
        contentW: "50%",
        contentH: "50%",
        isOpen: true,
      };
    });
  };

  return (
    <div className={styles.container} ref={drop} style={pageTheme}>
      {/** Header & Page Section */}
      <div className={styles.headerSection}>{props.headerComponent}</div>

      <div className={styles.underHeaderActionsContainer}>
        {/** HIDE HEADER */}
        <div
          className={
            isHeaderActive
              ? styles.underHeaderActionsContainerRopeActive
              : styles.underHeaderActionsContainerRopeDeactive
          }
        >
          {props.isRopeEn ? (
            <AnimationWarningHarbinger
              animatedComponent={<DraggableRope />}
              warningImgWidth={20}
              warningImgMargin="2px -20px 0 0"
              notificationText={"Drag the rope to de/activate the header."}
            />
          ) : (
            <AnimationWarningHarbinger
              animatedComponent={
                <img
                  src={hide}
                  alt="Hide-Header"
                  className={styles.hide}
                  onClick={closeHeaderHandler}
                />
              }
              warningImgWidth={20}
              warningImgMargin="-10px -33px 0px 0px"
              notificationText={"Hide the Header Bar."}
            />
          )}
        </div>

        {/** SWAP BACKGROUNDS */}
        <div
          className={
            isHeaderActive
              ? styles.underHeaderActionsContainerLampActive
              : styles.underHeaderActionsContainerLampDeactive
          }
        >
          <AnimationWarningHarbinger
            animatedComponent={
              <img
                src={lamp}
                alt="Lamp"
                className={styles.lamp}
                onClick={_nextPageTheme}
              />
            }
            warningImgWidth={20}
            warningImgMargin="-10px -10px 0 0"
            notificationText={"Click to switch background themes"}
          />
        </div>
      </div>

      {/** Footer Actions Section */}
      <div className={styles.footerActions}>
        <div className={styles.footerAction}>
          <img
            src={cv_icon}
            alt="CV"
            className={styles.cvIcon}
            onClick={downloadPDF_Handler1}
          />
          <div className={styles.label}>Resume</div>
        </div>
        <div className={styles.footerAction}>
          <img
            src={chat_icon}
            alt="Contact"
            className={styles.contactIcon}
            onClick={launchChatHandler}
          />
          <div className={styles.label}>Chat</div>
        </div>
      </div>

      {/** Page Inspector Section */}
      <div className={styles.sideActions}>
        {cycles.map((cycle) => (
          <div
            key={cycle}
            className={
              cycleActive === cycle ? styles.activeCycle : styles.cycle
            }
            onClick={() => {
              setCycleActive(cycle);
              scrollToRef(getRef(cycle));
            }}
          ></div>
        ))}
      </div>

      {/** Background */}
      {pageThmeIdx < BACKGROUNDS_ELEMENTS.length ? (
        BACKGROUNDS_ELEMENTS[pageThmeIdx]
      ) : (
        <></>
      )}
    </div>
  );
};

export default DefaultPageViewer;
