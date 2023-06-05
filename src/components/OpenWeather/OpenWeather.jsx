import React, { useState } from "react";
import Form from "components/Form";
import getOpenWeather from "services/OpenWeather/getOpenWeather";
import WeatherInfo from "components/WeatherInfo";
import prepareTemp from "utils/prepareTemp";

const OpenWeather = () => {
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
        getOpenWeather(value)
            .then((response) => setWeather(response.data))
            .catch((error) => console.log(error))
    }
   
    return ( 
        <div className="openWeather__content">
            <h2 className="openWeather__title">OpenWeather</h2>
            <Form
                handleChange={handleChange}
                handleClick={handleSubmit}
            />
            {weather.name ? <WeatherInfo
              city={weather?.name}
              temp={prepareTemp(weather?.main?.temp)}  
              pressure={weather?.main?.pressure}
              humidity={weather?.main?.humidity}
            /> : <></>} 
        </div> 
    )
}

export default OpenWeather