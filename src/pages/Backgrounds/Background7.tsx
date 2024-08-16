import React from "react";
import styles from "./Background7.module.css";

interface Background7Props {
    opacity: string;
}

const Background7 = (props: Background7Props) => {
    return <div className={styles.background} style={{opacity: props.opacity}}></div>;
}

export default Background7;
