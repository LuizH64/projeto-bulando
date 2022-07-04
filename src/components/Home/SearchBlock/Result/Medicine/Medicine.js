// Dependencies
import React from 'react';

// Components
import Interaction from './Interaction/Interaction';


// Styles
import styles from './Medicine.module.css';


const Medicine = ({ medicine }) => {
    return (
        <section className={styles.Wrapper}>
            <header className={styles.Header}>
                <h2>{medicine.name}</h2>

                {medicine.classification ? (
                    <span className={styles.Classification}>{medicine.classification}</span>
                ) : null}
            </header>

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