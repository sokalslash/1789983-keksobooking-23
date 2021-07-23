import {getMessageSuccess, getMessageError} from './messages.js';
import {sendData} from './server.js';
import {markerMain, map, markerAdGroup} from './map.js';
import {COORDINATES_OF_TOKYO_LAT, COORDINATES_OF_TOKYO_LNG, ZOOM_MAP} from './utils.js';

const PRICE_VALUE = '0';
const formAd = document.querySelector('.ad-form');
const inputPriceFormAd = formAd.querySelector('#price');
const inputCapacitySelectFormAd = formAd.querySelector('#capacity');
const formAdFields = formAd.querySelectorAll('fieldset');
const mapFilter = document.querySelector('.map__filters');
const mapFilterFields = mapFilter.querySelectorAll('.map__filter');
const mapFilterFeature = mapFilter.querySelector('.map__features');
const buttonReset = formAd.querySelector('.ad-form__reset');

const clearPage = () => {
  formAd.reset();
  inputPriceFormAd.placeholder = PRICE_VALUE;
  inputPriceFormAd.min = PRICE_VALUE;
  inputCapacitySelectFormAd.innerHTML = '<option value="1">для 1 гостя</option>';
  mapFilter.reset();
  markerMain.setLatLng({
    lat: COORDINATES_OF_TOKYO_LAT,
    lng: COORDINATES_OF_TOKYO_LNG,
  });
  map.setView({
    lat: COORDINATES_OF_TOKYO_LAT,
    lng: COORDINATES_OF_TOKYO_LNG,
  }, ZOOM_MAP);
  markerAdGroup.clearLayers();
};

buttonReset.addEventListener('click', () => {
  clearPage();
});

const getDisabledForms = () => {
  formAd.classList.add('ad-form--disabled');
  formAdFields.forEach((elem) => elem.disabled = true);
  mapFilter.classList.add('map__filters--disabled');
  mapFilterFields.forEach((elem) => elem.disabled = true);
  mapFilterFeature.disabled = true;
};

const getActivateFormAd = () => {
  formAd.classList.remove('ad-form--disabled');
  formAdFields.forEach((elem) => elem.disabled = false);
};

const getActivateMapFilter = () => {
  mapFilter.classList.remove('map__filters--disabled');
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
