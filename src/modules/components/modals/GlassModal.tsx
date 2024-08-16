import React, { useState } from "react";
import styles from "./GlassModal.module.css";
import closeImg from "../../../images/icons/close.png";

interface GlassModalProps {
  content: JSX.Element;
  contentW: string;
  contentH: string;
  isOpen: boolean;
  toggleModal: () => void;
}

const GlassModal = (props: GlassModalProps) => {
  return (
    <div className={styles.container}>
      {props.isOpen && (
        <div className={styles.isOpenContainer}>
          <div
            className={styles.modalOverlay}
            onClick={props.toggleModal}
          ></div>
          <div
            className={styles.modalContentGlass}
            style={{
              width: `${props.contentW}`,
              height: `${props.contentH}`,
            }}
          ></div>
          <div
            className={styles.modalContent}
            style={{
              width: `${props.contentW}`,
              height: `${props.contentH}`,
            }}
          >
            <img
              src={closeImg}
              alt="Close"
              className={styles.closeModalImg}
              onClick={props.toggleModal}
            />
            {props.content}
          </div>
        </div>
      )}
    </div>
  );
};

export default GlassModal;
