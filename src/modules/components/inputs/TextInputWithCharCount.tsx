import React, { useState, ChangeEvent } from "react";
import styles from "./TextInputWithCharCount.module.css";

interface TextInputWithCharCountProps {
  width: string;
  height: string;
  limit: number;
  initText: string;
  setText: (text: string) => void;
}

const TextInputWithCharCount = (props: TextInputWithCharCountProps) => {
  const [text, setText] = useState(props.initText);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= props.limit) {
      setText(e.target.value);
      props.setText(e.target.value);
    }
  };

  return (
    <div style={{ width: props.width, height: props.height }}>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        style={{ width: "100%", height: "100%" }}
        className={styles.inputContainer}
      />
      <div className={styles.charactersContainer}>
        {text.length}/{props.limit}
      </div>
    </div>
  );
};

export default TextInputWithCharCount;
