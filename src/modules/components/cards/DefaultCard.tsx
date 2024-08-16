import React from "react";
import styles from "./DefaultCard.module.css";

interface DefaultCardProps {
  content: JSX.Element;
  mode: number;
  shadow: string;
  backgroundColorImage1: string;
  backgroundColorImage2: string;
  backgroundColorImage3: string;
}

const DefaultCard = (props: DefaultCardProps) => {
  const contentContainerInlineStyle = () => {
    switch (props.mode) {
      case 1:
        return {
          backgroundOrigin: "border-box",
          boxShadow: props.shadow,
          "--gradient1": props.backgroundColorImage1,
          "--gradient2": props.backgroundColorImage2,
          "--gradient3": props.backgroundColorImage3,
        } as React.CSSProperties;
      default:
        return {
          boxShadow: props.shadow,
          "--gradient1": props.backgroundColorImage1,
          "--gradient2": props.backgroundColorImage2,
          "--gradient3": props.backgroundColorImage3,
        } as React.CSSProperties;
    }
  };
  return (
    <div className={styles.container}>
      <div
        className={styles.contentContainer}
        style={contentContainerInlineStyle()}
      >
        {props.content}
      </div>
    </div>
  );
};

export default DefaultCard;

/*
<DefaultCard
                content={
                  <img
                    src={profileImg}
                    alt="Profile"
                    className={styles.profileImg}
                  />
                }
                mode={1}
                shadow={"0 20px 50px rgba(0, 0, 0, 0.5)"}
                backgroundColorImage1={"linear-gradient(0deg, white, white)"}
                backgroundColorImage2={
                  "linear-gradient(90deg, #ff4900, #0174ff)"
                }
                backgroundColorImage3={
                  "linear-gradient(180deg, #ff4900, #0174ff)"
                }
              />
*/