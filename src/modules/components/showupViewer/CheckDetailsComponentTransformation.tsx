import React from "react";
import styles from "./CheckDetailsComponentTransformation.module.css";
import icon from "../../../images/icons/preview3.png";

interface CheckDetailsComponentTransformationProps {
  content: JSX.Element;
  mode: number;
}

const CheckDetailsComponentTransformation = (
  props: CheckDetailsComponentTransformationProps
) => {
  const styleHandler = () => {
    switch (props.mode) {
      case 0:
        return styles.contentContainerDefault;
      case 1:
        return styles.contentContainerBlur;
      default:
        return styles.contentContainerDefault;
    }
  };

  return (
    <div className={styles.container}>
      <img src={icon} alt="Details" className={styles.icon} />
      <div className={styleHandler()}>{props.content} </div>
    </div>
  );
};

export default CheckDetailsComponentTransformation;
