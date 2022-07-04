// Dependencies
import React from "react";
import { useNavigate } from 'react-router-dom'

// Styles
import styles from './NotFoundScreen.module.css';

const NotFoundScreen = () => {
    const navigate = useNavigate();

    return (
        <div>
            <img
                className={styles.Image}
                src='./images/not-found.png'
                alt="Não fomos capazes de encontrar a rota solicitada"
                onClick={() => navigate('/home')}
            />
        </div>
    )
}

export default NotFoundScreen;