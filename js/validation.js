const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_VALUE_PRICE = 1000000;

const titleInput = document.querySelector('#title');
const priceInput = document.querySelector('#price');
const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');

const getMessageRequiredField = (fieldInput) => {
  fieldInput.validity.valueMissing
    ?fieldInput.setCustomValidity('Заполните обязательное поле')
    :fieldInput.setCustomValidity('');
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
  valuePrice > MAX_VALUE_PRICE
    ?priceInput.setCustomValidity('Вы превысили максимальное значение 1 000 000')
    :priceInput.setCustomValidity('');
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

titleInput.addEventListener('invalid', () => {
  getMessageRequiredField(titleInput);
});

titleInput.addEventListener('input', () => {
  titleInput.reportValidity();
  getMessageOfLengthTitle();
});

priceInput.addEventListener('invalid', () => {
  getMessageRequiredField(priceInput);
  getMessageOfValuePrice();
});

roomNumber.addEventListener('change', () => {
  getCapacity();
});
