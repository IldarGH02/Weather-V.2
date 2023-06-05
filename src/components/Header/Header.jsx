import React from "react";

import { NavLink } from "react-router-dom";

import {routeMain as routeClockPage} from "pages/ClockPage/ClockPage";
import {routeMain as routeWeatherPage} from "pages/WeatherPage/WeatherPage";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <h2 className="header__title">Weather</h2>
                    <nav className="header__nav nav">
                        <NavLink to={routeWeatherPage()} className="header__link">Погода</NavLink>
                        <NavLink to={routeClockPage()} className="header__link">Часы</NavLink>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header