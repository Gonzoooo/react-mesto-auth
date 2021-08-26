import React from "react";
import ImgSuccessReg from "../images/CheckMark.svg";
import ImgBadReg from "../images/Cross.svg";
import buttonClose from "../images/CloseIcon.svg";

function InfoTooltip({ isOpen, name, onClose, isSuccess }) {
    return (
        <div className={`popup popup_type_info-tooltip ${
            isOpen ? "popup_visible" : ""
        }`}>
            <div className="overlay" onClick={onClose} />
            <div className="form form_for_user">
                <img
                    src={isSuccess ? ImgSuccessReg : ImgBadReg}
                    alt={
                        isSuccess
                            ? "Вы успешно зарегестрировались!"
                            : "Что-то пошло не так! Попроуйте ещё раз."
                    }
                />
                <p className="form__submit-button form__submit-button_for_reg">{
                    isSuccess
                        ? "Вы успешно зарегестрировались!"
                        : "Что-то пошло не так! Попроуйте ещё раз."
                }</p>
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
            </div>
        </div>
        // <PopupWithForm
        //     className="form__submit-button form__submit-button_for_reg"
        //     isOpen={isOpen}
        //     onClose={onClose}
        //     submitBtnText={
        //         isSuccess
        //             ? "Вы успешно зарегестрировались!"
        //             : "Что-то пошло не так! Попроуйте ещё раз."
        //     }
        // >
        //     <img
        //         src={isSuccess ? ImgSuccessReg : ImgBadReg}
        //         alt={
        //             isSuccess
        //                 ? "Вы успешно зарегестрировались!"
        //                 : "Что-то пошло не так! Попроуйте ещё раз."
        //         }
        //     />
        // </PopupWithForm>
    );
}

export default InfoTooltip;