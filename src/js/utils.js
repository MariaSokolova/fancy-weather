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

