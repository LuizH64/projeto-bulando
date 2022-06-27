// Dependencies
import React, { useState, useRef } from "react";
import classNames from 'classnames';

// Styles
import styles from './SearchBar.module.css';

const DEFAULT_ERROR_MESSAGE = "Medicamento não encontrado";

const SearchBar = ({ doSearch }) => {
    const [isValid, setIsValid] = useState(true);
    const [searchText, setSearchText] = useState("");
    const [errorMessage, setErrorMessage] = useState(DEFAULT_ERROR_MESSAGE);

    const inputRef = useRef(null);

    const clearInput = () => {
        inputRef.current.value = "";
        setSearchText("");
    }

    const submitHandler = async event => {
        event.preventDefault();

        if (!searchText) {
            setIsValid(false);
            return;
        }

        const response = await doSearch(searchText);
        setIsValid(response.resultFound);

        if (response.resultFound) clearInput();
        setErrorMessage(response.errorMessage || DEFAULT_ERROR_MESSAGE);
    }

    const WrapperClassNames = classNames({
        [styles.Wrapper]: true,
        [styles.Invalid]: !isValid
    });

    return (
        <form onSubmit={submitHandler} className={WrapperClassNames} style={{ "--error-message": `"${errorMessage}"` }}>
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