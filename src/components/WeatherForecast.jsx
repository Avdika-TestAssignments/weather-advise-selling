import React from 'react'

import { Wrapper, Raws, Column, Overview, Icon } from '../Styles/weatherForecastStyled';

const getDayName = date => new Date(date.valid_date).toLocaleDateString('en-GB', { weekday: 'long' });

const WeatherForecast = (props) => {
  const { weather } = props;
  console.log('______ weather : ', weather);
  const fiveDayweather = weather?.data ?? [];

  const coldWeather = [600, 601, 602, 621, 622, 623, 700, 711, 721, 731, 741, 751];
  const rainWeather = [300, 301, 302, 500, 501, 502, 511, 520, 521, 522];
  const stormWeather = [200, 201, 202, 230, 231, 232, 233, 610, 611, 612];

  return (
    <Wrapper>
      <Overview />
      <h3>{weather.city_name}</h3>
      <Overview />
      <Raws>
        <Column>Day</Column>
        <Column>Temperature </Column>
        <Column>Image </Column>
        <Column>Description</Column>
      </Raws>
      {fiveDayweather.map(item => (
        <Raws key={item.id}>
          <Column>{getDayName(item)}</Column>
          <Column>{item.high_temp}/{item.low_temp}</Column>
          <Column><Icon src={`../Icons/${item.weather.icon}.png`} />
          </Column>
          <Column>{item.weather.description}</Column>
        </Raws>
      ))}
      <h3>{sellingAdvise}</h3>
    </Wrapper>
  )
}

export default WeatherForecast;
