// Dependencies
import React from 'react';

// Styles
import styles from './MedicineRow.module.css';


const MedicineRow = ({ medicine }) => {
    return (
        <tr className={styles.Row}>
            <td>{medicine.id}</td>
            <td>{medicine.name}</td>
            <td style={{ color: medicine.pregnancySafe ? 'var(--success)' : 'var(--danger)' }}>
                {medicine.pregnancySafe ? 'Não' : 'Sim'}
            </td>
        </tr>
    )
}

export default MedicineRow;