import axios from "axios";

const getWeatherApi = (city) => {
    const options = {
        method: 'GET',
        url: `http://api.weatherapi.com/v1/current.json?key=f0d1691420ee446aa8c113828232605&q=${city}`,
        key: 'f0d1691420ee446aa8c113828232605'
    }
    return axios.request(options)
}

export default getWeatherApi