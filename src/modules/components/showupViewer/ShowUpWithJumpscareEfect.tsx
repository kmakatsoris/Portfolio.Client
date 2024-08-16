import React, { useEffect, useState } from "react";
import styles from "./ShowUpWithJumpscareEfect.module.css";

interface ShowUpWithJumpscareEfectProps {
  graphicPre: JSX.Element;
  graphicTrans: JSX.Element;
  graphicPost: JSX.Element;
  intervalTimeTransPre: number;
  intervalTimeTransPost: number;
  startIndication: boolean;
}

const ShowUpWithJumpscareEfect = (props: ShowUpWithJumpscareEfectProps) => {
  const [stage, setStage] = useState<number>(0);

  const nextStage = (): void => {
    setStage((prevStage: number) => prevStage + 1);
  };

  useEffect(() => {
    const animationFunc = () => {
      nextStage();
      setTimeout(
        animationFunc,
        stage == 1 ? props.intervalTimeTransPre : props.intervalTimeTransPost
      );
    };

    const timeoutId = setTimeout(
      animationFunc,
      stage == 0 ? props.intervalTimeTransPre : props.intervalTimeTransPost
    );

    return () => clearTimeout(timeoutId); // Cleanup on unmount
  }, [props.intervalTimeTransPre, props.intervalTimeTransPost]);

  return (
    <div className={styles.container}>
      {props.startIndication === true
        ? stage === 0
          ? props.graphicPre
          : stage === 1
          ? props.graphicTrans
          : props.graphicPost
        : props.graphicPre}
    </div>
  );
};

export default ShowUpWithJumpscareEfect;
