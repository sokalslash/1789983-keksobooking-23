
import {creatDataForAds} from './data.js';
import './validation.js';
import {createMarkerAd} from './map.js';

const dataForAds = creatDataForAds();

dataForAds.forEach((dataForAd) => createMarkerAd(dataForAd));
