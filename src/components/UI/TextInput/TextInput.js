// Dependencies
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

// Styles
import styles from './TextInput.module.css';


const TextInput = props => {
    const inputId = uuidv4();

    return (
        <div className={styles.InputGroup}>
            {props.label ? (
                <label
                    htmlFor={inputId}
                    className={styles.Label}
                >
                    {props.label}
                </label>
            ) : null}

            <input
                id={inputId}
                type={props.type || 'text'}
                className={styles.TextInput}
                placeholder={props.placeholder}
                onChange={props.onChange}
            />
        </div >
    );
}

export default TextInput;