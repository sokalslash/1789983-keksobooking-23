
function getRandomIntInclusive (min, max) {
  if (min < 0 || max < 0) {
    return 'введите положительное число';
  }
  if (max < 0) {
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
getRandomIntInclusive();

function getRandomArbitrary (min, max, numbeкDecimalPlaces) {
  if (min < 0 || max < 0) {
    return 'введите положительное число';
  }
  if (max < 0) {
    return 'введите положительное число';
  }
  if (max <= min) {
    return 'введите число больше начального';
  }
  const randomNumber = Math.random() * (max - min + 1) + min;
  return  (+randomNumber.toFixed(numbeкDecimalPlaces));
}
getRandomArbitrary();
