/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/style.scss?");

/***/ }),

/***/ "./src/js/api/GetLocation.js":
/*!***********************************!*\
  !*** ./src/js/api/GetLocation.js ***!
  \***********************************/
/*! exports provided: getLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLocation\", function() { return getLocation; });\nconst getLocation = async () => {\r\n  const key = '7c1ed7e9b5b848';\r\n  const base = 'https://ipinfo.io';\r\n  const query = `?token=${key}`;\r\n\r\n  const response = await fetch(base + query);\r\n  const data = await response.json();\r\n\r\n  const [lat, lon] = data.loc.split(',');\r\n  const city = data.city;\r\n  const country = data.country;\r\n  const date = new Date();\r\n  const offset = - date.getTimezoneOffset() * 60;\r\n\r\n  return {city, country, lat, lon, offset};\r\n};\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/api/GetLocation.js?");

/***/ }),

/***/ "./src/js/api/GetWeatheAPI.js":
/*!************************************!*\
  !*** ./src/js/api/GetWeatheAPI.js ***!
  \************************************/
/*! exports provided: getWeather, getCurrentWeather */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getWeather\", function() { return getWeather; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCurrentWeather\", function() { return getCurrentWeather; });\nconst key = 'YuJe4A3QEh4vnxnlt1bwplOGplxdUGGf';\r\nconst base = 'https://api.climacell.co/v3/weather';\r\n\r\nconst getWeather = async (lat, lon) => {\r\n  const query = `/forecast/daily?lat=${lat}&lon=${lon}&unit_system=si&start_time=now&fields=feels_like%2Ctemp%2Chumidity%2Cwind_speed%2Cweather_code&apikey=${key}`;\r\n\r\n  const response = await fetch(base + query);\r\n  const data = await response.json();\r\n  return data.slice(1,4);\r\n};\r\n\r\nconst getCurrentWeather = async (lat, lon) => {\r\n  const query = `/nowcast?lat=${lat}&lon=${lon}&unit_system=si&start_time=now&fields=feels_like%2Ctemp%2Chumidity%2Cwind_speed%2Cweather_code&apikey=${key}`;\r\n\r\n  const response = await fetch(base + query);\r\n  const data = await response.json();\r\n  return data[0];\r\n};\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/api/GetWeatheAPI.js?");

/***/ }),

/***/ "./src/js/api/getGeocode.js":
/*!**********************************!*\
  !*** ./src/js/api/getGeocode.js ***!
  \**********************************/
/*! exports provided: getGeocode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getGeocode\", function() { return getGeocode; });\nconst getGeocode = async (input) => {\r\n  const query = `https://api.opencagedata.com/geocode/v1/json?q=${input}&language=en&key=b9c4c3320b904a8286f96c795db7626f`;\r\n  const data = await fetch(query);\r\n  const jsonData = await data.json();\r\n\r\n  if (!jsonData.results[0]) {\r\n    return {};\r\n  }\r\n  return parseGeocode(jsonData.results[0]);\r\n};\r\n\r\nconst parseGeocode = (data) => {\r\n  const cityInfo = data.formatted.split(',');\r\n\r\n  return {\r\n    city: cityInfo[0],\r\n    country: cityInfo.splice(-1),\r\n    lat: data.geometry.lat,\r\n    lon: data.geometry.lng,\r\n    offset: data.annotations.timezone.offset_sec\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/js/api/getGeocode.js?");

/***/ }),

/***/ "./src/js/api/imageAPI.js":
/*!********************************!*\
  !*** ./src/js/api/imageAPI.js ***!
  \********************************/
/*! exports provided: getImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getImage\", function() { return getImage; });\nconst getImage = async () => {\r\n  const query = `https://api.unsplash.com/search/photos?page=1&per_page=30&query=sunny,rain,cloudy&orientation=landscape&client_id=IXWfM1KqKPXoKgwV0v0ekl695muYlQy-9W5xRjFbEkQ`;\r\n  const response = await fetch(query);\r\n  const data = await response.json();\r\n  const randomIndex = Math.floor(Math.random() * 30);\r\n\r\n  return  data.results[randomIndex].urls.regular;\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/api/imageAPI.js?");

/***/ }),

