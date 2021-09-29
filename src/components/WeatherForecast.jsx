import React, { useState, useEffect } from 'react';

import { Wrapper, Raws, Column, Overview, Icon } from '../Styles/weatherForecastStyled';

export const stormWeather = [200, 201, 202, 230, 231, 232, 233, 610, 611, 612];

const getDayName = date => new Date(date.valid_date).toLocaleDateString('en-GB', { weekday: 'long' });

const WeatherForecast = (props) => {
  const { weather } = props;
  const fiveDayweather = weather?.data ?? [];

  const coldWeather = [600, 601, 602, 621, 622, 623, 700, 711, 721, 731, 741, 751];
  const rainWeather = [300, 301, 302, 500, 501, 502, 511, 520, 521, 522];

  const [rainyDay, setRainyDay] = useState('');
  const [coldDay, setColdDay] = useState('');
  const [stormDay, setStormDay] = useState('');
  const [sellingAdvise, setSellingAdvise] = useState('');

  //check if the weather matches the specified conditions
  useEffect(() => {
    let stormCheck = false;
    let coldCheck = false;
    let rainCheck = false;
    for (const el of fiveDayweather) {
      const dayName = getDayName(el);
      const weatherCode = el.weather.code;

      stormCheck = stormWeather.includes(weatherCode);
      console.log('__ wear: ', weatherCode);
      
      //first check for the worst weather
      
      if (stormCheck) {
        setStormDay(`You can sell an umbrella and a jacket on ${dayName}`);
        setColdDay('');
        setRainyDay('');
        setSellingAdvise('');
        console.log('__ storm code: ', stormDay);
        break;
      }
  
      if (!coldCheck && coldWeather.includes(weatherCode)) {
        setColdDay(`You can sell a jacket on ${dayName}`);
        setSellingAdvise('');
        setStormDay('');
        coldCheck = true;
      }
      
      if (!rainCheck && rainWeather.includes(weatherCode)) {
        setRainyDay(`You can sell an umbrella on ${dayName}`);
        setSellingAdvise('');
        setStormDay('');
        rainCheck = true;
      }
      
      if (coldCheck && rainCheck) break;
    }
    
    //if there is no bad weather
    if (weather?.city_name && !stormCheck && !coldCheck && !rainCheck) {
      setSellingAdvise(`The weather will be good enough for your goods, maybe try to sell sunglasses`);
      setStormDay('');
      setColdDay('');
      setRainyDay('');
    }
  }, [weather.city_name, stormDay, sellingAdvise, coldDay, rainyDay, fiveDayweather, stormWeather, coldWeather, rainWeather]);

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
      {stormDay ? <h3>{stormDay}</h3> : null}
      {rainyDay ? <h3>{rainyDay}</h3> : null}
      {coldDay ? <h3>{coldDay}</h3> : null}
      {sellingAdvise ? <h3>{sellingAdvise}</h3> : null}
    </Wrapper>
  )
}

export default WeatherForecast;
