// Dependencies
import React, { useState, useRef } from "react";
import classNames from 'classnames';

// Styles
import styles from './SearchBar.module.css';


const SearchBar = ({ doSearch }) => {
    const [isValid, setIsValid] = useState(true);
    const [searchText, setSearchText] = useState("");

    const inputRef = useRef(null);

    const clearInput = () => {
        inputRef.current.value = "";
        setSearchText("");
    }

    const submitHandler = event => {
        event.preventDefault();

        if (!searchText) {
            setIsValid(false);
            return;
        }

        const resultFound = doSearch(searchText);
        setIsValid(resultFound);

        if (resultFound) clearInput();
    }

    const WrapperClassNames = classNames({
        [styles.Wrapper]: true,
        [styles.Invalid]: !isValid
    });

    return (
        <form onSubmit={submitHandler} className={WrapperClassNames}>
            <input
                className={styles.Input}
                ref={inputRef}
                name="medicamento"
                type="text"
                placeholder="Digite um medicamento"
                onKeyPress={() => setIsValid(true)}
                onChange={e => setSearchText(e.target.value)}
            />

            <button
                className={styles.Button}
                title="Pesquisar"
                type="submit"
            >
                Buscar
            </button>
        </form>
    )
}

export default SearchBar;