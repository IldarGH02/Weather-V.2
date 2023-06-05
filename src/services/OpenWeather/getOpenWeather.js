import axios from "axios"

const getOpenWeather = (name) => {
    const options = {
        method: 'GET',
        url: `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=38f11c7a940e7ac38b4a4faac76f26d7`,
        key: '38f11c7a940e7ac38b4a4faac76f26d7'
    }
    return axios.request(options)
}

export default getOpenWeather