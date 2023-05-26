import { useState, useEffect } from "react";
import Inputs from "./components/Inputs";
import CurrentConditions from "./components/CurrentConditions";

import "./App.css";

interface WeatherData {
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  name: string;
}

interface MainData {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  description: string;
  icon: string;
  name: string;
}

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [mainData, setMainData] = useState<MainData | null>(null);

  useEffect(() => {
    async function getWeatherData() {
      try {
        const response = await fetch(
          "https://api.openweathermap.org/data/2.5/weather?q=london&appid=2a6c1152df7ffa7bf18c9cf173d9ef6d"
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }

    getWeatherData();
  }, []);

  useEffect(() => {
    if (weatherData) {
      const { main, weather, name } = weatherData;
      const mainData: MainData = {
        temp: main.temp,
        feels_like: main.feels_like,
        temp_min: main.temp_min,
        temp_max: main.temp_max,
        pressure: main.pressure,
        humidity: main.humidity,
        description: weather[0].description,
        icon: weather[0].icon,
        name: name,
      };
      setMainData(mainData);
    }
  }, [weatherData]);

  //console.log(weatherData);

  return (
    <div className="App">
      <Inputs />
      {mainData && <CurrentConditions weatherData={mainData} />}
    </div> 
  )
}

export default App;