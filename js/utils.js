const COORDINATES_OF_TOKYO_LAT = 35.652832;
const COORDINATES_OF_TOKYO_LNG = 139.839478;
const ZOOM_MAP = 10;
const TIMEOUT_DELAY = 500;

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const getDebounce = (callback, timeoutDelay = TIMEOUT_DELAY) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {isEscEvent, getDebounce, COORDINATES_OF_TOKYO_LAT, COORDINATES_OF_TOKYO_LNG, ZOOM_MAP};
