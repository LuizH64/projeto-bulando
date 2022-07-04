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
                    <span>Encontramos algumas interações que apresentam riscos, veja a seguir:</span>

                    {medicines.map(medicine =>
                        <Medicine
                            key={medicine.id}
                            medicine={medicine}
                        />
                    )}
                </>
            ) : (
                <div className={styles.ImageWrapper}>
                    <img
                        width='500px'
                        src="./images/no-interaction-found.png"
                        alt="Nenhuma interação encontrada"
                    />
                </div>
            )}
        </section>
    ) : (
        <div className={styles.ImageWrapper}>
            <img src="./images/no-result.png" width='500px' />
        </div>
    )
}

export default Result;