import React from "react";
import styles from "./Modal.module.css";

function Modal({ message, onConfirm, onCancel }) {
  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <p>{message}</p>
        <div>
          <button className={styles.confirm} onClick={onConfirm}>
            بله
          </button>
          <button className={styles.cancel} onClick={onCancel}>
            خیر
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
