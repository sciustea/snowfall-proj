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
      <img src={icon === 'sunny' ? 'https://via.placeholder.com/50x50/ffffff/000000?text=☀️' : icon === 'cloudy' ? 'https://via.placeholder.com/50x50/ffffff/000000?text=☁️' : 'https://via.placeholder.com/50x50/ffffff/000000?text=☔️'} alt={icon} />
      <h3>{date}</h3>
      <p>{temp}</p>
    </div>
  );
};

export default WeatherCard;