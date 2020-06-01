
export const getWeather = async (lat, lon) => {
  const key = 'YuJe4A3QEh4vnxnlt1bwplOGplxdUGGf';
  const base = 'https://api.climacell.co/v3/weather/forecast/daily';
  const query = `?lat=${lat}&lon=${lon}&unit_system=si&start_time=now&fields=feels_like%2Ctemp%2Chumidity%2Cwind_speed%2Cweather_code&apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();
  console.log('data = ', data[0]);

  // return data[0];
};




