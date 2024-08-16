import React, { useEffect, useState } from "react";
import styles from "./FooterDefaultPage_extraSmall.module.css";
import ShowUpListWithCornersEffect from "../../modules/components/showupViewer/ShowUpListWithCornersEffect";

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

interface FooterDefaultPage_extraSmallProps {}

const FooterDefaultPage_extraSmall = (
  props: FooterDefaultPage_extraSmallProps
) => {
  const [imagesSection2, setImagesSection2] = useState<string[]>([]); // @TODO: Fetch
  const imagesSection2Length: number = 5; // @TODO: Fetch

  // @TODO: Fetch
  useEffect(() => {
    const importImagesSections2 = async () => {
      const imagesContext = require.context(
        `./../../images/content/HomePagePOnePage.Sec2/`,
        false,
        /\.(png|jpe?g|gif)$/i
      );

      const imagePaths = imagesContext.keys();
      const imageUrls = imagePaths.map((path: string) => imagesContext(path));

      setImagesSection2(imageUrls);
    };

    importImagesSections2();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        {/** Graphic Container */}
        <div className={styles.graphicContainer}>
          <ShowUpListWithCornersEffect
            listOfContents={imagesSection2}
            intervalTime={5000}
            numberOfContents={imagesSection2Length}
            containerScale={280}
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
                {Object.keys(CONTACT_DETAILS).map((k: string) => (
                  <div key={k} className={styles.contentSetionInfoValue}>
                    {CONTACT_DETAILS[k]}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterDefaultPage_extraSmall;
