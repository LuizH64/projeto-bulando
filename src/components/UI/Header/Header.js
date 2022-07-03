// Dependencies
import React from "react";

// Styles
import styles from "./Header.module.css";


const Header = () => {
    return (
        <header className={styles.Wrapper}>
            <img className={styles.Logo} src="./images/logo.png" alt="Logo Bulando" title="Bulando" />
            <img className={styles.Hexagons} src="./images/hexagons.png" alt="Hexágonos" />
        </header >
    )
}

export default Header;