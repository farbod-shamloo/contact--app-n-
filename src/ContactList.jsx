import React, { useContext } from "react";
import { ContactsContext } from "./App";
import ContactItem from "./ContactItem";
import styles from "./ContactList.module.css"

function ContactList() {
  const { contacts, searchTerm } = useContext(ContactsContext);
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.contacts}>
      <h2>لیست تماس‌ها</h2>
      {filteredContacts.length ? (
        <ul>
          {filteredContacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </ul>
      ) : (
        <p>تماسی برای نمایش وجود ندارد.</p>
      )}
    </div>
  );
}

export default ContactList;
