import React from "react";
import styles from "./Background1.module.css";

interface Background1Props {
    opacity: string;
}

const Background1 = (props: Background1Props) => {
    return <div className={styles.background} style={{opacity: props.opacity}}></div>;
}

export default Background1;
