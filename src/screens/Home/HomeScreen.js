// Dependencies
import React from "react";

// Components
import BackgroundHexagons from "../../components/Home/BackgroundHexagons/BackgroundHexagons";
import Header from "../../components/Home/Header/Header";
import SearchBlock from "../../components/Home/SearchBlock/SearchBlock";

// Styles
import styles from "./HomeScreen.module.css";


const HomeScreen = () => {
    return (
        <div className={styles.PageWrapper}>
            <BackgroundHexagons />
            <Header />

            <SearchBlock />
        </div>
    )
}

export default HomeScreen;