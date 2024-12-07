import React, { useContext } from "react";
import { ContactsContext } from "./App";

import styles from "./ContactItem.module.css"

function ContactItem({ contact }) {
  const { setEditContact, setIsModalOpen, setContactToDelete } = useContext(ContactsContext);

  const editHandler = () => {
    setEditContact(contact);
  };

  const deleteHandler = () => {
    setContactToDelete(contact);
    setIsModalOpen(true);
  };

  return (
    <li className={styles.contactItem}>
      <p>{contact.name} {contact.lastName}</p>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
      <button onClick={editHandler}>ویرایش</button>
      <button onClick={deleteHandler}>حذف</button>
    </li>
  );
}

export default ContactItem;
