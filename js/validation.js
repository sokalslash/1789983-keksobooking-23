const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_VALUE_PRICE = 1000000;

const NumberOfRoomsHousing = {
  ONE_ROOM: '1',
  TWO_ROOMS: '2',
  THREE_ROOMS: '3',
  ONE_HUNDRED_ROOMS: '100',
};
const NumberOfGuests = {
  ONE_GUEST: '1',
  TWO_GUESTS: '2',
  THREE_GUESTS: '3',
  NOT_FOR_GUESTS: '0',
}
const TypeOfHousing = {
  BUNGALOW: 'bungalow',
  FLAT: 'flat',
  HOUTEL: 'hotel',
  HOUSE: 'house',
  PALASE: 'palace',
};
const priceForTypeHousing = {
  bungalow: '0',
  flat: '1000',
  hotel: '3000',
  house: '5000',
  palace: '10000',
};

const titleInput = document.querySelector('#title');
const priceInput = document.querySelector('#price');
const roomNumberSelect = document.querySelector('#room_number');
const capacitySelect = document.querySelector('#capacity');
const typeSelect = document.querySelector('#type');
const timeinSelect = document.querySelector('#timein');
const timeoutSelect = document.querySelector('#timeout');

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
  switch (roomNumberSelect.value) {
    case NumberOfRoomsHousing.ONE_ROOM:
      return capacitySelect.innerHTML = '<option value="1">для 1 гостя</option>';
    case NumberOfRoomsHousing.TWO_ROOMS:
      return capacitySelect.innerHTML = '<option value="1">для 1 гостя</option> <option value="2">для 2 гостей</option> ';
    case NumberOfRoomsHousing.THREE_ROOMS:
      return capacitySelect.innerHTML = '<option value="1">для 1 гостя</option> <option value="2">для 2 гостей</option> <option value="3" selected>для 3 гостей</option>';
    case NumberOfRoomsHousing.ONE_HUNDRED_ROOMS:
      return capacitySelect.innerHTML = '<option value="0">не для гостей</option>';
  }
};

const getNumberOfRooms = () => {
  switch (capacitySelect.value) {
    case NumberOfGuests.ONE_GUEST:
      return roomNumberSelect.innerHTML = '<option value="1">1 комната</option> <option value="2">2 комнаты</option> <option value="3">3 комнаты</option>';
    case NumberOfGuests.TWO_GUESTS:
      return roomNumberSelect.innerHTML = '<option value="2">2 комнаты</option> <option value="3">3 комнаты</option>';
    case NumberOfGuests.THREE_GUESTS:
      return roomNumberSelect.innerHTML = '<option value="3">3 комнаты</option>';
    case NumberOfGuests.NOT_FOR_GUESTS:
      return roomNumberSelect.innerHTML = '<option value="100">100 комнат</option>';
  }
};

const changePriceInputAttributes = () => {
  switch (typeSelect.value) {
    case TypeOfHousing.BUNGALOW:
      priceInput.placeholder = priceForTypeHousing.bungalow;
      priceInput.min = priceForTypeHousing.bungalow;
      break;
    case TypeOfHousing.FLAT:
      priceInput.placeholder = priceForTypeHousing.flat;
      priceInput.min = priceForTypeHousing.flat;
      break;
    case TypeOfHousing.HOUTEL:
      priceInput.placeholder = priceForTypeHousing.hotel;
      priceInput.min = priceForTypeHousing.hotel;
      break;
    case TypeOfHousing.HOUSE:
      priceInput.placeholder = priceForTypeHousing.house;
      priceInput.min = priceForTypeHousing.house;
      break;
    case TypeOfHousing.PALASE:
      priceInput.placeholder = priceForTypeHousing.palace;
      priceInput.min =  priceForTypeHousing.palace;
      break;
  }
};

const changeTimein = (event) => {
  timeinSelect.value = event.target.value;
};

const changeTimeout = (event) => {
  timeoutSelect.value = event.target.value;
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

roomNumberSelect.addEventListener('change', () => {
  getCapacity();
});

capacitySelect.addEventListener('change', getNumberOfRooms);

typeSelect.addEventListener('change', () => {
  changePriceInputAttributes();
});

timeinSelect.addEventListener('change', (evt) => {
  changeTimeout(evt);
});

timeoutSelect.addEventListener('change', (evt) => {
  changeTimein(evt);
});
