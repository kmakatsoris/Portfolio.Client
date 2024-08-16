import React, { RefObject, useContext, useEffect, useState } from "react";
import styles from "./DefaultPageScheduler.module.css";
import FooterDefaultPage from "./FooterDefaultPage";
import { GeneralDataContext } from "../services/DataProviders/GeneralDataProvider";
import GlassModal from "../modules/components/modals/GlassModal";
import DefaultResponsivePageTestHandler from "./responsivePages/DefaultResponsivePageTestHandler";
import FooterDefaultPage_extraSmall from "./responsivePages/FooterDefaultPage_extraSmall";
import FooterDefaultPage_extraSmall_landscape from "./responsivePages/FooterDefaultPage_extraSmall_landscape";
import DefaultResponsivePageHandler from "./responsivePages/DefaultResponsivePageHandler";

interface DefaultPageSchedulerProps {
  currentPageName: string;
  pagePRefs: RefObject<HTMLDivElement>[];
  pagesElements: JSX.Element[];
  footerElement: JSX.Element | null;
  prePageElement: JSX.Element | null;
}

const DefaultPageScheduler = (props: DefaultPageSchedulerProps) => {
  const {
    setCurrentPathname,
    glassModalInstance,
    setGlassModalInstance,
    setPrevGlassModalInstance,
  } = useContext(GeneralDataContext);
  const [isVisible, setIsVisible] = useState<boolean[]>(
    Array.from({ length: props.pagePRefs.length - 1 }, () => false)
  );
  const [isGlassModalOpenState, setIsGlassModalOpenState] =
    useState<boolean>(false);

  useEffect(() => {
    setIsGlassModalOpenState(glassModalInstance.isOpen);
  }, [glassModalInstance.isOpen]);

  useEffect(() => {
    if (props.currentPageName !== null || props.currentPageName !== "") {
      setCurrentPathname(props.currentPageName);
    } else {
      setCurrentPathname("");
    }
  }, [props.currentPageName]);

  useEffect(() => {
    const observeElement = (
      ref: React.RefObject<HTMLDivElement>,
      idx: number,
      threshold: number
    ) => {
      if (ref && ref.current) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                updateIsVisibleState(idx, true);
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: threshold }
        );
        observer.observe(ref.current);
        return observer;
      }
      return null;
    };

    const observers: IntersectionObserver[] = [];
    const thresholds = Array.from(
      { length: props.pagePRefs.length - 1 },
      () => 0
    );

    props.pagePRefs.slice(1).forEach((ref, idx) => {
      const observer = observeElement(ref, idx + 1, thresholds[idx]);
      if (observer) {
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [props.pagePRefs]);

  const updateIsVisibleState = (currentIdx: number, value: boolean) => {
    setIsVisible((prevState) => {
      const updatedVisibility = [...prevState];
      updatedVisibility[currentIdx] = value;
      return updatedVisibility;
    });
  };

  const initAllExceptOne = (exceptIdx: number) => {
    setIsVisible((prev: boolean[]) =>
      prev.map((_: boolean, idx: number) => (idx === exceptIdx ? true : false))
    );
  };

  const closeGlassModal = () => {
    if (isGlassModalOpenState) {
      setGlassModalInstance((prevState: GlassModalDataContract) => {
        setPrevGlassModalInstance(prevState);
        return {
          ...prevState,
          content: {},
          isOpen: false,
        };
      });
    }
    setIsGlassModalOpenState(false);
  };

  return (
    <div className={styles.container}>
      {/** Glass Modal */}
      {isGlassModalOpenState && (
        <GlassModal
          content={glassModalInstance.content.props.children}
          contentW={glassModalInstance.contentW}
          contentH={glassModalInstance.contentH}
          isOpen={isGlassModalOpenState}
          toggleModal={closeGlassModal}
        />
      )}

      {/** Pre Home Page Content Container */}
      {props.prePageElement && (
        <div className={styles.preContainer}>{props.prePageElement}</div>
      )}

      {/** Pages Content Container */}
      {props.pagesElements.map((p: JSX.Element, p_idx: number) => {
        return (
          <div
            key={p_idx}
            ref={props.pagePRefs[p_idx]}
            className={
              isGlassModalOpenState === true
                ? styles.mainContainerOpenGlassModal
                : styles.mainContainer
            }
          >
            {p_idx !== 0 ? isVisible[p_idx] && p : p}
          </div>
        );
      })}

      {/** Post Home Page Content Container */}
      {props.footerElement && (
        <div
          className={
            isGlassModalOpenState === true
              ? styles.postContainer_OpenGlassModal
              : styles.postContainer
          }
        >
          <DefaultResponsivePageHandler
            extraSmall={[
              <FooterDefaultPage_extraSmall />,
              <FooterDefaultPage_extraSmall_landscape />,
            ]}
            extraLarge={[<FooterDefaultPage />, <FooterDefaultPage />]}
          />
        </div>
      )}
    </div>
  );
};

export default DefaultPageScheduler;
