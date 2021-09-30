import { render, screen } from '@testing-library/react';
import App from './App';

test('h tags and their text', () => {
  render(<App />);
  const hElement = screen.queryAllByRole("heading");

  const h1El = hElement[0];
  const h3El = hElement[1];

  expect(hElement.length >= 2).toBe(true);
  expect(h3El).toHaveTextContent('weather for the next 5 days')
  expect(h1El).toHaveTextContent('What can you sell right now or in the nearest future');
});

test('render of WeatherSearch component', () => {
  render(<App />);
  const component = screen.getByTestId('searchBlock');

  expect(component).toBeInTheDocument();
});
