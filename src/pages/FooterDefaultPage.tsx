import React, { useContext, useEffect, useState } from "react";
import styles from "./FooterDefaultPage.module.css";
import ShowUpListWithCornersEffect from "../modules/components/showupViewer/ShowUpListWithCornersEffect";
import { GeneralDataContext } from "../services/DataProviders/GeneralDataProvider";
import CodeDisplay from "../modules/components/contentViewer/CodeDisplay";
import REFERENCES from "../References.json";

const CONTACT_DETAILS: DictionaryType = {
  Email: "kpmakatsoris@gmail.com",
  Mobile: "+30 6976531119 (@Greece)",
  LinkedIn: "https://www.linkedin.com/in/kpmakatsoris",
  Github: "https://github.com/kmakatsoris",
  Address: `@Greece, Athens & @Netherland, Amsterdam`,
  Upwork: "https://www.upwork.com/freelancers/~0158e57696bf144e7e",
  Twitter: "https://x.com/kpmakatsoris",
  Useful_Links: "Useful Links Preview",
};
const CONTACT_DETAILS_LENGTH: number = 8;

interface FooterDefaultPageProps {}

const FooterDefaultPage = (props: FooterDefaultPageProps) => {
  const { setGlassModalInstance, setPrevGlassModalInstance } =
    useContext(GeneralDataContext);
  const [imagesSection2, setImagesSection2] = useState<string[]>([]); // @TODO: Fetch
  const imagesSection2Length: number = 5; // @TODO: Fetch

  // @TODO: Fetch
  useEffect(() => {
    const importImagesSections2 = async () => {
      const imagesContext = require.context(
        `./../images/content/HomePagePOnePage.Sec2/`,
        false,
        /\.(png|jpe?g|gif)$/i
      );

      const imagePaths = imagesContext.keys();
      const imageUrls = imagePaths.map((path: string) => imagesContext(path));

      setImagesSection2(imageUrls);
    };

    importImagesSections2();
  }, []);

  const contentSetionInfoValueHandler = (idx: number) => {
    if (idx === CONTACT_DETAILS_LENGTH - 1) {
      setGlassModalInstance((prevState: GlassModalDataContract) => {
        setPrevGlassModalInstance(prevState);
        return {
          ...prevState,
          content: (
            <>
              <div className={styles.usefulLinksContainer}>
                <CodeDisplay
                  codes={REFERENCES}
                  interval={100}
                  width="100%"
                  height="100%"
                  top={"calc(100% - 180px)"}
                  left={"75%"}
                  overflow="auto"
                  enBullet={true}
                />
              </div>
            </>
          ),
          contentW: "87%",
          contentH: "70%",
          isOpen: true,
        };
      });
    }
  };

  return (
    <div className={styles.container}>
      {/** Graphic Container */}
      <div className={styles.graphicContainer}>
        <ShowUpListWithCornersEffect
          listOfContents={imagesSection2}
          intervalTime={5000}
          numberOfContents={imagesSection2Length}
          containerScale={300}
          cornerScale={30}
          maxImgWidth={200}
          ImgLeft={-60}
          ImgTop={-52}
        />
      </div>

      {/** Content Container */}
      <div className={styles.contentContainer}>
        {/** Contacts */}
        <div className={styles.contentSection}>
          <div className={styles.contentSetionTitle}>Contacts:</div>
          <div className={styles.contentSetionInfo}>
            <div className={styles.contentSetionInfoKeysAndValues}>
              {Object.keys(CONTACT_DETAILS).map((k: string) => (
                <div key={k} className={styles.contentSetionInfoKey}>
                  {k}:
                </div>
              ))}
            </div>
            <div
              className={styles.lineVertical}
              style={{ height: `${CONTACT_DETAILS_LENGTH * 33}px` }}
            ></div>
            <div className={styles.contentSetionInfoKeysAndValues}>
              {Object.keys(CONTACT_DETAILS).map((k: string, k_i: number) => (
                <div
                  key={k}
                  className={styles.contentSetionInfoValue}
                  style={
                    k === "Useful_Links"
                      ? {
                          cursor: "pointer",
                          color: "#ff9b1f",
                        }
                      : {}
                  }
                  onClick={() => contentSetionInfoValueHandler(k_i)}
                >
                  {CONTACT_DETAILS[k]}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterDefaultPage;
