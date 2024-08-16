import React, { RefObject, useEffect, useRef, useState } from "react";
import styles from "./HomePageScheduler.module.css";
import HomePagePOne from "./HomePagePOne";
import HomePagePTwo from "./HomePagePTwo";
import HomePagePThree from "./HomePagePThree";
import HomePagePFour from "./HomePagePFour";
import HomePagePFive from "./HomePagePFive";
import HomePagePSix from "./HomePagePSix";
import HomePagePSeven from "./HomePagePSeven";
import HomePagePEight from "./HomePagePEight";
import FooterDefaultPage from "../FooterDefaultPage";

interface HomePageSchedulerProps {
  homePagePRefs: RefObject<HTMLDivElement>[];
}

const HomePageScheduler = (props: HomePageSchedulerProps) => {
  const [isVisible, setIsVisible] = useState<boolean[]>(
    Array.from({ length: props.homePagePRefs.length - 1 }, () => false)
  );

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
      { length: props.homePagePRefs.length - 1 },
      () => 0
    );

    props.homePagePRefs.slice(1).forEach((ref, idx) => {
      const observer = observeElement(ref, idx + 1, thresholds[idx]);
      if (observer) {
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [props.homePagePRefs]);

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

  return (
    <div className={styles.container}>
      {/** Pre Home Page Content Container @TODO: <div className={styles.preContainer}></div>*/}

      {/** TEST */}

      {/** Home Page 1 Container */}
      <div ref={props.homePagePRefs[0]} className={styles.mainContainer}>
        <HomePagePOne />
      </div>

      {/** Home Page 2 Container  */}
      <div ref={props.homePagePRefs[1]} className={styles.mainContainer}>
        {isVisible[1] && <HomePagePTwo />}
      </div>

      {/** Home Page 3 Container  */}
      <div ref={props.homePagePRefs[2]} className={styles.mainContainer}>
        {isVisible[2] && <HomePagePThree />}
      </div>

      {/** Home Page 4 Container  */}
      <div ref={props.homePagePRefs[3]} className={styles.mainContainer}>
        {isVisible[3] && <HomePagePFour />}
      </div>

      {/** Home Page 5 Container  */}
      <div ref={props.homePagePRefs[4]} className={styles.mainContainer}>
        {isVisible[4] && <HomePagePFive />}
      </div>

      {/** Home Page 6 Container  */}
      <div ref={props.homePagePRefs[5]} className={styles.mainContainer}>
        {isVisible[5] && <HomePagePSix />}
      </div>

      {/** Home Page 7 Container  */}
      <div ref={props.homePagePRefs[6]} className={styles.mainContainer}>
        {isVisible[6] && <HomePagePSeven />}
      </div>

      {/** Home Page 8 Container  */}
      <div ref={props.homePagePRefs[7]} className={styles.mainContainer}>
        {isVisible[7] && <HomePagePEight />}
      </div>

      {/** Post Home Page Content Container */}
      <div className={styles.postContainer}>
        <FooterDefaultPage />
      </div>
    </div>
  );
};

export default HomePageScheduler;