/***/ "./src/js/controls/SeachControl.js":
/*!*****************************************!*\
  !*** ./src/js/controls/SeachControl.js ***!
  \*****************************************/
/*! exports provided: SearchControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SearchControl\", function() { return SearchControl; });\n/* harmony import */ var _api_getGeocode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/getGeocode */ \"./src/js/api/getGeocode.js\");\n/* harmony import */ var _api_GetWeatheAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/GetWeatheAPI */ \"./src/js/api/GetWeatheAPI.js\");\n/* harmony import */ var _view_renderLocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/renderLocation */ \"./src/js/view/renderLocation.js\");\n/* harmony import */ var _view_renderMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/renderMap */ \"./src/js/view/renderMap.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ \"./src/js/utils.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass SearchControl {\r\n  constructor(weatherDom) {\r\n    this.weatherDom = weatherDom;\r\n    this.searchLocationInit();\r\n    this.divMessage = document.getElementById('error');\r\n  }\r\n\r\n  searchLocationInit() {\r\n    const self = this;\r\n    const searchButton = document.getElementById('search');\r\n    searchButton.addEventListener('click', () => {\r\n      self.handler();\r\n    });\r\n    const input = document.getElementById(\"city\");\r\n    input.addEventListener(\"keyup\", function (event) {\r\n      if (event.key === 'Enter') {\r\n        event.preventDefault();\r\n        self.handler();\r\n      }\r\n    })\r\n  };\r\n\r\n  getInputValue() {\r\n    return document.getElementById('city').value;\r\n  };\r\n\r\n  async handler() {\r\n    const cityName = this.getInputValue();\r\n    if (cityName === '') {\r\n      this.divMessage.innerText = 'Please, input correct City';\r\n      return;\r\n    }\r\n    this.divMessage.innerText = '';\r\n    try {\r\n      await this.renderNewWeather(cityName);\r\n    } catch (e) {\r\n      this.divMessage.innerText = 'Error. Please refresh the page';\r\n    }\r\n  };\r\n\r\n  async renderNewWeather(cityName) {\r\n    const { city, country, lat, lon, offset } = await Object(_api_getGeocode__WEBPACK_IMPORTED_MODULE_0__[\"getGeocode\"])(cityName);\r\n    if (!city) {\r\n      this.divMessage.innerText = 'Please, input correct City';\r\n      return;\r\n    }\r\n\r\n    const weather = await Object(_api_GetWeatheAPI__WEBPACK_IMPORTED_MODULE_1__[\"getWeather\"])(lat, lon);\r\n    const current = await Object(_api_GetWeatheAPI__WEBPACK_IMPORTED_MODULE_1__[\"getCurrentWeather\"])(lat, lon);\r\n    this.weatherDom.updateWeather(weather, current, city, country, offset);\r\n    Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"getDateTime\"])(offset);\r\n    Object(_view_renderLocation__WEBPACK_IMPORTED_MODULE_2__[\"renderLocation\"])(lat, lon);\r\n    Object(_view_renderMap__WEBPACK_IMPORTED_MODULE_3__[\"flyToMapLocation\"])(lat, lon);\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/controls/SeachControl.js?");

