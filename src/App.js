import React, { useState } from 'react';
import './App.css';
import { FetchWeather } from './api/FetchWeather';

const App = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === 'Enter') {
      const data = await FetchWeather(query);

      console.log(data);

      setWeather(data);
      setQuery('');
    }
  }
  return (
    <div className="main-container">
      <input type="text" className="search" placeholder="Seaech Your City..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search} />
      {weather.main && (
        <div className="city">
          <h1 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
            <div className="city-temp">
              {Math.round(weather.main.temp)}
              <sup>&deg;C</sup>
            </div>
            <div className="info">
              <img classNmae="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
              <p>{weather.weather[0].description}</p>
            </div>
          </h1>
        </div>
      )}
    </div>
  );
};

export default App;
