import React from "react";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import Modal from "./components/Modal/Modal";
import { ContactProvider } from "./context/ContactContext";
import "./styles/global.css";
import Footer from "./components/Footer";

function App() {
  return (
    <ContactProvider>
      <div className="app">
        <h1>مدیریت مخاطبین</h1>
        <SearchBox />
        <ContactForm />
        <ContactList />
        <Footer />
      </div>
    </ContactProvider>
  );
}

export default App;
