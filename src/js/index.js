import '../css/style.scss';

import {getWeather, getCurrentWeather} from './api/GetWeatheAPI';
import {getLocation} from './api/GetLocation';
import {getImage} from './api/imageAPI';

import {renderWeather} from './view/renderWeather';
import {renderMap} from './view/renderMap';
import {renderLocation} from "./view/renderLocation";
import {renderImage} from "./view/renderBackground";

import {getDateTime} from './utils';

import {searchLocation, reloadImage} from "./controls/seachControl";


async function init() {

  const { city, country, lat, lon } = await getLocation();
  // const weather = await getWeather(lat, lon);


 const weatherStr ='[{"temp":[{"observation_time":"2020-06-09T00:00:00Z","min":{"value":9.76,"units":"C"}},{"observation_time":"2020-06-08T10:00:00Z","max":{"value":17.85,"units":"C"}}],"feels_like":[{"observation_time":"2020-06-09T00:00:00Z","min":{"value":9.76,"units":"C"}},{"observation_time":"2020-06-08T10:00:00Z","max":{"value":17.85,"units":"C"}}],"humidity":[{"observation_time":"2020-06-08T11:00:00Z","min":{"value":79.9,"units":"%"}},{"observation_time":"2020-06-09T01:00:00Z","max":{"value":98.6,"units":"%"}}],"wind_speed":[{"observation_time":"2020-06-08T22:00:00Z","min":{"value":2.18,"units":"m/s"}},{"observation_time":"2020-06-08T06:00:00Z","max":{"value":4.75,"units":"m/s"}}],"weather_code":{"value":"rain_light"},"observation_time":{"value":"2020-06-08"},"lat":50.0614,"lon":19.9366},{"temp":[{"observation_time":"2020-06-09T04:00:00Z","min":{"value":11.57,"units":"C"}},{"observation_time":"2020-06-09T09:00:00Z","max":{"value":16.43,"units":"C"}}],"feels_like":[{"observation_time":"2020-06-09T04:00:00Z","min":{"value":11.57,"units":"C"}},{"observation_time":"2020-06-09T09:00:00Z","max":{"value":16.43,"units":"C"}}],"humidity":[{"observation_time":"2020-06-09T08:00:00Z","min":{"value":78.3,"units":"%"}},{"observation_time":"2020-06-10T03:00:00Z","max":{"value":94.4,"units":"%"}}],"wind_speed":[{"observation_time":"2020-06-09T08:00:00Z","min":{"value":1.86,"units":"m/s"}},{"observation_time":"2020-06-09T14:00:00Z","max":{"value":4.2,"units":"m/s"}}],"weather_code":{"value":"cloudy"},"observation_time":{"value":"2020-06-09"},"lat":50.0614,"lon":19.9366},{"temp":[{"observation_time":"2020-06-10T04:00:00Z","min":{"value":13.64,"units":"C"}},{"observation_time":"2020-06-10T11:00:00Z","max":{"value":18.05,"units":"C"}}],"feels_like":[{"observation_time":"2020-06-10T04:00:00Z","min":{"value":13.64,"units":"C"}},{"observation_time":"2020-06-10T11:00:00Z","max":{"value":18.05,"units":"C"}}],"humidity":[{"observation_time":"2020-06-10T10:00:00Z","min":{"value":77.8,"units":"%"}},{"observation_time":"2020-06-10T22:00:00Z","max":{"value":97.7,"units":"%"}}],"wind_speed":[{"observation_time":"2020-06-10T04:00:00Z","min":{"value":1.76,"units":"m/s"}},{"observation_time":"2020-06-10T16:00:00Z","max":{"value":4.11,"units":"m/s"}}],"weather_code":{"value":"cloudy"},"observation_time":{"value":"2020-06-10"},"lat":50.0614,"lon":19.9366}]';
  const weather = JSON.parse(weatherStr);


  // const current = await getCurrentWeather(lat, lon);
  // const imgUrl = await getImage();
  // renderImage(imgUrl);
  renderWeather(weather, current, city, country);
  getDateTime();
  renderLocation(lat, lon);
  renderMap(lat, lon);
  searchLocation();
  reloadImage()
}

document.addEventListener('DOMContentLoaded', () => {
  // console.log('EventListener');
  init();
});


const current = {
  lat: 50.0614,
  lon: 19.9366,
  temp: {units: 'C', value: 17.45 },
  feels_like: {units: 'C', value: 17.45 },
  humidity: { value: 46.8, units: "%" },
  weather_code: { value: "mostly_cloudy" },
  wind_speed: { value: 3.03, units: "m/s" }
};


