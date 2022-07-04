// Dependencies
import React from 'react';

// Components
import MedicineRow from './MedicineRow/MedicineRow';

// Styles
import styles from './MedicineTable.module.css';


const MedicineTable = ({ medicines }) => {
    return (
        <section className={styles.Wrapper}>
            <table className={styles.Table}>
                <thead className={styles.TableHeader}>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Risco Gestação</th>
                        <th>Classe</th>
                    </tr>
                </thead>

                <tbody>
                    {medicines.map(medicine => (
                        <MedicineRow
                            key={medicine.id}
                            medicine={medicine}
                        />
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default MedicineTable;