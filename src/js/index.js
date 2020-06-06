import '../css/style.scss';

import {getWeather, getCurrentWeather} from './api/GetWeatheAPI';
import {getLocation} from './api/GetLocation';

import {renderWeather} from './view/renderWeather';
import {renderMap} from './view/renderMap';
import {renderLocation} from "./view/renderLocation";

import {getDateTime} from './utils';

import {searchLocation} from "./controls/seachControl";





async function init() {
  const {city, country, lat, lon} = await getLocation();
  const weather = await getWeather(lat, lon);
  const current = await getCurrentWeather(lat, lon);
  console.log('weather = ', weather);
  renderWeather(weather, current, city, country);
  getDateTime();
  renderLocation(lat, lon);
  renderMap(lat, lon);
  searchLocation();
}

document.addEventListener('DOMContentLoaded', () => {
  // console.log('EventListener');
  init();
});




// const current = {
//   lat: 50.0614,
//   lon: 19.9366,
//   temp: {units: 'C', value: 17.45 },
//   feels_like: {units: 'C', value: 17.45 },
//   humidity: { value: 46.8, units: "%" },
//   weather_code: { value: "mostly_cloudy" },
//   wind_speed: { value: 3.03, units: "m/s" }
// };
//
// const weather = [
//   {
//     temp: [
//       {min: {value: 8.96, units: "C"}},
//       {max: {value: 18.35, units: "C"}}
//     ]
//   },
//   {
//     temp: [
//       {min: {value: 8.96, units: "C"}},
//       {max: {value: 17.35, units: "C"}}
//     ]
//   },
//   {
//     temp: [
//       {min: {value: 8.96, units: "C"}},
//       {max: {value: 19.35, units: "C"}}
//     ]
//   }
// ];

