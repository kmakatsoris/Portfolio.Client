import React, { useState } from "react";
import styles from "./ContentViewerPatch5.module.css";
import { TryGetFromArray } from "../../../services/GeneralPurpose.Service";

interface ContentViewerPatch5Props {
  titleItem: JSX.Element;
  viewItem: JSX.Element;
  labelItem: JSX.Element;
}

const ContentViewerPatch5 = (props: ContentViewerPatch5Props) => {
  return (
    <div className={styles.container}>
      {/** Title */}
      {props.titleItem}

      {/** View */}
      {props.viewItem}

      {/** Label */}
      {props.labelItem}
    </div>
  );
};

export default ContentViewerPatch5;
