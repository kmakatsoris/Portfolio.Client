import React, { useState } from "react";
import styles from "./ReviewDefaultInput.module.css";
import TextInputWithCharCount from "./TextInputWithCharCount";

interface ReviewDefaultInputProps { }

const ReviewDefaultInput = (props: ReviewDefaultInputProps) => {
  const [highlightText, setHighlightText] = useState("");
  const [improvementText, setImprovementtText] = useState("");

  const submitHandler = () => {
    console.log(`highlightText:${highlightText}`);
    console.log(`improvementText:${improvementText}`);
    console.log(`--------------------------------------`);
  };

  return (
    <div className={styles.container}>
      {/** Highlight */}
      <div className={styles.highlightContainer}>
        <div className={styles.inputContainer}>
          <div className={styles.titleHighlight}>Highlight:</div>
          <TextInputWithCharCount
            width="75%"
            height="50%"
            limit={100}
            initText={
              "Ask the reviewer to highlight what they liked or found beneficial about me...."
            }
            setText={setHighlightText}
          />
        </div>
      </div>

      {/** Areas for Improvement */}
      <div className={styles.improvementContainer}>
        <div className={styles.inputContainer}>
          <div className={styles.titleImprovement}>Areas for Improvement:</div>
          <TextInputWithCharCount
            width="75%"
            height="50%"
            limit={100}
            initText={
              "Prompt the reviewer to provide constructive feedback on aspects that could be enhanced or improved."
            }
            setText={setImprovementtText}
          />
        </div>
      </div>

      {/** Submit Button */}
      <div className={styles.submitButtonContainer}>
        <div className={styles.submitButton} onClick={submitHandler}>
          Submit
        </div>
      </div>
    </div>
  );
};

export default ReviewDefaultInput;
