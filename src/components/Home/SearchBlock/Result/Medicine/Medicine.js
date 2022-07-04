// Dependencies
import React from 'react';

// Components
import Interaction from './Interaction/Interaction';


// Styles
import styles from './Medicine.module.css';


const Medicine = ({ medicine }) => {
    return (
        <section className={styles.Wrapper}>
            <h2>{medicine.name}</h2>

            <ul className={styles.InteractionsList}>
                {medicine.interactions.map(interaction => (
                    <Interaction
                        key={interaction.id}
                        medicineName={medicine.name}
                        interaction={interaction}
                    />
                ))}
            </ul>
        </section>
    )
}

export default Medicine;