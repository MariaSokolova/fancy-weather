

export  const getGeocode =  async (input) => {
  const query = `https://api.opencagedata.com/geocode/v1/json?q=${input}&language=en&key=b9c4c3320b904a8286f96c795db7626f`;
  const data = await fetch(query);
  const jsonData = await data.json();
  // console.log('dataGeocodeData = ', jsonData);

  console.log('dataGeocode = ', jsonData.results[0]);

  return parseGeocode(jsonData.results[0]);
};

const parseGeocode = (data) => {
  const cityInfo = data.formatted.split(',');

  console.log('type ', typeof data.annotations.timezone.offset_sec);
  return {
    city: cityInfo[0],
    country: cityInfo.splice(-1),
    lat: data.geometry.lat,
    lon: data.geometry.lng,
    offset: data.annotations.timezone.offset_sec
  }
};



// formatted: "Minsk, Belarus"
// geometry:
//   lat: 53.902334
// lng: 27.5618791
