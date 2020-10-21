import '../css/style.scss';

import {getWeather, getCurrentWeather} from './api/GetWeatheAPI';
import {getLocation} from './api/GetLocation';
import {getImage} from './api/imageAPI';

import {Weather} from './view/Weather';
import {renderMap} from './view/renderMap';
import {renderLocation} from "./view/renderLocation";
import {getDateTime} from './utils';
import {SearchControl} from "./controls/SeachControl";
import {reloadImage, renderImage} from './view/renderBackground';


async function init() {
  const weatherDom = new Weather();
  const searchControl = new SearchControl(weatherDom);
  await renderCurrentLocationWeather(weatherDom);
}

const renderCurrentLocationWeather = async (weatherDom) => {
  const { city, country, lat, lon, offset } = await getLocation();
  const weather = await getWeather(lat, lon);
  const current = await getCurrentWeather(lat, lon);
  const imgUrl = await getImage();
  renderImage(imgUrl);
  weatherDom.updateWeather(weather, current, city, country, offset);
  getDateTime(offset);
  renderLocation(lat, lon);
  renderMap(lat, lon);
  reloadImage();
};

document.addEventListener('DOMContentLoaded', () => {
  init();
});
