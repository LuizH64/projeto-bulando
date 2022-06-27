// Dependencias
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

// Components
import Button from "../../components/UI/Button/Button";
import TextInput from "../../components/UI/TextInput/TextInput";
import Spinner from "../../components/UI/Spinner/Spinner";

// Styles
import styles from './LoginScreen.module.css';

const LoginScreen = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const submitHandler = event => {
        event.preventDefault();
        setIsLoading(true);

        setTimeout(() => navigate('/home'), 1500)
    }

    return (
        <form
            className={styles.LoginBlock}
            onSubmit={submitHandler}
        >
            <h1 className={styles.Title}>Login</h1>

            <TextInput
                label="Login"
                placeholder="Login"
            />

            <TextInput
                label="Senha"
                placeholder="Senha"
                type="password"
            />

            <div className={styles.SubmitButtonWrapper}>
                {isLoading ? (
                    <Spinner />
                ) : (
                    <Button
                        type="submit"
                        title="Entrar"
                    >
                        Entrar
                    </Button>
                )}
            </div>
        </form>
    )
}

export default LoginScreen;