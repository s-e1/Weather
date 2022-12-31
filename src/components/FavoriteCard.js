import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';

import { change } from "../store/selectedCitySlice";

const FavoriteCard = ({ data }) => {
    const dispatch = useDispatch();
    const { iconUrl, metric, text, cityKey, cityName, country } = data;
    // const { iconUrl, metric, imperial, IsDayTime, text, cityKey, cityName, country } = data;

    //clicking the card chooses it as the selectedCity, so the Home page will show it
    const handleClick = () => {
        dispatch(change({ key: cityKey, name: cityName, country }));
    }

    return (
        <Card raised
            style={{
                backgroundColor: "transparent", margin: "5px", textAlign: "center", minWidth: "320px"
            }}
        >
            <CardActionArea component={Link} to="/" onClick={handleClick}>
                <h2>{cityName}, {country}</h2>
                <div><img src={iconUrl} alt="icon" width="20%" /> </div>
                <h1>{metric}&#176; C</h1>
                <h3>{text}</h3>
                {/* <div>temperature: {current.imperial}&#176; F</div> */}
                {/* <div>daytime?: {Boolean(current.IsDayTime).toString()}</div> */}
            </CardActionArea>
        </Card>
    )
}

export default FavoriteCard;