import dataArray from './data';

export function getDateTime() {
  const date = new Date();
  const month = dataArray.month[date.getMonth()];
  const weekDay = dataArray.weekShort[date.getDay()];
  const day = date.getDate();

  let h = date.getHours();
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



  // return input;

  // console.log('input.value = ', input.value);



