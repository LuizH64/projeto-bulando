// Dependencies
import React, { useEffect, useState } from 'react';

// Components
import Header from "../../components/UI/Header/Header";
import MedicineTable from '../../components/Admin/MedicineTable/MedicineTable';
import SearchBar from '../../components/UI/SearchBar/SearchBar';

// Helpers
import { removeFormatation } from '../../Helpers';

// Styles
import styles from './AdminScreen.module.css';


const AdminScreen = () => {
    const [medicineList, setMedicineList] = useState([]);
    const [medicinesInTable, setMedicinesInTable] = useState([]);

    // medicineList request
    useEffect(() => {
        (async () => {
            const response = await fetch('./medicines.json');
            let data = await response.json();
            data = data.sort((a, b) => a.name.localeCompare(b.name))
            setMedicineList(data);
        })();
    }, []);

    // Change medicinesInTable when medicineList chenges
    useEffect(() => {
        if (medicinesInTable.length) {
            setMedicinesInTable(prevMedicinesInTable =>
                medicineList.filter(medicine =>
                    prevMedicinesInTable.some(medicineInTable =>
                        medicineInTable.id === medicine.id
                    )
                )
            );
        } else {
            setMedicinesInTable([...medicineList]);
        }
    }, [medicineList]);

    const searchMedicine = medicineName => {
        if (medicineName) {
            let newMedicinesInTable = [...medicineList];
            newMedicinesInTable = newMedicinesInTable.filter(medicine =>
                removeFormatation(medicine.name) === removeFormatation(medicineName)
            );

            if (newMedicinesInTable.length) {
                setMedicinesInTable(newMedicinesInTable);
                return { resultFound: true };
            }

            return { resultFound: false };
        }

        setMedicinesInTable([...medicineList]);
        return { resultFound: true };
    }

    return (

        <div className={styles.Wrapper}>
            <Header />

            <main className={styles.Main}>
                <SearchBar
                    allowEmptySearch
                    doSearch={searchMedicine}
                />

                <MedicineTable
                    medicines={medicinesInTable}
                />
            </main>
        </div>
    )
}

export default AdminScreen;