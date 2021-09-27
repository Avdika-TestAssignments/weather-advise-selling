import React, { useState } from 'react';

import apiKey from './constants';
import cityName from '';

const weatherData = (() => {

  const URL = 'https://api.weatherbit.io/v2.0/forecast/daily?';
  const days = 5;


    const Weather = async (requestType, cityName) => {
      let request = `${URL}?city=${cityName}&key=${apiKey}&days=${days}`;


      return data;
    };

    return {
      Weather,
    };

})();

export default weatherData;