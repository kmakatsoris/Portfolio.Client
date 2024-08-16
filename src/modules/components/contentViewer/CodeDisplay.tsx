import React, { useEffect, useRef, useState } from "react";
import styles from "./CodeDisplay.module.css";

interface CodeDisplayProps {
  codes: string[];
  width: string;
  height: string;
  top?: string;
  left?: string;
  color?: string;
  backgroundColor?: string;
  interval?: number;
  overflow?: string;
  enBullet?: boolean;
}

const CodeDisplay = (props: CodeDisplayProps) => {
  const [displayedCode, setDisplayedCode] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [displayedCode]);

  const _extractStyle = () => {
    return {
      width: props.width,
      height: props.height,
      top: props.top,
      left: props.left,
      color: props.color ?? "#55fdb1",
      backgroundColor: props.backgroundColor ?? "#000000cc",
      interval: props.interval ?? 0,
      overflow: props.overflow ?? "hidden",
    };
  };

  useEffect(() => {
    let index = 0;
    const codeInterval = setInterval(() => {
      if (index < props.codes.length) {
        setDisplayedCode((prev) => [...prev, props.codes[index]]);
        index++;
      } else {
        clearInterval(codeInterval);
      }
    }, props.interval);

    return () => clearInterval(codeInterval);
  }, [props.codes, props.interval]);

  return (
    <div
      ref={containerRef}
      className={styles.codeContainer}
      style={_extractStyle()}
    >
      {displayedCode.map((line, i) => (
        <li
          key={i}
          dangerouslySetInnerHTML={{ __html: line }}
          className={styles.codeContent}
          style={props.enBullet ? {} : { listStyleType: "none" }}
        />
      ))}
    </div>
  );
};

export default CodeDisplay;
