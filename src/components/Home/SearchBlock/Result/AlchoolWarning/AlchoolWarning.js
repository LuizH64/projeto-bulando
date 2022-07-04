// Dependencies
import React from 'react';

// Styles
import styles from './AlchoolWarning.module.css';

const AlchoolWarning = () => {
    return (
        <section>
            <div className={styles.Warning}>
                <span>
                    Atenção: Nenhum medicamento deve ser ingerido junto a bebidas alcoólicas.
                </span>
            </div>
        </section>
    )
}

export default AlchoolWarning;