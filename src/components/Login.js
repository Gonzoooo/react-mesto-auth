import Form from "./Form";
import React from "react";

function Login() {
    return(
        <Form
            title="Вход"
            submitBtnText="Войти"
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
                />
                <span />
                <input
                    required
                    className="popup__input popup__input_for_user"
                    type="password"
                    name="password"
                    placeholder="Пароль"
                />
                <span />
            </div>
        </Form>
    )
}

export default Login;