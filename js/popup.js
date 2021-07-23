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

  const getAdFields = (clone) => {
    clone.querySelector('.popup__title').textContent = offer.title;
    clone.querySelector('.popup__text--address').textContent = offer.address;
    clone.querySelector('.popup__text--price').textContent = offer.price;
    clone.querySelector('.popup__text--price').insertAdjacentHTML('beforeend', ' <span>₽/ночь</span>');
    clone.querySelector('.popup__type').textContent = typeHousing[offer.type];
    clone.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
    clone.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
    (!offer.description)
      ? clone.querySelector('.popup__description').remove()
      : clone.querySelector('.popup__description').textContent = offer.description;
    clone.querySelector('.popup__avatar').src = author.avatar;
  };

  const getFeaturesAd = (clone) => {
    if (!offer.features) {
      clone.querySelector('.popup__features').classList.add('visually-hidden');
    } else {
      const featureListBlock = clone.querySelector('.popup__features');
      const modifiers = offer.features.map((feature) => `popup__feature--${feature}`);
      featureListBlock.querySelectorAll('.popup__feature')
        .forEach((item) => {
          const modifier = item.classList[1];
          if (! modifiers.includes(modifier)) {
            item.remove();
          }
        });
    }
  };

  const getPhotosAd = (clone) => {
    const popupPhotosBlock = clone.querySelector('.popup__photos');
    if (!offer.photos) {
      popupPhotosBlock.classList.add('visually-hidden');
    } else {
      const imege = popupPhotosBlock.querySelector('.popup__photo');
      popupPhotosBlock.innerHTML = '';
      for (let i = 0; i < offer.photos.length; i++) {
        const newPhoto = imege.cloneNode(true);
        newPhoto.src = offer.photos[i];
        popupPhotosBlock.appendChild(newPhoto);
      }
    }
  };

  getAdFields(similarAdClone);
  getFeaturesAd(similarAdClone);
  getPhotosAd(similarAdClone);

  return similarAdClone;
};
export {createSimilarAd};
