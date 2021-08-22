import React from "react";
import logoMesto from "../images/logo.svg";
import { NavLink } from 'react-router-dom';
import { Route } from "react-router-dom";

function Header() {
    return (
        <div>
            <header className="header">
                <Route path="/">
                    <NavLink to='/'><img src={logoMesto} alt="Логотип Место" className="header__logo" /></NavLink>
                </Route>
                <div>
                    <Route path="/sign-up">
                        <NavLink to="/sign-in" className="header__nav" activeClassName="header__nav_active">Войти</NavLink>
                    </Route>
                    <Route exact path="/">
                        <NavLink to="/" className="header__nav" activeClassName="header__nav_active">e-mail</NavLink>
                    </Route>
                    <Route exact path="/">
                        <NavLink to="/sign-in" className="header__nav" activeClassName="header__nav_active">Выйти</NavLink>
                    </Route>
                    <Route path="/sign-in">
                        <NavLink to="/sign-up" className="header__nav" activeClassName="header__nav_active">Регистрация</NavLink>
                    </Route>
                </div>
            </header>
        </div>
    );
}

export default Header;