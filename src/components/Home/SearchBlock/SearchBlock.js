// Dependencies
import React, { useState, useRef } from 'react';

// Styles
import styles from "./SearchBlock.module.css";

// Components
import SearchBar from "./SearchBar/SearchBar";
import MedicineList from './MedicinesList/MedicineList';


const SearchBlock = () => {
    const [medicineList, setMedicineList] = useState([
        {
            "id": 1,
            "name": "Paracetamol",
            "pregnancySafe": false
        },
        {
            "id": 2,
            "name": "Dipirona",
            "pregnancySafe": true
        }
    ]);

    const removeMedicine = medicineId => {
        let newMedicineList = [...medicineList];
        newMedicineList = newMedicineList.filter(medicine => medicine.id !== medicineId);
        setMedicineList(newMedicineList);
    }

    return (
        <section className={styles.MainWrapper}>
            <SearchBar
                doSearch={() => true}
            />

            <MedicineList
                medicines={medicineList}
                removeMedicine={id => removeMedicine(id)}
            />

            {/* <div id="no-result-img-wrapper">
                <img src="./images/no-result.png" width='500px' />
            </div>

            <section id="result">
                <h1>Resultado</h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eaque dolore autem, voluptate,
                    reiciendis tenetur dignissimos totam eum nobis inventore architecto aliquid quo rerum accusamus labore
                    voluptatum magnam! Accusamus, id quisquam. Excepturi, quisquam eligendi magni quia maxime expedita quae
                    et quod alias, molestiae blanditiis consequatur dolorum incidunt optio iste culpa. Quia, ut obcaecati
                    hic debitis, nemo eligendi nesciunt similique itaque earum sequi suscipit maiores esse sunt voluptatem
                    impedit modi, cum perspiciatis blanditiis beatae laborum. Nostrum iure dolores laborum reprehenderit
                    itaque culpa, facere exercitationem tempore explicabo repellat excepturi incidunt eligendi distinctio
                    mollitia corporis ducimus suscipit quod quibusdam, officiis quaerat ab laudantium.</p>


                <footer>
                    <section class="warning">
                        <i class="fa-solid fa-circle-exclamation"></i>

                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, et.</span>
                    </section>
                </footer>
            </section> */}
        </section>
    )
}

export default SearchBlock;