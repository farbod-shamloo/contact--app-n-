import React, { useContext, useState } from "react";
import { ContactsContext } from "./App";
import ContactList from "./ContactList";
import SearchBox from "./SearchBox";
import Modal from "./Modal";

function Contacts() {
  const {
    contacts,
    addContact,
    setAlert,
    setSearchTerm,
    searchTerm,
    setEditContact,
    isModalOpen,
    setIsModalOpen,
  } = useContext(ContactsContext);
  const [contact, setContact] = useState({ name: "", lastName: "", email: "", phone: "" });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const addHandler = () => {
    if (!contact.name || !contact.lastName || !contact.email || !contact.phone) {
      setAlert("لطفاً تمام اطلاعات را وارد کنید.");
      return;
    }
    addContact({ ...contact, id: new Date().getTime().toString() });
    setContact({ name: "", lastName: "", email: "", phone: "" });
  };

  return (
    <div className="container">
      <div className="form">
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={changeHandler}
          placeholder="نام"
        />
        <input
          type="text"
          name="lastName"
          value={contact.lastName}
          onChange={changeHandler}
          placeholder="نام خانوادگی"
        />
        <input
          type="email"
          name="email"
          value={contact.email}
          onChange={changeHandler}
          placeholder="ایمیل"
        />
        <input
          type="text"
          name="phone"
          value={contact.phone}
          onChange={changeHandler}
          placeholder="شماره تماس"
        />
        <button onClick={addHandler}>اضافه کردن</button>
      </div>
      <SearchBox onSearch={setSearchTerm} />
      <ContactList />
      {isModalOpen && <Modal />}
    </div>
  );
}

export default Contacts;
