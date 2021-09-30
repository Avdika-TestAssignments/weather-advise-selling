import React, { useState } from 'react'
import axios from 'axios';
import { trackPromise } from 'react-promise-tracker';

import { apiKey, URL, days } from '../Config/constants';
import InputForm from './Input';
import WeatherForecast from './WeatherForecast';

const WeatherSearch = () => {
  const [weather, setWeather] = useState([]);

  const handleResult = result => {
    setWeather(result);
  };

  const searchCityWeather = (cityName) => {
    setWeather([]);

    trackPromise(
      axios
        .get(`${URL}city=${cityName}&key=${apiKey}&days=${days}`)
        .then(result => handleResult(result.data))
        .catch((error) => {
          console.log('we have received an error: ', error);
        }));
  };

  return (
    <div data-testid='searchBlock'>
      <InputForm
        placeholder="Enter City Name"
        buttonText="Search"
        onSubmit={value => searchCityWeather(value)}
      />
      <WeatherForecast weather={weather} />
    </div>
  )
}

export default WeatherSearch;
