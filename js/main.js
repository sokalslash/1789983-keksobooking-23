import {getDisabledForm, getActivateForm} from'./form.js';
import {creatDataForAds} from './data.js';
import {createSimilarAd} from './popup.js';
import './validation.js';

const mapBlock = document.querySelector('#map-canvas');
const dataForAds = creatDataForAds();
const similarAd = createSimilarAd(dataForAds[0]);

getDisabledForm();
getActivateForm();
mapBlock.appendChild(similarAd);
