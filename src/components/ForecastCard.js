import Card from '@mui/material/Card';

import { convertToCelsius, convertToDayName } from "../utils/convertData";

const ForecastCard = ({ data }) => {
    const { date, min, max, iconUrl, dayText, nightText } = data;

    return (
        <Card raised
            style={{
                backgroundColor: "transparent", margin: "5px", textAlign: "center", minWidth: "320px",
            }}
        >
            <h2>{convertToDayName(date)}</h2>
            <div><img src={iconUrl} alt="icon" width="25%" /> </div>
            <h1>{convertToCelsius(max)}&#176;  / {convertToCelsius(min)}&#176;</h1>
            {/* <h1>{max}&#176;  / {min}&#176;</h1> */}
            <div style={{ padding: "25px", textAlign: "left" }}>
                <h3>Day: {dayText}</h3>
                <h3>Night: {nightText}</h3>
            </div>
        </Card>
    )
}
export default ForecastCard;