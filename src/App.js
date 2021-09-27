import './App.css';
import WeatherForecast from './components/WeatherForecast';
import Input from './components/Input';

function App() {
  return (
    <div className="App">
        <h1>What can you sell right now or in the nearest future</h1>
        <h3>weather for the next 5 days</h3>
        <Input />
        <WeatherForecast />
    </div>
  );
}

export default App;
