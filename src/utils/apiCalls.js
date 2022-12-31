import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;
let cityKeyDefault = "213225"; //Jerusalem
let searchTermDefault = "Jeru";
let cityNameDefault = "Jerusalem";
const iconSite = "https://developer.accuweather.com/sites/default/files/";

export const getAutoComplete = async (searchTerm = searchTermDefault) => {
    const res = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${searchTerm}`)
    const cityArray = res.data.map(city => {
        return { key: city.Key, name: city.LocalizedName, country: city.Country.LocalizedName }
    })
    return cityArray;
}

export const getCurrentWeather = async (cityKey = cityKeyDefault, cityName = cityNameDefault, country) => {
    const res = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${apiKey}`)
    const { WeatherText: text, WeatherIcon: icon, IsDayTime, Temperature } = res.data[0];
    const iconUrl = iconSite + String(icon).padStart(2, '0') + "-s.png";
    return { text, iconUrl, IsDayTime, metric: Temperature.Metric.Value, imperial: Temperature.Imperial.Value, cityKey, cityName, country };
}

export const getForecast = async (cityKey = cityKeyDefault) => {
    const res = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${apiKey}`)
    const data = res.data.DailyForecasts;
    const forecastArray = data.map(day => {
        const icon = day.Day.Icon;
        const iconUrl = iconSite + String(icon).padStart(2, '0') + "-s.png";
        return {
            date: day.Date, min: day.Temperature.Minimum.Value, max: day.Temperature.Maximum.Value, iconUrl, dayText: day.Day.IconPhrase, nightText: day.Night.IconPhrase
        }
    })
    return forecastArray;
}
