import React from 'react'

import { Wrapper, Raws, Column, Overview, Icon } from '../Styles/weatherForecastStyled';

const WeatherForecast = (props) => {
  const weatherData = props;
  console.log('______' + weatherData);
  const fiveDayWeatherData = Array.isArray(weatherData) ? weatherData.filter(item => typeof item !== "string") : [];

  const coldWeather = [600, 601, 602, 621, 622, 623, 700, 711, 721, 731, 741, 751];
  const rainWeather = [300, 301, 302, 500, 501, 502, 511, 520, 521, 522];
  const stormWeather = [200, 201, 202, 230, 231, 232, 233, 610, 611, 612];

  let sellingAdvise = '';

  for (const el of fiveDayWeatherData) {
    let dayName = el.valid_date.getDay()

    if (coldWeather.includes(el.weather.code)) {
      sellingAdvise = `You can sell a jacket on ${dayName}`;
      return;
    } else if (rainWeather.includes(el.weather.code)) {
      sellingAdvise = `You can sell an umbrella on ${dayName}`;
      return;
    } else if (stormWeather.includes(el.weather.code)) {
      sellingAdvise = `You can sell an umbrella and a jacket on ${dayName}`;
      return;
    } else {
      sellingAdvise = `The weather will be good enough for your goods, maybe try to sell sunglasses`;
    }
  }

  return (
    <Wrapper>
      <Overview />
      <h3>{weatherData.city_name}</h3>
      <Overview />
      <Raws>
        <Column>Day</Column>
        <Column>Temperature </Column>
        <Column>Image </Column>
        <Column>Description</Column>
      </Raws>
      {fiveDayWeatherData.map(item => (
        <Raws key={item.id}>
          <Column>Day</Column>
          <Column>{item.high_temp}/{item.low_temp}</Column>
          <Column><Icon src="../Icons/{item.weather.icon}.png" />
          </Column>
          <Column>{item.weather.description}</Column>
        </Raws>
      ))}
      <h3>{sellingAdvise}</h3>
    </Wrapper>
  )
}

export default WeatherForecast;
