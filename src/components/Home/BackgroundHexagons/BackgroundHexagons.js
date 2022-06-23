// Dependencies
import React from "react";

// Styles
import styles from "./BackgroundHexagons.module.css";


const BackgroundHexagons = () => {
    return (
        <div className={styles.HexagonsWrapper}>
            <img src="./images/hexagon.png" />
            <img src="./images/hexagon.png" />
            <img src="./images/hexagon.png" />
        </div>
    )
}

export default BackgroundHexagons;