/***/ }),

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst dataArray = {\r\n  week: [\r\n    'Sunday',\r\n    'Monday',\r\n    'Tuesday',\r\n    'Wednesday',\r\n    'Thursday',\r\n    'Friday',\r\n    'Saturday'\r\n  ],\r\n  weekShort: [\r\n    'Sun',\r\n    'Mon',\r\n    'Tue',\r\n    'Wed',\r\n    'Thur',\r\n    'Fri',\r\n    'Sat'\r\n  ],\r\n  month: [\r\n    'January',\r\n    'February',\r\n    'March',\r\n    'April',\r\n    'May',\r\n    'June',\r\n    'July',\r\n    'August',\r\n    'September',\r\n    'October',\r\n    'November',\r\n    'December'\r\n  ]\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (dataArray);\r\n\n\n//# sourceURL=webpack:///./src/js/data.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.scss */ \"./src/css/style.scss\");\n/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_GetWeatheAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/GetWeatheAPI */ \"./src/js/api/GetWeatheAPI.js\");\n/* harmony import */ var _api_GetLocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/GetLocation */ \"./src/js/api/GetLocation.js\");\n/* harmony import */ var _api_imageAPI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/imageAPI */ \"./src/js/api/imageAPI.js\");\n/* harmony import */ var _view_Weather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/Weather */ \"./src/js/view/Weather.js\");\n/* harmony import */ var _view_renderMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/renderMap */ \"./src/js/view/renderMap.js\");\n/* harmony import */ var _view_renderBackground__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/renderBackground */ \"./src/js/view/renderBackground.js\");\n/* harmony import */ var _view_renderLocation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/renderLocation */ \"./src/js/view/renderLocation.js\");\n/* harmony import */ var _controls_SeachControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controls/SeachControl */ \"./src/js/controls/SeachControl.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nasync function init() {\r\n  const weatherDom = new _view_Weather__WEBPACK_IMPORTED_MODULE_4__[\"Weather\"]();\r\n  const searchControl = new _controls_SeachControl__WEBPACK_IMPORTED_MODULE_8__[\"SearchControl\"](weatherDom);\r\n  await renderCurrentLocationWeather(weatherDom);\r\n}\r\n\r\nconst renderCurrentLocationWeather = async (weatherDom) => {\r\n  const { city, country, lat, lon, offset } = await Object(_api_GetLocation__WEBPACK_IMPORTED_MODULE_2__[\"getLocation\"])();\r\n  const weather = await Object(_api_GetWeatheAPI__WEBPACK_IMPORTED_MODULE_1__[\"getWeather\"])(lat, lon);\r\n  const current = await Object(_api_GetWeatheAPI__WEBPACK_IMPORTED_MODULE_1__[\"getCurrentWeather\"])(lat, lon);\r\n  const imgUrl = await Object(_api_imageAPI__WEBPACK_IMPORTED_MODULE_3__[\"getImage\"])();\r\n  Object(_view_renderBackground__WEBPACK_IMPORTED_MODULE_6__[\"renderImage\"])(imgUrl);\r\n  weatherDom.updateWeather(weather, current, city, country, offset);\r\n  Object(_utils__WEBPACK_IMPORTED_MODULE_9__[\"getDateTime\"])(offset);\r\n  Object(_view_renderLocation__WEBPACK_IMPORTED_MODULE_7__[\"renderLocation\"])(lat, lon);\r\n  Object(_view_renderMap__WEBPACK_IMPORTED_MODULE_5__[\"renderMap\"])(lat, lon);\r\n  Object(_view_renderBackground__WEBPACK_IMPORTED_MODULE_6__[\"reloadImage\"])();\r\n};\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  init();\r\n});\r\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: getDateTime, locationTransform, createItem, appendChild */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDateTime\", function() { return getDateTime; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"locationTransform\", function() { return locationTransform; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createItem\", function() { return createItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appendChild\", function() { return appendChild; });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/js/data.js\");\n\r\n\r\nfunction getDateTime(offset) {\r\n  const utcMillis = Date.now();\r\n  const date = new Date(utcMillis + offset * 1000);\r\n  const month = _data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].month[date.getUTCMonth()];\r\n  const weekDay = _data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].weekShort[date.getUTCDay()];\r\n  const day = date.getUTCDate();\r\n\r\n  let h = date.getUTCHours();\r\n\r\n  let m = date.getMinutes();\r\n  let s = date.getSeconds();\r\n\r\n  h = h < 10 ? `0${h}` : h;\r\n  m = m < 10 ? `0${m}` : m;\r\n  s = s < 10 ? `0${s}` : s;\r\n\r\n  const dateTime = `${weekDay}&nbsp; ${day}&nbsp; ${month} &nbsp;&nbsp;&nbsp;&nbsp;${h}:${m}:${s}`;\r\n  return dateTime;\r\n}\r\n\r\nconst locationTransform = (coordinate) => {\r\n  const number = parseFloat(coordinate).toFixed(2);\r\n  const degrees = Math.trunc(number);\r\n  const minutes = number.toString().split('.')[1];\r\n  return `${degrees}&deg;${minutes}&prime;`;\r\n\r\n};\r\n\r\nconst createItem = (tagName, classNames, text, attr, attrName) => {\r\n  const item = document.createElement(tagName);\r\n  if (classNames) {\r\n    classNames.forEach((el) => item.classList.add(el));\r\n  }\r\n  item.innerHTML = text;\r\n  if (attr === null) {\r\n    return item;\r\n  } else {\r\n    item.setAttribute(attr, attrName);\r\n  }\r\n  return item;\r\n};\r\n\r\nconst appendChild = (element, children) => {\r\n  if (children) {\r\n    children.forEach((child) => element.appendChild(child));\r\n  }\r\n  return element;\r\n};\r\n\n\n//# sourceURL=webpack:///./src/js/utils.js?");

/***/ }),

