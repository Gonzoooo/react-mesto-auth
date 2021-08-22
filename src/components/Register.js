import React from "react";
import Form from "./Form";

function Register() {
    return(
        <>
            <Form
                title="Регистрация"
                submitBtnText="Зарегистрироваться"
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
</>
)
}

export default Register;