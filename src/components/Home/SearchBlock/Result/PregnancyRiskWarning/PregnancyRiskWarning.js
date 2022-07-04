// Dependencies
import React from 'react';

// Styles
import styles from './PregnancyRiskWarning.module.css';


const PregancyRiskWarning = ({ medicines }) => {
    return medicines?.length ? (
        <section className={styles.Warning}>
            <span>
                Atenção:{' '}
                {medicines.map((medicine, index) => {
                    if (!index) return medicine;

                    if (index === medicines.length - 1)
                        return ` e ${medicine}`;

                    return `, ${medicine}`
                })}
                {' '}não{' '}
                {medicines.length === 1 ? 'é' : 'são'}
                {' '}recomendado{medicines.length === 1 ? '' : 's'}
                {' '}em caso de gravidez.
            </span>
        </section>
    ) : null;
}

export default PregancyRiskWarning;