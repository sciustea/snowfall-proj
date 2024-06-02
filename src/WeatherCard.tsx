// src/WeatherCard.tsx

import React from 'react';

interface WeatherCardProps {
  date: string;
  icon: string;
  temp: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ date, icon, temp }) => {
  return (
    <div className="weather-card">
      <img src={`https://via.placeholder.com/50?text=${icon}`} alt={icon} />
      <h3>{date}</h3>
      <p>{temp}</p>
    </div>
  );
};

export default WeatherCard;