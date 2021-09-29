import React, { useState, useEffect } from 'react';

import { Wrapper, Raws, Column, Overview, Icon } from '../Styles/weatherForecastStyled';
import { stormWeather,
         coldWeather,
         rainWeather
         } from '../Config/constants';
import { getDayName,
         getStormWeather,
         getColdWeather,
         getRainWeather,
         getIcon
        } from '../Config/helpers';

const WeatherForecast = (props) => {
  const { weather } = props;
  const fiveDayweather = weather.data ?? [];

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

      stormCheck = getStormWeather(stormWeather, weatherCode);

      //first check for the worst weather
      if (stormCheck) {
        setStormDay(`You can sell an umbrella and a jacket on ${dayName}`);
        setColdDay('');
        setRainyDay('');
        setSellingAdvise('');
        break;
      }

      if (!coldCheck && getColdWeather(coldWeather, weatherCode)) {
        setColdDay(`You can sell a jacket on ${dayName}`);
        setSellingAdvise('');
        setStormDay('');
        coldCheck = true;
      }

      if (!rainCheck && getRainWeather(rainWeather, weatherCode)) {
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
  }, [weather.city_name, stormDay, sellingAdvise, coldDay, rainyDay, fiveDayweather]);

  return (
    <Wrapper>
      <Overview />
      <h3>{weather.city_name}</h3>
      <Overview />
      <Raws>
        <Column className = 'dayName'>Day</Column>
        <Column>Temperature </Column>
        <Column></Column>
        <Column>Description</Column>
      </Raws>
      {fiveDayweather.map(item => (
        <Raws key={item.moon_phase}>
          <Column className = 'dayName'>{getDayName(item)}</Column>
          <Column>{item.high_temp}/{item.low_temp}</Column>
          <Column><Icon src={getIcon(item)} />
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
