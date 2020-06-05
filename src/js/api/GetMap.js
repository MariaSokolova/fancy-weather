export const getMap = async (lat, lon) => {
  const query = "https://api.mapbox.com/v4/mapbox.mapbox-streets-v8/1/0/0.mvt?access_token=pk.eyJ1Ijoic2JtdiIsImEiOiJja2IyNTByMmUwZTFpMnJwajN6bTk5MXRhIn0.C4b1m6yrd8KbG42PknGBng"

  const data = await fetch(query);
  console.log('dataMap = ', data);


  return data;
};
