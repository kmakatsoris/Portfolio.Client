import React from "react";
import styles from "./DefaultResponsivePageTestHandler.module.css";

const RESOLUTIONS = [
  // Mobile Phones:
  { w: "360px", h: "640px" }, // Portrait
  { w: "375px", h: "667px" }, // Portrait
  { w: "414px", h: "896px" }, // Portrait
  { w: "640px", h: "360px" }, // Landscape
  { w: "667px", h: "375px" }, // Landscape
  { w: "896px", h: "414px" }, // Landscape

  // Tablets:
  { w: "768px", h: "1024px" }, // Portrait
  { w: "800px", h: "1280px" }, // Portrait
  { w: "1024px", h: "768px" }, // Landscape
  { w: "1280px", h: "800px" }, // Landscape

  // Laptops:
  { w: "1366px", h: "768px" }, // Standard
  { w: "1440px", h: "900px" }, // Standard
  { w: "1920px", h: "1080px" }, // High Resolution
  { w: "2560px", h: "1440px" }, // High Resolution

  // Laptops:
  { w: "1920px", h: "1080px" }, // Standard
  { w: "2560px", h: "1440px" }, // Standard
  { w: "3840px", h: "2160px" }, // Large Monitors
];

interface DefaultResponsivePageTestHandlerProps {
  element: JSX.Element;
  resolutionMode: number;
}

const DefaultResponsivePageTestHandler = (
  props: DefaultResponsivePageTestHandlerProps
) => {
  console.log(RESOLUTIONS[props.resolutionMode].w);
  console.log(RESOLUTIONS[props.resolutionMode].h);
  return (
    <div className={styles.container}>
      <div
        className={styles.subContainer}
        style={{
          width: RESOLUTIONS[props.resolutionMode].w,
          height: RESOLUTIONS[props.resolutionMode].h,
        }}
      >
        {props.element}
      </div>
    </div>
  );
};

export default DefaultResponsivePageTestHandler;
