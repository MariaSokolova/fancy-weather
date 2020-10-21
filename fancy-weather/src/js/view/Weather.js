import {getDateTime} from "../utils";
import {createItem} from "../utils";
import {appendChild} from "../utils";
import dataArray from "../data";

export class Weather {
  constructor() {
    this.temperatureUnits = 'Celsius';
    this.initUnitButtonHandler();
  }

  updateWeather(weather, current, city, country, offset) {
    this.weather = weather;
    this.current = current;
    this.city = city;
    this.country = country;
    this.offset = offset;

    this.renderWeather();
  }

  renderWeather() {
    this.createTodayWeather(this.current, this.city, this.country, this.offset);
    this.createFutureWeather(this.weather);
  };

  createTodayWeather(current, city, country, offset) {
    const temp = Math.floor(this.getTemperature(current.temp.value));

    const speed = Math.floor(current.wind_speed.value);
    const humidity = Math.floor(current.humidity.value);
    const feelsLike = Math.floor(current.feels_like.value);
    const img = current.weather_code.value;
    const imgName = current.weather_code.value.replace(/_/, ' ');
    const currentTime = getDateTime(offset);

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

    const divWeatherDate = document.querySelector('.weather__date');
    setInterval(() => {
      divWeatherDate.innerHTML = getDateTime(offset);
    }, 1000)
  };

  createFutureWeather(weather) {
    const threeDaysForecast = this.extractFutureWeather(weather);
    const threeDaysForecastDivs = threeDaysForecast.map((dayWeather) => this.createFutureDayBlock(dayWeather));

    let futureWeather = createItem('div', ['weather__future', 'future'], null, null, null);
    futureWeather = appendChild(futureWeather, threeDaysForecastDivs);
    document.querySelector('.weather__container').appendChild(futureWeather);
  };

  getWeekDay(dateStr) {
    let date = new Date(dateStr);
    return dataArray.week[date.getDay()];
  };

  extractFutureWeather(weather) {
    return weather.map((dayData) => ({
      temperature: Math.floor(this.getTemperature(dayData.temp[1].max.value)),
      weekDay: this.getWeekDay(dayData.observation_time.value),
      weatherCode: dayData.weather_code.value
    }))
  };

  createFutureDayBlock(dayWeather) {
    const day = createItem('div', ['future'], null, null, null);
    const dayOfWeek = createItem('div', ['future__day'], `${dayWeather.weekDay}`, null, null);
    const dayTemperature = createItem('div', ['future__temperature'], `${dayWeather.temperature}&deg;`, null, null);
    const weatherIcon = createItem('div', ['future__img', `${dayWeather.weatherCode}`], null, 'alt', 'icon weather');
    return appendChild(day, [dayOfWeek, dayTemperature, weatherIcon]);
  };

  initUnitButtonHandler() {
    const buttonC = document.querySelector('.button__celsius');
    const buttonF = document.querySelector('.button__fahrenheit');

    buttonF.addEventListener('click', () => {
      buttonC.classList.add('inactive');
      buttonF.classList.remove('inactive');
      this.temperatureUnits = 'Fahrenheit';
      this.renderWeather();
    });

    buttonC.addEventListener('click', () => {
      buttonF.classList.add('inactive');
      buttonC.classList.remove('inactive');
      this.temperatureUnits = 'Celsius';
      this.renderWeather();
    });
  };

  getTemperature(temp) {
    if(this.temperatureUnits === 'Fahrenheit') {
      return this.toFahrenheit(temp);
    }
    return temp;
  }

  toFahrenheit(temp) {
    return Math.round((temp * 9) / 5 + 32);
  };
}
