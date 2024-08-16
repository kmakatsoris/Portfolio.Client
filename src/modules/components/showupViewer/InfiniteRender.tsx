import React, { useState, useEffect } from "react";
import styles from "./InfiniteRender.module.css";

interface InfiniteRenderProps {
  renderComponent: JSX.Element;
  interval: number;
  delay: number;
  onChangeHandler?: () => void;
}

const InfiniteRender = (props: InfiniteRenderProps) => {
  const [count, setCount] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const delayTimeoutId = setTimeout(() => {
      setIsVisible(true);
    }, props.delay);

    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
      props.onChangeHandler && props.onChangeHandler();
    }, props.interval);

    return () => {
      clearTimeout(delayTimeoutId);
      clearInterval(intervalId);
    };
  }, [props.interval, props.delay]);

  return (
    <div className={styles.container}>
      {isVisible && <div key={count}>{props.renderComponent}</div>}
    </div>
  );
};

export default InfiniteRender;
