import React, { useState, useEffect } from "react";
import styles from "./ComingSoonLoader.module.css";

const ComingSoonLoader: React.FC = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prevStep) => prevStep + 1);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}>
        <span>Coming</span>
        <span className={styles.dashes}>
          {step >= 1 && " - "}
          {step >= 2 && " - "}
          {step >= 3 && " - "}
          {step >= 4 && " - "}
          {step >= 5 && " - "}
          {step >= 6 && " -"}
        </span>
        {step >= 7 && <span className={styles.arrow}> &gt; </span>}
        {step >= 8 && <span>Soon</span>}
      </div>
    </div>
  );
};

export default ComingSoonLoader;
