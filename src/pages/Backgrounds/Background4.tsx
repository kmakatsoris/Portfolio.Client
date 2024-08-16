import React from "react";
import styles from "./Background4.module.css";

interface Background4Props {
    opacity: string;
}

const Background4 = (props: Background4Props) => {
    return <div className={styles.background} style={{opacity: props.opacity}}></div>;
}

export default Background4;
