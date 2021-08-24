import Form from "./Form";
import React from "react";
import * as auth from "../utils/auth";
import { useHistory } from 'react-router-dom';


function Login(userData, handleLogin) {
    const [passwordValue, setPassword] = React.useState('');
    const [emailValue, setEmail] = React.useState('');
    let history = useHistory();

    function handleChangePassword(e) {
        setPassword(e.target.value);
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log('fds')
        const email = emailValue;
        const password = passwordValue;

        auth.authorize(email, password)
            .then((data) => {
                if (data.jwt) {
                    handleLogin();
                    history.push('/');
                }
            })
            .catch(err => console.log(err));
    }

    return(
        <Form
            title="Вход"
            submitBtnText="Войти"
            onSubmit={handleSubmit}
        >
            <div className="input">
                <input
                    required
                    minLength="2"
                    maxLength="30"
                    className="popup__input popup__input_for_user"
                    type="email"
                    pattern=".+@globex\.com"
                    name="Email"
                    placeholder="Email"
                    value={emailValue}
                    onChange={handleChangeEmail}
                />
                <span />
                <input
                    required
                    className="popup__input popup__input_for_user"
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    value={passwordValue}
                    onChange={handleChangePassword}
                />
                <span />
            </div>
        </Form>
    )
}

export default Login;