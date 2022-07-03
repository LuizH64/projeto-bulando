// Dependencies
import React, { useState } from 'react';

// Styles
import styles from "./SearchBlock.module.css";

// Components
import MedicineList from './MedicinesList/MedicineList';
import Result from './Result/Result'
import SearchBar from "../../UI/SearchBar/SearchBar";

// Helpers
import { nameIsInList } from '../../../Helpers';


const SearchBlock = () => {
    const [medicineList, setMedicineList] = useState([]);

    const removeMedicine = medicineId => {
        let newMedicineList = [...medicineList];
        newMedicineList = newMedicineList.filter(medicine => medicine.id !== medicineId);
        setMedicineList(newMedicineList);
    }

    const searchMedicine = async medicineName => {
        const searchResult = {};

        const response = await fetch('medicines.json');
        const data = await response.json();

        // Verifica se o nome do medicamento está incluso em data
        searchResult.resultFound = nameIsInList(data, medicineName);

        // Verifica se o nome já foi buscado
        if (nameIsInList(medicineList, medicineName)) {
            searchResult.resultFound = false;
            searchResult.errorMessage = "Medicamento já incluso na pesquisa";
        }

        if (searchResult.resultFound) {
            const newMedicineList = [...medicineList];
            const foundMedicine = data.find(medicine => medicine.name.toLowerCase() === medicineName.toLowerCase())
            newMedicineList.push(foundMedicine);
            setMedicineList(newMedicineList);
        }

        return searchResult;
    }

    return (
        <main className={styles.MainWrapper}>
            <SearchBar
                doSearch={searchMedicine}
            />

            <MedicineList
                medicines={medicineList}
                removeMedicine={removeMedicine}
            />

            <Result
                hasResults={medicineList.length ? true : false}
            />
        </main>
    )
}

export default SearchBlock;