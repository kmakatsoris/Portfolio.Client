import React from "react";
import styles from "./InformationBanner.module.css";

interface InformationBannerProps {
  data: InformationModulesBannerContent;
  toggleGlassModal: () => void;
}

interface InformationBannersProps {
  data: InformationModulesBannerContent[];
  toggleGlassModal: () => void;
}

export const InformationBanner = (props: InformationBannerProps) => {
  return (
    <div
      className={styles.containerInformationBanner}
      onClick={props.toggleGlassModal}
    >
      <div className={styles.sideContainerInformationBanner}>
        <div className={styles.sideContainerTextInformationBanner}>
          {props.data.sideContent}
        </div>
      </div>
      <div className={styles.mainContainerInformationBanner}>
        <div className={styles.mainContainerTextInformationBanner}>
          {props.data.mainContent}
        </div>
      </div>
    </div>
  );
};

const InformationBanners = (props: InformationBannersProps) => {
  return (
    <div className={styles.containerInformationBanners}>
      {props.data.map((d: InformationModulesBannerContent, index: number) => (
        <InformationBanner
          data={d}
          key={index}
          toggleGlassModal={props.toggleGlassModal}
        />
      ))}
    </div>
  );
};

export default InformationBanners;
