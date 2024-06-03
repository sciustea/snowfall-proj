// src/App.tsx

import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './logo.jpg';
import WeatherCard from './WeatherCard';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [showSnowfall, setShowSnowfall] = useState(false);

  // useEffect(() => {
  //   fetch('https://api.openweathermap.org/data/2.5/forecast?q=Snoqualmie Pass&units=imperial&appid=YOUR_API_KEY')
  //     .then(response => response.json())
  //     .then(data => setWeatherData(data.list[1])); // get tomorrow's weather data
  // }, []);

  const handleGetForecast = () => {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=Snoqualmie Pass&units=imperial&appid=YOUR_API_KEY')
      .then(response => response.json())
      .then(data => {
        const tomorrow = data.list[1]; // get tomorrow's weather data
        setWeatherData(tomorrow);
        setShowSnowfall(true);
      });
  };

  return (
    <div className="App">
      <div className="banner">
        <h2 className="project-title">Snoqualmie Pass Snowfall</h2>
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="container">
        {
          <button onClick={handleGetForecast}>Get Forecast</button>
        /* <h3>Today's Date: {date}</h3> */
        // {weatherData && (
        //   <WeatherCard
        //     date={weatherData.dt_txt}
        //     icon={weatherData.weather[0].icon}
        //     temp={showSnowfall ? weatherData.snow['3h'] : weatherData.main.temp}
        //     unit={showSnowfall ? 'in' : '°F'}
        //   />
        // )}
       }
      </div>
    </div>
  );
}

export default App;