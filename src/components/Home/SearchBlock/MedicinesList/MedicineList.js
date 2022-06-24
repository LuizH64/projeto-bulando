// Dependencies
import React from "react";

// Components
import Medicine from './Medicine/Medicine';

// Styles
import styles from './MedicineList.module.css';


const MedicineList = ({ medicines, removeMedicine }) => {
    return (
        <ul className={styles.MedicineList}>
            {medicines.map(medicine => (
                <Medicine
                    key={medicine.id}
                    name={medicine.name}
                    removeMedicine={() => removeMedicine(medicine.id)}
                />
            ))}
        </ul>
    )
}

export default MedicineList;