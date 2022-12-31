import { useEffect, useState } from "react";

import FavoriteCard from "./FavoriteCard";
import { getCurrentWeather } from "../utils/apiCalls";
import "../shared.css"

const Favorites = () => {
    const [citiesData, setCitiesData] = useState([]);
    const favoriteCities = JSON.parse(localStorage.favorites);

    useEffect(() => {
        const getData = async () => {
            const tempArr = [];
            for (const city of favoriteCities) {
                const res = await getCurrentWeather(city.key, city.name, city.country);
                tempArr.push(res);
            }
            setCitiesData(tempArr);
        }
        getData();
    }, [favoriteCities])

    return (!favoriteCities.length) ?
        <div>No cities were selected</div> :
        <div className="cards-container">
            {citiesData?.map((day, i) => {
                return <FavoriteCard key={i} data={day} />
            })}
        </div>
}

export default Favorites;