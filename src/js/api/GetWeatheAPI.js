const key = 'YuJe4A3QEh4vnxnlt1bwplOGplxdUGGf';
const base = 'https://api.climacell.co/v3/weather';

export const getWeather = async (lat, lon) => {
  const query = `/forecast/daily?lat=${lat}&lon=${lon}&unit_system=si&start_time=now&fields=feels_like%2Ctemp%2Chumidity%2Cwind_speed%2Cweather_code&apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();
  // console.log('data = ', data);
  // const temperatureToday = data[0].temp[0].min.value;
  // console.log('data.temp = ', data[0].temp[0].min.value);


  return data.slice(1,4);
};

export const getCurrentWeather = async (lat, lon) => {
  const query = `/nowcast?lat=${lat}&lon=${lon}&unit_system=si&start_time=now&fields=feels_like%2Ctemp%2Chumidity%2Cwind_speed%2Cweather_code&apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();
  // console.log('data = ', data);
  // const temperatureToday = data[0].temp[0].min.value;
  // console.log('data.temp = ', data[0].temp[0].min.value);


  return data[0];
};




