const form = document.querySelector('form[method="post"]');
const mapFilter = document.querySelector('.map__filters');

const getDisabledForm = () => {
  form.classList.add('ad-form--disabled');
  mapFilter.classList.add('ad-form--disabled');
};

const getActivateForm = () => {
  form.classList.remove('ad-form--disabled');
  mapFilter.classList.remove('ad-form--disabled');
};

export {getDisabledForm, getActivateForm};
