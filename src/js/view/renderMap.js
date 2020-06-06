const mymap = L.map('mapid');

export const renderMap = (lat, lon) => {

  mymap.setView([lat, lon], 12);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2JtdiIsImEiOiJja2IyNTByMmUwZTFpMnJwajN6bTk5MXRhIn0.C4b1m6yrd8KbG42PknGBng', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
      '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
  }).addTo(mymap);
};

export const flyToMapLocation = (lat, lon) => {
  mymap.flyTo([lat, lon], 12, {  duration: 2 });
};
