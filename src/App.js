import './App.css';
import WeatherSearch from './components/WeatherSearch';

function App() {
  return (
    <div className="App">
        <h1>What can you sell right now or in the nearest future</h1>
        <h3>weather for the next 5 days</h3>
        <WeatherSearch />
    </div>
  );
}

export default App;
