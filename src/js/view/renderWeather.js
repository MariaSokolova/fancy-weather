export const renderWeather = (weather, current, city, country) => {

  createTodayWeather(current, city, country);
  createFutureWeather(weather);
};

function createItem(tagName, classNames, text, attr, attrName) {
  const item = document.createElement(tagName);
  if (classNames) {
    classNames.forEach((el) => item.classList.add(el) );
  }
  item.innerHTML = text;
  if (attr === null) {
    return item;
  } else {
    item.setAttribute(attr, attrName);
  }
  return item;
}

const appendChild = (element, children) => {
  if (children) {
    children.forEach((child) => element.appendChild(child));
  }
};

const getTemperature = (weather) => {
  console.log('weather = ', weather);
  let forecastArr = [];
  for (let i = 0; i < 3; i++) {
    forecastArr.push( Math.floor(weather[i].temp[1].max.value));
  }
  return forecastArr;
};

const createTodayWeather = (current, city, country) => {
  console.log('current = ', current);

  const temp = Math.floor(current.temp.value);
  const speed = Math.floor(current.wind_speed.value);
  const humidity = Math.floor(current.humidity.value);
  const feelsLike = Math.floor(current.feels_like.value);
  const img = current.weather_code.value;

  const weatherCity = createItem('div', ['weather__city'], `${city}, ${country}`, null, null);
  const weatherDate = createItem('div', ['weather__date'], `Mon 28 October  7:32`, null, null);
  const weatherToday = createItem('div', ['weather__today', 'today'], null, null, null);

  const weatherContainer = document.getElementsByClassName('weather__container')[0];
  weatherContainer.appendChild(weatherCity);
  weatherContainer.appendChild(weatherDate);
  weatherContainer.appendChild(weatherToday);

  const todayTemperature = createItem('div', ['today__temperature'], `${temp}&deg;`, null, null);
  const todayImg = createItem('img', ['today__img'], `${img}&deg;`, 'alt', 'icon weather');

  const descriptionContainer = createItem('div', ['today__description'], null, null);

  const descriptionCode = createItem('div', ['today__description-prop'], `${temp}&deg;`, null, null);
  const descriptionFeels = createItem('div', ['today__description-prop'], `Feels like: ${feelsLike}&deg;`, null, null);
  const descriptionWind = createItem('div', ['today__description-prop'], `Wind: ${speed} m/s`, null, null);
  const descriptionHumidity = createItem('div', ['today__description-prop'], `${humidity}%`, null, null);

  appendChild(weatherToday, [todayTemperature, todayImg, descriptionContainer]);
  appendChild(descriptionContainer, [descriptionCode, descriptionFeels, descriptionWind, descriptionHumidity]);

};

const createFutureWeather = (weather) => {
  const forecastArr = getTemperature(weather);

  const futureWeather = createItem('div', ['weather__future', 'future'], null, null, null);

  const dayOne = createItem('div', ['future'], null, null, null);
  const futureDayOne = createItem('div', ['future__day'], 'Monday', null, null);

  const futureTemperatureOne = createItem('div', ['future__temperature'], `${forecastArr[0]}&deg;`, null, null);
  const futureImgOne = createItem('img', ['future__img'], 'Monday', 'alt', 'icon weather');

  const daySecond = createItem('div', ['future'], null, null, null);
  const futureDaySecond = createItem('div', ['future__day'], 'Monday', null, null);
  const futureTemperatureSecond = createItem('div', ['future__temperature'], `${forecastArr[1]}&deg;`, null, null);
  const futureImgSecond = createItem('img', ['future__img'], 'Monday', 'alt', 'icon weather');

  const dayThird = createItem('div', ['future'], null, null, null);
  const futureDayThird = createItem('div', ['future__day'], 'Monday', null, null);
  const futureTemperatureThird = createItem('div', ['future__temperature'], `${forecastArr[2]}&deg;`, null, null);
  const futureImgThird = createItem('img', ['future__img'], 'Monday', 'alt', 'icon weather');

  document.getElementsByClassName('weather__container')[0].appendChild(futureWeather);
  appendChild(futureWeather, [dayOne, daySecond, dayThird]);
  appendChild(dayOne, [futureDayOne, futureTemperatureOne, futureImgOne]);
  appendChild(daySecond, [futureDaySecond, futureTemperatureSecond, futureImgSecond]);
  appendChild(dayThird, [futureDayThird, futureTemperatureThird, futureImgThird]);
};


