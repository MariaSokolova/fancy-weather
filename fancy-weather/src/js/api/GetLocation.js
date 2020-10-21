export const getLocation = async () => {
  const defaultData = {
    ip: "87.207.50.60",
    hostname: "87-207-50-60.dynamic.chello.pl",
    city: "Kraków",
    region: "Lesser Poland",
    country: "PL",
    loc: "50.0614,19.9366",
    org: "AS6830 Liberty Global B.V.",
    postal: "04-190",
    timezone: "Europe/Warsaw"
  };

  const key = '7c1ed7e9b5b848';
  const base = 'https://ipinfo.io';
  const query = `?token=${key}`;
  let data;
  try {
    const response = await fetch(base + query);
    data = await response.json();
  } catch (e) {
    data = defaultData;
    const error = document.getElementById('error');
    error.innerText = 'Failed  get current location. Check the AdBlocker. ' +
      'Default location is Krakow, Poland';
  }
  const [lat, lon] = data.loc.split(',');
  const city = data.city;
  const country = data.country;
  const date = new Date();
  const offset = -date.getTimezoneOffset() * 60;
  return { city, country, lat, lon, offset };
};