/***/ "./src/js/view/Weather.js":
/*!********************************!*\
  !*** ./src/js/view/Weather.js ***!
  \********************************/
/*! exports provided: Weather */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Weather\", function() { return Weather; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/js/utils.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data */ \"./src/js/data.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass Weather {\r\n  constructor() {\r\n    this.temperatureUnits = 'Celsius';\r\n    this.initUnitButtonHandler();\r\n  }\r\n\r\n  updateWeather(weather, current, city, country, offset) {\r\n    this.weather = weather;\r\n    this.current = current;\r\n    this.city = city;\r\n    this.country = country;\r\n    this.offset = offset;\r\n\r\n    this.renderWeather();\r\n  }\r\n\r\n  renderWeather() {\r\n    this.createTodayWeather(this.current, this.city, this.country, this.offset);\r\n    this.createFutureWeather(this.weather);\r\n  };\r\n\r\n  createTodayWeather(current, city, country, offset) {\r\n    const temp = Math.floor(this.getTemperature(current.temp.value));\r\n\r\n    const speed = Math.floor(current.wind_speed.value);\r\n    const humidity = Math.floor(current.humidity.value);\r\n    const feelsLike = Math.floor(current.feels_like.value);\r\n    const img = current.weather_code.value;\r\n    const imgName = current.weather_code.value.replace(/_/, ' ');\r\n    const currentTime = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"getDateTime\"])(offset);\r\n\r\n    const weatherCity = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"createItem\"])('div', ['weather__city'], `${city}, ${country}`, null, null);\r\n    const weatherDate = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"createItem\"])('div', ['weather__date'], currentTime, null, null);\r\n    const weatherToday = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"createItem\"])('div', ['weather__today', 'today'], null, null, null);\r\n\r\n    const weatherContainer = document.querySelector('.weather__container');\r\n    weatherContainer.innerHTML = '';\r\n    weatherContainer.appendChild(weatherCity);\r\n    weatherContainer.appendChild(weatherDate);\r\n    weatherContainer.appendChild(weatherToday);\r\n\r\n    const todayTemperature = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"createItem\"])('div', ['today__temperature'], `${temp}&deg;`, null, null);\r\n    let todayImg = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"createItem\"])('div', ['today__img', `${img}`], null, null, null);\r\n\r\n    const descriptionContainer = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"createItem\"])('div', ['today__description'], null, null);\r\n\r\n    const descriptionCode = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"createItem\"])('div', ['today__description-prop'], `${imgName}`, null, null);\r\n    const descriptionFeels = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"createItem\"])('div', ['today__description-prop'], `Feels&nbsp;like:&nbsp;${feelsLike}&deg;`, null, null);\r\n    const descriptionWind = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"createItem\"])('div', ['today__description-prop'], `Wind:&nbsp;${speed}&nbsp;m/s`, null, null);\r\n    const descriptionHumidity = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"createItem\"])('div', ['today__description-prop'], `Humidity:&nbsp;${humidity}%`, null, null);\r\n\r\n    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"appendChild\"])(weatherToday, [todayTemperature, todayImg, descriptionContainer]);\r\n    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"appendChild\"])(descriptionContainer, [descriptionCode, descriptionFeels, descriptionWind, descriptionHumidity]);\r\n\r\n    const divWeatherDate = document.querySelector('.weather__date');\r\n    setInterval(() => {\r\n      divWeatherDate.innerHTML = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"getDateTime\"])(offset);\r\n    }, 1000)\r\n  };\r\n\r\n  createFutureWeather(weather) {\r\n    const threeDaysForecast = this.extractFutureWeather(weather);\r\n    const threeDaysForecastDivs = threeDaysForecast.map((dayWeather) => this.createFutureDayBlock(dayWeather));\r\n\r\n    let futureWeather = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"createItem\"])('div', ['weather__future', 'future'], null, null, null);\r\n    futureWeather = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"appendChild\"])(futureWeather, threeDaysForecastDivs);\r\n    document.querySelector('.weather__container').appendChild(futureWeather);\r\n  };\r\n\r\n  getWeekDay(dateStr) {\r\n    let date = new Date(dateStr);\r\n    return _data__WEBPACK_IMPORTED_MODULE_1__[\"default\"].week[date.getDay()];\r\n  };\r\n\r\n  extractFutureWeather(weather) {\r\n    return weather.map((dayData) => ({\r\n      temperature: Math.floor(this.getTemperature(dayData.temp[1].max.value)),\r\n      weekDay: this.getWeekDay(dayData.observation_time.value),\r\n      weatherCode: dayData.weather_code.value\r\n    }))\r\n  };\r\n\r\n  createFutureDayBlock(dayWeather) {\r\n    const day = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"createItem\"])('div', ['future'], null, null, null);\r\n    const dayOfWeek = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"createItem\"])('div', ['future__day'], `${dayWeather.weekDay}`, null, null);\r\n    const dayTemperature = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"createItem\"])('div', ['future__temperature'], `${dayWeather.temperature}&deg;`, null, null);\r\n    const weatherIcon = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"createItem\"])('div', ['future__img', `${dayWeather.weatherCode}`], null, 'alt', 'icon weather');\r\n    return Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"appendChild\"])(day, [dayOfWeek, dayTemperature, weatherIcon]);\r\n  };\r\n\r\n  initUnitButtonHandler() {\r\n    const buttonC = document.querySelector('.button__celsius');\r\n    const buttonF = document.querySelector('.button__fahrenheit');\r\n    buttonF.addEventListener('click', () => {\r\n      buttonC.classList.add('inactive');\r\n      buttonF.classList.remove('inactive');\r\n      this.temperatureUnits = 'Fahrenheit';\r\n      this.renderWeather();\r\n    });\r\n\r\n    buttonC.addEventListener('click', () => {\r\n      buttonF.classList.add('inactive');\r\n      buttonC.classList.remove('inactive');\r\n      this.temperatureUnits = 'Celsius';\r\n      this.renderWeather();\r\n    });\r\n  };\r\n\r\n  getTemperature(temp) {\r\n    if(this.temperatureUnits === 'Fahrenheit') {\r\n      return this.toFahrenheit(temp);\r\n    }\r\n    return temp;\r\n  }\r\n\r\n  toFahrenheit(temp) {\r\n    return Math.round((temp * 9) / 5 + 32);\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/view/Weather.js?");

