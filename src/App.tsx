// src/App.tsx

import React, { useState } from 'react';
import './App.css';
import logo from './logo.jpg';
import WeatherCard from './WeatherCard';

function App() {
  const [weatherData, setWeatherData] = useState([
    { date: 'Tomorrow', icon: 'cloudy', temp: '65°F' },
  ]);

  return (
    <div className="App">
      <div className="banner">
        <h2 className="project-title">Snoqualmie Pass Snowfall</h2>
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="container">
        <div className="weather-forecast">
          {weatherData.map((data, index) => (
            <WeatherCard key={index} date={data.date} icon={data.icon} temp={data.temp} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;