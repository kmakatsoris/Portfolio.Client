import React from "react";
import styles from "./Background6.module.css";

interface Background6Props {
    opacity: string;
}

const Background6 = (props: Background6Props) => {
    return <div className={styles.background} style={{opacity: props.opacity}}></div>;
}

export default Background6;
