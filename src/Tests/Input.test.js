import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from '../components/Input';
import WeatherSearch from '../components/WeatherSearch';

test('renders', () => {
  render(<Input />);
  const inputEl = screen.getByTestId('inputForm');

  expect(inputEl).toBeInTheDocument();
});

test('check input atrributes', () => {
  render(<WeatherSearch />);
  const inputEl = screen.getByTestId('inputField');

  expect(inputEl).toHaveAttribute('placeholder', 'Enter City Name');
  expect(inputEl).toHaveAttribute('type', 'text');
  expect(inputEl).toHaveAttribute('autoComplete', 'off');
});

test('pass valid value to test input field', () => {
  render(<Input />);

  const inputEl = screen.getByTestId('inputField');
  userEvent.type(inputEl, 'London');

  expect(inputEl).toHaveValue('London');
  expect(screen.queryByTestId('inputAllert')).not.toBeInTheDocument();
});

test('pass invalid value to test input field', () => {
  render(<WeatherSearch />);

  const inputEl = screen.getByTestId('inputField');
  userEvent.type(inputEl, '');

  expect(inputEl).toHaveValue('');
  // expect(screen.queryByTestId('inputAllert')).toBeInTheDocument();
  // expect(screen.queryByTestId('inputAllert').textContent).toEqual('Please enter City name,State or City name');
});