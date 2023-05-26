import { useState, useEffect } from "react";
import Inputs from "./components/Inputs";
import CurrentConditions from "./components/CurrentConditions";

import "./App.css";

interface MainData {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
}

interface WeatherData {
    main: string;
    description: string;
    icon: string;
}

export interface currentConditionsData {
    main: MainData;
    weather: WeatherData[];
    wind: {
        speed: number;
    };
    name: string;
}

const currentConditions: currentConditionsData = {
  main: 
}

function App() {
    const [weatherData, setWeatherData] =
        useState<currentConditionsData | null>(null);


    useEffect(() => {
        async function getWeatherData() {
            try {
                const response = await fetch(
                    "https://api.openweathermap.org/data/2.5/weather?q=london&appid=2a6c1152df7ffa7bf18c9cf173d9ef6d"
                );
                const data = await response.json();
                console.log(data);
                console.log(data.name);
                setWeatherData(data);
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        }

        getWeatherData();
    }, []);
    console.log(weatherData);
    return (
        <div className="App">
            <Inputs />
            {weatherData && <CurrentConditions weatherdata={weatherData} />}
        </div>
    );
}

export default App;
