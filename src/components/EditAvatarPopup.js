import PopupWithForm from "./PopupWithForm";
import React from "react";

function EditAvatarPopup({onUpdateAvatar,isOpen,onClose}) {
    const avatarRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar({
            avatar: avatarRef.current.value,
        });
    }

    return (
        <PopupWithForm
            name="new-avatar"
            title="Обновить аватар"
            onSubmit={handleSubmit}
            submitBtnText="Сохранить"
            isOpen={isOpen}
            onClose={onClose}
            className='form__submit-button'
        >
            <div className="input input_type_new-avatar">
                <input
                    id="popup__input_avatar_link"
                    ref={avatarRef}
                    required
                    className="popup__input popup__input_avatar_link"
                    type="url"
                    name="avatar"
                    placeholder="Ссылка на аватар"
                />
            </div>
        </PopupWithForm>
    );
}

export default EditAvatarPopup;