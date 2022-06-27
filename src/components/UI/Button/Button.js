// Dependencies
import React from 'react';

// Styles
import styles from './Button.module.css';

const Button = props => {
    return (
        <button
            className={styles.Button}
            type={props.type || 'button'}
            styles={{ backgroundColor: props.backgroundColor }}
            title={props.title}
        >
            {props.children}
        </button>
    )
}

export default Button;