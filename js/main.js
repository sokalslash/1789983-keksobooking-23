import {SIMILAR_ADVERTISEMENT_COUNT, createAdvertisement} from './data.js';
const similarAdvertisement = new Array(SIMILAR_ADVERTISEMENT_COUNT).fill(null).map(() => createAdvertisement());
similarAdvertisement;
