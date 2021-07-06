import {isEscEvent} from './utils.js';

const templateMessageSuccessSendAd = document.querySelector('#success')
  .content
  .querySelector('.success');

const templateMessageError = document.querySelector('#error')
  .content
  .querySelector('.error');

const messageErrorGetAds = templateMessageError.cloneNode(true);
messageErrorGetAds.classList.add('get__ads');
messageErrorGetAds.classList.add('visually-hidden');
messageErrorGetAds.querySelector('.error__message').textContent = 'При загрузке данных с сервера произошла ошибка, просмотр похожих объявлений будет не доступен. При этом размещение объявлений доступно. Для устранения неполадки попробуйте перезагрузить страницу.';
messageErrorGetAds.querySelector('.error__button').textContent = 'Закрыть сообщение';
document.body.appendChild(messageErrorGetAds);
const buttonArrorGetAds = messageErrorGetAds.querySelector('.error__button');

const onDocumentEventErrorGetAds = (evt) => {
  messageErrorGetAds.classList.add('visually-hidden');
  if (isEscEvent(evt)) {
    evt.preventDefault();
    document.removeEventListener('keydown', onDocumentEventErrorGetAds);
    document.removeEventListener('click', onDocumentEventErrorGetAds);
    buttonArrorGetAds.removeEventListener('click', onDocumentEventErrorGetAds);
  } else {
    document.removeEventListener('click', onDocumentEventErrorGetAds);
    document.removeEventListener('keydown', onDocumentEventErrorGetAds);
    buttonArrorGetAds.removeEventListener('click', onDocumentEventErrorGetAds);
  }
};

const getMessageErrorGetAds = () => {
  messageErrorGetAds.classList.remove('visually-hidden');
  document.addEventListener('click', onDocumentEventErrorGetAds);
  document.addEventListener('keydown', onDocumentEventErrorGetAds);
  buttonArrorGetAds.addEventListener('click', onDocumentEventErrorGetAds);
};

const messageSuccessSendAd = templateMessageSuccessSendAd.cloneNode(true);
messageSuccessSendAd.classList.add('visually-hidden');
document.body.appendChild(messageSuccessSendAd);

const onDocumentEventSuccess = (evt) => {
  messageSuccessSendAd.classList.add('visually-hidden');
  if (isEscEvent(evt)) {
    evt.preventDefault();
    document.removeEventListener('keydown', onDocumentEventSuccess);
    document.removeEventListener('click', onDocumentEventSuccess);
  } else {
    document.removeEventListener('click', onDocumentEventSuccess);
    document.removeEventListener('keydown', onDocumentEventSuccess);
  }
};

const getMessageSuccessSendAd = () => {
  messageSuccessSendAd.classList.remove('visually-hidden');
  document.addEventListener('click',onDocumentEventSuccess);
  document.addEventListener('keydown', onDocumentEventSuccess);
};

const messageErrorSendAd = templateMessageError.cloneNode(true);
messageErrorSendAd.classList.add('send__ad');
messageErrorSendAd.classList.add('visually-hidden');
document.body.appendChild(messageErrorSendAd);
const errorButtonSendAd = messageErrorSendAd.querySelector('.error__button');

const onDocumentEventErrorSendAd = (evt) => {
  messageErrorSendAd.classList.add('visually-hidden');
  if (isEscEvent(evt)) {
    evt.preventDefault();
    document.removeEventListener('keydown', onDocumentEventErrorSendAd);
    document.removeEventListener('click', onDocumentEventErrorSendAd);
    errorButtonSendAd.removeEventListener('click', onDocumentEventErrorSendAd);
  } else {
    document.removeEventListener('click', onDocumentEventErrorSendAd);
    document.removeEventListener('keydown', onDocumentEventErrorSendAd);
    errorButtonSendAd.removeEventListener('click', onDocumentEventErrorSendAd);
  }
};

const getMessageErrorSendAd = () => {
  messageErrorSendAd.classList.remove('visually-hidden');
  document.addEventListener('click', onDocumentEventErrorSendAd);
  document.addEventListener('keydown', onDocumentEventErrorSendAd);
  errorButtonSendAd.addEventListener('click', onDocumentEventErrorSendAd);
};

export {getMessageErrorGetAds, getMessageSuccessSendAd, getMessageErrorSendAd};
