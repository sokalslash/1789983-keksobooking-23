import {getMessageSuccess, getMessageError} from './messages.js';
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

const getDisabledForms = () => {
  form.classList.add('ad-form--disabled');
  formAdElements.forEach((elem) => elem.disabled = true);
  mapFilter.classList.add('ad-form--disabled');
  mapFilterElements.forEach((elem) => elem.disabled = true);
  mapFilterFeature.disabled = true;
};

const getActivateFormAd = () => {
  form.classList.remove('ad-form--disabled');
  formAdElements.forEach((elem) => elem.disabled = false);
};

const getActivateMapFilter = () => {
  mapFilter.classList.remove('ad-form--disabled');
  mapFilterElements.forEach((elem) => elem.disabled = false);
  mapFilterFeature.disabled = false;
};


form.addEventListener('submit', (evt) => {
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

// const setMapFormFilterClick = (ads) => {
//   mapFilter.addEventListener('change', (evt) => {
//     const filteredArray = ads.filter((ad) => {
//       if (ad.offer.type === evt.target.value) {
//         console.log(ads);
//         console.log(ad);
//         console.log(evt);
//         console.log(evt.target.value);
//         return true;
//       }
//     });
//     console.log(filteredArray);
//     const filteredArraySimilar = filteredArray.slice(0, 10);
//     console.log(filteredArraySimilar);
//     return filteredArraySimilar;
//   });
// };

const setMapFormFilterClick = (getFilteredArray) => {
  mapFilter.addEventListener('change', (ads) => {
    getFilteredArray(ads);

  });
};

export {getDisabledForms, getActivateFormAd, getActivateMapFilter, setMapFormFilterClick};
