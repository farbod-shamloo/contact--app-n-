import React, { createContext, useState } from "react";
import Contacts from "./Contacts";
import "./App.css";

export const ContactsContext = createContext();

function App() {
  const [contacts, setContacts] = useState([]);
  const [alert, setAlert] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [editContact, setEditContact] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);

  const addContact = (contact) => {
    setContacts((prev) => [...prev, contact]);
  };

  const updateContact = (updatedContact) => {
    setContacts((prev) =>
      prev.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
    setEditContact(null);
  };

  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
    setIsModalOpen(false);
  };

  const deleteMultipleContacts = () => {
    setContacts((prev) => prev.filter((contact) => !contact.selected));
  };

  return (
    <ContactsContext.Provider
      value={{
        contacts,
        addContact,
        updateContact,
        deleteContact,
        setAlert,
        setSearchTerm,
        searchTerm,
        setEditContact,
        editContact,
        isModalOpen,
        setIsModalOpen,
        contactToDelete,
        setContactToDelete,
        deleteMultipleContacts,
      }}
    >
      <div className="App">
        <Contacts />
      </div>
    </ContactsContext.Provider>
  );
}

export default App;
