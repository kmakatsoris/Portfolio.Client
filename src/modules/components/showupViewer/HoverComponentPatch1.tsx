import React, { useState } from "react";
import styles from "./HoverComponentPatch1.module.css";

interface HoverComponentPatch1Props {
  contentWithoutHover: JSX.Element;
  contentWithHover: JSX.Element;
  hoverTop: string;
  hoverLeft: string;
  hoverRight: string;
  hoverBottom: string;
  hoverW: string;
  hoverH: string;
  borderColor?: string;
  isAlwayesOpen?: boolean;
  isOpenOnClick?: boolean;
  isOpenOnHover?: boolean;
}

const HoverComponentPatch1 = (props: HoverComponentPatch1Props) => {
  const [isHovered, setIsHovered] = useState(props.isAlwayesOpen || false);

  const handleMouseEnter = () => {
    if (props.isOpenOnHover !== false) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    !props.isAlwayesOpen &&
      props.isOpenOnHover !== false &&
      setIsHovered(false);
  };

  const onClickHandler = () => {
    if (props.isOpenOnClick && !props.isAlwayesOpen)
      setIsHovered((prevState: boolean) => !prevState);
  };

  return (
    <div
      className={styles.container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClickHandler}
    >
      {props.contentWithoutHover}
      {isHovered === true && (
        <div
          className={styles.isHoverContainer}
          style={{
            top: props.hoverTop,
            left: props.hoverLeft,
            bottom: props.hoverBottom,
            right: props.hoverRight,
            width: props.hoverW,
            height: props.hoverH,
            borderColor: props.borderColor,
          }}
        >
          {props.contentWithHover}
        </div>
      )}
    </div>
  );
};

export default HoverComponentPatch1;
