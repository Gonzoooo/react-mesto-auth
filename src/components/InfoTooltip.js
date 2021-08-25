import React from "react";
import PopupWithForm from "./PopupWithForm";
import ImgSuccessReg from "../images/CheckMark.svg";
import ImgBadReg from "../images/Cross.svg";

function InfoTooltip({ isOpen, onClose, isSuccess }) {
    return (
        <PopupWithForm
            className="form__submit-button form__submit-button_for_reg"
            isOpen={isOpen}
            onClose={onClose}
            submitBtnText={
                isSuccess
                    ? "Вы успешно зарегестрировались!"
                    : "Что-то пошло не так! Попроуйте ещё раз."
            }
        >
            <img
                src={isSuccess ? ImgSuccessReg : ImgBadReg}
                alt={
                    isSuccess
                        ? "Вы успешно зарегестрировались!"
                        : "Что-то пошло не так! Попроуйте ещё раз."
                }
            />
        </PopupWithForm>
    );
}

export default InfoTooltip;