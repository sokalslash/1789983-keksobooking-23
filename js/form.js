const form = document.querySelector('.ad-form');
const formAdElements = form.querySelectorAll('fieldset');
const mapFilter = document.querySelector('.map__filters');
const mapFilterElements = mapFilter.querySelectorAll('.map__filter');
const mapFilterFeature = mapFilter.querySelector('.map__features');

const getDisabledForm = () => {
  form.classList.add('ad-form--disabled');
  formAdElements.forEach((elem) => elem.disabled = true);
  mapFilter.classList.add('ad-form--disabled');
  mapFilterElements.forEach((elem) => elem.disabled = true);
  mapFilterFeature.disabled = true;
};

const getActivateForm = () => {
  form.classList.remove('ad-form--disabled');
  formAdElements.forEach((elem) => elem.disabled = false);
  mapFilter.classList.remove('ad-form--disabled');
  mapFilterElements.forEach((elem) => elem.disabled = false);
  mapFilterFeature.disabled = false;
};

export {getDisabledForm, getActivateForm};
