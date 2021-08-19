import React from "react";
import logoMesto from "../images/logo.svg";
import PopupWithForm from "./PopupWithForm";
import Header from "./Header";

function InfoTooltip() {
    return (
        <div>
            <Header/>
            <PopupWithForm
                title="Регистрация"
                submitBtnText="Зарегистрироваться"
            >
                <div className="input input_type_add-card">
                    <input
                        id="popup__input_place_name"
                        required
                        minLength="2"
                        maxLength="30"
                        className="popup__input popup__input_place_name"
                        type="email"
                        pattern=".+@globex\.com"
                        name="Email"
                        placeholder="Email"
                    />
                    <span id="popup__input_place_name--error" />
                    <input
                        id="popup__input_place_link"
                        required
                        className="popup__input popup__input_place_link"
                        type="password"
                        name="password"
                        placeholder="Пароль"
                    />
                    <span id="popup__input_place_link--error" />
                </div>
                <button style={{ color: 'red' }} className='popup__login-button'>Уже зарегестрированы? Войти</button>
            </PopupWithForm>
        </div>
    );
}

export default InfoTooltip;