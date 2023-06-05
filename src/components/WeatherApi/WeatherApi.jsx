import React, { useState } from "react";
import Form from "components/Form";
import getWeatherApi from "services/WeatherApi/getWeatherApi";
import WeatherInfo from "components/WeatherInfo";

const WeatherApi = () => {
    const [weather, setWeather] = useState([])
    const [value, setValue] = useState('')

    const handleChange = (e) => {
        const target = e.target.value
        if(target) {
            setValue(target)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        getWeatherApi(value)
            .then((response) => setWeather(response.data))
            .catch((error) => console.log(error))
    }

    console.log(weather)

    return (
       <div className="weatherApi__content">            
            <h2 className="weatherApi__title">WeatherAPI</h2>
            <Form
                handleChange={handleChange}
                handleClick={handleSubmit}
            />       
            {weather?.location?.name ? <WeatherInfo
                city={weather?.location?.name}
                temp={weather?.current?.temp_c}  
                pressure={weather?.current?.pressure_mb}
                humidity={weather?.current?.humidity}
            /> : <></>}
       </div> 
    )
}

export default WeatherApi