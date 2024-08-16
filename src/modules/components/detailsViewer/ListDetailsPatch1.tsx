import React from "react";
import styles from "./ListDetailsPatch1.module.css";
import TitleAndContentViewer from "../contentViewer/TitleAndContentViewer";
import { TryGetFromArray } from "../../../services/GeneralPurpose.Service";

interface ListDetailsPatch1Props {
  listOfContents: JSX.Element[];
  listOfDetails: string[];
  listOfTitles: string[];
  title: string;
}

const _renderDetailsFormat = (details: string): JSX.Element[] => {
  const renderSubDesc = (desc: string, idx: number) => {
    let tmp: string[] = desc?.split(":");
    return (
      <div key={idx} className={styles.subDescs}>
        <div className={styles.subDesc0}>
          {"["}
          {TryGetFromArray(tmp, 0)}
          {"]: "}
        </div>
        <div className={styles.subDesc1}>{TryGetFromArray(tmp, 1)}</div>
      </div>
    );
  };
  let tmp: string[] = details?.split(";");
  return tmp.map((d: string, idx: number) => {
    return renderSubDesc(d, idx);
  });
};

const ListDetailsPatch1 = (props: ListDetailsPatch1Props) => {
  const renderMainContent = () => {
    return (
      <div className={styles.contentSubContainer}>
        {props.listOfContents.map((c: JSX.Element, i: number) => {
          return (
            <div key={i} className={styles.subContainer}>
              <div className={styles.contentContainer}>
                {props.listOfContents[i]}
              </div>
              <div className={styles.detailsAndTitleContainer}>
                <div className={styles.titleContainer}>
                  {props.listOfTitles[i]}:{" "}
                </div>
                <div className={styles.detailContainer}>
                  {_renderDetailsFormat(props.listOfDetails[i])}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {props.title !== "" ? (
        <TitleAndContentViewer
          title={props.title}
          content={renderMainContent()}
          linehorizonalW={"100%"}
        />
      ) : (
        renderMainContent()
      )}
    </div>
  );
};

export default ListDetailsPatch1;
