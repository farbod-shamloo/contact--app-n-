import React, { createContext, useState } from "react";

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const addContact = (contact) => {
    setContacts((prev) => [...prev, { ...contact, id: Date.now() }]);
  };

  const editContact = (updatedContact) => {
    setContacts((prev) =>
      prev.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
    setEditingContact(null);
  };

  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  const filteredContacts = searchTerm
    ? contacts.filter((c) =>
        `${c.name} ${c.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : contacts;

  return (
    <ContactContext.Provider
      value={{
        contacts: filteredContacts,
        addContact,
        editContact,
        deleteContact,
        setEditingContact,
        editingContact,
        setSearchTerm,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
