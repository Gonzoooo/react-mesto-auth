import React from "react";
import buttonClose from "../images/CloseIcon.svg";

function PopupWithForm({name,isOpen,onSubmit,onClose,title,children,submitBtnText}) {
    return (
        <div
            className={`popup popup_type_${name} ${
                isOpen ? "popup_visible" : "popup_visible"
            }`}
        >
            <div className="overlay" onClick={onClose} />
            <form
                className="form"
                name={name}
                onSubmit={onSubmit}
                noValidate
            >
                <button
                    aria-label="Close"
                    type="button"
                    className="form__close-icon"
                    onClick={onClose}
                >
                    <img
                        src={buttonClose}
                        className="form__close"
                        alt="Крестик закрытия окна"
                    />
                </button>
                <h2 className="form__title">{title}</h2>
                {children}
                <button className="popup__submit-button" type="submit" name="button">
                    {submitBtnText}
                </button>
            </form>
        </div>
    );
}

export default PopupWithForm;