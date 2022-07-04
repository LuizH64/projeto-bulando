// Dependencies
import React from 'react';

// Components
import AlchoolWarning from './AlchoolWarning/AlchoolWarning';
import PregancyRiskWarning from './PregnancyRiskWarning/PregnancyRiskWarning';
import Medicine from './Medicine/Medicine';

// Styles
import styles from './Result.module.css';


const Result = ({ hasResults, pregancyRiskMedicines, medicines }) => {
    return hasResults ? (
        <section className={styles.ResultWrapper}>
            <PregancyRiskWarning medicines={pregancyRiskMedicines} />
            <AlchoolWarning />

            {medicines?.length ? (
                <>
                    <h1 style={{ marginBottom: '10px' }}>Resultados</h1>
                    <span>Encontramos algumas interações não recomendadas:</span>

                    {medicines.map(medicine =>
                        <Medicine
                            key={medicine.id}
                            medicine={medicine}
                        />
                    )}
                </>
            ) : null}
        </section>
    ) : (
        <div className={styles.NoResultImageWrapper}>
            <img src="./images/no-result.png" width='500px' />
        </div>
    )
}

export default Result;