const codeForPriceHousing = {
  middle: 'ad.offer.price >= 10000 && ad.offer.price  < 50000',
  low: 'ad.offer.price < 10000',
  high: 'ad.offer.price >= 50000',
};

const mapFilterHousingType = document.querySelector('#housing-type');
const mapFilterHousingPrice = document.querySelector('#housing-price');
const mapFilterHousingRooms = document.querySelector('#housing-rooms');
const mapFilterHousingGuests = document.querySelector('#housing-guests');
const checkboxsFeatures = document.querySelectorAll('.map__checkbox');

const getFilteredArrayAds = (ads) => {

  const getfilterIput = (ad) => {
    const dataForComparison = [];
    if (mapFilterHousingType.value !== 'any') {
      dataForComparison.push(ad.offer.type === mapFilterHousingType.value);
    } else if (mapFilterHousingType.value === 'any') {
      dataForComparison.push(true);
    }
    if (mapFilterHousingPrice.value !== 'any') {
      dataForComparison.push(eval(codeForPriceHousing[mapFilterHousingPrice.value]));
    }
    if (mapFilterHousingRooms.value !== 'any') {
      dataForComparison.push(ad.offer.rooms === +mapFilterHousingRooms.value);
    }
    if (mapFilterHousingGuests.value !== 'any') {
      dataForComparison.push(ad.offer.guests === +mapFilterHousingGuests.value);
    }
    for (let i = 0; i < checkboxsFeatures.length; i++) {
      if (checkboxsFeatures[i].checked && ad.offer.features !== undefined) {
        dataForComparison.push(ad.offer.features.includes(checkboxsFeatures[i].value));
      }
      else if (checkboxsFeatures[i].checked && ad.offer.features === undefined) {
        dataForComparison.push(false);
      }
    }
    const expressionsForFiltering = eval(dataForComparison.join('&&'));
    return expressionsForFiltering;
  };
  const filteredSimilarAds = ads.filter(getfilterIput);
  return filteredSimilarAds;
};

export {getFilteredArrayAds};
