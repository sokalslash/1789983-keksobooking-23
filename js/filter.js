const NOT_FILTER = 'any';
const MIDDLE_PRICE_HOUSING = 'middle';
const LOW_PRICE_HOUSING = 'low';
const HIGH_PRICE_HOUSING = 'high';
const MAX_VALUE_PRICE = 50000;
const MIN_VALUE_PRICE = 10000;

const mapFilterHousingType = document.querySelector('#housing-type');
const mapFilterHousingPrice = document.querySelector('#housing-price');
const mapFilterHousingRooms = document.querySelector('#housing-rooms');
const mapFilterHousingGuests = document.querySelector('#housing-guests');
const mapFilterCheckboxsFeatures = document.querySelectorAll('.map__checkbox');

const getFilteredAds = (ads) => {
  const checkTypeHousing = (ad) => {
    if (mapFilterHousingType.value !== NOT_FILTER) {
      return ad.offer.type === mapFilterHousingType.value;
    }
    return true;
  };
  const checkPriceHousing = (ad) => {
    if (mapFilterHousingPrice.value !== NOT_FILTER) {
      if (mapFilterHousingPrice.value === MIDDLE_PRICE_HOUSING) {
        return ad.offer.price >= MIN_VALUE_PRICE && ad.offer.price  < MAX_VALUE_PRICE;
      }
      if (mapFilterHousingPrice.value === LOW_PRICE_HOUSING) {
        return ad.offer.price < MIN_VALUE_PRICE;
      }
      if (mapFilterHousingPrice.value === HIGH_PRICE_HOUSING) {
        return ad.offer.price >= MAX_VALUE_PRICE;
      }
    }
    return true;
  };
  const checkRoomsHousing = (ad) => {
    if (mapFilterHousingRooms.value !== NOT_FILTER) {
      return ad.offer.rooms === +mapFilterHousingRooms.value;
    }
    return true;
  };
  const checkGuestsHousing = (ad) => {
    if (mapFilterHousingGuests.value !== NOT_FILTER) {
      return ad.offer.guests === +mapFilterHousingGuests.value;
    }
    return true;
  };
  const checkCheckbox = (ad) => {
    const checkboxesChecked =[];
    for (let i = 0; i < mapFilterCheckboxsFeatures.length; i++) {
      if (mapFilterCheckboxsFeatures[i].checked) {
        checkboxesChecked.push(mapFilterCheckboxsFeatures[i].value);
      }
    }
    if (ad.offer.features){
      return checkboxesChecked.every((checkbox) => ad.offer.features.includes(checkbox));
    }
  };

  const getDataForFilter = (ad) => checkTypeHousing(ad) && checkPriceHousing(ad) && checkRoomsHousing(ad) && checkGuestsHousing(ad) && checkCheckbox(ad);

  const similarAds = ads.filter((ad) => getDataForFilter(ad));

  return similarAds;
};

export {getFilteredAds};
