// Dependencies
import React from "react";

// Styles
import styles from './Spinner.module.css';


const Spinner = () => {
    return (
        <div className={styles.SpinnerWrapper}>
            <div className={styles.Spinner} />
        </div>
    )
}

export default Spinner;