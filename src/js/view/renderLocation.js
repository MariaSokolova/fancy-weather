import {locationTransform } from '../utils';


export const renderLocation = (lat, lon) => {

  const latValue = locationTransform(lat);
  console.log('latValue=', latValue);
  const lonValue = locationTransform(lon);

  document.querySelector('.map__lat').innerHTML = `Latitude:&nbsp;${latValue}&prime;`;
  document.querySelector('.map__lon').innerHTML = `Longitude:&nbsp;${lonValue}&prime;`;
};

