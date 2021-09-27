import React from 'react'

import { Wrapper, Days, Content, Overview, Icon } from '../Styles/weatherForecastStyled';

function WeatherForecast(props) {
  return (
      <Wrapper>
        <Content>
          <Overview />
          <Icon />
        </Content>
        <Days />
      </Wrapper>
  )
}

export default WeatherForecast;
