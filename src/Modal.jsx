import React, { useContext } from "react";
import { ContactsContext } from "./App";

import styles from "./Modal.module.css"

function Modal() {
  const {
    setIsModalOpen,
    contactToDelete,
    deleteContact,
    deleteMultipleContacts,
  } = useContext(ContactsContext);

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h3>آیا مطمئن هستید؟</h3>
        <button onClick={() => deleteContact(contactToDelete.id)} className={styles.confirm}>
          بله، حذف کن
        </button>
        <button onClick={() => setIsModalOpen(false)} className={styles.cancel}>
          انصراف
        </button>
      </div>
    </div>
  );
}

export default Modal;
