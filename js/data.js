import {getRandomIntInclusive, getRandomFloat} from './utils.js';

const TITLES = [
  'Прекрасный вид из окна',
  'Есть электрокамин',
  'Большая кровать',
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const WATCHES = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTIONS = [
  'Просторное',
  'Светлое',
  'Уютное',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const SIMILAR_ADVERTISEMENT_COUNT = 10;

const getRandomArrayElement = (elements) =>  elements[getRandomIntInclusive(0, elements.length - 1)];

const getArrayOfElement = (strings) => new Array(getRandomIntInclusive(1, strings.length)).fill(null).map(() =>
  strings[getRandomIntInclusive(0, strings.length-1)],
);

function createAdvertisement () {
  const locationAddressLat = getRandomFloat(35.65000, 35.70000, 5);
  const locationAddressLng = getRandomFloat(139.70000, 139.80000, 5);

  const author = {
    avatar: `img/avatars/user0${  getRandomIntInclusive(1, 8)  }.png`,
  };
  const offer = {
    title: TITLES[getRandomIntInclusive(0, TITLES.length-1)],
    address: `${locationAddressLat}, ${locationAddressLng}`,
    price: getRandomIntInclusive(100, 1000),
    type: getRandomArrayElement(TYPES),
    rooms: getRandomIntInclusive(1, 10),
    guests: getRandomIntInclusive(1, 20),
    checkin: getRandomArrayElement(WATCHES),
    checkout: getRandomArrayElement(WATCHES),
    features: getArrayOfElement(FEATURES),
    description: getRandomArrayElement(DESCRIPTIONS),
    photos: getArrayOfElement(PHOTOS),
  };
  const location = {
    lat: locationAddressLat,
    lng: locationAddressLng,
  };
  return {author, offer, location};

}
export {SIMILAR_ADVERTISEMENT_COUNT, createAdvertisement};
