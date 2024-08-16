import React, { useContext, useEffect, useState } from "react";
import styles from "./HomePagePOne.module.css";
import CircleCarousel from "../../modules/components/presentationViewer/CircleCarousel";
import InformationBanners from "../../modules/components/banners/InformationBanner";
import ShowUpListWithCornersEffect from "../../modules/components/showupViewer/ShowUpListWithCornersEffect";
import { GeneralDataContext } from "../../services/DataProviders/GeneralDataProvider";

// @TODO: [Fetch]
const data: InformationModulesBannerContent[] = [
  {
    id: "1.",
    mainContent: "20%",
    sideContent: "Of the viewer are registered.",
    imageContent: "",
    backgroundImage: "",
    metaData: {
      modifiedDate: "11.02.2024",
      originFrom:
        "This result originated from the core infrastructure of the site.",
      author: "MAKATSORIS KONSTANTINOS, creator of this site.",
      category: "Daily Information",
      language: "English",
      keywords: "Information about the website's structure and content.",
      version: "The version number or revision history of the content.",
      license: "The usage rights or license associated with the content.",
      audience: "The intended audience or target demographic for the content.",
      location: "The geographical location associated with the content.",
      format:
        "The file format or medium of the content (e.g., text, image, video).",
    },
  },
  {
    id: "1.",
    mainContent: "20%",
    sideContent: "Of the viewer are registered.",
    imageContent: "",
    backgroundImage: "",
    metaData: {
      modifiedDate: "11.02.2024",
      originFrom:
        "This result originated from the core infrastructure of the site.",
      author: "MAKATSORIS KONSTANTINOS, creator of this site.",
      category: "Daily Information",
      language: "English",
      keywords: "Information about the website's structure and content.",
      version: "The version number or revision history of the content.",
      license: "The usage rights or license associated with the content.",
      audience: "The intended audience or target demographic for the content.",
      location: "The geographical location associated with the content.",
      format:
        "The file format or medium of the content (e.g., text, image, video).",
    },
  },
  {
    id: "1.",
    mainContent: "20%",
    sideContent: "Of the viewer are registered.",
    imageContent: "",
    backgroundImage: "",
    metaData: {
      modifiedDate: "11.02.2024",
      originFrom:
        "This result originated from the core infrastructure of the site.",
      author: "MAKATSORIS KONSTANTINOS, creator of this site.",
      category: "Daily Information",
      language: "English",
      keywords: "Information about the website's structure and content.",
      version: "The version number or revision history of the content.",
      license: "The usage rights or license associated with the content.",
      audience: "The intended audience or target demographic for the content.",
      location: "The geographical location associated with the content.",
      format:
        "The file format or medium of the content (e.g., text, image, video).",
    },
  },
  {
    id: "1.",
    mainContent: "20%",
    sideContent: "Of the viewer are registered.",
    imageContent: "",
    backgroundImage: "",
    metaData: {
      modifiedDate: "11.02.2024",
      originFrom:
        "This result originated from the core infrastructure of the site.",
      author: "MAKATSORIS KONSTANTINOS, creator of this site.",
      category: "Daily Information",
      language: "English",
      keywords: "Information about the website's structure and content.",
      version: "The version number or revision history of the content.",
      license: "The usage rights or license associated with the content.",
      audience: "The intended audience or target demographic for the content.",
      location: "The geographical location associated with the content.",
      format:
        "The file format or medium of the content (e.g., text, image, video).",
    },
  },
];

interface HomePagePOneProps {}

const HomePagePOne = (props: HomePagePOneProps) => {
  const { pageTheme } = useContext(GeneralDataContext);
  const [imagesSection1, setImagesSection1] = useState<string[]>([]); // @TODO: Fetch
  const [imagesSection2, setImagesSection2] = useState<string[]>([]); // @TODO: Fetch
  const imagesSection2Length: number = 5; // @TODO: Fetch
  const [isGlassModalOpen, setIsGlassModalOpen] = useState<boolean>(false);

  // @TODO: Fetch
  useEffect(() => {
    const importImagesSections1 = async () => {
      const imagesContext = require.context(
        `./../../images/content/HomePagePOnePage.Sec1/`,
        false,
        /\.(png|jpe?g|gif)$/i
      );

      const imagePaths = imagesContext.keys();
      const imageUrls = imagePaths.map((path: string) => imagesContext(path));

      setImagesSection1(imageUrls);
    };

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

    importImagesSections1();
    importImagesSections2();
  }, []);

  const toggleGlassModal = () => {
    setIsGlassModalOpen(!isGlassModalOpen);
  };

  return (
    <div className={styles.container} style={pageTheme}>
      {/** Left Side Of The Page 
      <div className={styles.mainContentContainer}>
        <CircleCarousel
          images={imagesSection1}
          toggleGlassModal={toggleGlassModal}
        />
      </div>
      */}

      {/** Right Side Of The Page */}
      <div className={styles.sideContainer}>
        {/** Top Right Container With Continuously Show Up Pictures */}
        <div className={styles.sideMainContainer}>
          {/*<ShowUpWithCornersEffect intervalTime={5000} containerScale={300} cornerScale={50} content={<div></div>} />*/}
          <ShowUpListWithCornersEffect
            listOfContents={imagesSection2}
            intervalTime={5000}
            numberOfContents={imagesSection2Length}
            containerScale={400}
            cornerScale={50}
            maxImgWidth={300}
            ImgLeft={-86}
            ImgTop={-108}
          />
        </div>
        {/** Bottom Right Container With the information banners */}
        <div className={styles.sideSecondaryContainer}>
          <div className={styles.sideSecondarySubContainer}>
            <InformationBanners
              data={data}
              toggleGlassModal={toggleGlassModal}
            />
            <div className={styles.sideSecondarySubSubContainer}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePagePOne;
