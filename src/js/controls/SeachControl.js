import {getGeocode} from "../api/getGeocode";
import {getCurrentWeather, getWeather} from "../api/GetWeatheAPI";

import {renderLocation} from "../view/renderLocation";
import {flyToMapLocation} from "../view/renderMap";
import {getDateTime} from "../utils";

export class SearchControl {
  constructor(weatherDom) {
    this.weatherDom = weatherDom;
    this.searchLocationInit();
  }

  searchLocationInit() {
    const self = this;
    const searchButton = document.getElementById('search');
    searchButton.addEventListener('click', () => {
      self.handler();
    });
    const input = document.getElementById("city");
    input.addEventListener("keyup", function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        self.handler();
      }
    })
  };

  getInputValue() {
    return document.getElementById('city').value;
  };

  handler() {
    const cityName = this.getInputValue();
    const divMessage = document.getElementById('error');
    if (cityName === '') {
      divMessage.innerText = 'input correct City';
      return;
    }
    divMessage.innerText = '';
    this.renderNewWeather(cityName);
  };

  async renderNewWeather(cityName) {
    const { city, country, lat, lon, offset } = await getGeocode(cityName);
    console.log('offset = ', offset);

    const weather = await getWeather(lat, lon);
    const current = await getCurrentWeather(lat, lon);
    console.log('weather = ', weather);
    this.weatherDom.updateWeather(weather, current, city, country, offset);
    getDateTime(offset);
    renderLocation(lat, lon);
    flyToMapLocation(lat, lon);
  };
}
