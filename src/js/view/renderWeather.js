import {getDateTime} from "../utils";
import {createItem} from "../utils";
import {appendChild} from "../utils";
import dataArray from "../data";


export const renderWeather = (weather, current, city, country) => {
  createTodayWeather(current, city, country);
  createFutureWeather(weather);

  const divWeatherDate = document.querySelector('.weather__date');
  setInterval(() => {
    divWeatherDate.innerHTML = getDateTime();
  }, 1000)
};

const createTodayWeather = (current, city, country) => {

  const temp = Math.floor(current.temp.value);
  const speed = Math.floor(current.wind_speed.value);
  const humidity = Math.floor(current.humidity.value);
  const feelsLike = Math.floor(current.feels_like.value);
  const img = current.weather_code.value;
  const imgName = current.weather_code.value.replace(/_/, ' ');
  const currentTime = getDateTime();

  const weatherCity = createItem('div', ['weather__city'], `${city}, ${country}`, null, null);
  const weatherDate = createItem('div', ['weather__date'], currentTime, null, null);
  const weatherToday = createItem('div', ['weather__today', 'today'], null, null, null);

  const weatherContainer = document.querySelector('.weather__container');
  weatherContainer.innerHTML = '';
  weatherContainer.appendChild(weatherCity);
  weatherContainer.appendChild(weatherDate);
  weatherContainer.appendChild(weatherToday);

  const todayTemperature = createItem('div', ['today__temperature'], `${temp}&deg;`, null, null);
  let todayImg = createItem('div', ['today__img', `${img}`], null, null, null);


  const descriptionContainer = createItem('div', ['today__description'], null, null);

  const descriptionCode = createItem('div', ['today__description-prop'], `${imgName}`, null, null);
  const descriptionFeels = createItem('div', ['today__description-prop'], `Feels&nbsp;like:&nbsp;${feelsLike}&deg;`, null, null);
  const descriptionWind = createItem('div', ['today__description-prop'], `Wind:&nbsp;${speed}&nbsp;m/s`, null, null);
  const descriptionHumidity = createItem('div', ['today__description-prop'], `Humidity:&nbsp;${humidity}%`, null, null);

  appendChild(weatherToday, [todayTemperature, todayImg, descriptionContainer]);
  appendChild(descriptionContainer, [descriptionCode, descriptionFeels, descriptionWind, descriptionHumidity]);
};

const createFutureWeather = (weather) => {
  const threeDaysForecast = extractFutureWeather(weather);
  const threeDaysForecastDivs = threeDaysForecast.map(createFutureDayBlock);

  let futureWeather = createItem('div', ['weather__future', 'future'], null, null, null);
  futureWeather = appendChild(futureWeather, threeDaysForecastDivs);
  document.querySelector('.weather__container').appendChild(futureWeather);
};

const getWeekDay = (dateStr) => {
  let date = new Date(dateStr);
  return dataArray.week[date.getDay()];
};

const extractFutureWeather = (weather) => {
  return weather.map((dayData) => ({
    temperature: Math.floor(dayData.temp[1].max.value),
    weekDay: getWeekDay(dayData.observation_time.value),
    weatherCode: dayData.weather_code.value
  }))
};

const createFutureDayBlock = (dayWeather) => {
  const day = createItem('div', ['future'], null, null, null);
  const dayOfWeek = createItem('div', ['future__day'], `${dayWeather.weekDay}`, null, null);
  const dayTemperature = createItem('div', ['future__temperature'], `${dayWeather.temperature}&deg;`, null, null);
  const weatherIcon = createItem('div', ['future__img', `${dayWeather.weatherCode}`], null, 'alt', 'icon weather');
  return appendChild(day, [dayOfWeek, dayTemperature, weatherIcon]);
};
