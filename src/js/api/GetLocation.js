export const getLocation = async () => {
  const key = '7c1ed7e9b5b848';
  const base = 'https://ipinfo.io';
  const query = `?token=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();
  console.log('data weather =', data);



  const [lat, lon] = data.loc.split(',');
  const city = data.city;
  const country = data.country;
  // console.log('[lat, lon] =', [lat, lon]);
  // console.log('lat =', typeof lat);
  const date = new Date();
  const offset = - date.getTimezoneOffset() * 60;
  console.log('offset =', offset);


  return {city, country, lat, lon, offset};
};



