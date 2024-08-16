import React from "react";
import styles from "./Background5.module.css";

interface Background5Props {
    opacity: string;
}

const Background5 = (props: Background5Props) => {
    return <div className={styles.background} style={{opacity: props.opacity}}></div>;
}

export default Background5;
