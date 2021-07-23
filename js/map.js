import {getDisabledForms, getActivateFormAd, getActivateMapFilter, setMapFormFilterClick} from'./form.js';
import {createSimilarAd} from './popup.js';
import {getData} from './server.js';
import {getMessageError} from './messages.js';
import {getFilteredAds} from './filter.js';
import {getDebounce, COORDINATES_OF_TOKYO_LAT, COORDINATES_OF_TOKYO_LNG, ZOOM_MAP} from './utils.js';

const MARKER_COUNT = 10;
const DECIMAL_PLACES = 5;
const MAIN_ICON_SIZE_HEIGHT = 52;
const MAIN_ICON_SIZE_WIDHT = 52;
const MAIN_ICON_ANCHOR_HEIGHT = 52;
const MAIN_ICON_ANCHOR_WIDHT = 26;
const AD_ICON_SIZE_HEIGHT = 40;
const AD_ICON_SIZE_WIDH = 40;
const AD_ICON_ANCHOR_HEIGHT = 40;
const AD_ICON_ANCHOR_WIDHT = 20;

const map = L.map('map-canvas');
const mainIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [MAIN_ICON_SIZE_HEIGHT, MAIN_ICON_SIZE_WIDHT],
  iconAnchor: [MAIN_ICON_ANCHOR_WIDHT, MAIN_ICON_ANCHOR_HEIGHT],
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
    iconSize: [AD_ICON_SIZE_HEIGHT, AD_ICON_SIZE_WIDH],
    iconAnchor: [AD_ICON_ANCHOR_WIDHT, AD_ICON_ANCHOR_HEIGHT],
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
        .slice(0, MARKER_COUNT)
        .forEach((ad) => createMarkerAd(ad));
      getActivateMapFilter();
      setMapFormFilterClick(getDebounce(() => {
        const arraySimilarAds = getFilteredAds(ads);
        markerAdGroup.clearLayers();
        arraySimilarAds
          .slice(0, MARKER_COUNT)
          .forEach((ad) => createMarkerAd(ad));
      }));
    },
    getMessageError,
    );
  })
  .setView({
    lat: COORDINATES_OF_TOKYO_LAT,
    lng: COORDINATES_OF_TOKYO_LNG,
  }, ZOOM_MAP);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

markerMain.addTo(map);
markerMain.on('moveend', (evt) => {
  const latLng = evt.target.getLatLng();
  inputAddress.value = `${latLng.lat.toFixed(DECIMAL_PLACES)}, ${latLng.lng.toFixed(DECIMAL_PLACES)}`;
});

export {markerMain, map, markerAdGroup};
