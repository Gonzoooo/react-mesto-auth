import React from "react";
import logoMesto from "../images/logo.svg";

function Header() {
    return (
        <div>
            <header className="header">
                <img src={logoMesto} alt="Логотип Место" className="header__logo" />
            </header>
        </div>
    );
}

export default Header;