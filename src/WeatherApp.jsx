import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 33.27,
        humidity: 30,
        temp: 33.99,
        tempMax: 33.99,
        tempMin: 33.99,
        weather: "overcast clouds",
      });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return (
        <div style = {{textAlign: "center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo={ updateInfo} />
            <InfoBox info={ weatherInfo } />
        </div>
    )
}