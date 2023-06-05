import React from "react";

const WeatherInfo = (props) => {

    const prepareHumidity = (value) => {
        return value ? `${value}%` : null
    }

    return (
        <div className="weather__card">
            <p className="weather__info city">Город: {props.city ? props.city : null}</p>
            <p className="weather__info pressure">Атмосферное давление: {props.pressure ? props.pressure : null}</p>
            <p className="weather__info temp">Температура: {(props.temp ? props.temp : null)}&deg;C</p>
            <p className="weather__info humidity">Влажность: {prepareHumidity(props.humidity ? props.humidity : null)}</p>
        </div>
    )
}

export default WeatherInfo