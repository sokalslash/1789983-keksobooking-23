const mapFilterHousingType = document.querySelector('#housing-type');
const mapFilterHousingPrice = document.querySelector('#housing-price');
const mapFilterHousingRooms = document.querySelector('#housing-rooms');
const mapFilterHousingGuests = document.querySelector('#housing-guests');
const checkboxsFeatures = document.querySelectorAll('.map__checkbox');

const getFilteredAds = (ads) => {
  const isTypeHousing = (ad) => {
    if (mapFilterHousingType.value !== 'any') {
      return ad.offer.type === mapFilterHousingType.value;
    } else {
      return true;
    }
  };
  const isPriceHousing = (ad) => {
    if (mapFilterHousingPrice.value !== 'any') {
      if (mapFilterHousingPrice.value === 'middle') {
        return ad.offer.price >= 10000 && ad.offer.price  < 50000;
      }
      if (mapFilterHousingPrice.value === 'low') {
        return ad.offer.price < 10000;
      }
      if (mapFilterHousingPrice.value === 'high') {
        return ad.offer.price >= 50000;
      }
    } else {
      return true;
    }
  };
  const isRoomsHousing = (ad) => {
    if (mapFilterHousingRooms.value !== 'any') {
      return ad.offer.rooms === +mapFilterHousingRooms.value;
    } else {
      return true;
    }
  };
  const isGuestsHousing = (ad) => {
    if (mapFilterHousingGuests.value !== 'any') {
      return ad.offer.guests === +mapFilterHousingGuests.value;
    } else {
      return true;
    }
  };
  const isCheckbox = (ad) => {
    const checkboxsChecked =[];
    for (let i = 0; i < checkboxsFeatures.length; i++) {
      if (checkboxsFeatures[i].checked) {
        checkboxsChecked.push(checkboxsFeatures[i].value);
      }
    }
    if (ad.offer.features !== undefined){
      return checkboxsChecked.every((checkbox) => ad.offer.features.includes(checkbox));
    }
  };

  const getDataForFilter = (ad) => {
    if (isTypeHousing(ad) && isPriceHousing(ad) && isRoomsHousing(ad) && isGuestsHousing(ad) && isCheckbox(ad)) {
      return true;
    }
  };
  const similarAds = ads.filter((ad) => getDataForFilter(ad));
  return similarAds;
};

export {getFilteredAds};
