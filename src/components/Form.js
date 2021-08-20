import React from "react";

function Form({name,onSubmit,title,children,submitBtnText}) {
    return (
        <div className='user-form'>
            <form
                className="form"
                name={name}
                onSubmit={onSubmit}
                noValidate
            >
                <h2 className="form__title">{title}</h2>
                {children}
                <button className="popup__submit-button" type="submit" name="button">
                    {submitBtnText}
                </button>
            </form>
    </div>
    );
}

export default Form;