import React, { useEffect, useState } from "react";
import styles from "./DefaultResponsivePageHandler.module.css";
import {
  calculateTheResponsivenessMode,
  isPortraitView,
  LoadResolutions,
  TryGetFromArray,
} from "../../services/GeneralPurpose.Service";

interface DefaultResponsivePageHandlerProps {
  extraSmall: JSX.Element[];
  small?: JSX.Element[];
  medium?: JSX.Element[];
  large?: JSX.Element[];
  extraLarge?: JSX.Element[];
  overflow?: string;
}

const DefaultResponsivePageHandler = (
  props: DefaultResponsivePageHandlerProps
) => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState<number>(window.innerWidth);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  }, [window.innerWidth, window.innerHeight]);

  const _renderElementByResolution = () => {
    let resolutionMode: number = calculateTheResponsivenessMode(
      windowWidth,
      windowHeight
    );
    // console.log(`${windowWidth}, ${windowHeight}`);
    if (resolutionMode === 0) {
      return (
        props.extraSmall &&
        TryGetFromArray(
          props.extraSmall,
          isPortraitView(LoadResolutions(0), windowWidth, windowHeight) ? 0 : 1
        )
      );
    } else if (resolutionMode === 1) {
      return props.small
        ? TryGetFromArray(
            props.small,
            isPortraitView(LoadResolutions(1), windowWidth, windowHeight)
              ? 0
              : 1
          )
        : props.extraSmall &&
            TryGetFromArray(
              props.extraSmall,
              isPortraitView(LoadResolutions(1), windowWidth, windowHeight)
                ? 0
                : 1
            );
    } else if (resolutionMode === 2) {
      return props.medium
        ? TryGetFromArray(
            props.medium,
            isPortraitView(LoadResolutions(2), windowWidth, windowHeight)
              ? 0
              : 1
          )
        : props.extraLarge &&
            TryGetFromArray(
              props.extraLarge,
              isPortraitView(LoadResolutions(2), windowWidth, windowHeight)
                ? 0
                : 1
            );
    } else if (resolutionMode === 3) {
      return props.large
        ? TryGetFromArray(
            props.large,
            isPortraitView(LoadResolutions(3), windowWidth, windowHeight)
              ? 0
              : 1
          )
        : props.extraLarge &&
            TryGetFromArray(
              props.extraLarge,
              isPortraitView(LoadResolutions(3), windowWidth, windowHeight)
                ? 0
                : 1
            );
    } else {
      return (
        props.extraLarge &&
        TryGetFromArray(
          props.extraLarge,
          isPortraitView(LoadResolutions(4), windowWidth, windowHeight) ? 0 : 1
        )
      );
    }
  };

  return (
    <div
      className={styles.container}
      style={{ overflow: props.overflow ?? "hidden" }}
    >
      {_renderElementByResolution()}
    </div>
  );
};

export default DefaultResponsivePageHandler;