/***/ }),

/***/ "./src/js/view/renderBackground.js":
/*!*****************************************!*\
  !*** ./src/js/view/renderBackground.js ***!
  \*****************************************/
/*! exports provided: renderImage, reloadImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderImage\", function() { return renderImage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reloadImage\", function() { return reloadImage; });\n/* harmony import */ var _api_imageAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/imageAPI */ \"./src/js/api/imageAPI.js\");\n\r\n\r\nconst renderImage = (imgUrl) => {\r\n  const background = document.getElementById('bg');\r\n  background.setAttribute ('style', `background:url('${imgUrl}') center no-repeat; background-size: cover;`);\r\n};\r\n\r\nconst reloadImage = () => {\r\n  const refreshButton = document.querySelector('.dashboard__refresh');\r\n  refreshButton.addEventListener('click', changeImage);\r\n};\r\n\r\nconst changeImage = async () => {\r\n  startAnimation();\r\n  const imgUrl = await Object(_api_imageAPI__WEBPACK_IMPORTED_MODULE_0__[\"getImage\"])();\r\n  renderImage(imgUrl);\r\n  setTimeout(() => {\r\n    stopAnimation()\r\n  }, 2000);\r\n};\r\n\r\nconst startAnimation = () => {\r\n  const spin = document.querySelector('.spinner');\r\n  spin.classList.add('spinner__active');\r\n};\r\n\r\nconst stopAnimation = () => {\r\n  const spin = document.querySelector('.spinner');\r\n  spin.classList.remove('spinner__active');\r\n};\r\n\n\n//# sourceURL=webpack:///./src/js/view/renderBackground.js?");

