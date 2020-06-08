import {getGeocode} from "../api/getGeocode";
import {getCurrentWeather, getWeather} from "../api/GetWeatheAPI";
import {getImage} from '../api/imageAPI';

import {renderWeather} from "../view/renderWeather";
import {renderLocation} from "../view/renderLocation";
import {flyToMapLocation} from "../view/renderMap";
import {renderImage} from "../view/renderBackground";

import {getDateTime, toFahrenheit} from "../utils";

export const searchLocation = () => {
  const searchButton = document.getElementById('search');
  searchButton.addEventListener('click', handler);
  const input = document.getElementById("city");
  input.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      handler();
    }
  })
};

const getInputValue = () => {
  return document.getElementById('city').value;
};

const handler =  async () => {
  const cityName = getInputValue();
  const divMessage  = document.getElementById('error');
  if (cityName === '') {
    divMessage.innerText = 'input correct City';
    return ;
  }
  divMessage.innerText = '';
  renderNewWeather(cityName);
};

const renderNewWeather = async (cityName) => {
  const { city, country, lat, lon, offset } = await getGeocode(cityName);
  console.log('offset = ', offset);

  const weather = await getWeather(lat, lon);
  const current = await getCurrentWeather(lat, lon);
  console.log('weather = ', weather);
  renderWeather(weather, current, city, country, offset);
  getDateTime(offset);
  renderLocation(lat, lon);
  flyToMapLocation(lat, lon);
};



export const reloadImage = () => {
  const refreshButton = document.querySelector('.dashboard__refresh');
  refreshButton.addEventListener('click', changeImage);
};

const changeImage = async () => {
  startAnimation();
  const imgUrl = await getImage();
  renderImage(imgUrl);
  setTimeout(() => {
    stopAnimation()
  }, 2000);
};

const startAnimation = () => {
  const spin = document.querySelector('.spinner');
  spin.classList.add('spinner__active');
};

const stopAnimation = () => {
  const spin = document.querySelector('.spinner');
  spin.classList.remove('spinner__active');
};




export const changeTemperature = () => {
  const buttonC = document.querySelector('.button__celsius');
  const buttonF = document.querySelector('.button__fahrenheit');
  // f.addEventListener('click', temperatureHandler);
  buttonF.addEventListener('click', () => {
    buttonC.classList.add('inactive');
    buttonF.classList.remove('inactive');
    const buttonFonClick = true;
    console.log('buttonFonClick = ', buttonFonClick);
    return buttonFonClick;
  });

  buttonC.addEventListener('click', () => {
    buttonF.classList.add('inactive');
    buttonC.classList.remove('inactive');
    const buttonFonClick = false;
    console.log('buttonFonClick = ', buttonFonClick);
    return buttonFonClick;
  });

};

// const temperatureHandler = (c, f) => {
//   c.classList.add('inactive');
//   f.classList.remove('inactive');
// };


