import {
  getStormWeather,
  getColdWeather,
  getRainWeather,
  getIcon
} from '../Config/helpers';


test('correct function working', () => {
  const stormWeather = [610, 611, 612];
  const coldWeather = [731, 741, 751];
  const rainWeather = [520, 521, 522];
  const iconTest = { weather: { icon: '30b' } };

  expect(getStormWeather(stormWeather, 610)).toBe(true);
  expect(getStormWeather(stormWeather, 731)).toBe(false);
  expect(getStormWeather(stormWeather, 520)).toBe(false);

  expect(getColdWeather(coldWeather, 610)).toBe(false);
  expect(getColdWeather(coldWeather, 731)).toBe(true);
  expect(getColdWeather(coldWeather, 520)).toBe(false);

  expect(getRainWeather(rainWeather, 610)).toBe(false);
  expect(getRainWeather(rainWeather, 731)).toBe(false);
  expect(getRainWeather(rainWeather, 520)).toBe(true);

  expect(getIcon(iconTest)).toBe(`/Icons/30b.png`);
});