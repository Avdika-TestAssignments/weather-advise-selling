import { render, screen } from '@testing-library/react';
import WeatherForecast from '../components/WeatherForecast';


test('renders', () => {
  render(<WeatherForecast />);
  const forecastEl = screen.getByTestId('forecast');

  expect(forecastEl).toBeInTheDocument();
});
