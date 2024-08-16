import React, { useContext, useEffect, useState } from "react";
import styles from "./MetaDataViewer.module.css";
import { GeneralDataContext } from "../../../services/DataProviders/GeneralDataProvider";
import metaDataContentsFromFile from "../../../MetaData.json";
import ContentViewerPatch1 from "../contentViewer/ContentViewerPatch1";
import infoImage from "../../../images/icons/info.png";

interface MetaDataViewerProps {
  titleFontSize: string;
  textFontSize: string;
  titleContainerMarginBottom: string;
  lineHorizontalMarginBottom: string;
  leftActionWidth: string;
  rightActionWidth: string;
  enumerationTextFontSize: string;
}

interface MetaDataContent {
  title: string;
  text: string;
  contentTexts: string[];
}

const metaDataContents: MetaDataContents = metaDataContentsFromFile;

const MetaDataViewer = (props: MetaDataViewerProps) => {
  const { metaDataContentKey } = useContext(GeneralDataContext);
  const [metaDataContent, setMetaDataContent] =
    useState<MetaDataContent | null>(null);

  // console.log(`metaDataContentKey: ${metaDataContentKey}`);

  useEffect(() => {
    if (metaDataContentKey !== "") {
      const content = metaDataContents[metaDataContentKey];
      if (content) {
        setMetaDataContent(content);
      }
    }
  }, [metaDataContentKey]);

  return (
    <div className={styles.container}>
      {metaDataContent !== null ? (
        <ContentViewerPatch1
          graphic={
            <div className={styles.infoImageContainer}>
              <img
                src={infoImage}
                alt="Info Content"
                className={styles.infoImage}
              />
            </div>
          }
          title={metaDataContent?.title || ""}
          text={metaDataContent?.text || ""}
          content={(metaDataContent?.contentTexts || []).map(
            (t: string, index: number) => (
              <div key={index} className={styles.contentContainer}>
                {t}
              </div>
            )
          )}
          titleFontSize={props.titleFontSize}
          textFontSize={props.textFontSize}
          titleContainerMarginBottom={props.titleContainerMarginBottom}
          lineHorizontalMarginBottom={props.lineHorizontalMarginBottom}
          leftActionWidth={props.leftActionWidth}
          rightActionWidth={props.rightActionWidth}
          enumerationTextFontSize={props.enumerationTextFontSize}
        />
      ) : (
        <div className={styles.noMetaDataContainer}>
          No meta data content found...
        </div>
      )}
    </div>
  );
};

export default MetaDataViewer;
