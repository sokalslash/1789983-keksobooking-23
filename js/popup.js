const typeHousing = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

const similarAdsTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const createSimilarAd = ({author, offer}) => {
  const similarAdClone = similarAdsTemplate.cloneNode(true);
  similarAdClone.querySelector('.popup__title').textContent = offer.title;
  similarAdClone.querySelector('.popup__text--address').textContent = offer.address;
  similarAdClone.querySelector('.popup__text--price').textContent = offer.price;
  similarAdClone.querySelector('.popup__text--price').insertAdjacentHTML('beforeend', ' <span>₽/ночь</span>');
  similarAdClone.querySelector('.popup__type').textContent = typeHousing[offer.type];
  similarAdClone.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  similarAdClone.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

  if (offer.features === undefined || offer.features. length === 0) {
    similarAdClone.querySelector('.popup__features').classList.add('visually-hidden');
  } else {
    const featureListElement = similarAdClone.querySelector('.popup__features');
    const modifiers = offer.features.map((feature) => `popup__feature--${feature}`);
    featureListElement.querySelectorAll('.popup__feature')
      .forEach((item) => {
        const modifier = item.classList[1];
        if (! modifiers.includes(modifier)) {
          item.remove();
        }
      });
  }

  (offer.description === undefined)
    ? similarAdClone.querySelector('.popup__description').remove()
    : similarAdClone.querySelector('.popup__description').textContent = offer.description;

  const popupPhotosBlock = similarAdClone.querySelector('.popup__photos');
  popupPhotosBlock.innerHTML = '';
  if (offer.photos !== (undefined)) {
    offer.photos.forEach(() => {
      const imgPopupPhoto = '<img src="" class="popup__photo" width="45" height="40" alt="Фотография жилья"></img>';
      popupPhotosBlock.insertAdjacentHTML('beforeend', imgPopupPhoto);
    });
    const newPhotos = popupPhotosBlock.querySelectorAll('.popup__photo');
    for (let i = 0; i < newPhotos.length; i++) {
      newPhotos[i].src = offer.photos[i];
    }
  }

  similarAdClone.querySelector('.popup__avatar').src = author.avatar;
  return similarAdClone;
};
export {createSimilarAd};
