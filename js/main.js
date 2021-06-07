
function getRandomIntInclusive (min, max) {
  if (min < 0 || max < 0) {
    return 'введите положительное число';
  }
  if (max <= min) {
    return 'введите число больше начального';
  }
  // источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomIntInclusive(0.5, 1.6);

function getRandomFloat (min, max, numberDecimalPlaces) {
  if (min < 0 || max < 0) {
    return 'введите положительное число';
  }
  if (max <= min) {
    return 'введите число больше начального';
  }
  const randomNumber = Math.random() * (max - min + 0.1) + min;
  return  (+randomNumber.toFixed(numberDecimalPlaces));
}
getRandomFloat(0.5, 3.3, 2);

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

function createAdvertisement () {
  const getRandomArrayElement = (elements) =>  elements[getRandomIntInclusive(0, elements.length - 1)];

  const getArrayOfStrings = (strings) => new Array(getRandomIntInclusive(1, strings.length)).fill(null).map(() =>
    strings[getRandomIntInclusive(0, strings.length-1)],
  );

  return {
    author: {
      avatar: `img/avatars/user0${  getRandomIntInclusive(1, 8)  }.png`,
    },
    offer: {
      title: TITLES[getRandomIntInclusive(0, TITLES.length-1)],
      address: `location.${  getRandomFloat(35.65000, 35.70000, 5)  }, location.${  getRandomFloat(139.70000, 139.80000, 5)}`,
      price: getRandomIntInclusive(100, 1000),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomIntInclusive(1, 10),
      guests: getRandomIntInclusive(1, 20),
      checkin: getRandomArrayElement(WATCHES),
      checkout: getRandomArrayElement(WATCHES),
      features: getArrayOfStrings(FEATURES),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getArrayOfStrings(PHOTOS),
    },
    location: {
      lat: getRandomFloat(35.65000, 35.70000, 5),
      lng: getRandomFloat(139.70000, 139.80000, 5),
    },

  };
}

const similarAdvertisement = new Array(SIMILAR_ADVERTISEMENT_COUNT).fill(null).map(() => createAdvertisement());
console.log(similarAdvertisement);
