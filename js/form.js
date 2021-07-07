import {getMessageSuccess, getMessageErrorSendData} from './messages.js';
import {sendData} from './server.js';
import {markerMain, map, markerAdGroup} from './map.js';

const form = document.querySelector('.ad-form');
const formAdElements = form.querySelectorAll('fieldset');
const mapFilter = document.querySelector('.map__filters');
const mapFilterElements = mapFilter.querySelectorAll('.map__filter');
const mapFilterFeature = mapFilter.querySelector('.map__features');
const buttonReset = form.querySelector('.ad-form__reset');

const clearPage = () => {
  form.reset();
  mapFilter.reset();
  markerMain.setLatLng({
    lat: 35.652832,
    lng: 139.839478,
  });
  map.setView({
    lat: 35.652832,
    lng: 139.839478,
  }, 10);
  markerAdGroup.clearLayers();
};

buttonReset.addEventListener('click', () => {
  clearPage();
});

const getDisabledForm = () => {
  form.classList.add('ad-form--disabled');
  formAdElements.forEach((elem) => elem.disabled = true);
  mapFilter.classList.add('ad-form--disabled');
  mapFilterElements.forEach((elem) => elem.disabled = true);
  mapFilterFeature.disabled = true;
};

const getActivateForm = () => {
  form.classList.remove('ad-form--disabled');
  formAdElements.forEach((elem) => elem.disabled = false);
  mapFilter.classList.remove('ad-form--disabled');
  mapFilterElements.forEach((elem) => elem.disabled = false);
  mapFilterFeature.disabled = false;
};

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  sendData(
    getMessageSuccess,
    getMessageErrorSendData,
    new FormData(evt.target),
  );
  clearPage();
});

export {getDisabledForm, getActivateForm};
