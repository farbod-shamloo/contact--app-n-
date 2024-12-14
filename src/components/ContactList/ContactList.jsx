import React, { useContext } from "react";
import ContactItem from "../ContactItem/ContactItem";
import styles from "./ContactList.module.css";
import { ContactContext } from "../../context/ContactContext";

function ContactList() {
  const { contacts } = useContext(ContactContext);

  return (
    <div className={styles.container}>
      <h3>لیست مخاطبین</h3>
      {contacts.length ? (
        <ul className={styles.list}>
          {contacts.map((contact) => (
            <ContactItem key={contact.id} data={contact} />
          ))}
        </ul>
      ) : (
        <p className={styles.message}>مخاطبی وجود ندارد!</p>
      )}
    </div>
  );
}

export default ContactList;
