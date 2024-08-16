import React from "react";
import styles from "./Background3.module.css";

interface Background3Props {
    opacity: string;
}

const Background3 = (props: Background3Props) => {
    return <div className={styles.background} style={{opacity: props.opacity}}></div>;
}

export default Background3;
