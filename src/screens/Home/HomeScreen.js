// Dependencies
import React from "react";

// Components
import Header from "../../components/Home/Header/Header";
import SearchBlock from "../../components/Home/SearchBlock/SearchBlock";

// Styles
import styles from "./HomeScreen.module.css";


const HomeScreen = () => {
    return (
        <div className={styles.PageWrapper}>
            <Header />

            <SearchBlock />
        </div>
    )
}

export default HomeScreen;