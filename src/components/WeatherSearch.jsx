import React from 'react'
import axios from 'axios';
import { trackPromise } from 'react-promise-tracker';

import { apiKey } from '../Config/constants';
import InputForm from './Input';
import WeatherForecast from './WeatherForecast';

function WeatherSearch() {
  const [weather, setWeather] = React.useState([]);
  const [emptySearch, setEmptySearch] = React.useState(false);
  const URL = 'https://api.weatherbit.io/v2.0/forecast/daily?';
  const days = 5;

  const handleResult = result => {
    setWeather(result);
    setEmptySearch(result.length === 0);
  };

  const searchCityWeather = (cityName) => {
    setWeather([]);

    trackPromise(
      axios
        .get(`${URL}?city=${cityName}&key=${apiKey}&days=${days}`)
        .then(result => handleResult(result.data))
        .catch((error) => {
          console.log('we have received an error: ', error);
        }));
  };

  return (
    <div>
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
