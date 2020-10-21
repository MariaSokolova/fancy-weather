export const getGeocode = async (input) => {
  const query = `https://api.opencagedata.com/geocode/v1/json?q=${input}&language=en&key=b9c4c3320b904a8286f96c795db7626f`;
  const data = await fetch(query);
  const jsonData = await data.json();

  console.log('dataGeocode = ', jsonData.results[0]);
  if (!jsonData.results[0]) {
    return {};
  }
  return parseGeocode(jsonData.results[0]);
};

const parseGeocode = (data) => {
  const cityInfo = data.formatted.split(',');
  return {
    city: cityInfo[0],
    country: cityInfo.splice(-1),
    lat: data.geometry.lat,
    lon: data.geometry.lng,
    offset: data.annotations.timezone.offset_sec
  }
};
