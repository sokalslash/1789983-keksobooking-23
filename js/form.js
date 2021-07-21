import {getMessageSuccess, getMessageError} from './messages.js';
import {sendData} from './server.js';
import {markerMain, map, markerAdGroup} from './map.js';

const COORDINATES_OF_TOKYO_LAT = 35.652832;
const COORDINATES_OF_TOKYO_LNG = 139.839478;
const formAd = document.querySelector('.ad-form');
const formAdFields = formAd.querySelectorAll('fieldset');
const mapFilter = document.querySelector('.map__filters');
const mapFilterFields = mapFilter.querySelectorAll('.map__filter');
const mapFilterFeature = mapFilter.querySelector('.map__features');
const buttonReset = formAd.querySelector('.ad-form__reset');

const clearPage = () => {
  formAd.reset();
  mapFilter.reset();
  markerMain.setLatLng({
    lat: COORDINATES_OF_TOKYO_LAT,
    lng: COORDINATES_OF_TOKYO_LNG,
  });
  map.setView({
    lat: COORDINATES_OF_TOKYO_LAT,
    lng: COORDINATES_OF_TOKYO_LNG,
  }, 10);
  markerAdGroup.clearLayers();
};

buttonReset.addEventListener('click', () => {
  clearPage();
});

const getDisabledForms = () => {
  formAd.classList.add('ad-form--disabled');
  formAdFields.forEach((elem) => elem.disabled = true);
  mapFilter.classList.add('ad-form--disabled');
  mapFilterFields.forEach((elem) => elem.disabled = true);
  mapFilterFeature.disabled = true;
};

const getActivateFormAd = () => {
  formAd.classList.remove('ad-form--disabled');
  formAdFields.forEach((elem) => elem.disabled = false);
};

const getActivateMapFilter = () => {
  mapFilter.classList.remove('ad-form--disabled');
  mapFilterFields.forEach((elem) => elem.disabled = false);
  mapFilterFeature.disabled = false;
};

formAd.addEventListener('submit', (evt) => {
  evt.preventDefault();
  sendData(
    () => {
      getMessageSuccess();
      clearPage();
    },
    getMessageError,
    new FormData(evt.target),
  );
});

const setMapFormFilterClick = (getFilteredArray) => {
  mapFilter.addEventListener('change', (ads) => {
    getFilteredArray(ads);

  });
};

export {getDisabledForms, getActivateFormAd, getActivateMapFilter, setMapFormFilterClick};
