const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_VALUE_PRICE = 1000000;

const titleInput = document.querySelector('#title');
const priceInput = document.querySelector('#price');
const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const typeOfHousing = document.querySelector('#type');
const timein = document.querySelector('#timein');
const timeout = document.querySelector('#timeout');

const getMessageRequiredField = (fieldInput) => {
  if (fieldInput.validity.valueMissing) {
    fieldInput.setCustomValidity('Заполните обязательное поле');
  } else {
    fieldInput.setCustomValidity('');
  }
};

const getMessageOfLengthTitle = () => {
  const valueLength = titleInput.value.length;
  if (valueLength < MIN_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Ещё ${  MIN_TITLE_LENGTH - valueLength } симв.`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Удалите лишние ${  valueLength - MAX_TITLE_LENGTH } симв.`);
  } else {
    titleInput.setCustomValidity('');
  }
};

const getMessageOfValuePrice = () => {
  const valuePrice = priceInput.value;
  if (valuePrice > MAX_VALUE_PRICE) {
    priceInput.setCustomValidity('Вы превысили максимальное значение 1 000 000');
  } else {
    priceInput.setCustomValidity('');
  }
};

const getCapacity = () => {
  switch (roomNumber.value) {
    case '1':
      return capacity.innerHTML = '<option value="1">для 1 гостя</option>';
    case '2':
      return capacity.innerHTML = '<option value="1">для 1 гостя</option> <option value="2">для 2 гостей</option> ';
    case '3':
      return capacity.innerHTML = '<option value="1">для 1 гостя</option> <option value="2">для 2 гостей</option> <option value="3" selected>для 3 гостей</option>';
    case '100':
      return capacity.innerHTML = '<option value="0">не для гостей</option>';
  }
};

const changePriceInputAttributes = () => {
  switch (typeOfHousing.value) {
    case 'bungalow':
      priceInput.placeholder = '0';
      priceInput.min = '0';
      break;
    case 'flat':
      priceInput.placeholder = '1000';
      priceInput.min = '1000';
      break;
    case 'hotel':
      priceInput.placeholder = '3000';
      priceInput.min = '3000';
      break;
    case 'house':
      priceInput.placeholder = '5000';
      priceInput.min = '5000';
      break;
    case 'palace':
      priceInput.placeholder = '10000';
      priceInput.min = '10000';
      break;
  }
};

const changeTimein = (elem) => {
  timein.value = elem.target.value;
};

const changeTimeout = (elem) => {
  timeout.value = elem.target.value;
};

titleInput.addEventListener('invalid', () => {
  getMessageRequiredField(titleInput);
});

titleInput.addEventListener('input', () => {
  titleInput.reportValidity();
  getMessageOfLengthTitle();
});

priceInput.addEventListener('invalid', () => {
  getMessageRequiredField(priceInput);
});

priceInput.addEventListener('input', () => {
  priceInput.reportValidity();
  getMessageOfValuePrice();
});

roomNumber.addEventListener('change', () => {
  getCapacity();
});

typeOfHousing.addEventListener('change', () => {
  changePriceInputAttributes();
});

timein.addEventListener('change', (evt) => {
  changeTimeout(evt);
});

timeout.addEventListener('change', (evt) => {
  changeTimein(evt);
});
