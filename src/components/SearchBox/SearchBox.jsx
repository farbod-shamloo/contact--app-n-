import React, { useContext } from "react";
import styles from "./SearchBox.module.css";
import { ContactContext } from "../../context/ContactContext";

function SearchBox() {
  const { setSearchTerm } = useContext(ContactContext);

  return (
    <div className={styles.searchWrapper}>
      <input
        className={styles.searchBox}
        type="text"
        placeholder="جستجو..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;
