import React from 'react'

import { Wrapper, Days, Content, Overview, Icon } from '../Styles/weatherForecastStyled';

export default function weatherForecast() {
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
