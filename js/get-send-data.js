import {createMarkerAd, markerMain, map, markerAdGroup} from './map.js';
import {getMessageErrorGetAds, getMessageSuccessSendAd, getMessageErrorSendAd} from './messages.js';

const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const buttonReset = adForm.querySelector('.ad-form__reset');

const clearPage = () => {
  adForm.reset();
  mapFilters.reset();
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

const getAds = () => {
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`${response.status} - ${response.statusText}`);
      }
    })
    .then((ads) => {
      const arrayAds = ads.slice(0, 10);
      arrayAds.forEach((ad) => createMarkerAd(ad));
    })
    .catch(() => {
      getMessageErrorGetAds();
    });
};
getAds();

const sendAd = () => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    fetch(
      'https://23.javascript.pages.academy/keksobooking',
      {
        method: 'POST',
        body: formData,
      },
    )
      .then((response) => {
        if (response.ok) {
          clearPage();
          getMessageSuccessSendAd();
        } else {
          throw new Error (`${response.status} - ${response.statusText}`);
        }
      })
      .catch(() => {
        getMessageErrorSendAd();
      });
  });
};
sendAd();

export {getAds, sendAd};
