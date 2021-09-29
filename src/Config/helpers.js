export const getDayName = date => new Date(date.valid_date).toLocaleDateString('en-GB', { weekday: 'long' });
export const getIcon = (item) => `/Icons/${item.weather.icon}.png`;

export const getStormWeather = (codesArray, code) => codesArray.includes(code);
export const getColdWeather = (codesArray, code) => codesArray.includes(code);
export const getRainWeather = (codesArray, code) => codesArray.includes(code);
