import React from "react";
import styles from "./ContentUpToFishTextAnimation.module.css";

interface ContentUpToFishTextAnimationProps {
    w: string;
    h: string;
    content: JSX.Element;
    backgroundContent: JSX.Element;
    textsFocus: string[];
    texts: string[];
    textContainerTop: string;
    textContainerRight: string;
    textContainerW: string;
    textContainerH: string;
    averageFontSize: number;
}

const ContentUpToFishTextAnimation = (props: ContentUpToFishTextAnimationProps) => {


    const _defaultRenderTexts = () => {
        return (
          <div className={styles.textsContainer} style={{top: props.textContainerTop, right: props.textContainerRight, width: props.textContainerW, height: props.textContainerH}}>
                        
            {0 < props.textsFocus.length && <div
                className={styles.textFocus}
                style={{
                fontFamily: "Arial",
                top: "10%",
                left: "2%",
                transform: "rotate(0deg)",
                fontSize: `${props.averageFontSize+5}px`,
                }}
            >
                {props.textsFocus[0]}
            </div>}
    
            {1 < props.textsFocus.length && <div
              className={styles.textFocus}
              style={{
                fontFamily: "Arial",
                top: "35%",
                left: "20%",
                transform: "rotate(0deg)",
                fontSize: `${props.averageFontSize+5}px`,
              }}
            >
              {props.textsFocus[1]}
            </div>}
    
            {2 < props.textsFocus.length && <div
              className={styles.textFocus}
              style={{
                fontFamily: "Arial",
                top: "50%",
                left: "15%",
                transform: "rotate(0deg)",
                fontSize: `${props.averageFontSize+5}px`,
              }}
            >
              {props.textsFocus[2]}
            </div>}

            {3 < props.textsFocus.length && <div
              className={styles.textFocus}
              style={{
                fontFamily: "Arial",
                top: "46%",
                left: "70%",
                transform: "rotate(0deg)",
                fontSize: `${props.averageFontSize+5}px`,
              }}
            >
              {props.textsFocus[3]}
            </div>}

            {4 < props.textsFocus.length && <div
              className={styles.textFocus}
              style={{
                fontFamily: "Arial",
                top: "65%",
                left: "48%",
                transform: "rotate(0deg)",
                fontSize: `${props.averageFontSize+5}px`,
              }}
            >
              {props.textsFocus[4]}
            </div>}

            {0 < props.texts.length && <div
              className={styles.text}
              style={{
                fontFamily: "Times New Roman",
                top: "0%",
                left: "10%",
                transform: "rotate(0deg)",
                fontSize: `${props.averageFontSize-3}px`,
                color: "rgb(213 213 213)",
              }}
            >
              {props.texts[0]}
            </div>}

            {1 < props.texts.length && <div
              className={styles.text}
              style={{
                fontFamily: "Verdana",
                top: "20%",
                left: "12%",
                transform: "rotate(0deg)",
                fontSize: `${props.averageFontSize+4}px`,
                color: "rgb(83 83 83)",
              }}
            >
              {props.texts[1]}
            </div>}

            {2 < props.texts.length && <div
              className={styles.text}
              style={{
                fontFamily: "Georgia",
                top: "60%",
                left: "6%",
                transform: "rotate(0deg)",
                fontSize: `${props.averageFontSize+4}px`,
                color: "rgb(83 83 83)",
              }}
            >
              {props.texts[2]}
            </div>}

            {3 < props.texts.length && <div
              className={styles.textFocus}
              style={{
                fontFamily: "Arial",
                top: "13%",
                left: "80%",
                transform: "rotate(0deg)",
                fontSize: `${props.averageFontSize+4}px`,
              }}
            >
              {props.texts[3]}
            </div>}

            {4 < props.texts.length && <div
              className={styles.text}
              style={{
                fontFamily: "Times New Roman",
                top: "53%",
                left: "32%",
                transform: "rotate(0deg)",
                fontSize: `${props.averageFontSize-3}px`,
                color: "rgb(199 199 199)",
              }}
            >
              {props.texts[4]}
            </div>}

            {5 < props.texts.length && <div
              className={styles.text}
              style={{
                fontFamily: "Courier New",
                top: "4%",
                left: "57%",
                transform: "rotate(0deg)",
                fontSize: `${props.averageFontSize+1}px`,
              }}
            >
              {props.texts[5]}
            </div>}

            {6 < props.texts.length && <div
              className={styles.textFocus}
              style={{
                fontFamily: "Verdana",
                top: "70%",
                left: "10%",
                transform: "rotate(0deg)",
                fontSize: `${props.averageFontSize-8}px`,
              }}
            >
              {props.texts[6]}
            </div>}

            {7 < props.texts.length && <div
              className={styles.textFocus}
              style={{
                fontFamily: "Georgia",
                top: "56%",
                left: "70%",
                transform: "rotate(0deg)",
                fontSize: `${props.averageFontSize-3}px`,
              }}
            >
              {props.texts[7]}
            </div>}

            {8 < props.texts.length && <div
              className={styles.text}
              style={{
                fontFamily: "Courier New",
                top: "50%",
                left: "80%",
                transform: "rotate(0deg)",
                fontSize: `${props.averageFontSize-5}px`,
                color: "rgb(199 199 199)",
              }}
            >
              {props.texts[8]}
            </div>}

            {9 < props.texts.length && <div
              className={styles.text}
              style={{
                fontFamily: "Times New Roman",
                top: "25%",
                left: "60%",
                transform: "rotate(0deg)",
                fontSize: `${props.averageFontSize}px`,
              }}
            >
              {props.texts[9]}
            </div>}

            {10 < props.texts.length && <div
              className={styles.text}
              style={{
                fontFamily: "Courier New",
                top: "32%",
                left: "75%",
                transform: "rotate(0deg)",
                fontSize: `${props.averageFontSize}px`,
              }}
            >
              {props.texts[10]}
            </div>}

            {11 < props.texts.length && <div
              className={styles.text}
              style={{
                fontFamily: "Verdana",
                top: "73%",
                left: "32%",
                transform: "rotate(0deg)",
                fontSize: `${props.averageFontSize-4}px`,
              }}
            >
              {props.texts[11]}
            </div>}

            {12 < props.texts.length && <div
              className={styles.textFocus}
              style={{
                fontFamily: "Georgia",
                top: "0%",
                left: "73%",
                transform: "rotate(0deg)",
                fontSize: `${props.averageFontSize+2}px`,
              }}
            >
              {props.texts[12]}
            </div>}
          </div>
        );
    };

    return <div className={styles.container} style={{width: props.w, height: props.h}}>
        <div className={styles.contentContainer}>
            <div className={styles.contentBackGround}>{props.backgroundContent}</div>
            <div className={styles.content}>{props.content}</div>
        </div>

        {/** Texts */}
        {_defaultRenderTexts()}
    </div>
}

export default ContentUpToFishTextAnimation;