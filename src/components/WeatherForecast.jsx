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
    if (coldWeather.includes(el.weather.code)) {
      sellingAdvise = `You can sell a jacket on fiveDayWeatherData[i].`;
      return;
    } else if (rainWeather.includes(el.weather.code)) {
      sellingAdvise = `You can sell an umbrella`;
      return;
    } else if (stormWeather.includes(el.weather.code)) {
      sellingAdvise = `You can sell an umbrella and a jacket`;
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
      <Raws className="row">
        <Column className="cell">Day</Column>
        <Column className="cell">Temperature </Column>
        <Column className="cell">Image </Column>
        <Column className="cell">Description</Column>
      </Raws>
      {fiveDayWeatherData.map(item => (
        <Raws className="row" key={item.id}>
          <Column className="cell">Day</Column>
          <Column className="cell">{item.high_temp}/{item.low_temp}</Column>
          <Column><Icon className="cell">{item.weather.icon}</Icon>
          </Column>
          <Icon className="cell">{item.weather.icon}</Icon>
          <Column className="cell">{item.weather.description}</Column>
        </Raws>
      ))}
      <h3>{sellingAdvise}</h3>
    </Wrapper>
  )
}

export default WeatherForecast;
