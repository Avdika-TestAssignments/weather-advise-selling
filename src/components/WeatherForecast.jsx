import React from 'react'

import { Wrapper, Raws, Column, Overview, Icon } from '../Styles/weatherForecastStyled';

const getDayName = date => new Date(date.valid_date).toLocaleDateString('en-GB', { weekday: 'long' });

const WeatherForecast = (props) => {
  const { weather } = props;
  const fiveDayweather = weather?.data ?? [];

  const coldWeather = [600, 601, 602, 621, 622, 623, 700, 711, 721, 731, 741, 751];
  const rainWeather = [300, 301, 302, 500, 501, 502, 511, 520, 521, 522];
  const stormWeather = [200, 201, 202, 230, 231, 232, 233, 610, 611, 612];

  const [rainyDay, setRainyDay] = React.useState('');
  const [coldDay, setColdDay] = React.useState('');
  const [sellingAdvise, setSellingAdvise] = React.useState('');

  //check if the weather matches the specified conditions
  for (const el of fiveDayweather) {
    const dayName = getDayName(el);

    //first check for the worst weather
    if (stormWeather.includes(el.weather.code)) {
      setSellingAdvise(`You can sell an umbrella and a jacket on ${dayName}`);
      break;
    }

    if (coldWeather.includes(el.weather.code)) {
      setColdDay(`You can sell a jacket on ${dayName}`);
    }

    if (rainWeather.includes(el.weather.code)) {
      setRainyDay(`You can sell an umbrella on ${dayName}`);
    }

    console.log('______ rainyDay : ', rainyDay);
    console.log('______ coldDay : ', coldDay);
    console.log('______ sellingAdvise : ', sellingAdvise);
  }

  //if there is no bad weather
  if (weather?.city_name && !sellingAdvise && !coldDay && !rainyDay) {
    setSellingAdvise(`The weather will be good enough for your goods, maybe try to sell sunglasses`);
  }

  return (
    <Wrapper>
      <Overview />
      <h3>{weather.city_name}</h3>
      <Overview />
      <Raws>
        <Column>Day</Column>
        <Column>Temperature </Column>
        <Column></Column>
        <Column>Description</Column>
      </Raws>
      {fiveDayweather.map(item => (
        <Raws key={item.moon_phase}>
          <Column>{getDayName(item)}</Column>
          <Column>{item.high_temp}/{item.low_temp}</Column>
          <Column><Icon src={`../Icons/${item.weather.icon}.png`} />
          </Column>
          <Column>{item.weather.description}</Column>
        </Raws>
      ))}
      {rainyDay ? <h3>{sellingAdvise}</h3> : null}
      {coldDay ? <h3>{sellingAdvise}</h3> : null}
      {sellingAdvise ? <h3>{sellingAdvise}</h3> : null}
    </Wrapper>
  )
}

export default WeatherForecast;
