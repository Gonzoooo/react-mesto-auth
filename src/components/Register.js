import React from "react";
import Form from "./Form";
import { NavLink } from 'react-router-dom';

function Register() {
    return(
            <Form
                title="Регистрация"
                submitBtnText="Зарегистрироваться"
            >
                <div className="input">
                    <input
                        required
                        minLength="2"
                        maxLength="30"
                        className="popup__input"
                        type="email"
                        pattern=".+@globex\.com"
                        name="Email"
                        placeholder="Email"
                    />
                    <span />
                    <input
                        required
                        className="popup__input"
                        type="password"
                        name="password"
                        placeholder="Пароль"
                    />
                    <span />
                </div>
                <NavLink to='' className='popup__login-button'>Уже зарегестрированы? Войти</NavLink>
            </Form>
    )
}

export default Register;