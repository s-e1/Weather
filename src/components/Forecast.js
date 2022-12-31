import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

import ForecastCard from "./ForecastCard";
import { getCurrentWeather, getForecast } from "../utils/apiCalls";
import "../shared.css"

const Forecast = () => {
    const selectedCityDetails = useSelector((state) => state.selectedCity.details);

    const [current, setCurrent] = useState();
    const [future, setFuture] = useState();
    const [favoriteCities, setFavoriteCities] = useState([]);

    let isFavorite = favoriteCities.find(city => city.key === selectedCityDetails.key);

    useEffect(() => {
        if (localStorage.favorites) {
            setFavoriteCities(JSON.parse(localStorage.favorites));
        }
    }, [])

    useEffect(() => {
        getCurrentWeather(selectedCityDetails?.key, selectedCityDetails?.name)
            .then(data => {
                setCurrent(data);
                // { iconUrl, metric, imperial, IsDayTime, text, cityName}
            })

        getForecast(selectedCityDetails?.key, selectedCityDetails?.name)
            .then(data => {
                setFuture(data);
                // {date, min, max, dayText, nightText}
            })

    }, [selectedCityDetails]);

    const addFavoriteHandler = () => {
        const tempArr = [...favoriteCities, selectedCityDetails];
        setFavoriteCities(tempArr);
        localStorage.favorites = JSON.stringify(tempArr);
    }

    const removeFavoriteHandler = () => {
        const tempArr = favoriteCities.filter(item => item.key !== selectedCityDetails.key);
        setFavoriteCities(tempArr);
        localStorage.favorites = JSON.stringify(tempArr);
    }

    return (<div style={{ position: "relative" }}>
        {current &&
            <>
                {isFavorite ?
                    <StarIcon sx={{ color: "gold", fontSize: "80px", cursor: "pointer", position: "absolute", top: "10px", right: "10px" }}
                        onClick={removeFavoriteHandler} />
                    :
                    <StarBorderIcon sx={{ fontSize: "80px", cursor: "pointer", position: "absolute", top: "10px", right: "10px" }}
                        onClick={addFavoriteHandler} />
                }
                <br />
                <br />
                <div style={{ textAlign: "center" }}>
                    <h2>{current.cityName}</h2>
                    <h1>{current.metric}&#176; C</h1>
                    <h3>{current.text}</h3>
                    <div><img src={current.iconUrl} alt="icon" width="20%" /> </div>
                    {/* <div>temperature: {current.imperial}&#176; F</div> */}
                    {/* <div>daytime?: {Boolean(current.IsDayTime).toString()}</div> */}
                </div>
                <br />
                <br />
                <div className="cards-container">
                    {future?.map((day, i) => {
                        return <ForecastCard key={i} data={day} />
                    })}
                </div>
            </>
        }
    </div>)
}

export default Forecast;