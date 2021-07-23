const ADDRESS_FOR_GET_DATA = 'https://23.javascript.pages.academy/keksobooking/data';
const ADDRESS_FOR_SEND_DATA = 'https://23.javascript.pages.academy/keksobooking';

const getData = (onSuccess, onFail) => {
  fetch(ADDRESS_FOR_GET_DATA)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`${response.status} - ${response.statusText}`);
      }
    })
    .then((ads) => {
      onSuccess(ads);
    })
    .catch((err) => {
      onFail(`При загрузке данных с сервера произошла ошибка ${err}`);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(ADDRESS_FOR_SEND_DATA
    ,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        throw new Error(`${response.status} - ${response.statusText}`);
      }
    })
    .catch((err) => onFail(`При отправке данных на сервер произошла ошибка ${err}`));
};

export {getData, sendData};
