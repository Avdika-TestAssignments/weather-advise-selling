import { render, screen } from '@testing-library/react';

import WeatherSearch from '../components/WeatherSearch';

test('renders', () => {
  render(<WeatherSearch />);
  const searchEl = screen.getByTestId('searchBlock');
  const inputEl = screen.getByTestId('inputField');
  const forecastEl = screen.getByTestId('forecast');

  expect(searchEl).toBeInTheDocument();
  expect(inputEl).toBeInTheDocument();
  expect(forecastEl).toBeInTheDocument();
});

