import React from "react";
import styles from "./Background2.module.css";

interface Background2Props {
    opacity: string;
}

const Background2 = (props: Background2Props) => {
    return <div className={styles.background} style={{opacity: props.opacity}}></div>;
}

export default Background2;
