// Dependencies
import React, { useEffect, useState } from 'react';

// Styles
import styles from './Interaction.module.css';


const Interaction = ({ interaction, medicineName }) => {
    const [color, setColor] = useState('var(--success)');

    useEffect(() => {
        if (interaction.severity === 'Grave') setColor('var(--danger)');
        if (interaction.severity === 'Moderado') setColor('var(--warning');
    }, [interaction.severity]);

    return (
        <li className={styles.Wrapper}>
            <h3>{medicineName} x {interaction.name}</h3>
            <p><strong>Periculosidade:</strong> <span style={{ color }}>{interaction.severity}</span></p>
            <p><strong>Motivo:</strong> {interaction.resume}</p>
        </li>
    )
}

export default Interaction;