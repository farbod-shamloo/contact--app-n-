import React, { useContext, useState } from "react";
import Modal from "../Modal/Modal";
import styles from "./ContactItem.module.css";
import { ContactContext } from "../../context/ContactContext";

function ContactItem({ data }) {
  const { id, name, lastName, email, phone } = data;
  const { deleteContact, setEditingContact } = useContext(ContactContext);
  const [showModal, setShowModal] = useState(false);

  const confirmDelete = () => {
    deleteContact(id);
    setShowModal(false);
  };

  return (
    <>
      <li className={styles.item}>
        <div>
          <p>{`${name} ${lastName}`}</p>
          <p>{email}</p>
          <p>{phone}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={() => setEditingContact(data)}>ویرایش</button>
          <button onClick={() => setShowModal(true)}>حذف</button>
        </div>
      </li>
      {showModal && (
        <Modal
          message="آیا از حذف این مخاطب مطمئن هستید؟"
          onConfirm={confirmDelete}
          onCancel={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default ContactItem;
