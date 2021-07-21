const mapFilterHousingType = document.querySelector('#housing-type');
const mapFilterHousingPrice = document.querySelector('#housing-price');
const mapFilterHousingRooms = document.querySelector('#housing-rooms');
const mapFilterHousingGuests = document.querySelector('#housing-guests');
const mapFilterCheckboxsFeatures = document.querySelectorAll('.map__checkbox');

const getFilteredAds = (ads) => {
  const checkTypeHousing = (ad) => {
    if (mapFilterHousingType.value !== 'any') {
      return ad.offer.type === mapFilterHousingType.value;
    } else {
      return true;
    }
  };
  const checkPriceHousing = (ad) => {
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
  const checkRoomsHousing = (ad) => {
    if (mapFilterHousingRooms.value !== 'any') {
      return ad.offer.rooms === +mapFilterHousingRooms.value;
    } else {
      return true;
    }
  };
  const checkGuestsHousing = (ad) => {
    if (mapFilterHousingGuests.value !== 'any') {
      return ad.offer.guests === +mapFilterHousingGuests.value;
    } else {
      return true;
    }
  };
  const checkCheckbox = (ad) => {
    const checkboxsChecked =[];
    for (let i = 0; i < mapFilterCheckboxsFeatures.length; i++) {
      if (mapFilterCheckboxsFeatures[i].checked) {
        checkboxsChecked.push(mapFilterCheckboxsFeatures[i].value);
      }
    }
    if (ad.offer.features !== undefined){
      return checkboxsChecked.every((checkbox) => ad.offer.features.includes(checkbox));
    }
  };

  const getDataForFilter = (ad) => {
    if (checkTypeHousing(ad) && checkPriceHousing(ad) && checkRoomsHousing(ad) && checkGuestsHousing(ad) && checkCheckbox(ad)) {
      return true;
    }
  };
  const similarAds = ads.filter((ad) => getDataForFilter(ad));
  return similarAds;
};

export {getFilteredAds};
