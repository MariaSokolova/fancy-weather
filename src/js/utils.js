import dataArray from './data';

import {getGeocode} from './api/getGeocode';

export function getDateTime(offset) {
  const utcMillis = Date.now();
  const date = new Date(utcMillis + offset * 1000);
  const month = dataArray.month[date.getUTCMonth()];
  const weekDay = dataArray.weekShort[date.getUTCDay()];
  const day = date.getUTCDate();

  let h = date.getUTCHours();

  let m = date.getMinutes();
  let s = date.getSeconds();

  h = h < 10 ? `0${h}` : h;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;

  const dateTime = `${weekDay}&nbsp; ${day}&nbsp; ${month} &nbsp;&nbsp;&nbsp;&nbsp;${h}:${m}:${s}`;
  return dateTime;
}

export const locationTransform = (coordinate) => {
  const number = parseFloat(coordinate).toFixed(2);
  const degrees = Math.trunc(number);
  const minutes = number.toString().split('.')[1];
  return `${degrees}&deg;${minutes}&prime;`;

};

export const createItem = (tagName, classNames, text, attr, attrName) => {
  const item = document.createElement(tagName);
  if (classNames) {
    classNames.forEach((el) => item.classList.add(el));
  }
  item.innerHTML = text;
  if (attr === null) {
    return item;
  } else {
    item.setAttribute(attr, attrName);
  }
  return item;
};

export const appendChild = (element, children) => {
  if (children) {
    children.forEach((child) => element.appendChild(child));
  }
  return element;
};

export const toFahrenheit = (val) => {
  if (!val || typeof val !== 'number') {
    throw new Error('Wrong type of temperature')
  }
  return Math.round((val * 9) / 5 + 32);
};


// return input;

// console.log('input.value = ', input.value);



