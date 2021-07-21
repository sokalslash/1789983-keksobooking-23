import {getDisabledForms, getActivateFormAd, getActivateMapFilter, setMapFormFilterClick} from'./form.js';
import {createSimilarAd} from './popup.js';
import {getData} from './server.js';
import {getMessageError} from './messages.js';
import {getFilteredAds} from './filter.js';
import {getDebounce} from './utils.js';

const COORDINATES_OF_TOKYO_LAT = 35.652832;
const COORDINATES_OF_TOKYO_LNG = 139.839478;
const map = L.map('map-canvas');
const mainIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});
const markerMain = L.marker(
  {
    lat: COORDINATES_OF_TOKYO_LAT,
    lng: COORDINATES_OF_TOKYO_LNG,
  },
  {
    draggable: true,
    icon: mainIcon,
  },
);
const inputAddress = document.querySelector('#address');
const markerAdGroup = L.layerGroup().addTo(map);
const createMarkerAd = (adData) => {
  const {location} = adData;
  const iconAd = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
  const markerAd = L.marker(
    {
      lat: location.lat,
      lng: location.lng,
    },
    {
      icon: iconAd,
    },
    {
      keepInView: true,
    },
  );
  markerAd.addTo(markerAdGroup);
  markerAd.bindPopup(createSimilarAd(adData));
};

getDisabledForms();

map
  .on('load', () => {
    getActivateFormAd();
    getData((ads) => {
      ads
        .slice(0, 10)
        .forEach((ad) =>createMarkerAd(ad));
      getActivateMapFilter();
      setMapFormFilterClick(getDebounce(() => {
        const arraySimilarAds = getFilteredAds(ads);
        markerAdGroup.clearLayers();
        arraySimilarAds
          .slice(0, 10)
          .forEach((ad) => createMarkerAd(ad));
      }));
    },
    getMessageError,
    );
  })
  .setView({
    lat: COORDINATES_OF_TOKYO_LAT,
    lng: COORDINATES_OF_TOKYO_LNG,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

markerMain.addTo(map);
markerMain.on('moveend', (evt) => {
  const latLng = evt.target.getLatLng();
  inputAddress.value = `${latLng.lat.toFixed(5)}, ${latLng.lng.toFixed(5)}`;
});

export {markerMain, map, markerAdGroup};
