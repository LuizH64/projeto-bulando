// Dependencies
import React from 'react';

// Styles
import styles from './Medicine.module.css';


const Medicine = ({ removeMedicine, name }) => {
    return (
        <li className={styles.Medicine} >
            <span>{name}</span>
            <button className={styles.DeleteMedicineBtn} onClick={removeMedicine}>x</button>
        </li>
    )
}

export default Medicine;