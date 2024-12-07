import React, { useContext } from "react";
import { ContactsContext } from "./App";
import styles from "./SearchBox.module.css"

function SearchBox({ onSearch }) {
  const { searchTerm, setSearchTerm } = useContext(ContactsContext);

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <input 
      type="text"
      value={searchTerm}
      onChange={searchHandler}
      placeholder="جستجو..."
      className={styles.searchBox}
    />
  );
}

export default SearchBox;