/***/ }),

/***/ "./src/js/view/renderLocation.js":
/*!***************************************!*\
  !*** ./src/js/view/renderLocation.js ***!
  \***************************************/
/*! exports provided: renderLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderLocation\", function() { return renderLocation; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/js/utils.js\");\n\r\n\r\nconst renderLocation = (lat, lon) => {\r\n  const latValue = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"locationTransform\"])(lat);\r\n  const lonValue = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"locationTransform\"])(lon);\r\n\r\n  document.querySelector('.map__lat').innerHTML = `Latitude:&nbsp;${latValue}&prime;`;\r\n  document.querySelector('.map__lon').innerHTML = `Longitude:&nbsp;${lonValue}&prime;`;\r\n};\r\n\n\n//# sourceURL=webpack:///./src/js/view/renderLocation.js?");

/***/ }),

/***/ "./src/js/view/renderMap.js":
/*!**********************************!*\
  !*** ./src/js/view/renderMap.js ***!
  \**********************************/
/*! exports provided: renderMap, flyToMapLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderMap\", function() { return renderMap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"flyToMapLocation\", function() { return flyToMapLocation; });\nconst mapDiv =\r\n  `<div id=\"mapid\" class=\"map__view leaflet-container leaflet-fade-anim leaflet-grab leaflet-touch-drag\" tabindex=\"0\">\r\n                        <div class=\"leaflet-pane leaflet-map-pane\" style=\"transform: translate3d(0px, 0px, 0px);\">\r\n                            <div class=\"leaflet-pane leaflet-tile-pane\">\r\n                                <div class=\"leaflet-layer \" style=\"z-index: 1; opacity: 1;\">\r\n                                    <div class=\"leaflet-tile-container leaflet-zoom-animated\"\r\n                                         style=\"z-index: 18; transform: translate3d(0px, 0px, 0px) scale(1);\">\r\n                                        <img alt=\"\"\r\n                                             role=\"presentation\"\r\n                                             src=\"https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/12/2046/1361?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw\"\r\n                                             class=\"leaflet-tile leaflet-tile-loaded\"\r\n                                             style=\"width: 512px; height: 512px; transform: translate3d(-200px, -347px, 0px); opacity: 1;\">\r\n                                        <img\r\n                                                alt=\"\" role=\"presentation\"\r\n                                                src=\"https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/12/2047/1361?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw\"\r\n                                                class=\"leaflet-tile leaflet-tile-loaded\"\r\n                                                style=\"width: 512px; height: 512px; transform: translate3d(312px, -347px, 0px); opacity: 1;\"><img\r\n                                            alt=\"\" role=\"presentation\"\r\n                                            src=\"https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/12/2046/1362?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw\"\r\n                                            class=\"leaflet-tile leaflet-tile-loaded\"\r\n                                            style=\"width: 512px; height: 512px; transform: translate3d(-200px, 165px, 0px); opacity: 1;\"><img\r\n                                            alt=\"\" role=\"presentation\"\r\n                                            src=\"https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/12/2047/1362?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw\"\r\n                                            class=\"leaflet-tile leaflet-tile-loaded\"\r\n                                            style=\"width: 512px; height: 512px; transform: translate3d(312px, 165px, 0px); opacity: 1;\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"leaflet-pane leaflet-shadow-pane\"></div>\r\n                            <div class=\"leaflet-pane leaflet-overlay-pane\"></div>\r\n                            <div class=\"leaflet-pane leaflet-marker-pane\"></div>\r\n                            <div class=\"leaflet-pane leaflet-tooltip-pane\"></div>\r\n                            <div class=\"leaflet-pane leaflet-popup-pane\"></div>\r\n                            <div class=\"leaflet-proxy leaflet-zoom-animated\"\r\n                                 style=\"transform: translate3d(1.04805e+06px, 697379px, 0px) scale(4096);\"></div>\r\n                        </div>\r\n                        <div class=\"leaflet-control-container\">\r\n                            <div class=\"leaflet-top leaflet-left\">\r\n                                <div class=\"leaflet-control-zoom leaflet-bar leaflet-control\"><a\r\n                                        class=\"leaflet-control-zoom-in\"\r\n                                        href=\"#\" title=\"Zoom in\"\r\n                                        role=\"button\"\r\n                                        aria-label=\"Zoom in\">+</a><a\r\n                                        class=\"leaflet-control-zoom-out\" href=\"#\" title=\"Zoom out\" role=\"button\"\r\n                                        aria-label=\"Zoom out\">−</a></div>\r\n                            </div>\r\n                            <div class=\"leaflet-top leaflet-right\"></div>\r\n                            <div class=\"leaflet-bottom leaflet-left\"></div>\r\n                            <div class=\"leaflet-bottom leaflet-right\">\r\n                                <div class=\"leaflet-control-attribution leaflet-control\"><a href=\"https://leafletjs.com\"\r\n                                                                                            title=\"A JS library for interactive maps\">Leaflet</a>\r\n                                    | Map data © <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a\r\n                                            href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery ©\r\n                                    <a\r\n                                            href=\"https://www.mapbox.com/\">Mapbox</a></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"map__coordinates\">\r\n                        <div class=\"map__lat\"></div>\r\n                        <div class=\"map__lon\"></div>\r\n                    </div>`;\r\n\r\ndocument.querySelector('.map').innerHTML = mapDiv;\r\n\r\nconst mymap = L.map('mapid');\r\n\r\nconst renderMap = (lat, lon) => {\r\n\r\n  mymap.setView([lat, lon], 12);\r\n\r\n  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2JtdiIsImEiOiJja2IyNTByMmUwZTFpMnJwajN6bTk5MXRhIn0.C4b1m6yrd8KbG42PknGBng', {\r\n    maxZoom: 18,\r\n    attribution: 'Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, ' +\r\n      '<a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, ' +\r\n      'Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>',\r\n    id: 'mapbox/streets-v11',\r\n    tileSize: 512,\r\n    zoomOffset: -1\r\n  }).addTo(mymap);\r\n};\r\n\r\nconst flyToMapLocation = (lat, lon) => {\r\n  mymap.flyTo([lat, lon], 12, { duration: 2 });\r\n};\r\n\n\n//# sourceURL=webpack:///./src/js/view/renderMap.js?");

/***/ })

/******/ });