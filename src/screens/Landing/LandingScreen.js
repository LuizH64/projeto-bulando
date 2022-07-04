// Dependencies
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import Button from '../../components/UI/Button/Button';
import Header from '../../components/UI/Header/Header';

// Styles
import styles from './LandingScreen.module.css';


const LandingScreen = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.Wrapper}>
            <Header />

            <main className={styles.Main}>
                <section className={styles.TextWrapper}>
                    <h1 className={styles.Title}>Entenda melhor <br /> <span>seus medicamentos</span></h1>

                    <span className={styles.Description}>O Bulando reúne informações confiáveis para te informar melhor de maneira prática e rápida.</span>

                    <Button onClick={() => navigate('/home')}>Começar a pesquisar</Button>
                </section>

                <section className={styles.ImageWrapper}>
                    <img src="./images/landing.png" alt="" />
                </section>
            </main>
        </div>
    )
}

export default LandingScreen;