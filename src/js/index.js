import '../css/style.scss';
import {getWeather} from './api/GetWeatheAPI';
import {getLocation} from './api/GetLocation';
import {renderWeather} from './view/renderWeather'




async function init() {

  const {city, country, lat, lon} = await getLocation();

  const weather = await getWeather(lat, lon);
}

//
// document.addEventListener('DOMContentLoaded', () => {
//   renderWeather();
// });

// renderLoader();
// init();


