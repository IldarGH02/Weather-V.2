import React, {useState} from "react";
import OpenWeather from "../../components/OpenWeather/OpenWeather";
import WeatherApi from "../../components/WeatherApi/WeatherApi";
import {routeMain} from "./routes";

import Button from "react-bootstrap/Button"

const WeatherPage = () => {   
    const [weatherChoices, setWeatherChoices] = useState('OpenWeather')

    const getWeatherApi = () => {
        setWeatherChoices('WeatherApi')
        document.querySelector('.weatherApi-btn').classList.add('weather__btn--active')
        document.querySelector('.openWeather-btn').classList.remove('weather__btn--active')
    }

    const getWOpenWeather = () => {
        setWeatherChoices('OpenWeather')
        document.querySelector('.weatherApi-btn').classList.remove('weather__btn--active')
        document.querySelector('.openWeather-btn').classList.add('weather__btn--active')
    }   

    return (
        <section className="weather">
            <div className="container weather__container">
                <div className="weather__content">
                    <div className="weather__actions">
                        <h2 className="weather__title">
                            Выберите сервис:                        
                        </h2>
                        <div className="weather__button-group">
                            <Button 
                                className="weatherApi-btn btn weather__btn--active" 
                                onClick={() => getWeatherApi()}
                            >
                                WeatherApi
                            </Button>
                            <Button 
                                className="openWeather-btn btn" 
                                onClick={() => getWOpenWeather()}
                            >
                                OpenWeather
                            </Button>
                        </div>
                    </div>
                    <div className="weather__content-open">
                        {weatherChoices === 'OpenWeather' ? (<OpenWeather/>) : (<WeatherApi/>)}
                    </div>
                </div>              
            </div>
        </section>
    )
}

export {routeMain}

export default WeatherPage