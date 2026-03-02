import styles from "./SearchBar.module.css";
import { useState } from "react";

function SearchBar({setSearchTerm}) {

    // TODO: Add buttons , cancel button and an enter button
    // Cancel button: reset to the main page without the search result
    // Enter button: if pressed it enters the result acts as the "Enter" key

    const [inputValue, setInputValue] = useState("");

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            setSearchTerm(inputValue);
        }
    };

    return(
        <div className={styles.wrapper}>
            
            <input 
                className={styles.input}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search Products..." 
            />

        </div>
    );
}

export default SearchBar