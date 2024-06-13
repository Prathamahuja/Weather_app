import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";

export default function WeatherApp() {
  const [WeatherInfo, setWeatherInfo] = useState({
    city: "delhi",
    feelsLike: 41.33,
    humidity: 8,
    temp: 45.02,
    tempMax: 45.02,
    tempMin: 45.02,
    weather: "clear sky",
  });

  const updateInfo = (newinfo) => {
    setWeatherInfo(newinfo);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>WEATHER APP BY PRATHAM</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={WeatherInfo} />
    </div>
  );
}
