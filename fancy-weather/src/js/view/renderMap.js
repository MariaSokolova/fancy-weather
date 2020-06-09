const mapDiv =
  `<div id="mapid" class="map__view leaflet-container leaflet-fade-anim leaflet-grab leaflet-touch-drag" tabindex="0">
                        <div class="leaflet-pane leaflet-map-pane" style="transform: translate3d(0px, 0px, 0px);">
                            <div class="leaflet-pane leaflet-tile-pane">
                                <div class="leaflet-layer " style="z-index: 1; opacity: 1;">
                                    <div class="leaflet-tile-container leaflet-zoom-animated"
                                         style="z-index: 18; transform: translate3d(0px, 0px, 0px) scale(1);">
                                        <img alt=""
                                             role="presentation"
                                             src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/12/2046/1361?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
                                             class="leaflet-tile leaflet-tile-loaded"
                                             style="width: 512px; height: 512px; transform: translate3d(-200px, -347px, 0px); opacity: 1;">
                                        <img
                                                alt="" role="presentation"
                                                src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/12/2047/1361?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
                                                class="leaflet-tile leaflet-tile-loaded"
                                                style="width: 512px; height: 512px; transform: translate3d(312px, -347px, 0px); opacity: 1;"><img
                                            alt="" role="presentation"
                                            src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/12/2046/1362?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
                                            class="leaflet-tile leaflet-tile-loaded"
                                            style="width: 512px; height: 512px; transform: translate3d(-200px, 165px, 0px); opacity: 1;"><img
                                            alt="" role="presentation"
                                            src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/12/2047/1362?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
                                            class="leaflet-tile leaflet-tile-loaded"
                                            style="width: 512px; height: 512px; transform: translate3d(312px, 165px, 0px); opacity: 1;">
                                    </div>
                                </div>
                            </div>
                            <div class="leaflet-pane leaflet-shadow-pane"></div>
                            <div class="leaflet-pane leaflet-overlay-pane"></div>
                            <div class="leaflet-pane leaflet-marker-pane"></div>
                            <div class="leaflet-pane leaflet-tooltip-pane"></div>
                            <div class="leaflet-pane leaflet-popup-pane"></div>
                            <div class="leaflet-proxy leaflet-zoom-animated"
                                 style="transform: translate3d(1.04805e+06px, 697379px, 0px) scale(4096);"></div>
                        </div>
                        <div class="leaflet-control-container">
                            <div class="leaflet-top leaflet-left">
                                <div class="leaflet-control-zoom leaflet-bar leaflet-control"><a
                                        class="leaflet-control-zoom-in"
                                        href="#" title="Zoom in"
                                        role="button"
                                        aria-label="Zoom in">+</a><a
                                        class="leaflet-control-zoom-out" href="#" title="Zoom out" role="button"
                                        aria-label="Zoom out">−</a></div>
                            </div>
                            <div class="leaflet-top leaflet-right"></div>
                            <div class="leaflet-bottom leaflet-left"></div>
                            <div class="leaflet-bottom leaflet-right">
                                <div class="leaflet-control-attribution leaflet-control"><a href="https://leafletjs.com"
                                                                                            title="A JS library for interactive maps">Leaflet</a>
                                    | Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a
                                            href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery ©
                                    <a
                                            href="https://www.mapbox.com/">Mapbox</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="map__coordinates">
                        <div class="map__lat"></div>
                        <div class="map__lon"></div>
                    </div>`;

document.querySelector('.map').innerHTML = mapDiv;

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
  mymap.flyTo([lat, lon], 12, { duration: 2 });
};
