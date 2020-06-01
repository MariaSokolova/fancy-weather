export const getLocation = async () => {
  const key = '7c1ed7e9b5b848';
  const base = 'https://ipinfo.io';
  const query = `?token=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();

  const [lat, lon] = data.loc.split(',');
  const city = data.city;
  const country = data.country;

  return {city, country, lat, lon};

  // console.log('dataLocation = ', data);
};

