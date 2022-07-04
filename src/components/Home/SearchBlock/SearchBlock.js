// Dependencies
import React, { useState, useEffect } from 'react';

// Styles
import styles from "./SearchBlock.module.css";

// Components
import MedicineList from './MedicinesList/MedicineList';
import Result from './Result/Result'
import SearchBar from "../../UI/SearchBar/SearchBar";

// Helpers
import { nameIsInList, removeFormatation } from '../../../Helpers';


const SearchBlock = () => {
    const [medicineList, setMedicineList] = useState([]);
    const [results, setResults] = useState([]);

    // Set results
    useEffect(() => {
        if (!medicineList.length) {
            setResults([])
            return;
        }

        if (medicineList.length === 1 && medicineList?.[0].interactions.length) {
            setResults([...medicineList]);
            return;
        }

        const medicinesIds = medicineList.map(medicine => medicine.id);

        let medicinesWithInteractions = medicineList.filter(medicine => {
            const interactionsIds = medicine.interactions.map(interaction => interaction.id);

            for (const medicineId of medicinesIds)
                if (interactionsIds.includes(medicineId)) return true;

            return false;
        });

        medicinesWithInteractions = medicinesWithInteractions.map(medicine => ({
            ...medicine,
            interactions: medicine.interactions.filter(interaction => medicinesIds.includes(interaction.id))
        }));

        setResults(medicinesWithInteractions);
    }, [medicineList]);

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
            const foundMedicine = data.find(medicine => removeFormatation(medicine.name) === removeFormatation(medicineName))
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
                hasResults={medicineList.length}
                medicines={results}
                pregancyRiskMedicines={medicineList.filter(medicine => !medicine.pregnancySafe).map(medicine => medicine.name)}
            />
        </main>
    )
}

export default SearchBlock;