import {creatDataForAds} from './data.js';
import {createSimilarAd} from './popup.js';
const mapBlock = document.querySelector('#map-canvas');
const DataForAds = creatDataForAds();
const similarAd = createSimilarAd(DataForAds[0]);
mapBlock.appendChild(similarAd);

